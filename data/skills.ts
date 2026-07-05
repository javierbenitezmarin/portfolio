export interface Skill {
  slug: string;
  name: string;
  summary: string;
}

export const skills: Skill[] = [
  {
    slug: 'document-intelligence',
    name: 'Document Intelligence',
    summary:
      'Turning heterogeneous unstructured documents into structured, decision-ready data.',
  },
  {
    slug: 'multimodal-fraud-detection',
    name: 'Multimodal Fraud Detection',
    summary:
      'Combining Computer Vision with multimodal LLMs to inspect documents and score risk.',
  },
  {
    slug: 'rag-systems',
    name: 'RAG Systems',
    summary:
      'Retrieval-augmented generation pipelines grounded in enterprise knowledge.',
  },
  {
    slug: 'multi-agent-orchestration',
    name: 'Multi-Agent Orchestration',
    summary:
      'Designing agentic workflows with LangChain and LangGraph that stay observable and controllable.',
  },
];
