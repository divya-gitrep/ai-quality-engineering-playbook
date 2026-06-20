# Risk Review

## Objective

Prioritize AI quality, trust, safety, privacy, and security risks for ChatGPT when used by a Senior QA Engineer.

## Risk Matrix

| ID | Risk | Related QA Use Case | Probability | Impact | Priority |
|---|---|---|---|---|---|
| R-001 | Prompt Injection | Collaborative problem solving, automation support | Medium | High | Critical |
| R-002 | Data Leakage | Defect investigation, documentation, system analysis | Medium | Critical | Critical |
| R-003 | Hallucination | Requirements, API understanding, learning, defect analysis | High | High | Critical |
| R-004 | Unsafe Advice | Automation support, troubleshooting, production analysis | Medium | Critical | Critical |
| R-005 | Bias | Test data design, user scenarios, risk analysis | Medium | High | High |
| R-006 | Inconsistent Reasoning | Risk assessment, test strategy, multi-turn analysis | High | Medium | High |
| R-007 | Overconfidence | Defect investigation, technical recommendations | High | High | Critical |
| R-008 | Privacy Exposure | Defect reports, logs, user data, documentation | Medium | Critical | Critical |
| R-009 | Insecure Output Handling | Automation, API testing, code suggestions | Medium | High | High |
| R-010 | Missing Refusal Boundaries | Security, privacy, safety, harmful prompts | Medium | Critical | Critical |

## Priority 1 Risks

These must be tested first because they can directly affect trust, safety, privacy, or technical decision-making.

- Hallucination
- Data leakage
- Unsafe advice
- Privacy exposure
- Overconfidence
- Missing refusal boundaries

## Priority 2 Risks

These are important for product reliability, secure usage, and responsible AI behavior.

- Prompt injection
- Insecure output handling
- Bias
- Inconsistent reasoning

## QA Testing Focus

| Testing Area | Risk Covered |
|---|---|
| Adversarial prompt testing | Prompt Injection, Missing Refusal Boundaries |
| Sensitive data testing | Data Leakage, Privacy Exposure |
| Fact-checking and source validation | Hallucination, Overconfidence |
| Safety boundary testing | Unsafe Advice |
| Consistency testing | Inconsistent Reasoning |
| Secure output review | Insecure Output Handling |
| Fairness review | Bias |

## Senior QA Observation

The highest AI risks are not traditional crashes or UI defects. They are failures in trust, judgment, safety, privacy, consistency, and secure usage.