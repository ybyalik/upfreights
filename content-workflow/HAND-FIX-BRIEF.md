# Hand-fix brief for the kit articles (17 Nov 2026)

You are fixing ONE article for upfreights.com, a China freight forwarder's site that was hit by Google's
spam update. Trust depends on every fact being sourced and on the site never typing prices or transit
times it can't back up. Nothing is published by you; the owner approves a Word copy later.

## Files
- Your article: `~/upfreights/content-workflow/out/<file>.md` (markdown). Edit ONLY this file.
- Before your first edit, copy it to `<file>.kit.md` in the same folder if that copy doesn't exist yet
  (it keeps the kit's original for comparison).
- Review notes: `~/upfreights/content-workflow/topics/article-NN/review/report.md` (merged), plus
  `claude.md` and `chatgpt.md` in the same folder. Read all three.
- Site profile: `~/upfreights/content-workflow/profile.md`.
- Open items the kit left: `~/upfreights/content-workflow/topics/needs-you.md` (your article's section only).

## What to fix
1. Every real error the reviewers found: wrong numbers, contradictions, a fact the source does not say,
   things used before they're explained, muddled order. Skip taste-only notes you disagree with.
2. HOUSE RULE, no prices and no transit times unless from the company rate sheet (there is none you can
   use). Remove:
   - freight rates of any kind (per container, per kg, per CBM, Freightos or other index figures, iContainers
     benchmarks, our own site's per-kg price guide),
   - transit or sailing times in days or weeks (Freightos transit calculator, carrier or partner examples,
     "13 days port to port"),
   - links whose purpose is a competitor's rate, quote or transit tool.
   Replace with plain advice, e.g. "ask for a dated quote" and link our quote page `/quote` or the
   US guide `/shipping-china-to-united-states`. Worked maths may use a placeholder like "your rate per kg".
   Prices that are NOT freight rates or transit times may stay if sourced: Amazon fees, government fees
   (MPF, penalties, bonds), inspection firms' published prices, legal deadlines in days (e.g. "within 120 days").
3. Every fact keeps a named source. Never add a fact from memory. If a fix needs a new fact, open the page
   with WebFetch, confirm the words, and cite it; otherwise drop the claim. Quotes must match the source word for word.
4. Citing Freightos, Flexport, iContainers or Ship4wd for definitions is allowed; don't add new ones.

## Style (hard rules)
- Plain everyday English, short sentences, write to "you". Define trade terms the first time.
- NO em dashes (—) anywhere. Use commas, parentheses or full stops. Check with grep before finishing.
- Keep the markdown conventions: `#` title, `##`/`###` headings, tables, and boxes written as consecutive
  `>` lines (a bold first line, then `> - ` bullets). Keep the FAQ section format as it is.
- Do NOT change the `#` title. Keep length roughly the same; cutting padding is fine.
- Don't touch pictures or picture files.

## Our own pages you may link (relative links)
/quote, /shipping-china-to-united-states, /shipping-china-to-united-kingdom, /sea-freight, /air-freight,
/incoterms/ddp, /incoterms/exw, /ddp-shipping-from-china, /cbm-calculator, /chargeable-weight-calculator,
/amazon-fba-freight-forwarding, /blog/dimension-of-20-ft-container, /blog/dimensions-of-a-40-hc-container,
/blog/how-many-cbm-in-a-40-ft-container, /blog/1-cbm-to-kg, /blog/commercial-invoice-and-invoice,
/blog/hts-code-search, /blog/air-freight-packaging-requirements.
(The calculator pages and blog addresses above will exist when this batch goes live.)

## Report back (under 250 words)
- The changes you made, one line each.
- Anything you could not resolve that the owner must decide, with the exact words involved.
- Confirm: em dash count 0; no freight prices or transit days left.
