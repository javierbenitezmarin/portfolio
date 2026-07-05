---
name: multi-agent-orchestration
description: Design agentic workflows with LangChain and LangGraph that stay observable and controllable. Use when a task is too complex for a single prompt and needs decomposition into cooperating agents (research, planning, tool use, verification) without losing control.
---

# Multi-Agent Orchestration

Once a task is too big for a single prompt, you are really building a distributed system with
a language model in the loop. The hard part is not the agents, it is keeping the whole thing
observable and recoverable.

## Approach

1. **Decompose** — model the workflow as a graph of specialised agents and tools.
2. **Orchestrate** — LangGraph for explicit state, routing, and recovery from failures.
3. **Stay LLM-agnostic** — swap between OpenAI, Gemini, and Claude behind one interface.
4. **Observe** — trace every step with Langfuse: latency, cost, and errors.

## Evidence

- LLM-agnostic multi-agent framework powering an autonomous generative content pipeline
  at scale with minimal human oversight.

## Stack

`LangChain` · `LangGraph` · `Langfuse` · `Python` · `Multi-Agent`
