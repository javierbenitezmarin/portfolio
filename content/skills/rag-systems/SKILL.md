---
name: RAG Systems
---

# RAG Systems

> Retrieval-augmented generation pipelines grounded in enterprise knowledge.

## When to use

Use this skill when an LLM needs to answer over a private, changing corpus and
hallucination is unacceptable — internal docs, product data, regulated content.

## Approach

1. **Chunk & embed** — structure-aware chunking, embeddings stored in a vector DB.
2. **Retrieve** — hybrid retrieval with reranking to maximise relevance.
3. **Ground** — constrain generation to retrieved context with citations.
4. **Evaluate** — measure faithfulness and answer relevance, not vibes.

## Evidence

- Conversational analytics agent on Snowflake Cortex letting management query enterprise
  data in natural language.
- Vector-based research agents with semantic deduplication in an autonomous content pipeline.

## Stack

`Chroma` · `Pinecone` · `Snowflake Cortex` · `LangChain` · `Python`
