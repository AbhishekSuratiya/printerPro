import { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/images/portfolio/fallback.svg'
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const onError = () => {
    if (!error) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <motion.img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={onError}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default ImageWithFallback;