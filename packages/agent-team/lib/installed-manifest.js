/** The installed bundle's own manifest, read once for both facts taken from it. */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
/**
 * Parsed manifest of the installed bundle, or `undefined` when it cannot be
 * read.
 *
 * Three levels up: `packages/agent-team/{src,lib}` sits that deep in both a
 * `link:` checkout and a registry tarball, so a development install and a
 * published one each state their own truth. An unreadable or malformed manifest
 * is a broken install, not a failure of whatever asked: every caller degrades to
 * `'unknown'` or withholds the line it would have stated, so reading this can
 * never fail the Host boot.
 */
export function readInstalledManifest() {
    try {
        const manifestPath = resolve(dirname(fileURLToPath(import.meta.url)), '../../../package.json');
        const parsed = JSON.parse(readFileSync(manifestPath, 'utf8'));
        return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
            ? parsed
            : undefined;
    }
    catch {
        return undefined;
    }
}
/** Version of the manifest this package installed from, or `'unknown'`. */
export function bundleVersionOf(manifest) {
    const version = manifest?.version;
    return typeof version === 'string' && version !== '' ? version : 'unknown';
}
