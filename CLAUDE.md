# ⚠️ WRONG DIRECTORY

This file is a stub. The real CLAUDE.md has moved to the project root:

**`C:\Users\muse1\Desktop\Nurse Salary\CLAUDE.md`**

Open Claude Code / Cowork from `Desktop\Nurse Salary\` (one level up), not from `site\`.

---

# CLAUDE.md — NurseSalaryIntel.com Working Memory

> **Read this first, every session.** It points to everything else. If anything below conflicts with a fresh user instruction, the user wins — but flag the conflict.

---

## Site Goal

Build **NurseSalaryIntel.com** into the #1 organic destination for nurse salary research. The strategy is:

1. **Dominate long-tail nurse salary keywords** (city + specialty + year combos) with deep, data-rich pages that outrank thin aggregators.
2. **Build topical authority** across every salary angle: by state, city, specialty, experience level, shift type, hospital, and career stage.
3. **Reach Mediavine Journey threshold (10K sessions/30 days)** to unlock display ad revenue — primary monetization path.
4. **Google AdSense** as interim monetization while building toward Mediavine.
5. **Compound flywheel:** More pages → more GSC impressions → more clicks → better rankings → AdSense/Mediavine approval → reinvest in more content.

Every session should move at least one of these needles: pages published, images added, internal links improved, or GSC metrics up.

---

## Site at a glance

- **Domain:** https://nursesalaryintel.com
- **Owner:** Courtney (muse16llc@gmail.com)
- **Tone:** Engaging, professional, authoritative. No fluff.
- **Constraint:** Do **NOT** change the site's design or navigation. Only enhance, refresh, and add to existing pages.
- **Approval gate:** Claude must NOT publish, push, or deploy until owner types `APPROVE PUBLISH` in chat.
- **Tech stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind v4. Static generation. Hosted on Vercel.
- **Repo location:** `C:\Users\muse1\Desktop\Nurse Salary\site\`
- **Content workflow:** Drafts go in `Nurse Salary/Week-XX/` → QA report → handoff doc → owner approval → publish via git push.

---

## Where to look for what

| If you need... | Read this |
|---|---|
| List of every published post + URL | `memory/published-posts.md` |
| GSC week-over-week performance | `memory/gsc-history.md` |
| Next keywords to target | `memory/keyword-targets.md` |
| AdSense + Mediavine progress | `memory/monetization-status.md` |
| Tech stack details + file map | `memory/site-architecture.md` |
| Decisions already made (ADR log) | `memory/decisions.md` |
| Category + tag controlled vocab | `TAXONOMY.md` |
| Original SEO strategy doc | `NurseSalaryIntel_SEO_Strategy.docx` |
| Sitemap + page specs | `SEO_SITEMAP_AND_PAGE_SPECS.md` |
| Content draft template + QA checklist | Any file in `Week-01/` (HANDOFF, QA-REPORT) |
| Publish workflow + schema rules | `Week-01/WEEK-01-HANDOFF.md` (sections 4–8) |

---

## Standing rules (don't re-derive these every session)

**Design & Navigation:**
1. Never change site design or navigation. Add inline content blocks within existing sections only.
2. Approval gate is mandatory. No publish without `APPROVE PUBLISH`.

**Schema & EEAT:**
3. Schema: every post ships with `BlogPosting` + `FAQPage` + `BreadcrumbList` JSON-LD. Validate via Google Rich Results Test before publish.
4. EEAT signals on every post: visible Last Updated date, author byline → /about, Sources section with 3+ outbound links to BLS/AACN/SHRM, methodology note.
5. Internal linking rule: every post must have ≥3 inbound internal links. Update pillar pages after each publish.

**Content & Taxonomy:**
6. Canonical URLs: flat `/[slug]/` — no category prefix in permalinks.
7. Year tag: every post tagged with current year (2026).
8. Taxonomy: use only categories + tags from `TAXONOMY.md`. Don't invent new ones without editing the file first.

**Images:**
9. Image specs: hero is 1200×630px PNG, named `[slug]-[descriptor].png`; inline charts 800×450px PNG, named `[slug]-comparison.png` / `[slug]-chart.png` / `[slug]-map.png`. All files go in `/public/images/`. Alt text included in each page's `<Image>` tag.
10. Memory hygiene: at end of every session that publishes, refreshes, or updates anything → update `memory/published-posts.md` and `memory/decisions.md`.

**SEO + Accessibility + Performance:**
11. Every post targets 1 primary keyword + 5–8 secondary keywords. Meta descriptions under 160 chars. H2/H3 hierarchy (no skipped levels). Featured snippet answer in opening section.
12. Accessibility (WCAG 2.1 AA): all images have descriptive alt text (75–125 chars). Color contrast ≥4.5:1. Keyboard-navigable. Semantic lists.
13. Core Web Vitals green on all pages (LCP <2.5s, CLS <0.1, FID <100ms). Images lazy-loaded. No render-blocking scripts.
14. Mobile-first: test at 375px, 768px, 1200px. Font ≥16px, line-height ≥1.5, touch targets ≥44px.
15. Every update should support AdSense + Mediavine approval: original content, no thin pages, strong EEAT, fast load, clean ads.txt.

**Git / Deploy:**
16. If `git` returns `index.lock` error, close VS Code and GitHub Desktop first, then retry.
17. Courtney can push via GitHub web UI by dragging files into the repo folder — no PowerShell required for image uploads.
18. Vercel auto-deploys on every push to `main`.

---

## Image System

### Two image types per page

| Type | Purpose | Generator | Size | Naming |
|---|---|---|---|---|
| **Hero / photo** | Atmospheric, human, editorial | AI image tool (Midjourney, DALL-E, Adobe Firefly) | 1200×630px | `[slug]-hospital.png`, `[slug]-hero.png`, `[slug]-team.png`, etc. |
| **Inline chart** | Data visualization, salary comparisons | Python / matplotlib (Claude generates) | 800×450px | `[slug]-comparison.png`, `[slug]-chart.png`, `[slug]-map.png` |

### Earned Light — Chart Design Philosophy

All matplotlib charts use the **Earned Light** palette. These are not decorative — they look like something a financial data team would publish.

**Palette:**
```
NAVY   #0A2342   — primary bars, dominant series, titles
TEAL   #2CA58D   — secondary bars, supporting series, bands
AMBER  #F5A623   — highlight / best value / national average callout
CREAM  #F8F7F4   — chart background (matches site background)
STEEL  #4A6FA5   — tertiary series, dashed reference lines
TEXT   #1A1A2E   — all axis labels, tick labels, annotations
```

**Rules:**
- Background: CREAM (`#F8F7F4`) — always, no white
- Grid lines: `#DDDDDD`, weight 0.8, y-axis only (or both for line charts)
- Spine color: `#CCCCCC`
- Dollar labels float above each bar (`fontweight='bold'`, `fontsize=10–11`)
- National average / reference line: AMBER dashed, labeled inline
- Save at `dpi=150`, `bbox_inches='tight'`
- No chart titles that repeat the page H1 — complement it instead

**Chart types by use case:**
- City salary comparisons → vertical bar (5 cities + national avg)
- Specialty comparisons → horizontal bar (sorted high→low)
- Experience progression → grouped bar or line chart with band
- Side-by-side (Houston vs Dallas) → grouped vertical bar
- Sign-on bonuses / ranges → horizontal range bar (low–high with midpoint dot)
- Salary growth over time → line chart with 25th–75th percentile fill

### Hero image AI prompt instructions

Use these prompts as templates when generating hero/photo images. Adjust city/specialty as needed.

**Hospital exterior / nurse portrait:**
> Photorealistic image of a registered nurse in navy blue scrubs standing outside a modern hospital entrance, confident posture, warm natural light, shallow depth of field, urban skyline softly blurred in background, no text, no logos, editorial healthcare photography style

**ICU / critical care team:**
> Photorealistic image of two nurses in scrubs reviewing a patient monitor in a softly lit ICU room, professional and focused, clinical setting, natural overhead lighting, no text, no logos, editorial style

**New grad / graduation:**
> Photorealistic image of a smiling nursing graduate in white coat holding a diploma, hospital corridor background softly blurred, warm celebratory light, editorial healthcare photography style, no text, no logos

**Salary negotiation / office:**
> Photorealistic image of a nurse in scrubs sitting across a desk from a hospital HR manager, reviewing documents, professional office setting, warm lighting, collaborative body language, no text, no logos

**Operating room / CRNA:**
> Photorealistic image of an anesthesiologist in surgical cap and mask preparing equipment in a modern operating room, blue-toned clinical lighting, professional and precise, no text, no logos

**Travel nurse:**
> Photorealistic image of a nurse with a rolling suitcase outside a hospital entrance in a new city, scrubs and badge, golden hour light, sense of independence and movement, editorial healthcare style, no text

**General tip:** Always specify "no text, no logos, no watermarks, editorial healthcare photography style, photorealistic." Use 16:9 aspect ratio (1200×630). Compress to <100KB before uploading.

---

## Page inventory — Week-05 image status (as of Apr 30, 2026)

### Inline charts — DONE ✅ (in `public/images/`)

| File | Page |
|---|---|
| `atlanta-rn-salary-2026-comparison.png` | `/atlanta-rn-salary-2026` |
| `chicago-rn-salary-2026-comparison.png` | `/chicago-rn-salary-2026` |
| `crna-salary-2026-comparison.png` | `/crna-salary-2026` |
| `houston-vs-dallas-rn-salary-2026-comparison.png` | `/houston-vs-dallas-rn-salary-2026` |
| `icu-vs-er-nurse-salary-2026-comparison.png` | `/icu-vs-er-nurse-salary-2026` |
| `new-grad-rn-salary-2026-comparison.png` | `/new-grad-rn-salary-2026` |
| `nurse-sign-on-bonus-guide-2026-map.png` | `/nurse-sign-on-bonus-guide-2026` |
| `rn-salary-by-years-of-experience-2026-chart.png` | `/rn-salary-by-years-of-experience-2026` |
| `seattle-rn-salary-2026-comparison.png` | `/seattle-rn-salary-2026` |

### Hero / photo images — NEEDED ⏳ (upload to `public/images/`)

| File needed | Page | Subject |
|---|---|---|
| `atlanta-rn-salary-2026-hospital.png` | `/atlanta-rn-salary-2026` | Nurse outside Atlanta hospital |
| `atlanta-rn-salary-2026-team.png` | `/atlanta-rn-salary-2026` | Nursing team |
| `chicago-rn-salary-2026-hospital.png` | `/chicago-rn-salary-2026` | Nurse at Chicago academic medical center |
| `chicago-rn-salary-2026-team.png` | `/chicago-rn-salary-2026` | Nursing team |
| `crna-salary-2026-operating-room.png` | `/crna-salary-2026` | CRNA in operating room |
| `houston-vs-dallas-rn-salary-2026-hero.png` | `/houston-vs-dallas-rn-salary-2026` | Texas nurse / city backdrop |
| `icu-vs-er-nurse-salary-2026-hero.png` | `/icu-vs-er-nurse-salary-2026` | ICU or ER nurse at workstation |
| `icu-vs-er-nurse-salary-2026-team.png` | `/icu-vs-er-nurse-salary-2026` | Critical care team |
| `new-grad-rn-salary-2026-graduation.png` | `/new-grad-rn-salary-2026` | Nursing graduate |
| `new-grad-rn-salary-2026-team.png` | `/new-grad-rn-salary-2026` | New nurse with preceptor |
| `nurse-sign-on-bonus-guide-2026-hero.png` | `/nurse-sign-on-bonus-guide-2026` | Nurse reviewing offer letter |
| `nurse-sign-on-bonus-guide-2026-negotiation.png` | `/nurse-sign-on-bonus-guide-2026` | Nurse at negotiation table |
| `rn-salary-by-years-of-experience-2026-hero.png` | `/rn-salary-by-years-of-experience-2026` | Experienced nurse in leadership role |
| `seattle-rn-salary-2026-hospital.png` | `/seattle-rn-salary-2026` | Nurse outside Seattle hospital |

---

## Completed work log

| Date | What shipped |
|---|---|
| Early sessions | Tasks #1–#8: memory setup, CTR fixes, .gitattributes, Florida cannibalization fix, EEAT signals, entry-level refresh, internal-link hub, FAQ schema sitewide (92 pages) |
| Week-02 | 5-post batch: CA, LA, TX, NY, AZ — LIVE with images |
| Week-03 | Content gap batch: NICU, Boston, Neonatal, Phoenix, Orlando — LIVE with images |
| Task B | Meta title + description audit — 78 pages updated |
| Task C | Programmatic city/hospital pages: 48 city + 64 hospital pages live |
| Task D | Site speed + Core Web Vitals optimization — green on top 10 pages |
| Week-04 | Dallas, Houston, Pediatric, Per-Diem, RN-vs-LPN posts — LIVE |
| Week-04 | City canonical overrides (7 cities defer to rich blog posts) |
| Week-04 | Internal link network: city specialty blocks, Browse-by-State on hubs |
| Apr 29 | Nav renamed "Blog" → "Salary Guides" sitewide |
| Apr 29 | Week-05 deployed: 10 pages (6 new + 2 refreshes + sitemap + blog-posts.ts) |
| Apr 29 | Favicon replaced (`app/favicon.ico`) |
| Apr 30 | Build error fixed: duplicate closing tags in `app/salary/[state]/[city]/page.tsx` (commit `1beecb0`) |
| Apr 30 | 9 inline comparison charts generated (Earned Light palette) → `public/images/` |

**Week-05 pages (all live):**
- `/atlanta-rn-salary-2026`
- `/chicago-rn-salary-2026`
- `/crna-salary-2026`
- `/houston-vs-dallas-rn-salary-2026`
- `/icu-vs-er-nurse-salary-2026`
- `/new-grad-rn-salary-2026`
- `/nurse-sign-on-bonus-guide-2026`
- `/rn-salary-by-years-of-experience-2026`
- `/seattle-rn-salary-2026`
- `/travel-nursing/vs-staff-nurse-salary`
- `/night-shift-differential-nurses` (refresh)
- `/nursing-salary/charge-nurse-salary` (refresh)

---

## Current focus (as of Apr 30, 2026)

**Immediate:**
- ⏳ Upload 13 hero/photo images for Week-05 pages (see table above) — owner generating via AI tool
- ⏳ Confirm charts committed to GitHub (`public/images/` — 9 PNGs, can drag-drop via GitHub web UI)

**Next up:**
- 📋 Week-06 content planning: identify next 6–10 keyword targets
- 📋 Monitor Vercel build after Week-05 chart commit (should be green — build error was already fixed)
- 📋 GSC check: Week-05 pages indexed? Impressions moving?
- 🎯 **Task #13: Apply for Mediavine Journey** (gate: 10K sessions/30 days — check analytics first)
- 📋 AdSense status: applied Apr 26 — follow up if no response by May 3

---

## How to start a new session

When Courtney opens a new session, do this in order:

1. **Read this file** end-to-end.
2. **Read `memory/published-posts.md`** to know what's live.
3. **Read `memory/gsc-history.md`** to know what's working.
4. **Check Vercel** — is the latest build green?
5. Engage with Courtney's request.

Don't re-explore the site or re-fetch the homepage unless the question can't be answered from memory. Don't re-derive what's published. Don't ask "what's the goal?" — it's documented above.

---

*Last updated: 2026-04-30. Session-end updates required for any change to site content, GSC data, monetization status, or open decisions.*
