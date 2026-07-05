import { projects } from '@/data/projects';
import { posts } from '@/data/posts';
import { hardSkills, softSkills, workflowSkills, Skill } from '@/data/skills';

export type FileIconType =
  | 'markdown'
  | 'agents'
  | 'skill'
  | 'config'
  | 'json'
  | 'react'
  | 'mdx';

export interface FileNode {
  type: 'file';
  name: string;
  path: string;
  icon: FileIconType;
}

export interface FolderNode {
  type: 'folder';
  name: string;
  id: string;
  defaultOpen?: boolean;
  children: TreeNode[];
}

export type TreeNode = FileNode | FolderNode;

const skillFolder = (skill: Skill): FolderNode => ({
  type: 'folder',
  name: skill.slug,
  id: `skill-${skill.slug}`,
  children: [
    {
      type: 'file',
      name: 'SKILL.md',
      path: `/skills/${skill.slug}`,
      icon: 'skill',
    },
    ...(skill.references ?? []).map((ref) => ({
      type: 'file' as const,
      name: ref.name,
      path: `/skills/${skill.slug}/${ref.slug}`,
      icon: 'markdown' as const,
    })),
  ],
});

export const fileTree: FolderNode = {
  type: 'folder',
  name: 'portfolio',
  id: 'root',
  defaultOpen: true,
  children: [
    { type: 'file', name: 'README.md', path: '/', icon: 'markdown' },
    { type: 'file', name: 'AGENTS.md', path: '/agents', icon: 'agents' },
    {
      type: 'folder',
      name: 'skills',
      id: 'skills',
      defaultOpen: true,
      children: [
        { type: 'file', name: 'README.md', path: '/skills', icon: 'markdown' },
        {
          type: 'folder',
          name: 'hard',
          id: 'skills-hard',
          defaultOpen: true,
          children: hardSkills.map(skillFolder),
        },
        {
          type: 'folder',
          name: 'soft',
          id: 'skills-soft',
          defaultOpen: true,
          children: softSkills.map(skillFolder),
        },
        ...workflowSkills.map(skillFolder),
      ],
    },
    { type: 'file', name: 'experience.md', path: '/experience', icon: 'markdown' },
    {
      type: 'folder',
      name: 'projects',
      id: 'projects',
      children: projects.map((project) => ({
        type: 'file' as const,
        name: `${project.slug}.mdx`,
        path: `/projects/${project.slug}`,
        icon: 'mdx' as const,
      })),
    },
    {
      type: 'folder',
      name: 'blog',
      id: 'blog',
      children: posts.map((post) => ({
        type: 'file' as const,
        name: `${post.slug}.mdx`,
        path: `/blog/${post.slug}`,
        icon: 'mdx' as const,
      })),
    },
    { type: 'file', name: 'contact.config', path: '/contact', icon: 'config' },
    { type: 'file', name: 'settings.json', path: '/settings', icon: 'json' },
  ],
};

export interface TabMeta {
  name: string;
  path: string;
  icon: FileIconType;
}

const collectFiles = (node: TreeNode, acc: Map<string, TabMeta>): void => {
  if (node.type === 'file') {
    acc.set(node.path, { name: node.name, path: node.path, icon: node.icon });
    return;
  }
  node.children.forEach((child) => collectFiles(child, acc));
};

export const filesByPath: Map<string, TabMeta> = (() => {
  const map = new Map<string, TabMeta>();
  collectFiles(fileTree, map);
  return map;
})();

export const iconSrc: Record<FileIconType, string> = {
  markdown: '/logos/markdown_icon.svg',
  agents: '/logos/markdown_icon.svg',
  skill: '/logos/markdown_icon.svg',
  mdx: '/logos/markdown_icon.svg',
  json: '/logos/json_icon.svg',
  config: '/logos/json_icon.svg',
  react: '/logos/react_icon.svg',
};
