"use client";

import { motion } from "framer-motion";
import { getCastName } from "@/lib/cast";

interface DialogBoxProps {
  speaker: string;
  text: string;
  phaseId: number;
}

export function DialogBox({ speaker, text, phaseId }: DialogBoxProps) {
  const actorName = getCastName(phaseId, speaker);
  const displayName = actorName ? `${speaker} (${actorName})` : speaker;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="bg-black/70 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700"
    >
      <p className="text-xl md:text-2xl font-bold text-amber-400 mb-3 md:mb-4">{displayName}</p>
      <p className="text-xl md:text-2xl text-white leading-relaxed">{text}</p>
    </motion.div>
  );
}
