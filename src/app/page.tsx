"use client";

import { useState } from "react";
import { StoryPlayer } from "@/components/StoryPlayer";
import { ImagePreloader } from "@/components/ImagePreloader";
import { allImageUrls } from "@/lib/imageList";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="w-screen h-screen overflow-hidden bg-black">
      {!isLoaded && (
        <ImagePreloader
          imageUrls={allImageUrls}
          onLoaded={() => setIsLoaded(true)}
        />
      )}
      {isLoaded && <StoryPlayer />}
    </main>
  );
}