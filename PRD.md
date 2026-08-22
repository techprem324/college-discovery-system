# Product Requirements Document (PRD) — CampusIQ

## 1. Executive Summary

**CampusIQ** is a college discovery and decision engine designed to streamline multi-criteria evaluation of higher education institutions. It bridges the gap between chaotic college listings and actionable student decisions through structured filtering, side-by-side metric comparison matrices, predictive cutoff analysis, and visual placement salary trends.

---

## 2. User Personas

### Persona A: The High School Aspirant ("Rohan")
- **Needs**: Needs to match competitive entrance exam ranks (JEE Main, JEE Advanced, NEET, CAT) against historical cutoff trends to find realistic institution matches.
- **Pain Point**: Cutoff data is scattered across multi-page PDF seat allocation documents.

### Persona B: The Decision Finalist ("Ananya")
- **Needs**: Has 2 to 3 final college offers and requires side-by-side comparison across annual tuition fees, placement CTC distributions, NIRF rankings, and hostel charges.
- **Pain Point**: Comparing multiple tabs manually leads to evaluation fatigue and missed fee trade-offs.

### Persona C: The Value Hunter ("Vikram")
- **Needs**: Filters strictly by tuition fee thresholds, NIRF tier ratings, and geographical boundaries.
- **Pain Point**: Unable to set hard fee limits on traditional listing portals.

---

## 3. Core Functional Requirements

```
                      ┌───────────────────────┐
                      │    User Search/Rank   │
                      └───────────┬───────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Listing & Filter │    │ Predictor Wizard │    │ Comparison Tray  │
│  - Faceted query │    │  - Exam & rank   │    │  - 2-3 colleges  │
│  - Instant sync  │    │  - Branch logic  │    │  - Diff analysis │
└────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                     ┌───────────────────────┐
                     │ Detailed College View │
                     │ - ROI & Placement Viz │
                     └───────────────────────┘
```

1. **Faceted Discovery & Search (`/colleges`)**: Real-time search with instant filtering across Location (State/City), Course Streams (Engineering, Management, Medical), Fee Range (Slider), Ownership (Public/Private), and NIRF ratings.
2. **Global Comparison Tray & Matrix (`/compare`)**: Ability to pin up to 3 colleges into a persistent floating drawer from any view, launching a full-screen side-by-side diff table with metric highlighting.
3. **Cutoff & Admission Predictor (`/predictor`)**: Multi-step wizard accepting Exam Type, Rank/Score, Category (General, OBC, SC/ST, EWS), and Home State to output classified matches (*Dream, Target, Safe*).
4. **Institutional Deep Dive (`/colleges/[slug]`)**: Dynamic sub-pages containing placement trend graphs (Highest, Average, Median salary over 3 years), fee breakdowns, verified student reviews, and key recruiters.

---

## 4. Non-Functional Requirements

- **Performance**: LCP < 1.8s, CLS < 0.05, INP < 100ms.
- **Deep-Linkable State**: 100% of filter parameters must reflect cleanly in URL search params for seamless sharing.
- **Accessibility**: WCAG 2.1 AA compliance across all components with keyboard navigation and ARIA attributes.
- **State Resilience**: LocalStorage persistence for user comparison choices.
