export interface Project {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'MedRAG — Clinical Guidelines Assistant',
    slug: 'medrag-assistant',
    description:
      'A stateful Corrective-RAG (CRAG) agent over the StatPearls medical corpus, built with LangGraph — two-tier semantic caching, cross-encoder reranking, adaptive retrieval, and query decomposition with medical-term normalization. Serverless on GCP.',
    stack: [
      'LangGraph',
      'Vertex AI',
      'Firestore',
      'Cloud Functions',
      'Langfuse',
      'Python',
    ],
    role: 'Personal PoC',
    year: '2026',
  },
  {
    title: 'Agentic CX — Multi-Agent Spike',
    slug: 'cx-multi-agent-spike',
    description:
      'A local-first multi-agent customer-service system. A LangGraph Front Agent detects intent and dispatches to specialist agents through durable Temporal workflows; specialists call tools over MCP and read/write a three-layer memory, fully traced in Langfuse.',
    stack: [
      'LangGraph',
      'Temporal',
      'MCP',
      'Redis',
      'Qdrant',
      'Vertex AI',
      'Langfuse',
    ],
    role: 'Personal PoC',
    year: '2026',
  },
];
