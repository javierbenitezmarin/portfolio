'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { filesByPath, TabMeta } from '@/data/fileTree';

interface TabsContextValue {
  openTabs: TabMeta[];
  activePath: string;
  openTab: (path: string) => void;
  closeTab: (path: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const STORAGE_KEY = 'open-tabs';

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [openPaths, setOpenPaths] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: string[] = JSON.parse(stored).filter((path: string) =>
        filesByPath.has(path)
      );
      setOpenPaths(parsed.length > 0 ? parsed : ['/']);
    } else {
      setOpenPaths(['/']);
    }
  }, []);

  useEffect(() => {
    if (openPaths.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(openPaths));
    }
  }, [openPaths]);

  useEffect(() => {
    if (filesByPath.has(pathname)) {
      setOpenPaths((prev) =>
        prev.includes(pathname) ? prev : [...prev, pathname]
      );
    }
  }, [pathname]);

  const openTab = useCallback(
    (path: string) => {
      setOpenPaths((prev) => (prev.includes(path) ? prev : [...prev, path]));
      router.push(path);
    },
    [router]
  );

  const closeTab = useCallback(
    (path: string) => {
      setOpenPaths((prev) => {
        const index = prev.indexOf(path);
        if (index === -1) {
          return prev;
        }
        const next = prev.filter((item) => item !== path);
        if (path === pathname) {
          const fallback = next[index] ?? next[index - 1] ?? next[0];
          router.push(fallback ?? '/');
        }
        return next;
      });
    },
    [pathname, router]
  );

  const value = useMemo<TabsContextValue>(() => {
    const openTabs = openPaths
      .map((path) => filesByPath.get(path))
      .filter((tab): tab is TabMeta => Boolean(tab));
    return { openTabs, activePath: pathname, openTab, closeTab };
  }, [openPaths, pathname, openTab, closeTab]);

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const useTabs = (): TabsContextValue => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};
