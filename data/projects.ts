export interface Project {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'DocFraud',
    slug: 'docfraud',
    description:
      'Hybrid multimodal fraud detection engine combining Computer Vision with multimodal LLMs to automate visual document inspection and risk-level decisions.',
    stack: ['Python', 'Computer Vision', 'Multimodal LLMs', 'FastAPI', 'AWS'],
    role: 'AI Engineer @ M47 AI',
    year: '2025',
    link: 'https://github.com/javierbenitezmarin',
  },
  {
    title: 'Conversational Analytics Agent',
    slug: 'conversational-analytics',
    description:
      'Natural-language analytics agent on Snowflake Cortex letting upper management query enterprise data conversationally for faster decision-making.',
    stack: ['Snowflake Cortex', 'LLMs', 'Python', 'SQL'],
    role: 'AI Engineer @ M47 AI',
    year: '2025',
    link: 'https://github.com/javierbenitezmarin',
  },
  {
    title: 'Autonomous Content Pipeline',
    slug: 'autonomous-content-pipeline',
    description:
      'Fully automated multi-agent generative content system with a semantic deduplication engine and vector-based research agents, LLM-agnostic across OpenAI, Gemini and Claude.',
    stack: ['LangChain', 'Python', 'Vector DBs', 'Multi-Agent'],
    role: 'CTO @ Inspiring News',
    year: '2025',
    link: 'https://github.com/javierbenitezmarin',
  },
  {
    title: 'GNN Cybersecurity Research',
    slug: 'gnn-cybersecurity',
    description:
      'Graph Neural Network architectures for cybersecurity R&D, leading a scientific team as part of the company innovation roadmap.',
    stack: ['GNN', 'PyTorch', 'Python', 'Research'],
    role: 'ML Engineer @ Napptilus Tech Labs',
    year: '2023',
    link: 'https://github.com/javierbenitezmarin',
  },
];
