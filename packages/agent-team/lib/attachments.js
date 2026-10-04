import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { basename, extname, isAbsolute, join } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { dshHomePath } from '@deepseek-ai/dsh-home-paths';
/**
 * Composer attachments are a cache, not an archive: bytes live only so Member
 * agents can read them within the consumption window, while the ledger keeps
 * the metadata forever. Everything here derives from the on-disk layout
 * `$DSH_HOME/agent-team/attachments/v1/<attachmentId>/` holding the payload
 * file (original sanitized name) plus a `meta.json` sidecar.
 */
export const ATTACHMENT_MAX_BYTES = 10 * 1024 * 1024;
/** Referenced uploads survive this long after upload for member consumption. */
export const ATTACHMENT_REFERENCED_TTL_MS = 72 * 60 * 60 * 1000;
/** Unreferenced uploads (uploaded but never sent) are cleaned much sooner. */
export const ATTACHMENT_ORPHAN_TTL_MS = 24 * 60 * 60 * 1000;
export function attachmentsRoot() {
    return dshHomePath('agent-team', 'attachments', 'v1');
}
/** Absolute payload path of one stored attachment, as offered to Member agents. */
export function attachmentPayloadPath(attachmentId, name) {
    return join(attachmentsRoot(), attachmentId, name);
}
export function newAttachmentId() {
    return randomUUID();
}
/**
 * Request-stable cache identity for one upload of an idempotent request: the
 * same `requestId` always derives the same id, so a retried upload converges
 * on the entry the first attempt wrote instead of minting a second one, while
 * a different payload for that id is caught by the byte comparison at write
 * time. Pure and namespaced, so it is restart-safe without a second durable
 * store or an in-memory map. `scope` separates several attachments prepared
 * by one request (path copies) from the request's upload itself.
 */
export function requestScopedAttachmentId(requestId, scope) {
    const uuid = createHash('sha256')
        .update(`agent-team:attachment-request:${requestId}${scope === undefined ? '' : `#${scope}`}`)
        .digest()
        .subarray(0, 16);
    const shaped = Buffer.from(uuid);
    // Present the digest as an ordinary uuid so cache directory names keep the
    // shape `newAttachmentId()` produces: version 4, RFC 4122 variant bits.
    shaped[6] = (shaped[6] & 0x0f) | 0x40;
    shaped[8] = (shaped[8] & 0x3f) | 0x80;
    const hex = shaped.toString('hex');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}
/** The request-stable id of the `index`-th path copy one message or reply request prepares. */
export function pathAttachmentId(requestId, index) {
    return requestScopedAttachmentId(requestId, `path:${index}`);
}
/** Strip path separators, control characters, Windows-illegal characters, reserved device names, and leading dots from one client-supplied name. */
export function sanitizeFileName(raw) {
    // oxlint-disable no-control-regex -- strip ASCII control characters, separators, and Windows-reserved characters from client filenames.
    const cleaned = raw
        .replaceAll(/[\\/:*?"<>|\u0000-\u001f\u007f]/g, '')
        .replaceAll(/^\.+/g, '')
        .trim()
        .slice(0, 180)
        .replace(/[\s.]+$/g, '');
    // oxlint-enable no-control-regex
    if (cleaned === '')
        return 'attachment';
    // The metadata sidecar owns 'meta.json' inside every entry directory; a
    // payload with that name would be clobbered by the sidecar and unreadable.
    if (/^meta\.json$/i.test(cleaned))
        return `_${cleaned}`;
    // Win32 CreateFile resolves these device names (with or without an
    // extension) as hardware, so the payload write would fail or alias a device.
    return /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i.test(cleaned) ? `_${cleaned}` : cleaned;
}
/** Extension-derived media types for agent-supplied files; unknown types stay generic. */
const PATH_MEDIA_TYPES = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.bmp': 'image/bmp',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain',
    '.md': 'text/markdown',
    '.json': 'application/json',
};
/** Best-effort media type from one path's extension, so images render as thumbnails. */
export function mediaTypeForPath(raw) {
    return PATH_MEDIA_TYPES[extname(raw).toLowerCase()] ?? 'application/octet-stream';
}
/**
 * Validate one agent-supplied attachment path before any cache write happens,
 * so a rejection anywhere leaves the upload cache untouched.
 */
export async function validatePathAttachment(raw) {
    if (!isAbsolute(raw))
        throw new Error(`attachment path '${raw}' must be absolute`);
    const info = await stat(raw).catch(() => undefined);
    if (info === undefined)
        throw new Error(`attachment path '${raw}' does not exist`);
    if (!info.isFile())
        throw new Error(`attachment path '${raw}' is not a regular file`);
    if (info.size === 0)
        throw new Error(`attachment '${basename(raw)}' must not be empty`);
    if (info.size > ATTACHMENT_MAX_BYTES)
        throw new Error(`attachment '${basename(raw)}' exceeds the ${ATTACHMENT_MAX_BYTES} byte limit`);
}
/**
 * Copy one validated file into the cache under the caller's request-stable id.
 * A committed Message may already reference that id, so an existing entry is
 * never overwritten: identical name and bytes replay it, and anything else is
 * refused as the same request-id collision the ledger reports.
 */
export async function copyPathAttachment(root, raw, attachmentId, requestId) {
    const bytes = await readFile(raw);
    const name = sanitizeFileName(basename(raw));
    const mediaType = mediaTypeForPath(raw);
    const existing = await readAttachment(root, attachmentId);
    if (existing !== undefined) {
        collideUnlessSamePayload(existing, name, mediaType, bytes, requestId);
        return { attachmentId, name: existing.name, byteSize: existing.byteSize, mediaType: existing.mediaType };
    }
    const stored = await writeAttachment(root, attachmentId, basename(raw), mediaType, bytes);
    return { attachmentId: stored.attachmentId, name: stored.name, byteSize: stored.byteSize, mediaType: stored.mediaType };
}
/**
 * Store one upload under the id its `requestId` derives. The first attempt
 * writes the entry; a later attempt with the same request replays it, and a
 * different payload for that same request is refused instead of silently
 * becoming a second upload of the same idempotency key.
 */
export async function writeRequestScopedAttachment(root, requestId, rawName, mediaType, bytes) {
    const attachmentId = requestScopedAttachmentId(requestId);
    const existing = await readAttachment(root, attachmentId);
    if (existing !== undefined) {
        collideUnlessSamePayload(existing, sanitizeFileName(rawName), mediaType, bytes, requestId);
        return { attachmentId, path: join(attachmentDir(root, attachmentId), existing.name), name: existing.name, byteSize: existing.byteSize, mediaType: existing.mediaType };
    }
    return writeAttachment(root, attachmentId, rawName, mediaType, bytes);
}
/** Refuse a reused request id whose stored payload no longer matches this attempt. */
function collideUnlessSamePayload(existing, name, mediaType, bytes, requestId) {
    if (existing.name !== name || existing.mediaType !== mediaType || !existing.bytes.equals(bytes)) {
        throw new Error(`agent-team request id '${requestId}' was reused with a different operation or payload`);
    }
}
function attachmentDir(root, attachmentId) {
    return join(root, attachmentId);
}
/** Write one upload as an immutable payload plus its metadata sidecar. */
export async function writeAttachment(root, attachmentId, rawName, mediaType, bytes) {
    const name = sanitizeFileName(rawName);
    const dir = attachmentDir(root, attachmentId);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, name), bytes);
    const meta = { name, mediaType, uploadedAt: new Date().toISOString() };
    await writeFile(join(dir, 'meta.json'), JSON.stringify(meta), 'utf8');
    return { attachmentId, path: join(dir, name), name, byteSize: bytes.byteLength, mediaType };
}
/** Read one attachment back; `undefined` when the cache entry is gone (GC'd). */
export async function readAttachment(root, attachmentId) {
    const dir = attachmentDir(root, attachmentId);
    let metaRaw;
    try {
        metaRaw = await readFile(join(dir, 'meta.json'));
    }
    catch {
        return undefined;
    }
    const meta = JSON.parse(metaRaw.toString('utf8'));
    const entries = await readdir(dir);
    const payload = entries.filter(entry => entry !== 'meta.json')[0];
    if (payload === undefined)
        return undefined;
    const bytes = await readFile(join(dir, payload));
    return { name: meta.name, mediaType: meta.mediaType, byteSize: bytes.byteLength, uploadedAt: meta.uploadedAt, bytes };
}
/** List every cache entry with its upload instant for the GC sweep. */
export async function scanAttachmentCache(root) {
    let ids;
    try {
        ids = await readdir(root);
    }
    catch {
        return [];
    }
    const entries = [];
    for (const id of ids) {
        try {
            const metaRaw = await readFile(join(root, id, 'meta.json'));
            const meta = JSON.parse(metaRaw.toString('utf8'));
            entries.push({ attachmentId: id, uploadedAt: Date.parse(meta.uploadedAt) });
        }
        catch {
            // A half-written or foreign directory is not ours to judge; skip it.
        }
    }
    return entries;
}
/** Remove one cache entry's bytes; missing entries already satisfy the sweep. */
export async function removeAttachment(root, attachmentId) {
    await rm(attachmentDir(root, attachmentId), { recursive: true, force: true });
}
/**
 * One GC pass: drop uploads older than the orphan TTL, and referenced ones
 * older than the consumption-window TTL. Returns the ids removed so the
 * service can log them.
 */
export async function sweepAttachmentCache(root, referenced, now) {
    const removed = [];
    for (const entry of await scanAttachmentCache(root)) {
        const age = now - entry.uploadedAt;
        const ttl = referenced.has(entry.attachmentId) ? ATTACHMENT_REFERENCED_TTL_MS : ATTACHMENT_ORPHAN_TTL_MS;
        if (age > ttl) {
            await removeAttachment(root, entry.attachmentId);
            removed.push(entry.attachmentId);
        }
    }
    return removed;
}
/** Accept only well-formed `type/subtype` media types; anything else falls back to the generic binary type. */
export function sanitizeMediaType(raw) {
    const candidate = (raw ?? '').trim().toLowerCase();
    return /^[a-z0-9][-.\w]*\/[-.\w]+$/.test(candidate) ? candidate : 'application/octet-stream';
}
