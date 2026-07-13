# Jason Godfrey's research log

This repository contains the source for [log.jasongodfrey.info](https://log.jasongodfrey.info), a Quartz-powered research portfolio and collection of selected talks.

## Local development

Requirements: Node.js 22 and npm 9 or newer.

```bash
npm ci
npx quartz build --serve
```

Run the release checks with:

```bash
npx tsc --noEmit
npm test
npx quartz build
```

The `content/` directory is also an Obsidian vault. Research data, credentials, working notes, presenter notes, and unpublished or review-stage material are intentionally excluded from this repository.

## Licensing

The Quartz-derived site code is available under the MIT License in `LICENSE.txt`. Original site content is licensed as described in `LICENSE-CONTENT.md`; coauthored and third-party materials are excluded unless expressly stated.
