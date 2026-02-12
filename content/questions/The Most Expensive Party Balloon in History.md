---
title: The Most Expensive Party Balloon in History
date: 2026-02-12
draft: false
tags:
  - "#El Paso"
  - "#aviation"
  - "#analysis"
image: img/cartel-party-balloon.png
---
A party balloon mistaken for a cartel drone shut down El Paso for hours. Here's what it cost.

On February 10, 2026, the FAA shut down all flights over El Paso for what was supposed to be 10 days because the U.S. military had shot down what it thought was a drone. It turned out to be a party balloon. The closure was lifted within hours, but not before 15 flights were canceled, others delayed by hours, medevacs rerouted to Las Cruces, and Fort Bliss grounded.

So, how much did it cost? Is this the most expensive party balloon in history?

**Here's my method for answering that question.** I used only public, citable data. I reconstructed the timeline, built a flight dataset, classified cancellations and delays, converted disruption into passenger-hours and labor-hours, and monetized it with USDOT value-of-time guidance. I then applied sanity checks and documented all assumptions. Below is the analysis.

## 1. Timeline

| Event | Local (MST) | UTC | Source |
|-------|-------------|-----|--------|
| TFR effective (closure start) | 11:30 PM Feb 10 | 06:30 Feb 11 | FAA TFR notice, El Paso Times |
| TFR lifted (closure end) | 6:54 AM Feb 11 | 13:54 Feb 11 | FAA X post (6:54 MT) |
| Effective duration | ~7.4 hours | — | — |

**What changed:** The FAA initially announced a 10-day restriction. After coordination between federal agencies—and clarification that the threat had been addressed—the FAA reversed the restriction within hours. No partial reopening was reported; the closure was lifted in full.

![[elpaso-timeline.png]]

## 2. Flight Universe

| Category | Count | Source / Confidence |
|----------|-------|---------------------|
| Canceled (true) | 8 | Business Insider / Flightradar24 — **High** |
| Delayed | 7 | El Paso Times, inferred — **Medium** |
| Diverted | 1 | Business Insider (Sierra West cargo to Las Cruces) — **High** |
| Disrupted passengers (est.) | ~1600 | Schedule + load factor 80% — **Low** |

Southwest, American, and Delta canceled 15 flights in and out of El Paso before the FAA lifted the restriction ([Business Insider](https://www.businessinsider.com/el-paso-flights-halted-10-days-security-reasons-airlines-faa-2026-2)). Departing aircraft experienced average delays of over three hours. Specific examples from El Paso Times: 6 AM to Phoenix delayed to 5:55 PM; 5:30 AM to Dallas Love delayed to 9 AM; 6:04 AM to DFW delayed to noon.

### Costs Without Public Data: Real Impact Likely Higher

The cost estimates here are based only on publicly available data. The true impact is likely higher because the following factors cannot be quantified from public sources:

- **Fort Bliss / Biggs Army Airfield** — Military aviation was grounded (within 10 nm TFR). No public data on overnight military flight volume or mission impact.
- **Medevac / medical** — Mayor Johnson reported medical evacuation flights rerouted to Las Cruces and surgical equipment unable to reach El Paso. No public cost or clinical outcome data.
- **Cargo** — Sierra West diverted to Las Cruces; other cargo likely affected. Perishable and time-sensitive freight costs not reported.
- **Fuel / holding** — Additional fuel from diversions and holding; magnitude unknown.
- **General aviation** — GA within the TFR excluded; no public flight count.
- **Secondary effects** — Aircraft/crew rotation cascade, crew legal/rest limits, spillover demand to nearby airports, call-center surge volume. No public benchmarks.
- **Tertiary effects** — Business and supply-chain disruption, ground transport, medical outcomes, reputational impact. Not quantifiable from public data.

![[elpaso-delay-histogram.png]]

![[elpaso-airline-counts.png]]

## 3. Work-Hours Wasted

| Bucket | Low | Mid | High |
|--------|-----|-----|------|
| Passenger-hours lost | 5781 | 7227 | 8672 |
| Airline/airport labor (est.) | ~200 | ~400 | ~700 |
| Total hours (approx.) | ~5981 | ~7627 | ~9372 |

*ASSUMPTION:* Value of time from USDOT 2016 guidance inflated to 2026 (~$44 personal, ~$81 business); 30% business / 70% personal mix. Canceled-passenger penalty: 4 hours (replacement travel).

## 4. Dollar Impact

| Component | Low | Mid | High |
|-----------|-----|-----|------|
| Passenger time cost | $279K | $398K | $518K |
| Airline operational cost | $80K | $160K | $320K |
| Airport incremental (scenario) | $5K | $15K | $35K |
| **Total estimated impact** | **$364K** | **$573K** | **$873K** |

*Quantified components only. See "Costs Without Public Data" above for uncosted factors that would increase total impact.*

![[elpaso-cost-waterfall.png]]

## 5. Sanity Check

El Paso Rep. Chris Canales estimated a **10-day** closure could cost El Paso $40–50 million ([El Paso Times](https://elpasotimes.com/story/news/2026/02/11/live-updates-flights-at-el-paso-airport-grounded-for-10-days/88621302007)). My estimate is for the **actual ~7-hour** disruption. Scaling linearly: 7.4 hrs / (10 × 24) ≈ 3.1% of a 10-day scenario → $1.2–1.6M would be roughly proportional. My mid estimate of ~$573K falls below that estimate, as I guessed it would due to only including public data. ELP typically has ~55 departures and ~106 total daily operations; the disruption affected the overnight/early-morning bank.

---

**Conclusion.** There is no way to know if this was the most expensive party balloon in history. But I wouldn't pay $573k for one.

---

***Post-script:*** This piece is not intended to criticize or judge anyone involved. Who among us hasn't, at some point, mistaken a party balloon for a cartel drone? Let him cast the first stone.

Finally, this analysis was vibed together quickly as the situation unfolded, using only publicly available data. It is not a substitute for professional economic analysis.
