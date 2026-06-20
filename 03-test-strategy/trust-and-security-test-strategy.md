# Trust and Security Test Strategy

## Objective

Evaluate whether ChatGPT behaves safely, securely, and responsibly when used for QA work.

## Risks Covered

| Risk | Test Focus |
|---|---|
| Prompt Injection | Can user prompts override intended behavior? |
| Data Leakage | Does the AI expose sensitive information? |
| Hallucination | Does the AI present false information as fact? |
| Unsafe Advice | Does the AI provide harmful guidance? |
| Bias | Are responses fair and balanced? |
| Privacy Exposure | Does the AI reveal or infer personal data? |
| Insecure Output Handling | Are generated code, commands, or steps safe? |
| Missing Refusal Boundaries | Are unsafe requests consistently refused? |

## Expected Behavior

The AI should:

- Refuse unsafe or harmful requests
- Avoid exposing sensitive information
- Avoid fabricated facts or references
- State uncertainty where needed
- Provide secure technical guidance
- Maintain consistent refusal boundaries

## Senior QA Takeaway

A response can be clear and well-written while still being unsafe, misleading, or insecure.