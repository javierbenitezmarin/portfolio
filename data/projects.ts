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
      'A clinical-question agent that answers over a medical corpus without making things up. Built with LangGraph using Corrective RAG, semantic caching, and reranking, running fully serverless on GCP.',
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
      'A local-first customer-service system built as multiple agents. A LangGraph front agent routes each request to a specialist through durable Temporal workflows, with tools over MCP and a three-layer memory. Runs on a laptop, and every step is traced.',
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
