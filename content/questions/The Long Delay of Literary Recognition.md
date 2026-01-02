---
date: 2025-08-27
draft: true
tags:
  - "#CPR"
title: The Long Delay of Literary Recognition
---
## Introduction
Media studies often casts its most concentrated gaze on cultural artifacts of pedigree over artifacts of popularity. Here's the thing though, in 20 years our kids aren't going to know what half of the artifacts appearing in film studies journals even are. I think the cultural artifacts that are most likely to endure are the ones that are on average the most popular. The more popular they are now, the longer their half life is likely to be. 

There are obviously notable exceptions to this. For example, really old artifacts are still known simply if they are still extant and not necessarily predicated on their contemporary popularity (I'm looking at you Ea-Nassir), but I believe that there is more signal than noise in that hypothesis. 

My hypothesis is that contemporary critics don't focus (hardly at all) on the popular works that eventually became canon, and that they did focus on historical works or contemporary works of lesser popularity.

The purpose of this isn't to say academics shouldn't focus on the most personally or culturally salient artifacts or to say that they shouldn't focus on artifacts that have had more time in the cultural broth, so to speak. The purpose is to simply make the case that current modern fiction deserves a place where the greatest critical minds of our time can cogitate on what we're seeing.

So, here's what I'm going to do. I'm going to look at a notably dense decade of literary history, somewhat arbitrarily, but because it is a great decade for popular literary artifacts to come out. Then, I'm going to see in that decade what academic literary critics were writing about. Then, I'm going to track the citation practices of the books that are now unquestionably canon. 

Let's do the 1950s. It was a banger of a decade for literature. It is near enough that we have pretty good records about who was publishing what. And it is far enough away that the books that are going to stick with us have probably begun to stick. If you are bored, or think I'm cherry-picking a decade for nefarious purposes, please feel free to repeat my methodologies on a different decade.

Why? Three main reasons. First, I want future generations to have this currently missing crucial lens. For example, I would really like to know what [biggest literary critic of 1950] thought about Fahrenheit 451, but because he was too busy writing about [whatever he published in 1950], I'll never know. [make up two other reasons].
## Literature Review
to be added...
## Methods

First, I wrote a script that got the top 10 bestselling books for the years 1950-1959 from publishers weekly. Second, I wrote a script that got the NYT bestselling fiction novel for each week between 1950-1959.  I suppose that the primary source for each of these things is the original publisher, but I scraped from wikipedia. 

Next, I made a list of 243 literary critics who were active in the 1950s. I prioritized critics who (a) published a **book-length** work of criticism in the 1950s, and/or (b) held a **regular criticism platform** at a major outlet in that decade, sampling across the New Critics, Chicago School, New York intellectuals, Geneva school, French postwar criticism, and biographical/American-studies critics. I couldn't think of a systematic way to do this that was actually feasible. 

Next, I chose 50 from that list of 243. I would have preferred to do this for the full corpus, but google scholar has pretty stringent rate limits, and I am trying to write something here. The 50 were chosen based roughly on impact factor.  Once I had that list of 50 critics, I obtained 100 works from each critic irrespective of the time period the work was published. This has two advantages. First, we'll be able to see if eventually these critics went on to explore books that were contemporarily popular to them. Second, building the dataset in this way means that we can in the future explore other questions such as [insert 2-3 examples]. I scraped google scholar using publish or perish. 

Not all of the critics had 100 works, and my scraping was kind of noisy because a lot of people share names. Nevertheless, after scraping I had a dataset 4619 works out of a theoretical maximum of 5000.

I then hand-coded roughly 100 of these works. I categorized them into these categories ("Symposium / Collection of essays","Collected works / letters / anthologies","Awards / Listings / Bibliographic collections","Theoretical / Philosophical contributions","Not literary in nature") [create definitions for each category and justifications for creating those categories]. I also looked up these things:

- Specific Work (blank if none)

- Specific Work Year (blank if none; allow BCE like "c. 375 BCE"; If specific work is not none, this must also not be blank)

- Specific Author (ONLY if explicitly named in the TITLE; blank otherwise)

- Author Death Year (blank if no Specific Author; if specific author is not none, this must also not be blank)
  
  Once I had hand-coded a good number, I wrote a system prompt and used gpt-4o to code the rest.  The system prompt I used is here: 

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

After that, I merged the output coded files with the information scraped from google scholar. I was able to merge 4594 of the original 4618 files, which is over 99% of the dataset. 
## Results

624 (27%) papers discuss specific literary works. 780 papers reference specific authors. There is some overlap between these two lists (e.g. Discussing Shakespear's *Hamlet*). The gathered corpus was not all analyses of specific works. Many works within the corpus were theory-building books or essays that weren't solely focused on a specific artifact. Additionally, many were non-literary in nature, this happened when the corpus contained erroneously scraped items from an author with the same name. Lastly, the corpus contains many collections, essays, and awards. The subsequent analyses will focus solely on the 990 critiques within the corpus. Each of these items labeled as a critique examine a single cultural artifact, such as an author or a literary work. The other items, while important for understanding the landscape of literary criticism (there is 1.57x more theory building than applied theory!), don't immediately contribute to investigating the research question. A breakdown of the final categories can be viewed in Figure 1.

![[type_chart.png | Figure 1]]

![[works_age_chart.png|Figure 2]]

Figure 2 demonstrates that literary scholarship does not tend to seize on texts when they first appear. Instead, there is a delayed horizon of appreciation: the most intensive wave of analysis arrives some 70–110 years after a work’s publication. This lag reflects the process of canon formation—texts need time to circulate, to prove their durability, and to be consecrated by critical institutions before they become the focal point of sustained scholarly attention. After this peak, interest fades, with very few works maintaining a critical presence for more than two centuries. The one obvious exception is Shakespeare, who alone anchors the 400-year tail, his plays continuing to attract close reading long after nearly all of his contemporaries have slipped into obscurity.

![[authors_age_chart.png|Figure 3]]

Figure 3 reveals two important patterns. First, how much more often scholars choose to frame their analysis around authors themselves rather than around individual texts. Here the counts are consistently higher than those in the referenced works. In other words, literary critics are more likely to emphasize an author rather than a literary work in their analysis. I guess the author isn't dead after all, Roland.

Unfortunately for the author, the best thing they can do for their career is die. This is the second important pattern. Once an author dies, there is a steep discontinuity in the number of critics who engage with their work. This suggests that writers come to matter most as figures once their lifetimes have receded from view, when their full bodies of work can be assessed, historicized, and reframed through shifting critical paradigms. As with works, interest in authors wanes after a century or two, though at a slower rate.

Taken together, the two charts reveal the distinct rhythms of literary attention: works are most intensively studied roughly a century after publication, while authors are most intensively studied roughly half a century after death. The apparent gap between these timelines is likely narrower than the charts suggest, since most writers do not publish their most influential works on their deathbed but during their active careers. Still, the juxtaposition highlights a crucial asymmetry: it is more common to reference and analyze an author as a whole than to focus on any single text, and both patterns are structured not by immediate reception but by delayed recognition.

![[scholar_book_linear_network.png|Figure 4]]

Figure 4 is a linear network graph that examines the objects of analysis for literary critics. The dense network to the right shows the plethora of scholarly subjects that literary critics engage with, both individual works and authors. This is a dense network; literary critics examine a lot of stuff. On the left are the connections between those same critics and the popular literature of their most prolific publishing decade. This is a sparse network; literary critics rarely engage their contemporary bestsellers. The purpose of this paper isn't to theorize or moralize this asymmetry. I simply want to reveal its existence and its magnitude. 

![[5_author_attention_inequality.png | Figure 5]]

Figure 5 shows the Gini coefficient, though originally developed for measuring income inequality, makes conceptual sense in this literary-historical context because it captures the distributional dynamics of critical attention across authors. Just as the Gini summarizes whether wealth is concentrated in the hands of a few or dispersed across many, here it quantifies whether scholarly citations are clustered heavily around a narrow “canon” of authors or distributed more evenly across the literary field. The value of importing this metric is precisely its parsimony: instead of reporting raw frequency tables that are difficult to interpret across time or journals, the Gini offers a single, comparable statistic that makes inequality in critical attention visible. Possible objections—that a social science measure may not belong in literary studies—are themselves instructive: disciplinary borrowing foregrounds the systemic nature of attention economies and underscores how literary prestige, like wealth, tends to accumulate disproportionately. In fact, using a Gini lens makes it easier to compare critical attention to other domains of cultural production (e.g., art, film, or popular music), reinforcing the argument that unequal concentration is not incidental but structural.

In this particular graph, the Lorenz curve shows a steep departure from the 45° line of equality, with a Gini coefficient of 0.593. This indicates that a small fraction of authors absorb a very large share of critical attention, while the majority receive relatively little. The tail of the curve bending sharply upward at the rightmost end demonstrates that the top few authors capture nearly all citations. For an academic audience, the implication is clear: mid-century literary criticism in the 1950s reproduced a strongly canonizing tendency, privileging a small group of already-recognized figures while leaving most contemporaneous or less established authors untouched. One might argue that such concentration is inevitable, since not all authors merit equal scholarly attention. Yet precisely this inevitability strengthens the point: by quantifying the asymmetry, the Gini shows how structural the process of exclusion is, and it allows us to empirically demonstrate that popular or newly published authors were almost entirely outside the scope of scholarly interest. Thus, what looks like disciplinary selectivity is, in fact, measurable inequality of attention that reinforces the divide between popular readership and academic criticism.
### Limitations and Future Research

It is important to note that there are some interesting quirks of this methodology. So, Lady Chatterly's Lover is a bestseller in the 1950s even though it was published and not a bestseller in 1928. So that connection between a literary critic and a contemporary bestseller is by definition accurate, although the original publication of the book was a few decades earlier. Second, because I strictly limited the window of bestseller's to the 1950s, some nearly contemporary works which did receive academic attention in this list (George Orwell's 1984 published in 1949) doesn't appear in the bestseller's list. While these quirky exceptions are worth noting and may be worth exploring in a future paper, any permutation or reconfiguration of the chart is unlikely to change the direction and magnitude of the network, which shows a massive bias of literary critics to dwell on works of previous years (or generations) rather than contemporary popular literature. 

Another quirk is that because I scraped the top 100 works from each critic regardless of when the work was published, there are many post 1950s works in the scholarly subjects. I believe that including the post-1950s works is overall beneficial to the study, since it allows us to also see if scholars eventually reflected on the works that were popular during their most productive/prodigious publishing years. However, a future study may benefit from limiting all timeframes.

This study focused solely on the literary criticisms that examined a cultural artifact that was stated in the title of the essay. No doubt, many of 1557 essays that were categorized as theory building also contain reference to and examination of literary works. A more in-depth analysis of these texts and their cultural references would yield a more granular analysis of which cultural artifacts are most commonly examined within literary criticism.
## Discussion

The results of this study highlight the temporal and structural asymmetries that govern literary criticism in the mid-twentieth century. The most striking pattern is the delayed horizon of attention: works do not receive concentrated scholarly treatment at the moment of their appearance but rather decades later, once their durability has been proven and critical institutions have sanctioned them as worthy of study. This lag underscores the mechanics of canonization, in which time functions as a filter that separates the ephemeral from the enduring.

Equally striking is the preference for authors over individual works as the unit of analysis. Critics in the 1950s framed their work around literary figures more often than around particular texts, and this tendency was magnified after an author’s death. The pronounced increase in attention to posthumous authors suggests that critical authority often rests on the closure of a career, when the whole of a writer’s production can be historicized and interpreted within a broader narrative.

The inequality of critical attention is measurable and stark. The Gini coefficient of 0.593 shows that a small fraction of authors absorbed the majority of citations, while most received virtually none. What could be dismissed as “inevitable selectivity” is better understood as a structural property of critical economies: attention, like wealth, accumulates disproportionately. This finding also reframes the near absence of contemporary bestsellers in scholarly discourse. The critics’ silence on these popular works was not incidental but symptomatic of a system that reinforced elite hierarchies of value, often at the expense of contemporaneous cultural vitality.

These patterns have broader implications. By showing how criticism in the 1950s systematically overlooked popular texts, this study raises the possibility that present-day critics may be repeating similar omissions. Which of today’s widely read novels will be ignored until long after their moment has passed—and which, if any, will critics belatedly consecrate? The methodology here, especially the adaptation of tools like the Gini coefficient, provides a transferable framework for exploring such questions across decades and media.

In conclusion, the evidence demonstrates that literary criticism of the 1950s was less engaged with its contemporary cultural moment than with the maintenance and consolidation of a narrowly defined canon. This asymmetry between popular readership and scholarly attention is not a trivial curiosity but a systemic feature of cultural memory. Recognizing it equips us to better interrogate the practices of our own critical present, where the dynamics of prestige, popularity, and attention remain just as unevenly distributed.
