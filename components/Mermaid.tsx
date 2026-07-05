'use client';

import { useEffect, useId, useState } from 'react';
import mermaid from 'mermaid';

import styles from '@/styles/Markdown.module.css';

let initialized = false;

const initMermaid = () => {
  if (initialized) {
    return;
  }
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'strict',
    fontFamily: "'Source Code Pro', monospace",
  });
  initialized = true;
};

const Mermaid = ({ chart }: { chart: string }) => {
  const rawId = useId();
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    initMermaid();
    let cancelled = false;

    mermaid
      .render(id, chart)
      .then((result) => {
        if (!cancelled) {
          setSvg(result.svg);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className={styles.raw}>
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div
      className={styles.mermaid}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Mermaid;
