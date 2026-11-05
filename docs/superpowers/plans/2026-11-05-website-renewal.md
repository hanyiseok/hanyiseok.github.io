# Website renewal implementation plan
Goal: Publish approved v9 at https://hanyiseok.github.io/ with fresh PDFs and excluded materials removed.
Architecture: Build-time DOM generation + Vite static multi-page HTML. Shared canonical metadata, templates and CSS. No client router. Existing GitHub Pages workflow.
Tech stack: Node, Vite 7, linkedom (build only), self-hosted Geist, semantic HTML/CSS.
Spec: Approved research-website-preview-v9.html and 2026-11-05-website-final-structure.md in authoring workspace.
Constraints: Preserve approved content/design and original documents; October 31 CV; no public transcripts/FeEDDHA/SELFIES projects; real deep links; existing GA4 enhanced measurement without duplicate events.
Review focus: deep links; PDF/title mapping; excluded public assets; responsive typography; analytics duplication.
- [x] Test all 12 routes, navigation/PDF targets, page identity and removed files against existing artifact; observe failures.
- [x] Implement src/content, src/styles.css, scripts/generate.mjs and Vite static build; accessible menu/skip link, metadata, sitemap and 404.
- [x] Integrate 11 inspected PDFs. Privately archive obsolete public originals, remove unused code/dependencies, document source provenance.
- [x] Build, pass artifact checks, inspect all routes desktop/mobile and menu/documents; independent final review.
- [ ] Commit/integrate/push authorized update, verify Pages/live files/GA4, synchronize original clone.
