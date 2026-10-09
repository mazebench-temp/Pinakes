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
| `lexicon/NN.json` | one `{w, l, g, p, n?}` analysis per token, as produced by `tokenize()`, keyed by line as the text is (`"1354a1"` in a work cited by Bekker line) |
| `notes/NN/<id>.md` | what each index entry is and does in this book (see below) |

`node scripts/lexicon.mjs skeleton <book> <from> <to>` prints the tokens of a range (line numbers, or
Bekker labels such as `1354a1`) ready to be analyzed; `check` validates a filled-in part against the
text and against the lemmas already used; `merge` writes `lexicon/NN.json` from the parts. Several
parts can be written in parallel.

`npm test` checks the alignment, the speeches against the quotation marks, the scene coverage,
and the lexicon token counts. The build report lists every capitalized Greek word no entry covers
yet, which is the index's to-do list for the new book. Existing entries pick up their new
occurrences automatically, because the concordance runs over every available book.

A new work gets its own folder, `work.json` (with `aliases` so that `{{quote:Od. 9.1-10}}`
resolves), and optionally `TRANSLATION.md`, which the About page renders.

The Myths timeline runs from the Primordial age through the Telegony and the return of the
Heraclidae, and then through history, from archaic Greece to Aristotle's century. Stories from the
Odyssey go into the same periods, and the Odyssey's own action goes under `odyssey`; a later author's
examples (the plots Aristotle cites) take the mode `example`.

## Scopes: one article, read at many levels

Every entry has one general article (`content/index/<folder>/<id>.md`) and any number of scoped
notes, one per author, work or book, stored in the library under that scope:

```
content/library/homer/iliad/notes/02/achilles.md   Achilles in Iliad 2
content/library/homer/iliad/notes/achilles.md      Achilles in the Iliad
content/library/homer/odyssey/notes/11/achilles.md Achilles in Odyssey 11 (the shade in the underworld)
content/library/homer/notes/achilles.md            Achilles in Homer
content/library/aristotle/notes/achilles.md        Achilles in Aristotle
```

The reader chooses the scope on the entry page as a path of up to three rows: All and the authors;
the chosen author's works, led by "About" (the author as a whole); the chosen work's books, led by
"About" (the work as a whole). At a book, the article opens with that book's notes and folds the
general article away; at an author or a work, it reads whole, with the notes of that scope in place.
The choice is remembered as the study scope, so every article opens at the book being studied, and
the Index can be limited to an author, a work or a book (`site/assets/js/lib/scope.js`). A new work or author needs only its `author.json` or `work.json`; its
notes are picked up by folder. The general article stays general: etymology, family, myth and
later tradition; everything that happens in a particular book goes in that book's note.

## Prose (Aristotle's Poetics and Rhetoric, and after them Plato and Herodotus)

The Poetics is the first prose work, cited by Bekker page, column and line (`Poetics 1451a36`); the
first book of the Rhetoric followed with no code changes. They show how a prose work fits a library
built for verse:

1. **Line ids.** Each row of `grc/NN.txt` and `en/NN.txt` begins with its Bekker label
   (`1447a8<TAB>…`). The labels are coded as integers, page × 100, plus 50 in column b, plus the line
   (1447a8 = 144708, 1447b8 = 144758), so line maps, numeric ranges and "every fifth line" work as
   they do for verse (`parseBekker`, `bekkerLabel` in `scripts/lib/refs.mjs`).
2. **References.** `citation.scheme: "bekker"` in `work.json` selects the parser. A chapter is the
   work's "book"; each `books.N` entry gives the chapter's first line (`from`), its Greek numeral
   (`letter`), and, for a work in several books, the label it is shown by (`label`: the Rhetoric's
   chapters run 1 to 60 across its three books, and chapter 16 is shown as "2.1"). `parseRef()` reads `Poetics 1451a36-b5` and ranges across pages, finds the chapter that
   holds the first line, and expands ranges over the lines of the text.
3. **Reader layout.** `display: "prose"` adds a running-text layout: each section of the structure
   file becomes a Greek and an English paragraph, side by side on wide screens, with the line labels
   inline. Names, quotes and the index work as for verse, because they key on line and token; a work
   without `lexicon/` files has no word glosses and no vocabulary.
4. **Quotations.** A structure file may list the passages that quote other authors:
   `{"from": "1457b10", "to": "1457b10", "source": "homer", "entry": "here-my-ship-stands",
   "cite": "Od. 1.185 = 24.308"}`. `source` and `entry` are entry ids; `ref` instead of `cite` links a
   line of a work in the library (`"ref": "Il. 2.272"`). The quoted lines must carry quotation marks
   in the Greek, except an indirect quotation, which is marked `"marks": 0`; a passage that strings
   several quoted proverbs together counts its marks (`"marks": 4`), and an example sentence of the
   author's own takes `"source": "aristotle"`. The reader labels the
   lines with the poet and the source, and the entry page lists where the entry is quoted.

Plato would need Stephanus sections (`Republic 327a`) and Herodotus book.chapter.section
(`7.134.1`): a parser in `refs.mjs` for each scheme, coding the labels as ordered integers in the same
way.

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
