import React from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface LightboxProps {
  image: string;
  title: string;
  description?: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  image,
  title,
  description,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#ff7a00] text-white transition-all duration-300"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
        
        {/* Main HD Image Container with Zoom */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl max-h-[75vh]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain max-h-[75vh] animate-in zoom-in-95 duration-500"
          />
        </div>

        {/* Title & Description Overlay Bar */}
        <div className="text-center space-y-1 max-w-2xl px-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-white">{title}</h3>
          {description && (
            <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
              {description}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
