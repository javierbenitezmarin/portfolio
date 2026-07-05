export interface SkillReference {
  slug: string;
  name: string;
}

export interface Skill {
  slug: string;
  name: string;
  summary: string;
  references?: SkillReference[];
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
  {
    slug: 'communication',
    name: 'Communication',
    summary:
      'Clear, honest communication that adapts vocabulary to different profiles.',
  },
  {
    slug: 'staying-current',
    name: 'Staying Current',
    summary:
      'Keeping up with a fast-moving AI field without drowning in noise.',
  },
  {
    slug: 'ideation-workflow',
    name: 'Ideation Workflow',
    summary:
      'From handwritten GoodNotes sketches to structured artifacts and diagrams.',
    references: [{ slug: 'handwritten-to-para', name: 'handwritten-to-para.md' }],
  },
];
