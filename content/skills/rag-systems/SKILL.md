---
name: rag-systems
description: Build retrieval-augmented generation pipelines grounded in enterprise knowledge. Use when an LLM must answer over a private, changing corpus (internal docs, product data, regulated content) and hallucination is unacceptable.
---

# RAG Systems

An LLM over your own data is only useful if it stops guessing. Grounding and evaluation are
the whole job; generation is the easy part.

## Approach

- **Chunk with structure in mind.** Respect sections, tables, and headings when splitting.
  Naive fixed-size chunks destroy the context that makes retrieval work.
- **Retrieve, then rerank.** Combine dense and keyword retrieval for recall, then rerank with
  a cross-encoder for precision. They are two different problems; do both.
- **Ground and cite.** Constrain generation to the retrieved context and attach citations so
  any claim can be traced back to a source.
- **Correct when retrieval is weak.** Grade the retrieved context; if it is thin, rewrite the
  query and retry (Corrective RAG) instead of answering from nothing.
- **Evaluate for real.** Track faithfulness and answer relevance against an eval set. "Looks
  good to me" is not a metric.

## Defaults

- Retrieval quality caps answer quality — spend your time there before touching the prompt.
- A confident wrong answer is worse than "I don't know". Prefer abstention on weak context.

## Evidence

- A conversational analytics agent on Snowflake Cortex letting management query enterprise
  data in natural language.
- Vector-based research agents with semantic deduplication in an autonomous content pipeline.

## Stack

`Chroma` · `Pinecone` · `Snowflake Cortex` · `LangChain` · `Python`
