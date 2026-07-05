---
name: rag-systems
description: Build retrieval-augmented generation pipelines grounded in enterprise knowledge. Use when an LLM must answer over a private, changing corpus (internal docs, product data, regulated content) and hallucination is unacceptable.
---

# RAG Systems

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
