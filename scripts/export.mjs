#!/usr/bin/env node
// Static export: dist/ holds a self-contained copy of the site for any static host.
// Entries are bundled into one file (data/entries.json) so the export stays at a few dozen files.
//   dist/index.html      the full page, for any static host (GitHub Pages, a folder on a server)
//   dist/artifact.html   the same app as a page fragment, for hosts that supply their own <head>
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, walk } from './lib/content.mjs';
import { build } from './build.mjs';

const SITE = path.join(ROOT, 'site');
const DIST = path.join(ROOT, 'dist');

const { errors } = build({ log: m => console.log(m) });
if (errors.length) process.exit(1);

fs.rmSync(DIST, { recursive: true, force: true });
const copy = rel => {
  const to = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(path.join(SITE, rel), to);
};

for (const file of walk(path.join(SITE, 'assets'))) copy(path.relative(SITE, file));
for (const file of walk(path.join(SITE, 'data'))) {
  const rel = path.relative(SITE, file);
  if (!rel.startsWith(path.join('data', 'entries') + path.sep)) copy(rel);
}
const entries = {};
for (const file of walk(path.join(SITE, 'data', 'entries'), f => f.endsWith('.json'))) {
  entries[path.basename(file, '.json')] = JSON.parse(fs.readFileSync(file, 'utf8'));
}
fs.writeFileSync(path.join(DIST, 'data', 'entries.json'), JSON.stringify(entries));

const page = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8')
  .replace('<script type="module"', '<script>window.PINAKES_BUNDLE = true;</script>\n<script type="module"');
fs.writeFileSync(path.join(DIST, 'index.html'), page);

// The fragment: the head's title, description, fonts and stylesheet, then the body.
const head = page.match(/<head>([\s\S]*)<\/head>/)[1]
  .split('\n').filter(l => /<title>|name="description"|fonts\.g|app\.css|icon/.test(l)).join('\n');
const body = page.match(/<body>([\s\S]*)<\/body>/)[1];
const fragment = `${head}
<style>
  /* The host pads the page by the safe-area insets, so the sticky bar sits below them instead. */
  .navbar { padding-top: 0; top: env(safe-area-inset-top, 0px); }
</style>
${body.trim()}
`;
fs.writeFileSync(path.join(DIST, 'artifact.html'), fragment);

const files = walk(DIST);
const size = files.reduce((s, f) => s + fs.statSync(f).size, 0);
console.log(`Exported ${files.length} files (${(size / 1e6).toFixed(1)} MB) to dist/`);
