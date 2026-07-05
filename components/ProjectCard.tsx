import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import { Project } from '@/data/projects';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h3 className={styles.title}>{project.title}</h3>
            <span className={styles.year}>{project.year}</span>
          </div>

          <p className={styles.role}>{project.role}</p>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.stack}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.action}>
          <span className={styles.link}>
            View Project
            <VscArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
