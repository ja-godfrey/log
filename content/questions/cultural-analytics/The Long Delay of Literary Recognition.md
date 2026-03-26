---
date: 2025-08-27
draft: true
tags:
  - "#CPR/Film/Substack"
title: The Long Delay of Literary Recognition
---
## Notes

Media studies casts its most concentrated gaze on cultural artifacts of pedigree over artifacts of popularity. Here's the thing, though, in 20 years our kids aren't going to know what half of the artifacts appearing in film studies journals even are. Honestly, given the sea change from home media ownership to streaming, I wouldn't be surprised if some of today's prestige films fall through the cracks and become nearly impossible to view.

My hypothesis is that contemporary critics don't focus (hardly at all) on the popular works that eventually became canon, and that they did focus on historical works or contemporary works of lesser popularity. Certainly popularity doesn't automatically makes a work canonical, but inclusion into intergenerational canon requires some threshold of durable circulation which is likely tied to contemporary circulation. 

There are exceptions, especially at the deep-time end of the timeline, where survival can substitute for popularity. Sometimes what gets remembered is simply what survives. 

The purpose of this isn't to say academics shouldn't focus on the most personally or culturally salient artifacts or to say that they shouldn't focus on artifacts that have had more time in the cultural broth, so to speak. The purpose is to simply make the case that current modern fiction deserves a place where the greatest critical minds of our time can cogitate on what we're seeing.

So, here's what I'm going to do. I'm going to look at a notably dense decade of literary history, somewhat arbitrarily, but because it is a great decade for popular literary artifacts to come out. Then, I'm going to see in that decade what academic literary critics were writing about. Then, I'm going to track the citation practices of the books that are now unquestionably canon. 

Let's do the 1950s. It was a banger of a decade for literature. It is near enough that we have pretty good records about who was publishing what. And it is far enough away that the books that are going to stick with us have probably begun to stick. If you are bored, or think I'm cherry-picking a decade for nefarious purposes, please feel free to repeat my methodologies on a different decade.

Why? Three main reasons. First, I want future generations to have this currently missing crucial lens. For example, I would really like to know what [biggest literary critic of 1950] thought about Fahrenheit 451, but because he was too busy writing about [whatever he published in 1950], I'll never know. [make up two other reasons].

### trash

Media studies casts its most concentrated gaze on cultural artifacts of pedigree over artifacts of popularity. This is well and good. As it should be, no doubt. One minor thing, though, is that pedigree takes time to accumulate. For years before Daphne du Maurier was a literary darling, she was just another popular fiction writer. 

So, while the authors do the work that later generations laud, and the critics who lay the theory that will eventually be used as a lens to interpret their work are focusing on the artifacts of a previous generation. Is the generation of gap really that necessary? 

## Introduction

Media studies casts its most concentrated gaze on cultural artifacts of pedigree over artifacts of popularity. This is well and good. As it should be, no doubt. One minor thing, though, is that pedigree takes time to accumulate. For years before Daphne du Maurier was a literary darling, she was just another popular fiction writer. So, while the authors write works that later generations laud, the literary critics craft the theory based on artifacts from a previous generation.

This note is going to look at how frequently major critics cite contemporary popular work. My hypothesis is that this is not a dense network. I think that the professors who spend the most time shaping how we interpret narrative skip the narratives that most people spend time with.

Let's find out.

So, here's what I'm going to do. I'm going to look at a notably dense decade of literary history, somewhat arbitrarily (every decade has its great works). Then, I'm going to see in that decade what academic literary critics were writing about. 

Let's do the 1950s. One, it was a great decade for literature. Two, it is near enough that we have pretty good records about who was publishing what. Three, it is far enough away that the books that are going to stick with us have probably begun to stick.
## Methods

First, I wrote a script that got the top 10 bestselling books for the years 1950-1959 from publishers weekly. Second, I wrote a script that got the NYT bestselling fiction novel for each week between 1950-1959.  I suppose that the primary source for each of these things is the original publisher, but I got the information from Wikipedia. 

%% Next, I made a list of 243 literary critics who were active in the 1950s. I prioritized critics who (a) published a **book-length** work of criticism in the 1950s, and/or (b) held a **regular criticism platform** at a major outlet in that decade, sampling across the New Critics, Chicago School, New York intellectuals, Geneva school, French postwar criticism, and biographical/American-studies critics. This is a sensible way to collect a list of major critics active within a time period. I couldn't think of a systematic way to do this that was feasible. Sensible will substitute for systematic here, I guess.

After collect my list of critics, I chose 50. I would have preferred to do this for the full corpus, but google scholar has pretty stringent rate limits. The 50 were chosen based roughly on impact factor.  Once I had that list of 50 critics, I obtained 100 works from each critic irrespective of the time period the work was published. This has two advantages. First, we'll be able to see if eventually these critics went on to explore books that were contemporarily popular to them. Second, building the dataset in this way means that we can in the future explore other questions such as [insert 2-3 examples]. I scraped google scholar using publish or perish. 

Not all of the critics had 100 works, and my scraping was kind of noisy because a lot of people share names. Nevertheless, after scraping I had a dataset 4619 works out of a theoretical maximum of 5000.v%%

Next, I made a list of 50 prolific critics from the 50s. I prioritized critics who (a) published a book-length work of criticism in the 1950s, and/or (b) held a regular criticism platform at a major outlet in that decade, sampling across the New Critics, Chicago School, New York intellectuals, Geneva school, French postwar criticism, and biographical/American-studies critics. This is a sensible way to collect a list of major critics active within a time period. I couldn't think of a systematic way to do this that was feasible. Sensible will substitute for systematic here, I guess.

I then hand-coded roughly 100 of these works. I categorized them into these categories ("Symposium / Collection of essays", "Collected works / letters / anthologies", "Awards / Listings / Bibliographic collections", "Theoretical / Philosophical contributions", "Not literary in nature") [create definitions for each category and justifications for creating those categories]. I also looked up these things:

- Specific Work (blank if none)

- Specific Work Year (blank if none; allow BCE like "c. 375 BCE"; If specific work is not none, this must also not be blank)

- Specific Author (ONLY if explicitly named in the TITLE; blank otherwise)

- Author Death Year (blank if no Specific Author; if specific author is not none, this must also not be blank)
  
  Once I had hand-coded 100, I wrote a system prompt and used gpt-4o to code the rest.  The system prompt I used is here: 

```
You are a meticulous research assistant for literary classification.

You will receive multiple rows to classify. Return ONLY a JSON array containing one object per row, with these exact keys (no extra text, no markdown, no code blocks):

- uniqid

- Title

- Type ∈ {"Interpretation / Critique of a specific work","Symposium / Collection of essays","Collected works / letters / anthologies","Awards / Listings / Bibliographic collections","Theoretical / Philosophical contributions","Not literary in nature"}

- Specific Work (blank if none)

- Specific Work Year (blank if none; allow BCE like "c. 375 BCE"; If specific work is not none, this must also not be blank)

- Specific Author (ONLY if explicitly named in the TITLE; blank otherwise)

- Author Death Year (blank if no Specific Author; if specific author is not none, this must also not be blank)

  

Rules:

- Return ONLY a valid JSON array - no extra text, no explanations, no markdown formatting

- Use double quotes for all strings

- "Not literary in nature" for medicine/biology/aviation/etc.

- If title names multiple Forster works, set Type = "Collected works / letters / anthologies" unless it's clearly a single-work study.

- Keep years historically correct; do not guess.

- Process rows in the order given and return results in the same order

  

Example format for multiple rows:

[

{"uniqid": "abc123", "Title": "Sample Title 1", "Type": "Theoretical / Philosophical contributions", "Specific Work": "", "Specific Work Year": "", "Specific Author": "", "Author Death Year": ""},

{"uniqid": "def456", "Title": "Sample Title 2", "Type": "Not literary in nature", "Specific Work": "", "Specific Work Year": "", "Specific Author": "", "Author Death Year": ""}

]

```

After that, I merged the output coded files with the information scraped from google scholar. I was able to merge 4594 of the original 4618 files, which is over 99% of the dataset. The lost rows were largely due to incomplete google scholar entries.
## Results

624 (27%) papers discuss specific literary works. 780 papers reference specific authors. There is some overlap between these two lists (e.g. Discussing Shakespeare's *Hamlet*). The gathered corpus was not all analyses of specific works. Many works within the corpus were theory-building books or essays that weren't solely focused on a specific artifact. Additionally, many were non-literary in nature, this happened when the corpus contained erroneously scraped items from an author with the same name. Lastly, the corpus contains many collections, essays, and awards. The subsequent analyses will focus solely on the 990 critiques within the corpus. Each of these items labeled as a critique examine a single cultural artifact, such as an author or a literary work. The other items, while important for understanding the landscape of literary criticism (there is 1.57x more theory building than applied theory!), don't immediately contribute to investigating the research question. A breakdown of the final categories can be viewed in Figure 1.

![[type_chart.png | Figure 1]]

![[works_age_chart.png|Figure 2]]

Figure 2 demonstrates that literary scholarship does not tend to seize on texts when they first appear. Instead, there is a delayed horizon of appreciation: the most intensive wave of analysis arrives some 70–110 years after a work’s publication. This lag reflects the process of canon formation. Texts need time to circulate, to prove their durability, and to be consecrated by critical institutions before they become the focal point of sustained scholarly attention. After this peak, interest fades, with very few works maintaining a critical presence for more than two centuries. The one obvious exception is Shakespeare, who alone anchors the 400-year tail, his plays continuing to attract close reading long after nearly all of his contemporaries have slipped into obscurity.

![[authors_age_chart.png|Figure 3]]

Figure 3 reveals two important patterns. First, let's look at the x-axis and simply observe how much more often scholars choose to frame their analysis around authors themselves rather than around individual texts. Here the counts are consistently higher than those in the referenced works. In other words, literary critics are more likely to emphasize an author rather than a literary work in their analysis. I guess the author isn't dead after all, Roland.

The second important pattern. Unfortunately for authors, the best thing they can do for their career is die. Once an author dies, there is a steep discontinuity in the number of critics who engage with their work. This suggests that writers come to matter most as literary figures once their lifetimes have receded from view, when their full bodies of work can be assessed, historicized, and reframed through shifting critical paradigms. As with works, interest in authors wanes after a century or two, though at a slower rate.

Taken together, the two charts reveal the distinct rhythms of literary attention: works are most intensively studied roughly a century after publication, while authors are most intensively studied roughly half a century after death. The apparent gap between these timelines is likely narrower than the charts suggest, since most writers do not publish their most influential works on their deathbed but during their active careers. Still, the juxtaposition highlights a crucial asymmetry: it is more common to reference and analyze an author as a whole than to focus on any single text, and both patterns are structured not by immediate reception but by delayed recognition.

![[scholar_book_linear_network.png|Figure 4]]

Figure 4 is a linear network graph that examines the objects of analysis for literary critics. The dense network to the right shows the plethora of scholarly subjects that literary critics engage with, both individual works and authors. This is a dense network; literary critics examine a lot of stuff. On the left are the connections between those same critics and the popular literature of their most prolific publishing decade. This is a sparse network; literary critics rarely engage their contemporary bestsellers. The purpose of this paper isn't to theorize or moralize this asymmetry. I simply want to reveal its existence and its magnitude. 

![[5_author_attention_inequality.png | Figure 5]]

Figure 5 shows the Gini coefficient, though originally developed for measuring income inequality, it makes conceptual sense in this literary-historical context because it captures the distributional dynamics of critical attention across authors. Just as the Gini summarizes whether wealth is concentrated in the hands of a few or dispersed across many, here it quantifies whether scholarly citations are clustered heavily around a narrow “canon” of authors or distributed more evenly across the literary field.

In this particular graph, the Lorenz curve shows a steep departure from the 45° line of equality, with a Gini coefficient of 0.593. This indicates that a small fraction of authors absorb a very large share of critical attention, while the majority receive relatively little. The tail of the curve bending sharply upward at the rightmost end demonstrates that the top few authors capture nearly all citations. For an academic audience, the implication is clear: mid-century literary criticism in the 1950s reproduced a strongly canonizing tendency, privileging a small group of already-recognized figures while leaving most contemporaneous or less established authors untouched. One might argue that such concentration is inevitable, since not all authors merit equal scholarly attention. Yet precisely this inevitability strengthens the point: by quantifying the asymmetry, the Gini shows how structural the process of exclusion is, and it allows us to empirically demonstrate that popular or newly published authors were almost entirely outside the scope of scholarly interest. Thus, what looks like disciplinary selectivity is, in fact, measurable inequality of attention that reinforces the divide between popular readership and academic criticism.
### Limitations and Future Research

It is important to note that there are some interesting quirks of this methodology. So, _Lady Chatterly's Lover_ is a bestseller in the 1950s, so that connection between a literary critic and a contemporary bestseller is by definition accurate; however, it was first published (and didn't sell well) in 1928. Second, because I strictly limited the window of bestseller's to the 1950s, some nearly contemporary works which did receive academic attention in this list (George Orwell's 1984 published in 1949) doesn't appear in the bestseller's list. While these quirky exceptions are worth noting and may be worth exploring in a future paper, any permutation or reconfiguration of the chart is unlikely to change the direction and magnitude of the network, which shows a massive bias of literary critics to dwell on works of previous years (or generations) rather than contemporary popular literature. 

Another quirk is that because I scraped the top 100 works from each critic regardless of when the work was published, there are many post-1950s works in the scholarly subjects. I believe that including the post-1950s works is overall beneficial to the study, since it allows us to also see if scholars eventually reflected on the works that were popular during their most productive/prodigious publishing years. However, a future study may benefit from limiting all timeframes.

This study focused solely on the literary criticisms that examined a cultural artifact that was stated in the title of the essay. No doubt, many of 1557 essays that were categorized as theory building also contain reference to and examination of literary works. A more in-depth analysis of these texts and their cultural references would yield a more granular analysis of which cultural artifacts are most commonly examined within literary criticism.
## Discussion

The results of this study highlight the temporal and structural asymmetries that govern literary criticism in the mid-twentieth century. The most striking pattern is the delayed horizon of attention: works do not receive concentrated scholarly treatment at the moment of their appearance but rather decades later, once their durability has been proven and critical institutions have sanctioned them as worthy of study. This lag underscores the mechanics of canonization, in which time functions as a filter that separates the ephemeral from the enduring.

Equally striking is the preference for authors over individual works as the unit of analysis. Critics in the 1950s framed their work around literary figures more often than around particular texts, and this tendency was magnified after an author’s death. The pronounced increase in attention to posthumous authors suggests that critical authority often rests on the closure of a career, when the whole of a writer’s production can be historicized and interpreted within a broader narrative.

The inequality of critical attention is measurable and stark. The Gini coefficient of 0.593 shows that a small fraction of authors absorbed the majority of citations, while most received virtually none. Attention accumulates disproportionately. This finding also reframes the near absence of contemporary bestsellers in scholarly discourse. The critics’ silence on these popular works was not incidental but symptomatic of a system that reinforced hierarchies of value, often at the expense of contemporaneous cultural vitality.

These patterns have broader implications. By showing how criticism in the 1950s systematically overlooked popular texts, this study raises the possibility that present-day critics may be repeating similar omissions. Which of today’s widely read novels will be ignored until long after their moment has passed. Which, if any, will critics belatedly consecrate?

The evidence demonstrates that literary criticism of the 1950s was less engaged with its contemporary cultural moment than with the maintenance and consolidation of a narrowly defined canon. This asymmetry between popular readership and scholarly attention is not a trivial curiosity but a systemic feature of cultural memory. Recognizing it equips us to better interrogate the practices of our own critical present, where the dynamics of prestige, popularity, and attention remain just as unevenly distributed.

## Follow-up questions

1. Did any of those popular books from the 1950s ever become "canon," which ones?
2. How do results change if “popular” is defined via _library circulation_, _Book-of-the-Month Club picks_, _paperback print runs_, or _magazine serialization_ instead of (or alongside) bestseller lists?
3. Is winning major prizes (National Book Award, Pulitzer, etc.) a stronger predictor of scholarly attention than sales rank?
4. How strongly does inclusion in college syllabi (when measurable) correlate with later scholarly attention, compared with bestseller status?
5. When a critic engages a contemporary work, does that work then attract _more_ scholarly attention (suggesting a gatekeeping “amplification” function), or is the critic just following an already-emerging wave?
6. How much contemporary engagement is missed because the focal work is discussed in the body but not named in the title?
7. Among 1950s bestsellers that never became canon, what characteristics predict “failure to convert” (topic, style, moral panic, medium tie-ins, paperback-only status)?
8. Can you operationalize “durable circulation” using archival/library holdings, reprint frequency, or (later) digitization/streaming availability and test whether availability predicts canon persistence?
9. For works now considered “unquestionably canon,” do citation patterns cluster around a small set of critics/institutions that effectively _declare_ canon early?