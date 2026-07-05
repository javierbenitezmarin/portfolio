import type { MetadataRoute } from 'next';

import { skills } from '@/data/skills';
import { projects } from '@/data/projects';

const baseUrl = 'https://javierbenitezmarin.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/agents',
    '/skills',
    '/experience',
    '/projects',
    '/blog',
    '/contact',
    '/settings',
  ];

  const skillRoutes = skills.map((skill) => `/skills/${skill.slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const lastModified = new Date();

  return [...staticRoutes, ...skillRoutes, ...projectRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
