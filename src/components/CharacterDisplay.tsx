"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Character } from "@/data/storyData";

interface CharacterDisplayProps {
  characters: Character[];
  currentSpeaker?: string;
}

export function CharacterDisplay({ characters, currentSpeaker }: CharacterDisplayProps) {
  return (
    <div className="flex justify-between items-end h-full min-h-64 md:min-h-96">
      {characters.map((character) => {
        const isLeft = character.position === "left";
        const isSpeaking = currentSpeaker === character.name;

        return (
          <motion.div
            key={character.name}
            initial={{
              opacity: 0,
              x: isLeft ? -50 : 50,
            }}
            animate={{
              opacity: isSpeaking ? 1 : 0.5,
              x: 0,
              scale: isSpeaking ? 1.1 : 0.9,
            }}
            exit={{
              opacity: 0,
              x: isLeft ? -50 : 50,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className={isLeft ? "w-1/3" : "w-1/3"}
          >
            <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        );
      })}

      {/* 빈 공간 채우기 (캐릭터가 1명일 때) */}
      {characters.length === 1 && (
        <div className="w-1/3" />
      )}
    </div>
  );
}
