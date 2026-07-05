---
title: Shipping LLM Systems to Production, Not Demos
date: 2026-01-15
description: Notes on the messy parts of getting non-deterministic AI systems to behave reliably in the real world.
tags: [LLMs, MLOps, Production]
---

# Shipping LLM Systems to Production, Not Demos

There's a wide gap between an LLM demo that wows a room and a system that holds up under
real traffic, real data, and real edge cases. Most of my work lives in that gap.

## The demo trap

A demo runs on curated inputs, a warm cache, and a forgiving audience. Production runs on
whatever users throw at it — malformed documents, adversarial prompts, and the long tail
of inputs nobody anticipated.

## What actually matters

- **Observability from day one.** If you can't see latency, cost, and error rates per
  step, you're flying blind. Langfuse-style tracing turns a black box into something you
  can debug.
- **Deterministic scaffolding around non-deterministic cores.** Validate inputs and
  outputs at the boundaries. Pydantic schemas catch a surprising amount of chaos.
- **Evaluation that isn't vibes.** Faithfulness and relevance metrics beat "looks good to me."

## The takeaway

Ask *why* before *how*. The most impressive pipeline is worthless if it solves the wrong
problem. Ship the boring, observable, correct version first.
