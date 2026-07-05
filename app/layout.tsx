import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Javier Benitez Marin | AI Engineer',
    template: 'Javier Benitez Marin | %s',
  },
  description:
    'Javier Benitez Marin is an AI Engineer building Generative AI and Computer Vision systems in production — RAG, multimodal fraud detection, and multi-agent orchestration.',
  keywords: [
    'javier benitez marin',
    'javier benitez',
    'ai engineer',
    'ai engineer portfolio',
    'llm engineer',
    'langchain',
    'langgraph',
    'rag',
    'computer vision',
    'multi-agent orchestration',
  ],
  openGraph: {
    title: "Javier Benitez Marin's Portfolio",
    description:
      'AI Engineer building Generative AI and Computer Vision systems in production.',
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://vscode-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
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
