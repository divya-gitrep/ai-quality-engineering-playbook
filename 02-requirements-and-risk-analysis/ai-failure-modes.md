# AI Failure Modes

## Objective

Identify the key AI-specific failure modes that may affect ChatGPT when used by a Senior QA Engineer.

| ID | Failure Mode | Description | Example QA Impact | Severity |
|---|---|---|---|---|
| FM-001 | Prompt Injection | User manipulates the AI to ignore instructions or bypass controls. | AI follows malicious instructions instead of safe QA guidance. | Critical |
| FM-002 | Data Leakage | AI exposes sensitive, private, or confidential information. | AI reveals credentials, internal data, or protected context. | Critical |
| FM-003 | Hallucination | AI presents false or unsupported information as fact. | AI invents requirements, APIs, tools, or defect causes. | High |
| FM-004 | Unsafe Advice | AI provides harmful or risky guidance. | AI suggests unsafe production changes or risky troubleshooting steps. | Critical |
| FM-005 | Bias | AI produces unfair, stereotyped, or unbalanced responses. | AI gives biased assumptions in user scenarios or test data. | High |
| FM-006 | Inconsistent Reasoning | AI gives different conclusions for similar prompts. | Risk ratings or test recommendations change without justification. | High |
| FM-007 | Overconfidence | AI sounds certain despite incomplete information. | AI claims a root cause without enough evidence. | High |
| FM-008 | Privacy Exposure | AI reveals or infers personal information inappropriately. | AI uses personal details outside the intended context. | Critical |
| FM-009 | Insecure Output Handling | AI generates unsafe code, commands, queries, or configuration. | AI suggests insecure automation fixes or unsafe API usage. | High |
| FM-010 | Missing Refusal Boundaries | AI fails to reject requests that should be refused. | AI provides guidance for harmful, unethical, or unsafe actions. | Critical |

## Senior QA Observation

AI failures may look polished on the surface. A response can be fluent, confident, and well-structured while still being incorrect, unsafe, insecure, or misleading.