import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VscGithub, VscLinkExternal, VscArrowLeft } from 'react-icons/vsc';
import Link from 'next/link';

import { projects } from '@/data/projects';

import styles from '@/styles/ProjectDetailPage.module.css';

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

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/projects" className={styles.back}>
          <VscArrowLeft size={14} />
          <span>projects</span>
        </Link>

        <header className={styles.header}>
          <div className={styles.headerTop}>
            <h1 className={styles.title}>{project.title}</h1>
            <span className={styles.year}>{project.year}</span>
          </div>
          <p className={styles.role}>{project.role}</p>
        </header>

        <p className={styles.description}>{project.description}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stack</h2>
          <div className={styles.stack}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          <div className={styles.diagramPlaceholder}>
            <p>Diagram coming soon.</p>
          </div>
        </section>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <VscGithub size={18} />
          <span>Open in GitHub</span>
          <VscLinkExternal size={14} />
        </a>
      </div>
    </div>
  );
}
