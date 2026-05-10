import React, { useEffect, useState } from 'react';

interface ComicModalProps {
  comic: {
    thumbnail: string;
    title: string;
  };
  images: string[];
  onClose: () => void;
}

const ComicModal: React.FC<ComicModalProps> = ({ comic, images, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isClosing) return;
    const timer = window.setTimeout(() => onClose(), 220);
    return () => window.clearTimeout(timer);
  }, [isClosing, onClose]);

  const requestClose = () => {
    setIsClosing(true);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-200 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={requestClose}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-[92vw] overflow-y-auto rounded-xl border border-white/20 bg-[var(--surface)] p-6 transition-all duration-200 md:max-w-[80vw] lg:max-w-[60vw] ${
          isClosing ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={requestClose}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 text-2xl font-bold text-[var(--text)] transition hover:bg-white dark:bg-black/20"
          aria-label="Close comic"
        >
          &times;
        </button>
        <h1 className="mb-4 pr-10 text-2xl font-black text-[var(--text)]">{comic.title}</h1>
        <div className="space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${comic.title} - page ${index + 1}`}
              className="h-auto w-full rounded-lg border border-black/10 dark:border-white/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicModal;
