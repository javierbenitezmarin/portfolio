import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import styles from '@/styles/Markdown.module.css';

interface MarkdownViewProps {
  content: string;
  filename?: string;
}

const MarkdownView = ({ content, filename }: MarkdownViewProps) => {
  return (
    <div className={styles.doc}>
      {filename && (
        <div className={styles.breadcrumb}>
          <span className={styles.pathSegment}>portfolio</span>
          <span className={styles.separator}>/</span>
          <span className={styles.filename}>{filename}</span>
        </div>
      )}
      <article className={styles.markdown}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default MarkdownView;
