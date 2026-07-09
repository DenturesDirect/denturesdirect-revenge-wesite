# Dentures Direct — To-Do List

_Living checklist. Last updated: 2026-07-09._

## ⚠️ Needs Damien's input / action
- [ ] **Confirm hours.** I set the site to **Mon–Thu 8:00 AM–6:00 PM, Fri–Sun closed** (per your note). If you're open Friday or Saturday, tell me and I'll fix it everywhere in one pass. Hours currently live in: footer, contact page, schema (Google), location pages, homepage.
- [ ] **Replace the founder video on the Team page.** Removed the old one (you didn't like it). When you have a new video, send me the YouTube link and I'll drop it back in the same spot.
- [ ] **Turn off "antigravity" auto-deploys** for the Vercel project, or it will overwrite the live site. One repo (`denturesdirect-revenge-wesite`), one pipeline now.
- [ ] **Google Search Console:** resubmit `sitemap.xml` and request re-indexing of the implant pillar page. This is what starts the SEO clock.

## 🔧 Claude to do next
- [x] **Rebuild the blog** — done (8 posts, blog index + post pages, BlogPosting/Breadcrumb schema, internal links, added to nav & sitemap). Content is freshly written; original wording can be layered in later if you want it.
- [x] CDCP pages (pillar + covered-services + how-to-apply) translated into fr/es/it/vi (also fixed the sub-pages' canonicals).
- [ ] Extend translations (fr/es/it/vi) to the remaining deeper pages: partial/full/immediate/emergency service pages, neighbourhood/location pages, about, contact, and the blog.

## 🧹 Cleanup (later, with care)
- [ ] Delete the duplicate/abandoned repos once we confirm nothing depends on them: `denturesdirect-revenge-website.`, `DENTURESSDIRECT-REVENGE-WEBSITE`, and any other stale site repos. **Audit before deleting** — don't cut a wire that's still connected.

## 📈 Off-site SEO (ongoing)
- [ ] Google Business Profile: post weekly (before/afters convert), add "Implant-Retained Dentures" as a service with the $5,250 price, reply to every review.
- [ ] Ask every implant patient for a Google review that mentions "implant dentures."
- [ ] Consistent name/address/phone citations: Yelp, 411.ca, YellowPages, RateMDs, College of Denturists directory.

## ✅ Done
- Implant SEO overhaul: pillar page, cost page, canonicals, sitemap, internal linking, schema
- Full site translated to French, Spanish, Italian, Vietnamese (chrome, homepage, implant pillar, cost page, lead form)
- Candidacy quiz + `implant-dentures-woodbridge-vaughan` route salvaged into this repo
- Live pipeline fixed: GitHub → Vercel auto-deploy on `main`
- Team page: removed top team photo + founder video; changed hours to Mon–Thu 8–6
