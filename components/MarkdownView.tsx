'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { VscOpenPreview, VscCode } from 'react-icons/vsc';

import Mermaid from '@/components/Mermaid';
import DiagramFrame from '@/components/DiagramFrame';
import styles from '@/styles/Markdown.module.css';

const isMermaidElement = (child: unknown): boolean => {
  if (!child || typeof child !== 'object' || !('props' in child)) {
    return false;
  }
  const className = (child as { props?: { className?: string } }).props
    ?.className;
  return typeof className === 'string' && className.includes('language-mermaid');
};

const markdownComponents: Components = {
  code(props) {
    const { className, children } = props;
    if (className?.includes('language-mermaid')) {
      return <Mermaid chart={String(children).trim()} />;
    }
    return <code className={className}>{children}</code>;
  },
  pre(props) {
    const { children } = props;
    if (isMermaidElement(children)) {
      return <>{children}</>;
    }
    return <pre>{children}</pre>;
  },
  img(props) {
    const { src, alt } = props;
    if (typeof src !== 'string') {
      return null;
    }
    return (
      <DiagramFrame variant="image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt ?? ''} />
      </DiagramFrame>
    );
  },
  a(props) {
    const { href, children } = props;
    if (typeof href === 'string' && href.startsWith('/')) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

interface FrontmatterField {
  label: string;
  value: string;
}

interface MarkdownViewProps {
  content: string;
  filename?: string;
  frontmatter?: FrontmatterField[];
  rawContent?: string;
}

type ViewMode = 'preview' | 'raw';

const MarkdownView = ({
  content,
  filename,
  frontmatter,
  rawContent,
}: MarkdownViewProps) => {
  const [mode, setMode] = useState<ViewMode>('preview');

  return (
    <div className={styles.doc}>
      <div className={styles.toolbar}>
        {filename ? (
          <div className={styles.breadcrumb}>
            <span className={styles.pathSegment}>portfolio</span>
            <span className={styles.separator}>/</span>
            <span className={styles.filename}>{filename}</span>
          </div>
        ) : (
          <span />
        )}
        <div className={styles.toggle} role="group" aria-label="View mode">
          <button
            type="button"
            className={`${styles.toggleButton} ${
              mode === 'preview' ? styles.toggleActive : ''
            }`}
            onClick={() => setMode('preview')}
            aria-pressed={mode === 'preview'}
          >
            <VscOpenPreview size={14} />
            <span>Preview</span>
          </button>
          <button
            type="button"
            className={`${styles.toggleButton} ${
              mode === 'raw' ? styles.toggleActive : ''
            }`}
            onClick={() => setMode('raw')}
            aria-pressed={mode === 'raw'}
          >
            <VscCode size={14} />
            <span>Raw</span>
          </button>
        </div>
      </div>

      {mode === 'preview' ? (
        <article className={styles.markdown}>
          {frontmatter && frontmatter.length > 0 && (
            <div className={styles.frontmatter}>
              {frontmatter.map((field) => (
                <div className={styles.metaRow} key={field.label}>
                  <span className={styles.metaKey}>{field.label}:</span>
                  <span className={styles.metaValue}>{field.value}</span>
                </div>
              ))}
            </div>
          )}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {content}
          </ReactMarkdown>
        </article>
      ) : (
        <pre className={styles.raw}>
          <code>{rawContent ?? content}</code>
        </pre>
      )}
    </div>
  );
};

export default MarkdownView;
