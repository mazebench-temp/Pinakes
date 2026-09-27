# Extending Pinakes

Pinakes is built so that more of Homer drops in with no code changes, and so that prose and
mathematical works need only small, well-defined additions. This note says where each kind of
growth plugs in.

## More Homer (no code changes)

The Iliad's remaining books, the Odyssey, and the Homeric Hymns are all verse cited as
`book.line`. For each new book add, beside the existing files:

| File | Contents |
|---|---|
| `grc/NN.txt` | the Greek, one verse per row: `line<TAB>text` |
| `en/NN.txt` | the translation, aligned to the Greek numbering |
| `structure/NN.json` | scenes (covering every line), speeches (matching the quotation marks), days |
| `lexicon/NN.json` | one `{w, l, g, p, n?}` analysis per token, as produced by `tokenize()` |

`npm test` checks the alignment, the speeches against the quotation marks, the scene coverage,
and the lexicon token counts. The build report lists every capitalized Greek word no entry covers
yet, which is the index's to-do list for the new book. Existing entries pick up their new
occurrences automatically, because the concordance runs over every available book.

A new work gets its own folder, `work.json` (with `aliases` so that `{{quote:Od. 9.1-10}}`
resolves), and optionally `TRANSLATION.md`, which the About page renders.

The Myths timeline already runs from the Primordial age to the Telegony. Stories from the Odyssey
go into the same periods, and the Odyssey's own action goes under `odyssey`.

## Prose (Plato, Aristotle, Herodotus)

Prose is cited by sections rather than lines: Stephanus pages (`Republic 327a`), Bekker pages
(`Poetics 1450a15`), or book.chapter.section (`Herodotus 7.134.1`). Three pieces generalize:

1. **Section ids.** `readLines()` in `scripts/lib/content.mjs` requires integer line numbers.
   Prose needs string ids (`327a`) with an explicit order, which is the order of the file.
2. **References.** `parseRef()` in `scripts/lib/refs.mjs` parses `book.line`. A work's
   `citation.scheme` (`"stephanus"`, `"bekker"`, `"book.chapter.section"`) would select a parser,
   and `refLines()` would expand a range by position in the file, not by arithmetic.
3. **Reader layout.** `work.display` is already `"verse"` for Homer. A `"prose"` layout would
   render paragraphs with section markers in the margin instead of one row per line. Tap-a-word,
   names, quotes and the index work the same way, because they all key on section id and token.

## Mathematics (Euclid, Archimedes)

A proposition is a structured section: enunciation, setting-out, construction, proof. Cite it as
`book.proposition` (`Elements I.1`), with the parts as sub-sections (`I.1.construction`).

Diagrams are already supported. Put an SVG in `content/figures/` and place it with
`{{figure:euclid/1-1.svg | Caption}}`. The build inlines it, so strokes and labels drawn in
`currentColor` follow the light and dark themes, and on narrow screens it scrolls sideways
instead of shrinking. For a proposition, the figure would sit beside the text in a
`"proposition"` reader layout. Its point labels could switch between Latin and Greek letters
(Α, Β, Γ), as the Margin wiki's Euclid does.

## The index

The kinds, tags, periods and modes are data (`content/*.json`). Adding a kind, a tag facet, or a
mythic period means editing those files, not code. The Myths view, the tag browser and the Index
filters all read them.
