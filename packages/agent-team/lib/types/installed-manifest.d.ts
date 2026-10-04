/** The installed bundle's own manifest, read once for both facts taken from it. */
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
export declare function readInstalledManifest(): Record<string, unknown> | undefined;
/** Version of the manifest this package installed from, or `'unknown'`. */
export declare function bundleVersionOf(manifest: Record<string, unknown> | undefined): string;
//# sourceMappingURL=installed-manifest.d.ts.map