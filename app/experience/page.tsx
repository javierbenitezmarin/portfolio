import { Metadata } from 'next';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdown } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experience',
};

export default async function ExperiencePage() {
  const content = await readMarkdown('experience.md');
  return <MarkdownView content={content} filename="experience.md" />;
}
