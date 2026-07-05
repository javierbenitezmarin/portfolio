import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdown } from '@/lib/content';
import { skills } from '@/data/skills';

interface SkillPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({
  params,
}: SkillPageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);
  return { title: skill ? `${skill.name} · SKILL.md` : 'SKILL.md' };
}

export default async function SkillPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);

  if (!skill) {
    notFound();
  }

  const content = await readMarkdown(`skills/${slug}/SKILL.md`);
  return (
    <MarkdownView content={content} filename={`skills/${slug}/SKILL.md`} />
  );
}
