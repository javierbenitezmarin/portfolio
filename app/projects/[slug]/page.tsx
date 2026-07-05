import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdownWithFrontmatter } from '@/lib/content';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? project.title : 'Projects' };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const { content, raw } = await readMarkdownWithFrontmatter(
    `projects/${slug}.md`
  );

  return (
    <MarkdownView
      content={content}
      rawContent={raw}
      filename={`projects/${slug}.mdx`}
    />
  );
}
