# Pinakes · Πίνακες

A reader and exhaustive index of Greek literature, named after the *Pinakes* of Callimachus, the
catalogue of the Library of Alexandria. It begins with Homer's Iliad, Books 1 to 12, and Aristotle's
Poetics: the Greek texts, new line-for-line translations, a word-by-word lexicon of the Iliad, and an
index of every name, place, god, creature, custom, word, epithet, formula, story, quotation and idea in
them.

```sh
npm run dev      # build, serve at http://localhost:5178, rebuild and reload on every change
npm run build    # write site/data/ from content/
npm run check    # validate everything without writing
npm run quotes   # turn {{quote:Iliad 1.1-7 | Title}} tags into permanent {{quote:uuid}} ids
npm test         # library and content integrity tests
```

Requires Node 20 or later. There are no dependencies to install.

## What is in it

- **Reader**: Greek over English, line by line, or side by side on wide screens. Tap a Greek word
  for its dictionary form, gloss and parse. Tap a name for its index entry. Tap a line number to quote
  a line or a passage. Scene headings, speaker labels and the days of the action come from the
  book's structure file. Prose (the Poetics) can also be read as running text, Greek beside English,
  cited by Bekker page and line, with every quotation of Homer and the poets labeled with its source.
- **Index**: entries in 21 kinds, from gods and heroes to Greek words, epithets, rituals, quotations,
  works and textual notes. Every entry lists every line it occurs in, found automatically from its Greek forms.
- **Scopes**: every article can be read whole, or at an author, a work or a book, chosen as a path
  (Homer › Iliad › 3, with "About" for Homer or the Iliad as a whole). The general article (etymology,
  family, myth, later tradition) is shared; what the entry does in each book is a note of its own. The
  chosen scope is remembered, so studying a book keeps every article on it.
- **Myths**: every story told, remembered, foretold or cited, placed in mythic time from the
  Primordial age and the Titanomachy through the heroic generations and the Epic Cycle to the Telegony
  and the return of the Heraclidae, and then in history, from archaic Greece to Aristotle's century.
- **Tags**: faceted and nested. A tag includes its children, and tags can be combined.
- **Search**: across the index, the text (Greek with or without accents, English, or transliterated
  Greek) and the lexicon.
- **Quotes**: `{{quote:<uuid>}}` tags, as in the Margin wiki. Ids are deterministic version-5 UUIDs of
  the passage and title, so the same quote always has the same id. The Quotes page lists every quoted
  passage with the articles that quote it and the tag for each title it is quoted under.

## Layout

```
content/
  library/<author>/author.json
  library/<author>/<work>/work.json        editions, citation scheme, book titles
  library/<author>/<work>/grc/01.txt       Greek, one numbered verse per row
  library/<author>/<work>/en/01.txt        English, aligned to the Greek numbering
  library/<author>/<work>/structure/01.json   scenes, speeches, days, quotations
  library/<author>/<work>/lexicon/01.json     lemma, gloss and parse for every word
  library/<author>/<work>/TRANSLATION.md      translation conventions
  library/<author>/<work>/notes/02/<id>.md    what an index entry is and does in Book 2
  library/<author>/<work>/notes/<id>.md       ... in the work as a whole
  index/<folder>/<id>.md                   index entries (see docs/index-guide.md)
  quotes/<work>.json                       the quote registry
  kinds.json  tags.json  periods.json      taxonomies
scripts/                                   build, dev server, quote tool (no dependencies)
site/                                      the app: index.html, assets/, and the generated data/
docs/index-guide.md                        how to write index entries
```

## Adding more

**Another book of the Iliad.** Add `grc/03.txt`, `en/03.txt`, `structure/03.json` and
`lexicon/03.json` (built in parts with `scripts/lexicon.mjs`), a `books.3` title in `work.json`, and
notes under `notes/03/`. The concordance runs over every available
book, so existing entries pick up their new occurrences at once, and the build report lists every
capitalized Greek word that no entry covers yet (`site/data/report.json`, and the About page).

**Another work** (the Odyssey, the Homeric Hymns, Plato). Create `content/library/<author>/<work>/`
with a `work.json` like the Iliad's. Give it its own `citation` scheme and `aliases` (so that
`{{quote:Od. 1.1-10}}` resolves) and add its texts. Entries default to the Iliad; set `work:` in an
entry's front matter, or name the work in a reference, to cite another. The Poetics shows how a prose
work fits: Bekker lines as line ids, chapters as books, and a running-text reader
(`docs/extending.md`).

## Sources and credits

- Greek text: D. B. Monro and T. W. Allen, *Homeri Opera*, Oxford Classical Texts (3rd ed., 1920), as
  digitized by the Perseus Digital Library (CC BY-SA).
- Greek text of the Poetics: R. Kassel, *Aristotelis De arte poetica liber*, Oxford Classical Texts
  (1965), as digitized by the Perseus Digital Library (CC BY-SA 4.0).
- Translations, lexicon, index and articles: written for this project by Claude (Anthropic), 2026.
  See `content/library/homer/iliad/TRANSLATION.md` and `content/library/aristotle/poetics/TRANSLATION.md`
  for the conventions.
