import { Metadata } from 'next';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdown } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AGENTS.md',
};

export default async function AgentsPage() {
  const content = await readMarkdown('AGENTS.md');
  return <MarkdownView content={content} filename="AGENTS.md" />;
}
