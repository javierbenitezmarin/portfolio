import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdownWithFrontmatter } from '@/lib/content';
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

  const { content, data, raw } = await readMarkdownWithFrontmatter(
    `skills/${slug}/SKILL.md`
  );

  const frontmatter = [
    { label: 'name', value: String(data.name ?? slug) },
    { label: 'description', value: String(data.description ?? '') },
  ].filter((field) => field.value.length > 0);

  return (
    <MarkdownView
      content={content}
      rawContent={raw}
      frontmatter={frontmatter}
      filename={`skills/${slug}/SKILL.md`}
    />
  );
}
