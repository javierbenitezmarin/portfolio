'use client';

import Link from 'next/link';
import Image from 'next/image';
import { VscArrowRight, VscGithub, VscMail } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.identity}>
              <div className={styles.avatar}>
                <Image
                  src="/foto_portfolio.png"
                  alt="Javier Benitez Marin"
                  width={128}
                  height={128}
                  priority
                />
              </div>
              <div className={styles.identityText}>
                <p className={styles.greeting}>Hello, I&apos;m</p>
                <h1 className={styles.name}>Javier Benitez Marin</h1>
                <p className={styles.role}>AI Engineer</p>
              </div>
            </div>

            <div className={styles.divider} />

            <p className={styles.description}>
              I build AI systems that actually make it to production. My strength is the 
              end-to-end view: taking a messy problem, seeing its whole shape, and 
              orchestrating the pieces. These days that means agentic systems — LLM 
              pipelines, RAG, and multi-agent work.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
            
            <Link href="/agents" className={styles.secondaryAction}>
              <span>Read AGENTS.md</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a 
              href="https://github.com/javierbenitezmarin" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>
            
            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
