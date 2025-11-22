"use client";

import { useState, useEffect } from 'react';

interface ImagePreloaderProps {
  imageUrls: string[];
  onLoaded: () => void;
}

export function ImagePreloader({ imageUrls, onLoaded }: ImagePreloaderProps) {
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      onLoaded();
      return;
    }

    let loaded = 0;
    const total = imageUrls.length;

    const handleLoad = () => {
      loaded++;
      setLoadedCount(loaded);
      if (loaded === total) {
        // Add a small delay to ensure the UI updates before calling onLoaded
        setTimeout(onLoaded, 100);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleLoad;
      img.onerror = handleLoad; // Count errors as loaded to not block the app
    });
  }, [imageUrls, onLoaded]);

  const progress = imageUrls.length > 0 ? (loadedCount / imageUrls.length) * 100 : 100;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-amber-100 text-3xl font-bold mb-4 font-shilla-bold">
        이야기를 불러오는 중...
      </div>
      <div className="w-1/2 max-w-md bg-gray-700 rounded-full h-4 border border-amber-600/50">
        <div
          className="bg-amber-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-amber-200 text-lg mt-3 font-shilla-medium">
        {`${Math.round(progress)}%`}
      </div>
    </div>
  );
}
