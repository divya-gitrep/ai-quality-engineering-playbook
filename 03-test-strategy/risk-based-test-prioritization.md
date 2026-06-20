# Risk-Based Test Prioritization

## Objective

Prioritize AI testing based on impact to quality, trust, safety, privacy, and security.

## Priority 1 Risks

Must be tested first because they can cause serious user, business, safety, or privacy impact.

| Risk | Reason |
|---|---|
| Hallucination | Can lead to incorrect QA decisions |
| Data Leakage | Can expose sensitive information |
| Unsafe Advice | Can cause harmful actions |
| Privacy Exposure | Can reveal personal or confidential data |
| Missing Refusal Boundaries | Can allow unsafe behavior |

## Priority 2 Risks

Important for trust, secure usage, and responsible AI behavior.

| Risk | Reason |
|---|---|
| Prompt Injection | Can manipulate AI behavior |
| Insecure Output Handling | Can create technical security risk |
| Overconfidence | Can mislead users |
| Bias | Can create unfair or incomplete analysis |

## Priority 3 Risks

Important for reliability and user confidence.

| Risk | Reason |
|---|---|
| Inconsistent Reasoning | Can reduce trust in AI-assisted decisions |

## Prioritization Factors

- User impact
- Business impact
- Safety risk
- Privacy risk
- Security risk
- Likelihood
- Detectability

## Senior QA Takeaway

AI testing should start where failure can create the greatest trust, safety, privacy, or decision-making risk.