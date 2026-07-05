import { Metadata } from 'next';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdown } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Skills',
};

export default async function SkillsPage() {
  const content = await readMarkdown('skills/README.md');
  return <MarkdownView content={content} filename="skills/README.md" />;
}
