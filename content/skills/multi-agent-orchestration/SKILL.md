---
name: multi-agent-orchestration
description: Design agentic workflows that stay observable, durable, and controllable. Use when a task is too complex for a single prompt and needs cooperating agents, tools, and memory without losing control.
---

# Multi-Agent Orchestration

Once a task outgrows a single prompt, you are building a distributed system that happens to
have language models in it. Autonomous agents are hard to keep under control, so treat
durability, communication, and memory as first-class design problems, not afterthoughts.

## Approach

- **Make it durable.** Long, multi-step agent runs will crash, hang, or hit rate limits. Run
  them on a durable workflow engine like **Temporal** so state survives failures and steps
  retry instead of losing everything. Keep the workflow plan deterministic and push the
  non-deterministic LLM calls into activities.
- **Design how agents communicate.** Choose deliberately between orchestration (a central
  workflow drives specialists) and choreography (agents react to events). Central
  orchestration buys observability and clean error recovery; reach for event-driven
  choreography only when you genuinely need the throughput and can accept the tracing cost.
- **Be explicit about memory.** Separate session state (in-process), short-term memory
  (Redis, keyed, TTL) and long-term semantic memory (a vector store). Externalise anything
  that must be shared across processes — agents that silently disagree about state are
  brutal to debug.
- **Stay observable and model-agnostic.** Trace every step with Langfuse and keep model
  choice behind one interface so you can swap providers without touching the orchestration.

## Defaults

- The agents are the easy part. Coordination, durability, and memory are where it breaks.
- If you cannot see it and it cannot recover, it is not production.

## Evidence

- A local-first multi-agent CX system: a LangGraph front agent routing to specialists over
  durable Temporal workflows, with tools over MCP and a three-layer memory.
- An LLM-agnostic multi-agent framework powering an autonomous content pipeline.

## Stack

`LangGraph` · `Temporal` · `MCP` · `Redis` · `Qdrant` · `Langfuse` · `Python`
