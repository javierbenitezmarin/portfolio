'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {
  VscScreenFull,
  VscClose,
  VscZoomIn,
  VscZoomOut,
  VscDiscard,
} from 'react-icons/vsc';

import styles from '@/styles/DiagramFrame.module.css';

interface DiagramFrameProps {
  children: React.ReactNode;
  variant: 'image' | 'mermaid';
}

const DiagramFrame = ({ children, variant }: DiagramFrameProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const surfaceClass = `${styles.surface} ${
    variant === 'image' ? styles.image : styles.mermaidSurface
  }`;

  return (
    <span className={styles.frame}>
      <span
        className={styles.inline}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Open diagram fullscreen"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setOpen(true);
          }
        }}
      >
        <span className={surfaceClass}>{children}</span>
        <button
          type="button"
          className={styles.expand}
          onClick={(event) => {
            event.stopPropagation();
            setOpen(true);
          }}
          aria-label="Open fullscreen"
        >
          <VscScreenFull size={16} />
        </button>
      </span>

      {mounted &&
        open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <TransformWrapper
              minScale={0.4}
              maxScale={10}
              limitToBounds={false}
              centerOnInit
              doubleClick={{ mode: 'zoomIn' }}
              wheel={{ step: 0.15 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div
                    className={styles.toolbar}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => zoomIn()}
                      aria-label="Zoom in"
                    >
                      <VscZoomIn size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => zoomOut()}
                      aria-label="Zoom out"
                    >
                      <VscZoomOut size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => resetTransform()}
                      aria-label="Reset zoom"
                    >
                      <VscDiscard size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                    >
                      <VscClose size={18} />
                    </button>
                  </div>
                  <TransformComponent
                    wrapperClass={styles.transformWrapper}
                    contentClass={styles.transformContent}
                  >
                    <span
                      className={`${surfaceClass} ${styles.modalSurface}`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {children}
                    </span>
                  </TransformComponent>
                  <p className={styles.hint}>
                    Scroll or pinch to zoom · drag to pan · Esc to close
                  </p>
                </>
              )}
            </TransformWrapper>
          </div>,
          document.body
        )}
    </span>
  );
};

export default DiagramFrame;
