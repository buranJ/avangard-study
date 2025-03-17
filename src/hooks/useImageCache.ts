import { useCallback, useRef, useState } from 'react';

export const useImageCache = () => {
  const cache = useRef(new Map<string, string>());
  const [loadedImages, setLoadedImages] = useState(new Set<string>());

  const preloadImage = useCallback((src: string) => {
    if (!src || cache.current.has(src)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        cache.current.set(src, src);
        setLoadedImages((prev) => new Set(prev).add(src));
        resolve(src);
      };
      img.onerror = reject;
    });
  }, []);

  const isImageLoaded = useCallback(
    (src: string) => {
      return loadedImages.has(src);
    },
    [loadedImages]
  );

  return { preloadImage, isImageLoaded, loadedImages };
};
