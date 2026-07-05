import Image from 'next/image';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import {
  fileTree,
  FolderNode,
  iconSrc,
  TreeNode,
} from '@/data/fileTree';
import { useTabs } from '@/components/TabsProvider';

import styles from '@/styles/Explorer.module.css';

const collectDefaultOpen = (node: TreeNode, acc: Set<string>): void => {
  if (node.type === 'folder') {
    if (node.defaultOpen) {
      acc.add(node.id);
    }
    node.children.forEach((child) => collectDefaultOpen(child, acc));
  }
};

const FileEntry = ({
  node,
  depth,
}: {
  node: Extract<TreeNode, { type: 'file' }>;
  depth: number;
}) => {
  const { openTab, activePath } = useTabs();
  const isActive = activePath === node.path;

  return (
    <div
      className={`${styles.file} ${isActive ? styles.fileActive : ''}`}
      style={{ paddingLeft: `${depth * 0.8 + 0.5}rem` }}
      onClick={() => openTab(node.path)}
    >
      <Image src={iconSrc[node.icon]} alt={node.name} height={16} width={16} />
      <p>{node.name}</p>
    </div>
  );
};

const FolderEntry = ({
  node,
  depth,
  openFolders,
  toggleFolder,
}: {
  node: FolderNode;
  depth: number;
  openFolders: Set<string>;
  toggleFolder: (id: string) => void;
}) => {
  const isOpen = openFolders.has(node.id);

  return (
    <div>
      <div
        className={styles.folder}
        style={{ paddingLeft: `${depth * 0.8 + 0.25}rem` }}
        onClick={() => toggleFolder(node.id)}
      >
        <VscChevronRight
          className={styles.chevron}
          style={isOpen ? { transform: 'rotate(90deg)' } : {}}
        />
        <span>{node.name}</span>
      </div>
      {isOpen && (
        <div>
          {node.children.map((child) => (
            <TreeEntry
              key={child.type === 'file' ? child.path : child.id}
              node={child}
              depth={depth + 1}
              openFolders={openFolders}
              toggleFolder={toggleFolder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeEntry = ({
  node,
  depth,
  openFolders,
  toggleFolder,
}: {
  node: TreeNode;
  depth: number;
  openFolders: Set<string>;
  toggleFolder: (id: string) => void;
}) => {
  if (node.type === 'file') {
    return <FileEntry node={node} depth={depth} />;
  }
  return (
    <FolderEntry
      node={node}
      depth={depth}
      openFolders={openFolders}
      toggleFolder={toggleFolder}
    />
  );
};

const Explorer = () => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(() => {
    const set = new Set<string>();
    collectDefaultOpen(fileTree, set);
    return set;
  });

  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <FolderEntry
        node={fileTree}
        depth={0}
        openFolders={openFolders}
        toggleFolder={toggleFolder}
      />
    </div>
  );
};

export default Explorer;
