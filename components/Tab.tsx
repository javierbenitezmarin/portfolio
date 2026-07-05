'use client';

import Image from 'next/image';
import { VscClose } from 'react-icons/vsc';

import { iconSrc, FileIconType } from '@/data/fileTree';
import styles from '@/styles/Tab.module.css';

interface TabProps {
  icon: FileIconType;
  filename: string;
  isActive: boolean;
  onSelect: () => void;
  onClose: () => void;
}

const Tab = ({ icon, filename, isActive, onSelect, onClose }: TabProps) => {
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  const handleAuxClick = (event: React.MouseEvent) => {
    if (event.button === 1) {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={onSelect}
      onAuxClick={handleAuxClick}
    >
      <Image src={iconSrc[icon]} alt={filename} height={16} width={16} />
      <p>{filename}</p>
      <button
        className={styles.close}
        onClick={handleClose}
        aria-label={`Close ${filename}`}
      >
        <VscClose size={14} />
      </button>
    </div>
  );
};

export default Tab;
