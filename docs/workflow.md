# Studying a new book: the workflow

How Iliad 2 to 21 were added, as a checklist for the next book. Every step ends with `npm run check`
and `npm test` clean.

1. **Greek.** Extract the book into `grc/NN.txt` (one verse per row, the same header as the other
   books). The build picks it up at once, and the report lists every capitalized word no entry
   covers yet.
2. **Names table.** Before translating, fix the English spelling of every name in the book (Latin
   forms, as in the earlier books), and list the names that belong to two people or places. The
   translation, the lexicon and the index all use this table.
3. **Translation** (`en/NN.txt`). Keep line fidelity, and keep each name on its own line. Repeated
   Greek lines get the same English, and so do Book 1's formulas (check `TRANSLATION.md` and the
   earlier books for exact repeats). Then have an independent audit compare every line with the
   Greek, and record new formulas and disputed lines in `TRANSLATION.md`. Let the index writers start
   only once the audit's changes are in, so they quote the final English. (A complete Monro–Allen
   Iliad and Odyssey, for checking citations of later books, is in the sibling GreekWikiAstra project:
   `site/public/library/local-homer-iliad-*.json`.) Tell the index writers
   about every change the audit makes, and run `node scripts/checkquotes.mjs` after the last one:
   articles written while the translation moved will quote old wording.
4. **Structure** (`structure/NN.json`): scenes covering every line, speeches that match the
   quotation marks, days. Speakers and addressees must be entry ids.
5. **Lexicon.** `node scripts/lexicon.mjs skeleton` makes parts of about 125 lines; analyze them in
   parallel against the lemma list of the earlier books (`lexicon.mjs lemmas`); `check` each part;
   normalize lemma spellings across parts; `merge`.
6. **Clash scan.** Before the writers start, list which existing name entries match which lines of the
   new book, and on which words. Fix the wrong claims at once (Book 5: Chiron's Χείρων caught
   χειρῶν "hands", Haemon caught αἵμονα "skilled", the Pylian captains Alastor and Chromius caught the
   Lycians and a son of Priam), so no writer inherits them, and tell the writers what was fixed.
   Once the lexicon is merged, `node scripts/homographs.mjs <book>` lists the patterns of every kind of
   entry that catch words of two unrelated lemmas (Book 6: θεῶν "of the gods" caught θέων "running",
   arrows' ἰῷ caught ἰῷ "one", divine's θείη caught θείῃ "runs"). Run it again after the writers.
7. **Index.** Give every writer a list of the ids they own:
   - the book's places, peoples and people, by stretch of text;
   - the story's people and gods, and the notes of the major figures;
   - words, themes, formulas, similes, sayings, things and stories;
   - epithets;
   - reception.

   New things get entry files. Existing entries get a note in `notes/NN/`, whose front matter adds the
   new forms. Summaries stay general; a summary that was only about an earlier book moves into that
   book's note.
8. **Integration.** Fix the collisions the writers report. A name that is also a common word gets
   `^` (only when capitalized); a clash that will recur in every book gets an exclusion (`!`);
   a phrase an exclusion must not drop gets `+`; a one-off gets `except:`. Names shared by several
   people are listed in `docs/homonyms.md`; add the book's new ones. Merge duplicate quote titles,
   then run `npm run quotes`. Check that the report has no unindexed names, no missing links and no
   "English form never found" warnings. Tag new places by region.
9. **Publish.** Run `npm run export`, then republish `dist/artifact.html` with every file under
   `dist/`.

## A prose work: how Rhetoric I was added

The first book of the Rhetoric followed the Poetics' pattern. What differs from a book of Homer:

1. **Greek and line division.** The Perseus TEI file of Ross's text marks every fifth Bekker line.
   Rows are fixed at those lines and at the chapter openings; each column's end is estimated from the
   average line length (both columns of a page come out equal), and the lines between are divided in
   proportion to their length at word boundaries, never inside a quotation's opening or closing
   marks. Check the result against standard citations (1355b25–26, 1356a1, 1360b14, 1368b6), and
   record the method, the digitization slips corrected and the disputed passages in
   `TRANSLATION.md`.
2. **Translation.** One English row per Bekker line; the syntax may run across lines, names may not.
   Quotations of Homer keep the Iliad translation's wording where Aristotle's text agrees with ours.
3. **Structure.** Chapters are the work's books; each chapter's scenes are titled sections that
   cover every line, and every quotation mark in the Greek opens a quotation in the structure file.
4. **Quotations in articles.** `node scripts/checkquotes.mjs aristotle.rhetoric` checks every
   English quotation followed by a Bekker reference in the Rhetoric's own notes, and in other files
   when the reference names the Rhetoric. Run it after every round of writing.
5. **Clash scan.** Homeric patterns catch Attic words (Agathon's name caught ἀγαθῶν, the Trojans
   caught τρῶσαι “to wound”), and English-only name linking catches later people of the same name
   (Jason, Hippias, Dionysius, Cleophon, Plato, Sophocles). Fix them before writing notes and list
   them in `docs/homonyms.md`.
6. **Index.** New people and works get entry files whose Greek forms sit in the work's note when
   they could catch other words elsewhere; existing entries get a note in `notes/<id>.md`; the
   treatise's terms and themes get general articles with the Rhetoric's use in the note.
