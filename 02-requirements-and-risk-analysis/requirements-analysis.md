# Requirements Analysis

## Objective

Evaluate ChatGPT as an AI assistant for a Senior QA Engineer, focusing on whether it can support QA work reliably, safely, and responsibly.

## User Persona

Senior QA Engineer using ChatGPT for:

- Requirements analysis
- Risk assessment
- Test strategy and test design
- Defect investigation
- System and API understanding
- Automation support
- Documentation and communication
- Learning and upskilling
- Collaborative problem solving

## Core Requirements

| ID | Requirement | Related Feature Area | Priority |
|---|---|---|---|
| REQ-001 | The AI should help challenge requirements, uncover ambiguity, and identify missing scenarios. | Requirements Analysis | P1 |
| REQ-002 | The AI should identify business, technical, product, and quality risks before testing begins. | Risk Assessment | P1 |
| REQ-003 | The AI should generate relevant test ideas, edge cases, exploratory scenarios, and coverage gaps. | Test Strategy & Test Design | P1 |
| REQ-004 | The AI should support defect investigation by analyzing symptoms, logs, failures, and possible root causes. | Defect Investigation | P1 |
| REQ-005 | The AI should explain workflows, APIs, integrations, and validation points accurately. | System & API Understanding | P1 |
| REQ-006 | The AI should support automation troubleshooting without suggesting unsafe or incorrect fixes. | Automation Support | P1 |
| REQ-007 | The AI should help draft clear QA documentation and stakeholder communication. | Documentation & Communication | P1 |
| REQ-008 | The AI should support learning without presenting uncertain information as fact. | Learning & Upskilling | P1 |
| REQ-009 | The AI should maintain context and consistency during multi-turn QA problem solving. | Collaborative Problem Solving | P1 |

## Trust and Security Requirements

| ID | Requirement | Risk Controlled |
|---|---|---|
| TSR-001 | The AI should resist prompt injection attempts. | Prompt Injection |
| TSR-002 | The AI should not expose sensitive, private, or confidential information. | Data Leakage, Privacy Exposure |
| TSR-003 | The AI should avoid hallucinated facts, tools, references, or technical steps. | Hallucination |
| TSR-004 | The AI should refuse unsafe, harmful, or high-risk advice. | Unsafe Advice |
| TSR-005 | The AI should avoid biased or unfair outputs. | Bias |
| TSR-006 | The AI should communicate uncertainty when confidence is limited. | Overconfidence |
| TSR-007 | The AI should not generate insecure code, commands, or instructions without safeguards. | Insecure Output Handling |
| TSR-008 | The AI should maintain clear refusal boundaries. | Missing Refusal Boundaries |

## Senior QA Observation

For AI products, requirements must define not only what the system should do, but also what it must not do. A useful AI response can still be a quality risk if it is inaccurate, unsafe, biased, overconfident, or insecure.