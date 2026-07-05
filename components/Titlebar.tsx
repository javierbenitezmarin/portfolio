'use client';

import Image from 'next/image';
import { VscMenu } from 'react-icons/vsc';

import styles from '@/styles/Titlebar.module.css';

interface TitlebarProps {
  onOpenCommandPalette?: () => void;
  onToggleExplorer?: () => void;
}

const Titlebar = ({ onOpenCommandPalette, onToggleExplorer }: TitlebarProps) => {
  const handleViewClick = () => {
    if (onOpenCommandPalette) {
      onOpenCommandPalette();
    }
  };

  return (
    <section className={styles.titlebar}>
      <button
        type="button"
        className={styles.hamburger}
        onClick={onToggleExplorer}
        aria-label="Toggle file explorer"
      >
        <VscMenu size={16} />
      </button>
      <Image
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p onClick={handleViewClick} className={styles.menuItem} title="Open Command Palette (Ctrl+Shift+P)">View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Javier Benitez Marin - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
