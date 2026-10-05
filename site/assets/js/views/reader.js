import { el, esc, icon, on, throttle, copyText, plural } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { openSheet, closeSheet, peek, toast, segmented, quoteCard, makeQuoteTag } from '../ui/components.js';
import { isBekker, isProse, bookWord, bookMark, lineLabel, rangeLabel, refOf, lineButton, lineMarked, parseLineInput } from '../lib/cite.js';

// ── Parse labels ────────────────────────────────────────────────────────────
const ABBR = {
  'nom.': 'nominative', 'gen.': 'genitive', 'dat.': 'dative', 'acc.': 'accusative', 'voc.': 'vocative',
  'sg.': 'singular', 'pl.': 'plural', 'du.': 'dual', 'masc.': 'masculine', 'fem.': 'feminine', 'neut.': 'neuter',
  'pres.': 'present', 'impf.': 'imperfect', 'fut.': 'future', 'aor.': 'aorist', 'pf.': 'perfect', 'plpf.': 'pluperfect',
  'ind.': 'indicative', 'subj.': 'subjunctive', 'opt.': 'optative', 'imper.': 'imperative', 'imperat.': 'imperative',
  'inf.': 'infinitive', 'part.': 'participle', 'act.': 'active', 'mid.': 'middle', 'pass.': 'passive', 'mid./pass.': 'middle/passive',
  'adj.': 'adjective', 'adv.': 'adverb', 'prep.': 'preposition', 'conj.': 'conjunction', 'pron.': 'pronoun', 'pers.': 'personal',
  'rel.': 'relative', 'dem.': 'demonstrative', 'interj.': 'interjection', 'comp.': 'comparative', 'superl.': 'superlative',
  'refl.': 'reflexive', 'poss.': 'possessive', 'indef.': 'indefinite', 'interr.': 'interrogative', 'numeral': 'numeral',
};
const PERSON = { 1: '1st', 2: '2nd', 3: '3rd' };

export function expandParse(p = '') {
  const [pos, morph = ''] = p.split(' · ');
  const posLabel = pos.split(/\s+/).map(w => ABBR[w] ?? w).join(' ');
  const parts = [];
  const tokens = morph.replace(/(\d)\s+(sg\.|pl\.|du\.)/g, '$1_$2').split(/\s+/).filter(Boolean);
  for (const t of tokens) {
    const m = t.match(/^(\d)_(sg\.|pl\.|du\.)$/);
    if (m) parts.push(`${PERSON[m[1]]} person ${ABBR[m[2]]}`);
    else parts.push(ABBR[t] ?? t);
  }
  return { pos: posLabel, parts };
}

function greekHtml(line, nameIds) {
  return line.tk.map(([w, pre, post, , ents], k) => {
    const nm = ents.some(id => nameIds.has(id));
    return `${esc(pre)}<span class="w${nm ? ' nm' : ''}" data-k="${k}">${esc(w)}</span>${esc(post)}`;
  }).join(' ');
}

function englishHtml(line, nameIds) {
  let out = '', i = 0;
  for (const [s, e, id] of line.es) {
    out += esc(line.en.slice(i, s));
    out += `<span class="${nameIds.has(id) ? 'en-nm' : 'en-tm'}" data-e="${esc(id)}">${esc(line.en.slice(s, e))}</span>`;
    i = e;
  }
  return out + esc(line.en.slice(i));
}

export function parseRange(s) {
  const m = String(s ?? '').match(/^(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  const a = +m[1], b = m[2] ? +m[2] : a;
  return { from: Math.min(a, b), to: Math.max(a, b) };
}

/** Lines are found by data-n: in the running-text layout a line appears twice, in the Greek and in the English. */
const lineEls = (root, n) => root.querySelectorAll(`[data-n="${n}"]`);

export async function render(route, { go }) {
  const [workId, bookStr] = route.parts;
  const book = Number(bookStr);
  const [cat, text] = await Promise.all([store.catalog(), store.text(workId, book)]);
  const work = cat.by.works.get(workId);
  const p = store.prefs;
  const prose = isProse(work), bekker = isBekker(work);
  const Book = bookWord(work);
  // Prose keeps its own layout preference, so that running text never reaches the verse reader.
  const layoutPref = () => prose ? (p.proseLayout ?? 'run') : (p.layout === 'run' ? 'stacked' : p.layout);
  const hasLex = text.lex.length > 0;
  const nameIds = new Set(cat.entries.filter(e => cat.by.kinds.get(e.kind)?.names).map(e => e.id));
  const lineByN = new Map(text.lines.map(l => [l.n, l]));
  const speechAt = new Map(text.speeches.map(s => [s.from, s]));
  const quotations = text.quotations ?? [];
  const quoteAt = new Map();
  for (const q of quotations) { if (!quoteAt.has(q.from)) quoteAt.set(q.from, []); quoteAt.get(q.from).push(q); }
  const afterSpeech = new Set(text.speeches.map(s => s.to + 1));
  const lemmaIndex = new Map(text.lemmas.map(l => [l[0], l]));
  // Word counts in the work's other available books, loaded the first time a word is looked up.
  let otherCounts = null;
  const countsElsewhere = () => otherCounts ??= Promise.all((work.available ?? []).filter(b => b !== book)
    .map(b => store.text(workId, b).then(t => [b, new Map(t.lemmas.map(l => [l[0], l[2]]))]))).then(list => new Map(list));
  const title = id => cat.by.entries.get(id)?.title ?? id.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase());
  const sceneOf = n => text.scenes.find(s => n >= s.from && n <= s.to);
  const speechOf = n => text.speeches.find(s => n >= s.from && n <= s.to);
  const dayOf = n => text.days.find(d => n >= d.from && n <= d.to);
  const abbr = work.citation.abbr;
  const label = n => lineLabel(work, book, n);
  const cite = (a, b = a) => `${abbr} ${rangeLabel(work, book, a, b)}`;
  const span = (a, b) => rangeLabel(work, book, a, b).replace(/^\d+\./, '');
  const linesIn = (a, b) => text.lines.filter(l => l.n >= a && l.n <= b);
  // A Bekker column starts afresh at line 1 (or 8 on page 1447): its first line shows page and column.
  const colOf = n => bekker ? Math.floor(n / 50) : 0;
  const firstOfColumn = new Set(text.lines.filter((l, i) => i === 0 || colOf(text.lines[i - 1].n) !== colOf(l.n)).map(l => l.n));
  const numberBtn = (n, cls) => `<button class="${cls}${lineMarked(work, n, firstOfColumn.has(n)) ? '' : ' dim'}" type="button" aria-label="Line ${esc(label(n))}">${esc(lineButton(work, n, firstOfColumn.has(n)))}</button>`;
  // "Quoting Homer · Iliad 2.272" above a quotation; in running text, under the section with its lines.
  const quoteLabel = (n, withLines = false) => (quoteAt.get(n) ?? []).map(q => `<div class="speaker qsrc"${q.note ? ` title="${esc(q.note)}"` : ''}>
    <span class="qmark" aria-hidden="true">“</span>${withLines ? `<span class="qline">${esc(span(q.from, q.to))}</span>` : ''}<span>Quoting</span>${q.source ? `<a data-e="${esc(q.source)}" role="button" tabindex="0">${esc(title(q.source))}</a>` : ''}${q.cite ? (q.href ? `<a class="qcite" href="${esc(q.href)}">${esc(q.cite)}</a>` : `<span class="qcite">${esc(q.cite)}</span>`) : ''}</div>`).join('');

  // ── Markup ───────────────────────────────────────────────────────────────
  const lineHtml = line => {
    const n = line.n;
    const sp = speechAt.get(n);
    const para = sp || afterSpeech.has(n);
    const speaker = sp ? `<div class="speaker"><a data-e="${esc(sp.speaker)}" role="button" tabindex="0">${esc(title(sp.speaker))}</a>${sp.to_whom?.length ? `<span class="arrow">→</span><span>${sp.to_whom.map(title).map(esc).join(', ')}</span>` : ''}</div>` : '';
    return `${speaker}${quoteLabel(n)}<div class="line${para ? ' para' : ''}" id="l-${n}" data-n="${n}">
      ${numberBtn(n, 'n')}
      <div class="txt"><div class="g" lang="grc">${greekHtml(line, nameIds)}</div><div class="e" lang="en">${englishHtml(line, nameIds)}</div></div></div>`;
  };
  // Running text (prose): each section as a Greek and an English paragraph, the lines inline with their numbers.
  const runHtml = lines => {
    const part = (lang, html) => lines.map(l => `<span class="rl" data-n="${l.n}">${numberBtn(l.n, 'rn')}${html(l)}</span>`).join(' ');
    const quoted = lines.filter(l => quoteAt.has(l.n));
    return `<div class="run">
      <p class="run-g" lang="grc">${part('grc', l => greekHtml(l, nameIds))}</p>
      <p class="run-e" lang="en">${part('en', l => englishHtml(l, nameIds))}</p>
      ${quoted.length ? `<div class="run-q">${quoted.map(l => quoteLabel(l.n, true)).join('')}</div>` : ''}</div>`;
  };
  const scenes = text.scenes.length ? text.scenes : [{ from: text.lines[0].n, to: text.lines.at(-1).n, title: '' }];
  const body = scenes.map((s, i) => {
    const d = dayOf(s.from);
    const lines = text.lines.filter(l => l.n >= s.from && l.n <= s.to);
    return `<section class="scene" id="scene-${i}" data-from="${s.from}">
      ${s.title ? `<header class="scene-head"><div class="scene-title">${esc(s.title)}</div>
        <div class="scene-meta">Lines ${esc(span(s.from, s.to))}${d ? ` · ${esc(d.label)}` : ''}</div>
        ${s.summary ? `<p class="scene-summary">${esc(s.summary)}</p>` : ''}</header>` : ''}
      ${lines.map(lineHtml).join('')}${prose ? runHtml(lines) : ''}</section>`;
  }).join('');

  const view = el(`<div class="view">
    <article class="reader${prose ? ' prose' : ''}" data-mode="${p.mode}" data-layout="${layoutPref()}" data-numbers="${p.numbers}" data-names="${p.names ? 'on' : 'off'}" style="--read-size:${p.size}rem">
      <header class="reader-head">
        <div class="reader-title">
          <div class="book-letter${prose ? ' numeral' : ''}">${esc(bookMark(work, book))}</div>
          <div><div class="eyebrow">${esc(work.title)} · ${Book} ${book}</div>
            <h1 data-title-anchor>${esc(text.title)}</h1>
            ${text.greek ? `<div class="grc">${esc(text.greek)}</div>` : ''}</div>
        </div>
        <p class="lead" style="font-size:16px;color:var(--text-2)">${esc(text.summary)}</p>
        <div class="reader-meta">${text.lines.length} lines${bekker ? ` · ${esc(span(text.lines[0].n, text.lines.at(-1).n))}` : ''} · Greek of ${esc(text.editions[0]?.name ?? '')} · English by ${esc(text.editions[1]?.name ?? '')}. ${hasLex ? 'Tap a Greek word to parse it, a name to look it up, a line number to quote.' : 'Tap a name to look it up, a line number to quote.'}</div>
      </header>
      <div class="reader-body">${body}</div>
      ${(() => {
        const avail = work.available ?? [];
        const nav = (b, dir) => avail.includes(b) ? `<a class="book-nav ${dir}" href="#/read/${esc(workId)}/${b}"><span class="bn-label">${dir === 'next' ? 'Next' : 'Previous'} · ${Book} ${b}</span><span class="bn-title">${esc(work.books?.[b]?.title ?? `${Book} ${b}`)}</span></a>` : '';
        const links = nav(book - 1, 'prev') + nav(book + 1, 'next');
        return links ? `<nav class="book-nav-row" aria-label="${Book}s">${links}</nav>` : '';
      })()}
      <footer class="reader-foot">${text.editions.map(e => `<div><b>${esc(e.label)}.</b> ${esc(e.credit)}</div>`).join('')}</footer>
    </article></div>`);
  const reader = view.querySelector('.reader');
  const applyPrefs = () => {
    reader.dataset.mode = p.mode;
    const lay = layoutPref();
    reader.dataset.layout = lay === 'parallel' && window.innerWidth < 900 ? 'stacked' : lay;
    reader.dataset.numbers = p.numbers;
    reader.dataset.names = p.names ? 'on' : 'off';
    reader.style.setProperty('--read-size', `${p.size}rem`);
    view.querySelectorAll('.speaker').forEach(s => { s.hidden = !p.speakers; });
    view.querySelectorAll('.scene-summary').forEach(s => { s.hidden = p.summaries === false; });
  };
  applyPrefs();

  // ── Selection for quoting ────────────────────────────────────────────────
  let sel = null, bar = null;
  const paint = () => {
    view.querySelectorAll('.sel, .sel-start, .sel-end').forEach(l => l.classList.remove('sel', 'sel-start', 'sel-end'));
    if (!sel) return;
    for (const l of linesIn(sel.from, sel.to)) lineEls(view, l.n).forEach(x => x.classList.add('sel'));
    lineEls(view, sel.from).forEach(x => x.classList.add('sel-start'));
    lineEls(view, sel.to).forEach(x => x.classList.add('sel-end'));
  };
  const endSelection = () => { sel = null; paint(); bar?.remove(); bar = null; };
  const showBar = () => {
    bar?.remove();
    const count = linesIn(sel.from, sel.to).length;
    bar = el(`<div class="selection-bar" role="toolbar" aria-label="Quote selection">
      <div><div class="label">${esc(cite(sel.from, sel.to))}</div><div class="hint">${count === 1 ? 'Tap another line number to extend' : plural(count, 'line')}</div></div>
      <button class="btn small" type="button" data-act="quote">${icon('quote')}Quote</button>
      <button class="sheet-close" type="button" data-act="cancel" aria-label="Cancel">${icon('x')}</button></div>`);
    bar.querySelector('[data-act="quote"]').addEventListener('click', () => quoteSheet(sel.from, sel.to));
    bar.querySelector('[data-act="cancel"]').addEventListener('click', endSelection);
    document.body.append(bar);
  };
  const startSelection = n => { sel = { from: n, to: n, anchor: n }; paint(); showBar(); };
  const extendSelection = n => { sel = { anchor: sel.anchor, from: Math.min(sel.anchor, n), to: Math.max(sel.anchor, n) }; paint(); showBar(); };

  function quoteSheet(from, to) {
    const q = {
      id: '', title: '', cite: `${cat.by.authors.get(work.author)?.name}, ${work.title} ${rangeLabel(work, book, from, to)}`,
      href: `#/read/${workId}/${book}?l=${from}${to !== from ? `-${to}` : ''}`,
      lines: linesIn(from, to).map(l => ({ n: label(l.n), grc: l.grc, en: l.en })),
    };
    const ref = refOf(work, book, from, to);
    const body = el(`<div>
      <label class="eyebrow" for="quote-title" style="display:block;margin:4px 0 6px">Title (optional)</label>
      <div class="search-field" style="margin-bottom:6px"><input id="quote-title" type="text" placeholder="e.g. The nod of Zeus" autocomplete="off"></div>
      <div class="qhost"></div>
      <div class="btn-row" style="margin-top:6px">
        <button class="btn" type="button" data-act="tag">${icon('quote')}Copy quote tag</button>
        <button class="btn plain" type="button" data-act="text">${icon('copy')}Copy text</button>
      </div>
      <p class="footnote-text">The quote tag works in any article in <code>content/index</code>. With <code>npm run dev</code> running it is registered automatically; otherwise run <code>npm run quotes</code> after pasting.</p>
    </div>`);
    const qhost = body.querySelector('.qhost');
    const drawCard = () => qhost.replaceChildren(quoteCard({ ...q, title: body.querySelector('#quote-title').value.trim() }));
    drawCard();
    body.querySelector('#quote-title').addEventListener('input', drawCard);
    body.querySelector('[data-act="tag"]').addEventListener('click', async () => {
      const { tag, registered } = await makeQuoteTag({ work: workId, workTitle: work.title, ref, title: body.querySelector('#quote-title').value.trim() || undefined });
      if (await copyText(tag)) toast(registered ? 'Quote registered and copied' : 'Quote tag copied');
    });
    body.querySelector('[data-act="text"]').addEventListener('click', async () => {
      const v = qhost.querySelector('.qcard')?.dataset.view ?? 'en';
      const lines = q.lines.map(l => v === 'grc' ? l.grc : v === 'both' ? `${l.grc}\n${l.en}` : l.en).join('\n');
      if (await copyText(`${lines}\n— ${q.cite}`)) toast('Text copied');
    });
    openSheet({ title: `Quote ${cite(from, to)}`, content: body, onClose: endSelection });
  }

  // ── Sheets ───────────────────────────────────────────────────────────────
  const chip = id => {
    const e = cat.by.entries.get(id);
    if (!e) return '';
    const k = cat.by.kinds.get(e.kind);
    return `<button class="chip kind" type="button" data-peek="${esc(id)}" style="--h:${k?.hue ?? 262}">${esc(e.title)}</button>`;
  };
  const here = `${workId}.${book}`;
  const wirePeeks = root => on(root, 'click', '[data-peek]', (e, b) => peek(b.dataset.peek, { scope: here }));

  function wordSheet(line, k, tokenEl) {
    const [w, , , lx, ents] = line.tk[k];
    const a = lx >= 0 ? text.lex[lx] : null;
    tokenEl?.classList.add('active');
    const lemma = a?.[0];
    const info = lemma ? lemmaIndex.get(lemma) : null;
    const parse = a ? expandParse(a[2]) : null;
    const others = info ? info[3].filter(n => n !== line.n) : [];
    const ctx = line.tk.map(([word, pre, post], i) => `${esc(pre)}${i === k ? `<mark>${esc(word)}</mark>` : esc(word)}${esc(post)}`).join(' ');
    const body = el(`<div>
      <div class="word-head">
        <div class="word-form" lang="grc">${esc(w)}</div>
        ${a ? `<div class="word-lemma" lang="grc">${esc(lemma)}${info ? ` <span style="font-family:var(--ui);font-size:13px;color:var(--text-3)">· ${plural(info[2], 'time')} in ${Book} ${book}</span>` : ''}${info?.[4] && (work.available ?? []).some(b => b < book) ? ` <span class="new-word">New in ${Book} ${book}</span>` : ''}</div>
          <div class="word-books" hidden></div>
          <div class="word-gloss">${esc(a[1])}</div>
          <div class="parse"><span class="pos">${esc(parse.pos)}</span>${parse.parts.map(x => `<span>${esc(x)}</span>`).join('')}</div>
          ${a[3] ? `<div class="note">${esc(a[3])}</div>` : ''}` : `<div class="muted" style="margin-top:6px">${hasLex ? 'This word has not been analyzed yet.' : `The ${esc(work.title)} has no word-by-word analysis yet.`}</div>`}
      </div>
      ${ents.length ? `<div class="section" style="margin-top:6px"><div class="section-title small" style="margin-bottom:8px">In the index</div><div class="chips wrap">${ents.map(chip).join('')}</div></div>` : ''}
      <div class="section" style="margin-top:18px"><div class="section-title small" style="margin-bottom:8px">${esc(cite(line.n))}</div>
        <div class="ctx-line"><div class="g" lang="grc">${ctx}</div><div class="e">${esc(line.en)}</div></div></div>
      ${others.length ? `<div class="section" style="margin-top:18px"><div class="section-title small" style="margin-bottom:8px">Also in ${Book} ${book}</div>
        <div class="list">${others.slice(0, 8).map(n => {
          const l = lineByN.get(n);
          return `<button class="row" type="button" data-jump="${n}"><span class="row-main"><span class="row-sub one" style="font-size:12px;color:var(--text-3)">${esc(cite(n))}</span><span class="grc" style="font-size:16px">${esc(l.grc)}</span></span></button>`;
        }).join('')}</div>
        ${others.length > 8 ? `<a class="btn plain small" style="margin-top:10px" href="#/search?lemma=${encodeURIComponent(lemma)}">All ${others.length + 1} lines with ${esc(lemma)}</a>` : ''}</div>` : ''}
    </div>`);
    wirePeeks(body);
    on(body, 'click', '[data-jump]', (e, b) => { closeSheet(); jump(+b.dataset.jump, true); });
    openSheet({ title: a ? `${a[0]} · ${a[1]}` : w, content: body, onClose: () => tokenEl?.classList.remove('active') });
    if (lemma && (work.available ?? []).length > 1) countsElsewhere().then(map => {
      const box = body.querySelector('.word-books');
      const parts = (work.available ?? []).map(b => [b, b === book ? (info?.[2] ?? 0) : (map.get(b)?.get(lemma) ?? 0)]);
      const total = parts.reduce((t, [, c]) => t + c, 0);
      box.innerHTML = `${esc(work.title)}: ${plural(total, 'time')} · ${parts.map(([b, c]) => `<span${b === book ? ' class="here"' : ''}>${Book} ${b} <b>${c}</b></span>`).join(' · ')}`;
      box.hidden = false;
    }).catch(() => {});
  }

  function lineSheet(n) {
    const line = lineByN.get(n);
    const sc = sceneOf(n), sp = speechOf(n), d = dayOf(n);
    const qs = quotations.filter(q => n >= q.from && n <= q.to);
    const ents = line.le.filter(id => cat.by.entries.has(id));
    const names = ents.filter(id => nameIds.has(id)), others = ents.filter(id => !nameIds.has(id));
    const passages = (line.lp ?? []).filter(id => cat.by.entries.has(id));
    const body = el(`<div>
      <div class="ctx-line"><div class="g" lang="grc" style="font-size:19px">${esc(line.grc)}</div><div class="e" style="margin-top:4px">${esc(line.en)}</div></div>
      <div class="btn-row" style="margin-top:14px">
        <button class="btn small" type="button" data-act="quote1">${icon('quote')}Quote line</button>
        <button class="btn small secondary" type="button" data-act="range">Quote a passage…</button>
        <button class="btn small plain" type="button" data-act="copy">${icon('copy')}Copy</button>
      </div>
      <div class="list" style="margin-top:18px">
        ${sc ? `<button class="row" type="button" data-jump="${sc.from}"><span class="row-main"><span class="row-sub one" style="font-size:12px;color:var(--text-3)">${prose ? 'Section' : 'Scene'} · ${esc(span(sc.from, sc.to))}${d ? ` · ${esc(d.label)}` : ''}</span><span class="row-title"><span>${esc(sc.title)}</span></span></span>${icon('chevron', 'chev')}</button>` : ''}
        ${qs.map(q => `<${q.href ? `a href="${esc(q.href)}"` : 'div'} class="row"><span class="row-main"><span class="row-sub one" style="font-size:12px;color:var(--text-3)">Quotation · ${esc(span(q.from, q.to))}</span><span class="row-title"><span>${esc(q.source ? title(q.source) : 'Unknown source')}${q.cite ? ` · ${esc(q.cite)}` : ''}</span></span>${q.note ? `<span class="row-sub">${esc(q.note)}</span>` : ''}</span>${q.href ? icon('chevron', 'chev') : ''}</${q.href ? 'a' : 'div'}>`).join('')}
        ${sp ? `<button class="row" type="button" data-jump="${sp.from}"><span class="row-main"><span class="row-sub one" style="font-size:12px;color:var(--text-3)">Speech · ${sp.from}–${sp.to}${sp.kind ? ` · ${esc(sp.kind)}` : ''}</span><span class="row-title"><span>${esc(title(sp.speaker))} → ${sp.to_whom.map(title).map(esc).join(', ')}</span></span></span>${icon('chevron', 'chev')}</button>` : ''}
      </div>
      ${names.length ? `<div class="section" style="margin-top:18px"><div class="section-title small" style="margin-bottom:8px">Names</div><div class="chips wrap">${names.map(chip).join('')}</div></div>` : ''}
      ${others.length ? `<div class="section" style="margin-top:14px"><div class="section-title small" style="margin-bottom:8px">Also indexed</div><div class="chips wrap">${others.map(chip).join('')}</div></div>` : ''}
      ${passages.length ? `<div class="section" style="margin-top:14px"><div class="section-title small" style="margin-bottom:8px">Part of</div><div class="chips wrap">${passages.map(chip).join('')}</div></div>` : ''}
    </div>`);
    wirePeeks(body);
    on(body, 'click', '[data-jump]', (e, b) => { closeSheet(); jump(+b.dataset.jump, true); });
    body.querySelectorAll('a.row').forEach(a => a.addEventListener('click', () => closeSheet()));
    body.querySelector('[data-act="quote1"]').addEventListener('click', () => { sel = { from: n, to: n, anchor: n }; paint(); quoteSheet(n, n); });
    body.querySelector('[data-act="range"]').addEventListener('click', () => { closeSheet(); startSelection(n); });
    body.querySelector('[data-act="copy"]').addEventListener('click', async () => {
      if (await copyText(`${line.grc}\n${line.en}\n— ${cite(n)}`)) toast('Line copied');
    });
    openSheet({ title: cite(n), content: body });
  }

  function contentsSheet() {
    const body = el(`<div>
      <form class="search-field" style="margin-bottom:16px" data-goto>${icon('search')}<input id="goto-line" type="${bekker ? 'text' : 'number'}" inputmode="${bekker ? 'text' : 'numeric'}" ${bekker ? '' : `min="1" max="${text.lines.at(-1).n}"`} placeholder="Go to line (${esc(bekker ? `e.g. ${label(text.lines[Math.min(4, text.lines.length - 1)].n)}` : `1–${text.lines.at(-1).n}`)})" autocomplete="off"></form>
      <div class="section-title small" style="margin:0 4px 8px">${prose ? 'Sections' : 'Scenes'}</div>
      <div class="list">${text.scenes.map(s => `<button class="row" type="button" data-jump="${s.from}"><span class="row-main"><span class="row-title"><span>${esc(s.title)}</span><span class="row-meta" style="margin-left:auto;font-size:13px">${esc(span(s.from, s.to))}</span></span><span class="row-sub">${esc(s.summary ?? '')}</span></span></button>`).join('')}</div>
      ${text.speeches.length ? `<div class="section-title small" style="margin:22px 4px 8px">Speeches</div>
      <div class="list">${text.speeches.map(s => `<button class="row speech-row" type="button" data-jump="${s.from}"><span class="row-main"><span class="row-title"><span>${esc(title(s.speaker))} <span class="muted">→ ${s.to_whom.map(title).map(esc).join(', ')}</span></span></span><span class="row-sub one">${s.from}–${s.to} · ${plural(s.to - s.from + 1, 'line')}${s.kind ? ` · ${esc(s.kind)}` : ''}</span></span></button>`).join('')}</div>` : ''}
      ${quotations.length ? `<div class="section-title small" style="margin:22px 4px 8px">Quotations</div>
      <div class="list">${quotations.map(q => `<button class="row" type="button" data-jump="${q.from}"><span class="row-main"><span class="row-title"><span>${esc(q.source ? title(q.source) : 'Unknown source')}</span><span class="row-meta" style="margin-left:auto;font-size:13px">${esc(span(q.from, q.to))}</span></span><span class="row-sub one">${esc(q.cite)}</span></span></button>`).join('')}</div>` : ''}
      ${text.days.length ? `<div class="section-title small" style="margin:22px 4px 8px">Days</div>
      <div class="list">${text.days.map(d => `<button class="row" type="button" data-jump="${d.from}"><span class="row-main"><span class="row-title"><span>${esc(d.label)}</span><span class="row-meta" style="margin-left:auto;font-size:13px">${d.from}–${d.to}</span></span><span class="row-sub">${esc(d.note)}</span></span></button>`).join('')}</div>` : ''}
      <div class="list" style="margin-top:22px"><a class="row" href="#/book/${workId}/${book}"><span class="row-main"><span class="row-title"><span>${Book} ${book} at a glance</span></span></span>${icon('chevron', 'chev')}</a>${hasLex ? `<a class="row" href="#/vocab/${workId}/${book}"><span class="row-main"><span class="row-title"><span>Vocabulary of ${Book} ${book}</span></span></span>${icon('chevron', 'chev')}</a>` : ''}</div>
    </div>`);
    on(body, 'click', '[data-jump]', (e, b) => { closeSheet(); jump(+b.dataset.jump, false, true); });
    body.querySelector('[data-goto]').addEventListener('submit', e => {
      e.preventDefault();
      const n = parseLineInput(work, body.querySelector('#goto-line').value, text.lines.map(l => l.n));
      if (n !== null && lineByN.has(n)) { closeSheet(); jump(n, true); }
    });
    body.querySelectorAll('a.row').forEach(a => a.addEventListener('click', () => closeSheet()));
    openSheet({ title: `Contents · ${Book} ${book}`, content: body });
  }

  function displaySheet() {
    const body = el(`<div style="display:flex;flex-direction:column;gap:18px">
      <div><div class="section-title small" style="margin:0 4px 8px">Text</div><div data-seg="mode"></div></div>
      <div class="wide-only"><div class="section-title small" style="margin:0 4px 8px">Layout</div><div data-seg="layout"></div></div>
      <div><div class="section-title small" style="margin:0 4px 8px">Size</div>
        <div style="display:flex;align-items:center;gap:12px"><span style="font-size:14px" aria-hidden="true">A</span><input id="read-size" type="range" min="0.95" max="1.7" step="0.01" value="${p.size}" aria-label="Text size"><span style="font-size:22px" aria-hidden="true">A</span></div></div>
      <div><div class="section-title small" style="margin:0 4px 8px">Line numbers</div><div data-seg="numbers"></div></div>
      <div class="list">
        ${[['names', 'Highlight names'], ['speakers', prose ? 'Quotation labels' : 'Speaker labels'], ['summaries', prose ? 'Section summaries' : 'Scene summaries']].map(([k, label]) => `<label class="row" for="pref-${k}"><span class="row-main"><span class="row-title"><span>${label}</span></span></span>
          <span class="toggle"><input id="pref-${k}" type="checkbox" data-pref="${k}" ${p[k] !== false ? 'checked' : ''}><span></span></span></label>`).join('')}
      </div>
      <div><div class="section-title small" style="margin:0 4px 8px">Appearance</div><div data-seg="theme"></div></div>
    </div>`);
    const set = (k, v) => { store.setPref(k, v); applyPrefs(); };
    body.querySelector('[data-seg="mode"]').append(segmented([['grc', 'Greek'], ['both', 'Both'], ['en', 'English']], p.mode, v => set('mode', v), 'Text'));
    if (prose) body.querySelector('[data-seg="layout"]').append(segmented([['run', 'Running text'], ['stacked', 'Interlinear'], ['parallel', 'Side by side']], layoutPref(), v => set('proseLayout', v), 'Layout'));
    else body.querySelector('[data-seg="layout"]').append(segmented([['stacked', 'Interlinear'], ['parallel', 'Side by side']], layoutPref(), v => set('layout', v), 'Layout'));
    body.querySelector('[data-seg="numbers"]').append(segmented([['five', 'Every 5th'], ['all', 'Every line'], ['off', 'Hidden']], p.numbers, v => set('numbers', v), 'Line numbers'));
    body.querySelector('[data-seg="theme"]').append(segmented([['system', 'System'], ['light', 'Light'], ['dark', 'Dark']], p.theme, v => {
      store.setPref('theme', v);
      if (v === 'system') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = v;
    }, 'Appearance'));
    if (window.innerWidth < 900 && !prose) body.querySelector('.wide-only').hidden = true;
    body.querySelector('#read-size').addEventListener('input', e => set('size', +e.target.value));
    on(body, 'change', '[data-pref]', (e, input) => set(input.dataset.pref, input.checked));
    openSheet({ title: 'Display', content: body });
  }

  // ── Interaction ──────────────────────────────────────────────────────────
  on(view, 'click', '.line .n, .rl .rn', (e, b) => {
    const n = +b.closest('[data-n]').dataset.n;
    if (sel) extendSelection(n); else lineSheet(n);
  });
  on(view, 'click', '.line .w, .rl .w', (e, w) => {
    const line = lineByN.get(+w.closest('[data-n]').dataset.n);
    wordSheet(line, +w.dataset.k, w);
  });
  on(view, 'click', '.en-nm, .en-tm, .speaker a[data-e]', (e, a) => peek(a.dataset.e, { scope: here }));

  // Hover a Greek word (on devices with a pointer) for its headword and gloss.
  const gloss = el('<div class="chart-tip word-tip" role="tooltip" hidden></div>');
  document.body.append(gloss);
  if (window.matchMedia('(hover: hover)').matches) {
    on(view, 'pointerover', '.line .w, .rl .w', (e, w) => {
      const line = lineByN.get(+w.closest('[data-n]').dataset.n);
      const a = text.lex[line.tk[+w.dataset.k][3]];
      if (!a) return;
      gloss.innerHTML = `<span class="grc">${esc(a[0])}</span> · ${esc(a[1])}`;
      gloss.hidden = false;
      const r = w.getBoundingClientRect();
      gloss.style.left = `${Math.min(Math.max(8, r.left + r.width / 2 - gloss.offsetWidth / 2), window.innerWidth - gloss.offsetWidth - 8)}px`;
      gloss.style.top = `${r.top - gloss.offsetHeight - 6}px`;
    });
    on(view, 'pointerout', '.line .w, .rl .w', () => { gloss.hidden = true; });
  }
  const hideGloss = () => { gloss.hidden = true; };
  on(view, 'keydown', '.speaker a[data-e]', (e, a) => { if (e.key === 'Enter') peek(a.dataset.e, { scope: here }); });

  /** The element that shows line n in the current layout (the Greek of running text, unless only English shows). */
  const shown = n => [...lineEls(view, n)].find(x => x.offsetParent !== null) ?? null;
  function jump(n, flash = false, top = false) {
    const target = (top && view.querySelector(`.scene[data-from="${n}"]`)) || shown(n);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - (top ? 60 : window.innerHeight * 0.3);
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    if (flash && !top) lineEls(view, n).forEach(line => { line.classList.remove('flash'); void line.offsetWidth; line.classList.add('flash'); });
  }

  const saveProgress = throttle(() => {
    const navBottom = 60;
    const run = reader.dataset.layout === 'run';
    const lines = view.querySelectorAll(run ? (p.mode === 'en' ? '.run-e .rl' : '.run-g .rl') : '.line');
    let lo = 0, hi = lines.length - 1, found = null;
    while (lo <= hi) { // first line whose top is below the navbar
      const mid = (lo + hi) >> 1;
      if (lines[mid].getBoundingClientRect().top >= navBottom) { found = lines[mid]; hi = mid - 1; } else lo = mid + 1;
    }
    if (!found) return;
    const n = +found.dataset.n;
    store.setPref('lastRead', { work: workId, book, n, scene: sceneOf(n)?.title ?? '' });
    const title = document.getElementById('nav-title');
    if (title) title.textContent = window.scrollY > 300 ? `${work.title} ${label(n)}` : `${work.title} ${book}`;
  }, 250);
  const progress = el('<div class="read-progress" aria-hidden="true"><i></i></div>');
  const onProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.firstChild.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
  };
  const onResize = () => applyPrefs();

  return {
    title: `${work.title} ${book}`,
    el: view,
    actions: [
      { icon: 'contents', label: 'Contents', run: contentsSheet },
      { icon: 'aa', label: 'Display', run: displaySheet },
    ],
    mount: ({ back, restore }) => {
      window.addEventListener('scroll', saveProgress, { passive: true });
      window.addEventListener('scroll', onProgress, { passive: true });
      window.addEventListener('scroll', hideGloss, { passive: true });
      window.addEventListener('resize', onResize);
      document.getElementById('navbar')?.append(progress);
      requestAnimationFrame(onProgress);
      const range = parseRange(route.query.l);
      if (range) {
        const marked = linesIn(range.from, range.to);
        for (const l of marked) lineEls(view, l.n).forEach(x => x.classList.add('hl'));
        requestAnimationFrame(() => {
          const first = marked[0] && shown(marked[0].n);
          if (first) window.scrollTo(0, Math.max(0, first.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.28));
        });
      } else if (back && restore !== undefined) {
        requestAnimationFrame(() => window.scrollTo(0, restore));
      } else if (p.lastRead?.work === workId && p.lastRead?.book === book && p.lastRead.n > 5) {
        requestAnimationFrame(() => {
          const line = shown(p.lastRead.n);
          if (line) window.scrollTo(0, Math.max(0, line.getBoundingClientRect().top + window.scrollY - 70));
        });
      } else window.scrollTo(0, 0);
    },
    unmount: () => {
      window.removeEventListener('scroll', saveProgress);
      window.removeEventListener('scroll', onProgress);
      window.removeEventListener('scroll', hideGloss);
      window.removeEventListener('resize', onResize);
      progress.remove();
      bar?.remove();
      gloss.remove();
    },
  };
}
