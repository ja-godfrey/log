# Jason Godfrey's research log

This repository contains the source for [log.jasongodfrey.info](https://log.jasongodfrey.info), a Quartz-powered research portfolio and curriculum-vitae presentation list.

## Local development

Requirements: Node.js 22 and npm 9 or newer.

```bash
npm ci
npx quartz build --serve
```

Run the release checks with:

```bash
npm run check
npm test
npm run check:publication
npm run build
npm run check:site-output
```

The site uses explicit publication: a Markdown page is eligible for the build only when its frontmatter contains `publish: true`. Drafts, research data, credentials, working notes, presenter notes, and unpublished or review-stage material are intentionally excluded from this repository.

## Licensing

The Quartz-derived site code is available under the MIT License in `LICENSE.txt`. Original site content is licensed as described in `LICENSE-CONTENT.md`; coauthored and third-party materials are excluded unless expressly stated.
