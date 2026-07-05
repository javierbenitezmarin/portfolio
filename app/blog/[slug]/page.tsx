import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarkdownView from '@/components/MarkdownView';
import { readMarkdownWithFrontmatter } from '@/lib/content';
import { posts } from '@/data/posts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return { title: post ? post.title : 'Blog' };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const { content } = await readMarkdownWithFrontmatter(`blog/${slug}.md`);
  return <MarkdownView content={content} filename={`blog/${slug}.mdx`} />;
}
