"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Character } from "@/data/storyData";

interface CharacterDisplayProps {
  characters: Character[];
  currentSpeaker?: string;
}

export function CharacterDisplay({ characters, currentSpeaker }: CharacterDisplayProps) {
  const leftCharacters = characters.filter(c => c.position === "left");
  const centerCharacters = characters.filter(c => c.position === "center");
  const rightCharacters = characters.filter(c => c.position === "right");

  const renderCharacter = (character: Character) => {
    const isSpeaking = currentSpeaker === character.name;
    const getInitialX = () => {
      if (character.position === "left") return -50;
      if (character.position === "right") return 50;
      return 0;
    };

    return (
      <motion.div
        key={character.name}
        initial={{
          opacity: 0,
          x: getInitialX(),
        }}
        animate={{
          opacity: isSpeaking ? 1 : 0.5,
          x: 0,
          scale: isSpeaking ? 1.1 : 0.9,
        }}
        exit={{
          opacity: 0,
          x: getInitialX(),
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="w-full max-w-md"
      >
        <div className="relative w-full h-[512px] md:h-[768px] flex items-center justify-center">
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
  };

  return (
    <div className="flex justify-between items-end h-full min-h-[512px] md:min-h-[768px]">
      {/* 왼쪽 */}
      <div className="w-1/3 flex justify-start">
        {leftCharacters.map(renderCharacter)}
      </div>

      {/* 가운데 */}
      <div className="w-1/3 flex justify-center">
        {centerCharacters.map(renderCharacter)}
      </div>

      {/* 오른쪽 */}
      <div className="w-1/3 flex justify-end">
        {rightCharacters.map(renderCharacter)}
      </div>
    </div>
  );
}
