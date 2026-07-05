---
title: Agentic CX — Multi-Agent Spike
role: Personal PoC
year: 2026
---

# Agentic CX — Multi-Agent Spike

> **Personal proof-of-concept.** Being prepared for open source.

A local-first **multi-agent customer-service system**. A LangGraph **Front Agent** detects
intent, fills and validates slots, and dispatches to one of three **specialist agents**
(cancel order / modify order / redeem gift card) through durable **Temporal workflows**.
Specialists call client-API tools over a real **MCP** server and read/write a **three-layer
memory**. Every LLM step is traced in **Langfuse**.

The whole system runs on a laptop — docker-compose plus a couple of Python processes. The
only cloud dependencies are **Vertex AI** (LLM + embeddings) and **Langfuse Cloud**.

## Why I built it

To prove the parts that actually matter for production agents: **multi-agent orchestration**,
**durability**, **layered memory**, and **observability** — without hiding behind managed
services. It's deliberately local-first so the interesting failure modes (a crashing worker,
memory shared across processes) are visible and demonstrable.

## Architecture

```mermaid
flowchart TD
    subgraph Local["Local machine — docker-compose + Python"]
        Cust["Customer<br/>CLI REPL"]
        Front["Front Agent<br/>intent · slots · memory"]
        Temporal["Temporal Server<br/>durable state + scheduler"]
        subgraph Worker["Worker — workflows + activities"]
            Cancel["Cancel<br/>queue: cancel"]
            Modify["Modify<br/>queue: modify"]
            Redeem["Redeem<br/>queue: redeem"]
        end
        MCP["MCP Server<br/>FastMCP → fixtures"]
        Redis[("Redis<br/>short-term · TTL 7d")]
        Qdrant[("Qdrant<br/>long-term · 768-dim")]
    end
    subgraph Cloud["Cloud (GCP / SaaS)"]
        Vertex["Vertex AI<br/>Gemini + embeddings"]
        Langfuse["Langfuse<br/>LLM traces"]
    end
    Cust -->|message| Front
    Front -->|start workflow| Temporal
    Temporal -->|dispatch activity| Worker
    Worker -->|MCP tools| MCP
    Worker -->|short-term| Redis
    Worker -->|long-term| Qdrant
    Front -.->|LLM| Vertex
    Worker -.->|"LLM + embeddings"| Vertex
    Worker -.->|traces| Langfuse
```

## The three-process model

The single most important idea in this spike: there are **three kinds of running process**
with very different jobs. The Temporal *server* stores durable state and schedules work — it
does **not** run the orchestration logic. The plan lives in **workflow code inside the
worker**; the non-deterministic LLM work runs in **activities**.

| Process | Role | Runs our logic? |
|---|---|---|
| **Temporal Server** (container) | Durable state store + scheduler; persists every workflow's history, drives retries/timeouts | infra only |
| **Front Agent** (Python) | Greeting, intent detection, slot filling + validation; a Temporal *client* that starts workflows | yes |
| **Worker** (Python) | Runs the deterministic workflow plans **and** the LangGraph specialists as activities | yes |

> Why LLM calls live in **activities**: Temporal replays workflow code and requires
> determinism, so the non-deterministic agent runs in an activity. Kill the worker
> mid-workflow and Temporal resumes it on restart — a plain async function would have lost
> that state.

## Conversation flow

```mermaid
flowchart TD
    M["Customer message"] --> I["Detect intent (LLM)"]
    I --> S{"Slots valid?<br/>Pydantic"}
    S -->|invalid| Reask["Re-ask · max 3"]
    Reask --> S
    S -->|"3× fail"| Esc["Escalate to human"]
    S -->|valid| Route{"Intent"}
    Route -->|cancel| WC["CancelOrderWorkflow"]
    Route -->|modify| WM["ModifyOrderWorkflow"]
    Route -->|redeem| WR["RedeemGiftCardWorkflow"]
    Route -->|"out of scope"| Esc
    WC --> Reply["Stream specialist reply"]
    WM --> Reply
    WR --> Reply
    Reply --> Persist["Persist memory on session end"]
```

## Three-layer memory

Session memory is in-process (LangGraph state); short- and long-term memory are
**externalised databases** precisely so the Front Agent and Worker processes see the same
data. Long-term recall is what lets the agent greet a returning customer with context from a
previous conversation.

```mermaid
flowchart LR
    subgraph Session["Session — in-process"]
        LG["LangGraph state<br/>current conversation"]
    end
    subgraph Short["Short-term — Redis"]
        RD[("exact key<br/>TTL 7 days")]
    end
    subgraph Long["Long-term — Qdrant"]
        QD[("semantic similarity<br/>768-dim vectors")]
    end
    LG -->|"recent facts"| RD
    LG -->|"semantic recall"| QD
```

## What makes it interesting

- **Durable orchestration** — Temporal workflows survive worker crashes and resume exactly
  where they stopped; the Temporal Web UI shows workflow history live.
- **Microservices-ready monolith** — each specialist runs on its own Temporal task queue.
  Going from one process to many is a deployment change, not a rewrite.
- **Real MCP protocol** — a FastMCP server wraps in-process fixtures, so the tool layer is a
  genuine, demonstrable MCP integration at near-zero infra cost.
- **Dual observability** — Langfuse for the LLM plane, the Temporal UI for the orchestration
  plane, both shown live.

## Stack

`LangGraph` · `Temporal` · `FastMCP` · `Redis` · `Qdrant` · `Vertex AI (Gemini)` ·
`text-embedding-004` · `Langfuse` · `docker-compose` · `uv` · `Python 3.12`
