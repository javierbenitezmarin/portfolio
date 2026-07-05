export interface SkillReference {
  slug: string;
  name: string;
}

export type SkillCategory = 'hard' | 'soft' | 'workflow';

export interface Skill {
  slug: string;
  name: string;
  summary: string;
  category: SkillCategory;
  references?: SkillReference[];
}

export const skills: Skill[] = [
  {
    slug: 'document-intelligence',
    name: 'Document Intelligence',
    category: 'hard',
    summary: 'Getting clean, structured data out of messy documents.',
  },
  {
    slug: 'multimodal-fraud-detection',
    name: 'Multimodal Fraud Detection',
    category: 'hard',
    summary: 'Catching document fraud that is visual, not just textual.',
  },
  {
    slug: 'rag-systems',
    name: 'RAG Systems',
    category: 'hard',
    summary: 'Grounding LLMs in a private knowledge base so they stop guessing.',
  },
  {
    slug: 'multi-agent-orchestration',
    name: 'Multi-Agent Orchestration',
    category: 'hard',
    summary: 'Agent workflows that stay observable and under control.',
  },
  {
    slug: 'communication',
    name: 'Communication',
    category: 'soft',
    summary: 'Explaining technical work clearly to whoever is in the room.',
  },
  {
    slug: 'ownership-reliability',
    name: 'Ownership & Reliability',
    category: 'soft',
    summary: 'Owning the outcome, not just the ticket.',
  },
  {
    slug: 'mentoring',
    name: 'Mentoring',
    category: 'soft',
    summary: 'Leveling up the people around me by sharing what I learn.',
  },
  {
    slug: 'adaptability',
    name: 'Adaptability',
    category: 'soft',
    summary: 'Dropping into a new domain and getting useful fast.',
  },
  {
    slug: 'ideation-workflow',
    name: 'Ideation Workflow',
    category: 'workflow',
    summary: 'How I take an idea from a handwritten sketch to a real artifact.',
    references: [{ slug: 'handwritten-to-para', name: 'handwritten-to-para.md' }],
  },
];

export const hardSkills = skills.filter((skill) => skill.category === 'hard');
export const softSkills = skills.filter((skill) => skill.category === 'soft');
export const workflowSkills = skills.filter(
  (skill) => skill.category === 'workflow'
);

