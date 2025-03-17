import React, { memo, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  isLoaded: boolean;
  onLoad: () => void;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, isLoaded, onLoad, onClick }) => {

  return (
    <>
  
    </>
  );
};

export default memo(LazyImage);

