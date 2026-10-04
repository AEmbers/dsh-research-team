import type { RemoteResult } from '@deepseek-ai/dsh-typert-protocol';
import type { AgentTeamAttachmentId, AgentTeamGetAttachmentRequest, AgentTeamGetAttachmentResult } from '@sophialin/dsh-research-team/types';
/** Base64 one file payload in chunks so large uploads stay off the call-stack limit. */
export declare function bytesToBase64(bytes: Uint8Array): string;
/**
 * The slot's Remote result union without importing the slots module: an
 * expected failure arrives as a stable `code`, and any other error stays
 * unknown to this cache.
 */
export type GetAttachment = (request: AgentTeamGetAttachmentRequest) => Promise<RemoteResult<AgentTeamGetAttachmentResult>>;
export declare function cachedAttachmentDataUrl(attachmentId: AgentTeamAttachmentId): string | null | undefined;
export declare function loadAttachmentDataUrl(getAttachment: GetAttachment, attachment: {
    attachmentId: AgentTeamAttachmentId;
    mediaType: string;
}): Promise<string | null>;
/** Human-readable byte size for attachment chips. */
export declare function formatByteSize(byteSize: number): string;
//# sourceMappingURL=attachment-preview.d.ts.map