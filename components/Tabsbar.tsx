'use client';

import Tab from '@/components/Tab';
import { useTabs } from '@/components/TabsProvider';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  const { openTabs, activePath, openTab, closeTab } = useTabs();

  return (
    <div className={styles.tabs}>
      {openTabs.map((tab) => (
        <Tab
          key={tab.path}
          icon={tab.icon}
          filename={tab.name}
          isActive={activePath === tab.path}
          onSelect={() => openTab(tab.path)}
          onClose={() => closeTab(tab.path)}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
