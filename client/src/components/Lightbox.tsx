import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ImageWithFallback from './ImageWithFallback';
import fallbackImage from '@assets/logo_16_155.png';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox = ({ imageUrl, onClose }: LightboxProps) => {
  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ImageWithFallback
            src={imageUrl}
            alt="Enlarged portfolio item"
            className="max-w-[90%] max-h-[90%] object-contain"
            fallbackSrc={fallbackImage}
          />
        </motion.div>
        <button 
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <i className="fas fa-times"></i>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
