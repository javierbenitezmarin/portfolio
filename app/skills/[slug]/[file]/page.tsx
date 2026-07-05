import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdownWithFrontmatter } from '@/lib/content';
import { skills } from '@/data/skills';

interface SkillReferencePageProps {
  params: Promise<{ slug: string; file: string }>;
}

export function generateStaticParams() {
  return skills.flatMap((skill) =>
    (skill.references ?? []).map((ref) => ({
      slug: skill.slug,
      file: ref.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: SkillReferencePageProps): Promise<Metadata> {
  const { slug, file } = await params;
  const skill = skills.find((item) => item.slug === slug);
  const reference = skill?.references?.find((ref) => ref.slug === file);
  return { title: reference ? reference.name : 'SKILL.md' };
}

export default async function SkillReferencePage({
  params,
}: SkillReferencePageProps) {
  const { slug, file } = await params;
  const skill = skills.find((item) => item.slug === slug);
  const reference = skill?.references?.find((ref) => ref.slug === file);

  if (!skill || !reference) {
    notFound();
  }

  const { content, data, raw } = await readMarkdownWithFrontmatter(
    `skills/${slug}/${file}.md`
  );

  const frontmatter = [
    { label: 'name', value: String(data.name ?? file) },
    { label: 'description', value: String(data.description ?? '') },
  ].filter((field) => field.value.length > 0);

  return (
    <MarkdownView
      content={content}
      rawContent={raw}
      frontmatter={frontmatter}
      filename={`skills/${slug}/${reference.name}`}
    />
  );
}
