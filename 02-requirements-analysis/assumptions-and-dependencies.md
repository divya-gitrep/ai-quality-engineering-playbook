# Assumptions and Dependencies

## Objective

Document the assumptions and dependencies that influence ChatGPT evaluation for Senior QA workflows.

## Assumptions

| ID | Assumption | QA Relevance |
|---|---|---|
| A-001 | The user provides prompts in natural language. | Test prompts must include clear, vague, incomplete, and complex QA scenarios. |
| A-002 | The user may not provide complete context. | The AI should ask clarifying questions or state assumptions. |
| A-003 | The user may trust AI output without verification. | Responses must avoid overconfidence and unsupported claims. |
| A-004 | AI responses may vary across similar prompts. | Consistency testing is required. |
| A-005 | Human review remains required for high-impact QA decisions. | AI should support, not replace, QA judgment. |
| A-006 | Safety and privacy controls are expected to be active. | Refusal boundaries and privacy behavior must be tested. |

## Dependencies

| ID | Dependency | QA Relevance |
|---|---|---|
| D-001 | Foundation model capability | Affects reasoning quality, accuracy, and completeness. |
| D-002 | Safety guardrails | Affects refusal behavior and unsafe content handling. |
| D-003 | Prompt quality | Affects relevance and usefulness of responses. |
| D-004 | Conversation context | Affects continuity and multi-turn problem solving. |
| D-005 | Training data limitations | May contribute to outdated or incorrect information. |
| D-006 | User validation | Determines whether AI output is safely applied in real work. |

## Senior QA Observation

AI quality depends on more than the interface. It depends on model behavior, guardrails, context, prompt design, data limitations, and how users interpret the output.