---
title: Are essay-based tests a reliable metric student performance on college-level writing tasks?
date: 2024-08-19
draft: false
tags:
  - "#FYW"
  - "#wpa"
  - "#standardized-tests"
  - "#laura-aull"
  - "#anne-gere"
  - "#david-jurgens"
  - "#mary-schleppegrell"
  - "#machine-learning"
  - "#nlp"
  - "#inferential-statistics"
  - "#sfl"
  - "#published"
---
 
This was my dissertation! I want to break this down into a bunch of sub-questions that I can answer one by one. That is a future task. 

For now, here is the dissertation abstract:

In US-based postsecondary education, first-year students commonly have their compositional ability consequentially assessed on the basis of standardized tests. As a result, students who score above certain thresholds on ACT, SAT, or AP exams often are placed into honors or remedial courses; receive credit remissions; and/or test out of general education classes such as first-year composition. While the thresholds and applicable tests vary from institution to institution, over 2000 Title IV schools implement policies based on such tests. However, there is little evidence that the linguistic patterns that correlate with success on timed, high-stakes tests carry forward to college-level writing tasks. Consequently, contemporary composition scholars call for research that centers examinations of student writing itself rather than assessments of writing quality such as standardized tests. This dissertation responds to that call by answering the questions, How do linguistic features observed in college-level writing relate to institutionally sanctioned measures of writing quality? And, what are the implications for policy levers based on those measures?

To answer these questions, I leverage a longitudinal corpus (2009-2019) of approximately 47,000 student essays, matched with data on test scores. Together, these data allow me to investigate whether the test scores, implemented as boolean policy levers, meaningfully distinguish between students who write using measurably distinct linguistic patterns. To measure such distinctions, this study employs natural language processing by incorporating large language models designed for text classification tasks: BERT, RoBERTa, and XLNet. The methods employed in this study identify a quadratic weighted kappa of 0.43, which indicates that the model was able to classify student essays better than random assignment; however, the relationship between student writing and test scores maintain a minimal relationship. Ideally, educational policy that consequentially sorts students into different educational tracks at the most vulnerable point of their college career would bear more than a weak relationship to their college-level performance.

To uncover which linguistic features are most correlated with higher scores, I employ OLS, multiple, and logistic regression. These models find significant differences between the essays of students with high and low test scores. Across most models, students with higher test scores have on average fewer clauses per sentence; more prepositions, adverbs, colons, and adjectives; and write with the same number of personal pronouns. While these findings are statistically significant, they only weakly describe the differences between high- and low-scoring, such that distinguishing between essays of students who are near common policy thresholds would be an error-prone task for any human or algorithm. Additionally, while the logistic regression based on the existing policy threshold at University of Michigan had the greatest explanatory power ($Pseudo R^2$ 0.09), linear regressions based on a normalized ACT-SAT score had more explanatory power ($R^2 0.161$). While these metrics cannot be directly compared, the difference in their relative strength nonetheless reveals a disparity in goodness-of-fit that demonstrates how educational policy based on a boolean threshold from one test is functionally less discriminating than the metric that is based on multiple measures. Significance notwithstanding, the overall weak correlation between standardized test scores and college-level writing evidences the inability for a timed, high-stakes writing test to relate to writing in other circumstances, including college-level writing tasks. These results evidence the brittleness of these test scores as measures of writing quality and cast doubt as to their utility as policy levers.