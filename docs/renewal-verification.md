# Renewal verification — 2026-11-05

- Build: Vite 7.3.7; 12 independently readable HTML pages plus 404.
- Artifact tests: 3/3 pass; every internal route/stylesheet/PDF link resolves, unique document titles/canonicals/H1s, exact 11-PDF publication set, no transcript/FeEDDHA/SELFIES project content.
- Browser: 12 pages at 320, 390, 700, 701, 950, 951 and 1280px (84 combinations); no horizontal overflow or final single-word lines in measured headings/body. Explicit compound-word line breaks are counted by their rendered fragments.
- Mobile navigation: fixed full dropdown styling through 700px; verified at 620px, navigation closes on destination page.
- Console: no warnings/errors in local validation.
- PDFs: 11 exports, 59 pages, all visually inspected; original documents unchanged. Hashes in pdf-sources.json.
- Independent code review: identified tablet-menu breakpoint mismatch, fixed and re-reviewed; no remaining deployment blocker.
- Dependencies: npm audit reports zero vulnerabilities after patch updates.
- Cleanup: old public documents/images and old source copied to private local archives before removal; history not rewritten.
- Analytics: one host-gated GA4 initialization per page, standard page loads and PDF anchors; no duplicate custom event sends. Live receiving check follows deployment.
