import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEnvironmentCheck } from "./environment-check.js";
import css from './environment-check.module.css';
/** The three glyphs, drawn at the 16px seat the settings page uses for state marks. */
const ICONS = {
    ok: _jsx("path", { d: "M3 8.5 6.5 12 13 4.5" }),
    warn: _jsxs(_Fragment, { children: [_jsx("path", { d: "M8 2.5 14.6 13.6H1.4z" }), _jsx("path", { d: "M8 6.6v3.2" }), _jsx("path", { d: "M8 11.9h.01" })] }),
    unknown: _jsxs(_Fragment, { children: [_jsx("circle", { cx: "8", cy: "8", r: "6" }), _jsx("path", { d: "M5.6 8h4.8" })] }),
};
function EnvironmentIcon({ glyph }) {
    return _jsx("svg", { className: css.icon, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: ICONS[glyph] });
}
/** The release notes this bundle's own repository keeps, one click from the version footnote. */
const RELEASE_NOTES_URL = 'https://github.com/AEmbers/dsh-research-team/releases';
export function EnvironmentCheck({ t, environment }) {
    const { report } = useEnvironmentCheck(environment);
    // Nothing to state before the first read settles, and nothing to state if it
    // never lands: the block is informational and its absence is not an error.
    if (report === undefined)
        return null;
    const range = report.supportRange;
    const running = report.dshVersion;
    // The tested combination appears only when both of its versions were derived:
    // the installed manifest's own version, and the range's lower bound, which is
    // the certified line. A missing one withholds the line rather than inviting a
    // hand-written version onto the page.
    const certified = report.certifiedDshVersion;
    const bundleVersion = report.bundleVersion;
    // Both sides of the line have to be derived: `'unknown'` is the data layer's
    // word for a version that could not be read, and it never reaches the page.
    const tested = certified !== undefined && bundleVersion !== undefined && bundleVersion !== 'unknown';
    const title = report.verdict === 'ok'
        ? t('environmentOkTitle')
        : report.verdict === 'out-of-range'
            ? t('environmentOutOfRangeTitle')
            : t('environmentUndeterminedTitle');
    const lines = [];
    if (report.verdict === 'ok') {
        if (running !== undefined)
            lines.push(t('environmentOkDetail', { version: running }));
    }
    else if (report.verdict === 'out-of-range') {
        if (running !== undefined)
            lines.push(t('environmentOutOfRangeDetail', { version: running }));
        if (range !== undefined)
            lines.push(t('environmentRange', { lower: range.lower, upper: range.upper }));
        if (tested && certified !== undefined && bundleVersion !== undefined) {
            lines.push(t('environmentTested', { bundle: bundleVersion, dsh: certified }));
        }
    }
    else {
        lines.push(t('environmentUndeterminedDetail'));
    }
    // `data-environment` carries the verdict the way the rest of the Client marks
    // a state for assertions; the block also renders nothing at all before a read
    // lands, so a journey can wait on this attribute rather than on prose.
    return _jsxs("div", { className: css.block, "data-environment": report.verdict, children: [_jsx(EnvironmentIcon, { glyph: report.verdict === 'ok' ? 'ok' : report.verdict === 'out-of-range' ? 'warn' : 'unknown' }), _jsxs("div", { className: css.body, children: [_jsx("p", { className: css.title, children: title }), lines.map((line, index) => _jsx("p", { className: css.detail, children: line }, index)), report.verdict !== 'ok' && _jsx("p", { className: css.action, children: _jsx("a", { className: css.link, href: RELEASE_NOTES_URL, target: "_blank", rel: "noreferrer", children: t('environmentReleaseNotes') }) })] })] });
}
