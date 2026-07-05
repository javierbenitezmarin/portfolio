import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://javierbenitezmarin.dev'),
  title: {
    default: 'Javier Benitez Marin | AI Engineer',
    template: 'Javier Benitez Marin | %s',
  },
  description:
    'Javier Benitez Marin is an AI Engineer building Generative AI systems in production — RAG, multimodal document intelligence, and multi-agent orchestration.',
  keywords: [
    'javier benitez marin',
    'javier benitez',
    'ai engineer',
    'ai engineer portfolio',
    'llm engineer',
    'langchain',
    'langgraph',
    'rag',
    'agentic ai',
    'multi-agent orchestration',
  ],
  openGraph: {
    type: 'website',
    title: 'Javier Benitez Marin | AI Engineer',
    description:
      'AI Engineer building agentic AI systems that make it to production.',
    url: 'https://javierbenitezmarin.dev',
    siteName: 'Javier Benitez Marin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Javier Benitez Marin | AI Engineer',
    description:
      'AI Engineer building agentic AI systems that make it to production.',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
