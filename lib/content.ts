import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export const readMarkdown = async (relativePath: string): Promise<string> => {
  const filePath = path.join(contentDir, relativePath);
  const raw = await fs.readFile(filePath, 'utf-8');
  return matter(raw).content;
};

export interface MarkdownDocument {
  content: string;
  data: Record<string, unknown>;
}

export const readMarkdownWithFrontmatter = async (
  relativePath: string
): Promise<MarkdownDocument> => {
  const filePath = path.join(contentDir, relativePath);
  const raw = await fs.readFile(filePath, 'utf-8');
  const parsed = matter(raw);
  return { content: parsed.content, data: parsed.data };
};
