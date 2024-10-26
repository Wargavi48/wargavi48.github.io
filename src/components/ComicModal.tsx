import React from 'react';

interface ComicModalProps {
  comic: {
    thumbnail: string;
    title: string;
  };
  images: string[];
  onClose: () => void;
}

const ComicModal: React.FC<ComicModalProps> = ({ comic, images, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white p-6 rounded-lg max-w-[60vw] max-h-[90vh] relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4">{comic.title}</h1>
        <div className="space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${comic.title} - page ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicModal;
