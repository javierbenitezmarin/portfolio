export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    title: 'Shipping LLM Systems to Production, Not Demos',
    slug: 'shipping-llm-systems-to-production',
    description:
      'Notes on the messy parts of getting non-deterministic AI systems to behave reliably in the real world.',
    date: '2026-01-15',
    tags: ['LLMs', 'MLOps', 'Production'],
  },
];
