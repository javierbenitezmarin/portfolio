import { Metadata } from 'next';
import Link from 'next/link';
import { VscBook, VscArrowRight } from 'react-icons/vsc';

import { posts } from '@/data/posts';

import styles from '@/styles/BlogPage.module.css';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.iconWrapper}>
            <VscBook className={styles.icon} size={24} />
          </div>
          <div>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              Notes on shipping AI systems — written like technical docs.
            </p>
          </div>
        </header>

        <div className={styles.list}>
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.cardMeta}>
                <span className={styles.date}>{post.date}</span>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDescription}>{post.description}</p>
              <span className={styles.readMore}>
                Read post <VscArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
