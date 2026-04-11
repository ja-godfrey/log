---
title: How usable is the federal ESSER expenditure dataset for research?
date: 2026-04-11
draft: false
tags:
  - "#AERA/2026"
  - "#ESSER"
  - "#benfords-law"
  - "#data-quality"
  - "#data-science"
---

**Short answer:** Two parallel audits — Benford's Law distortion diagnostics and missingness analysis — show the federal Year-4 ESSER expenditure release fails conformity even when all 1.3 million dollar values are pooled. 32 of 50 states are nonconforming under EMAD, all three tutoring buckets are among the weakest columns, and missingness is non-random by geography and urbanicity. Treat these variables as measured with structured error, not plug-and-play data.

## Key findings

**Even the aggregate fails Benford conformity.** Pooling 1.3 million dollar values across states, categories, and years still produces nonconformity under EMAD (Excess Mean Absolute Deviation — raw MAD minus the expected small-sample noise floor of 1/√(cN), making comparisons fair across very different sample sizes). The distortion is structural; it is not localized to one column or one state.

**All three tutoring buckets are weak, and ESSER II is worse than ESSER III.** This bracketing matters for sequel work on high-dosage tutoring spending. The 2024 point estimate from [[How much has the US spent on high-dosage tutoring]] is now bounded not just by model uncertainty but also by downstream reporting distortion in the federal data that was supposed to replace the district-scraping approach.

**32 of 50 states fail EMAD, and neither sample size nor reporting completeness explains the variation.** Washington and Nevada have similar reporting completeness but opposite Benford shapes. Some states appear to do federal reporting on this dataset substantially better than others, for reasons that are not reducible to N or coverage.

**Missingness is non-random by geography and urbanicity.** Colorado, Missouri, Utah, North Dakota, and Louisiana are much less observable than Illinois, Hawaii, or West Virginia. At the district level, large-town and large-city districts are the least observable — the exact settings where recovery and equity research often concentrate. Unweighted national analyses treat unequal observability as if it were random.

**This is the final federal ESSER record.** Year 5 reporting and Year 4 corrections were canceled in April 2025. Whatever this file looks like is now the historical record of $190B in pandemic relief spending. No later release is coming to fix what the audit finds.

## Recommendations

- Applied researchers should treat ESSER expenditure variables as measured with structured error by state and category.
- Causal inference designs should treat non-random missingness as a first-order threat, not a footnote.
- Equity-focused analyses should reweight by reporting coverage or they will systematically down-count the very districts they care most about.
- For the next federal education-finance data product: fewer, high-value, preplanned metrics; built-in accuracy incentives at the district level; standardized category definitions so state-to-state comparisons mean the same thing.

## Companion app

[ESSER Data Quality Check](https://tinyurl.com/esser-check) — search ESSER variables, inspect quality buckets, and review reporting patterns to decide which fields are safer to analyze and which need sensitivity checks first.

## Publication

Presented at AERA 2026. Spiritual successor to the AERA 2024 tutoring-spending paper with Trisha Banerjee (see [[How much has the US spent on high-dosage tutoring]]).

## See also

- [[How much has the US spent on high-dosage tutoring]] — the AERA 2024 prequel; this audit sharpens the caution on that point estimate
- [[How were ESSER funds spent]] — uses the same federal release
- [[Where have ESSER funds been allocated]]
- [[Where have ESSER funds been allocated to tutoring]]
- [[What would an open standard for tutoring data look like]] — the design-time argument follows directly from the audit findings
- [[ESSER Data Snapshots]]
