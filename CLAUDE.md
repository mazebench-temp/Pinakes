# Pinakes: notes for working on this repo

A zero-dependency reader and index of Greek literature. Content lives in `content/`, the build
(`scripts/build.mjs`) compiles it into `site/data/`, and `site/` is a vanilla-JS single-page app.

## Commands

- `npm run dev`: dev server on :5178 with rebuild and live reload (builds run in a child process).
- `npm run check`: validate without writing. `npm test`: unit and content-integrity tests.
- `npm run quotes`: register `{{quote:Iliad 1.1-7 | Title}}` tags and rewrite them as `{{quote:<uuid>}}`.
- `npm run export`: static copy in `dist/` (entries bundled into a few chunks of under 3 MB).
- `node scripts/checkquotes.mjs`: English quotations in articles that no longer match the translation.
- `node scripts/lexicon.mjs skeleton|check|merge|lemmas`: build and validate a book's lexicon in parts.

## Conventions

- **Index entries**: `content/index/<folder>/<id>.md` holds the general article. What an entry does in
  one book goes in a scoped note, `content/library/<author>/<work>/notes/<NN>/<id>.md` (work- and
  author-level notes sit one or two folders up). Format and style: `docs/index-guide.md`.
  Tags must exist in `content/tags.json`; kinds in `content/kinds.json`; story periods in
  `content/periods.json`. Keep Homer's own evidence separate from later sources ("Outside Homer"),
  cite precisely, and never invent a citation.
- **Translation**: line-for-line, aligned by Greek line number. Fixed renderings of formulas and key
  words are in `content/library/homer/iliad/TRANSLATION.md`; keep them consistent.
- **Greek forms** in entries are matched without accents; use `=form` for accent-sensitive matches,
  `^Form` for a name that is also a common word (Ὕλη, ὕλη "forest"), `!form` to exclude words a
  broader pattern would catch (Τρώ* without `!=Τρῳ*`), and `except:` for single lines where a form
  means something else. The build warns about forms that never match and lists unindexed
  capitalized words in `site/data/report.json`.
- **Quotes** have deterministic v5 UUIDs of `work ref | title` (namespace in `scripts/lib/uuid.mjs`,
  mirrored in `site/assets/js/lib/uuid.js`). Never hand-edit ids.
- **Front matter** list items are always strings (`refs: [1.280]` stays "1.280").

## Pitfalls

- When writing JS or MJS files, a `\u0300`-style escape in tool input can arrive as a literal
  combining character. `tests/lib.test.mjs` fails if a source file contains invisible characters;
  write the escape with a doubled backslash in tool input, then check the file.
- The browser twins (`site/assets/js/lib/greek.js`, `uuid.js`) must stay in step with
  `scripts/lib/greek.mjs` and `uuid.mjs`; tests compare them.
- UI: iOS-style components and tokens are in `site/assets/css/app.css` (light on `:root`, dark
  under the media query and `[data-theme="dark"]`). Style through tokens, not literal colors.
