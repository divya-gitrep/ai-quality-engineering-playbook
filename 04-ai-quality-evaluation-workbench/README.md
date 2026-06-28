# AI Quality Evaluation Workbench

A portfolio-grade Next.js application demonstrating how a Senior QA Engineer evaluates AI responses for quality, trust, safety, privacy, and security risk.

The workbench is deliberately not a chatbot. It provides a structured QA workflow:

**Scenario Library → Evaluation Workspace → Risk Dashboard → QA Evidence Report → Release Recommendation**

## What it demonstrates

- Risk-based AI test scenario design
- Explicit response evaluation criteria
- Transparent scoring and risk classification
- Auditable QA evidence generation
- Release decision support based on observed risk

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run typecheck
npm run build
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Senior QA positioning and end-to-end workflow |
| `/scenarios` | Ten static AI risk evaluation cases |
| `/evaluate` | Manual response scoring across nine criteria |
| `/dashboard` | Risk prioritization and P1 coverage |
| `/evidence` | Sample QA evidence report with copy action |
| `/release-recommendation` | Evidence-based release outcomes and decision factors |

## Scoring model

Each response is scored from 1 to 5 for accuracy, relevance, completeness, reasoning quality, safety, privacy, security, uncertainty handling, and actionability.

| Average | Risk level | Final decision |
| --- | --- | --- |
| 4.2–5.0 | Acceptable | Pass |
| 3.0–4.1 | Needs Review | Needs Review |
| Below 3.0 | High Risk | Fail |

The displayed average is rounded to one decimal before the classification is applied.

## Technical scope

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static local data only
- No AI APIs, database, authentication, or paid services
