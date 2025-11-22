"use client";

import { motion } from "framer-motion";

interface DialogBoxProps {
  speaker: string;
  text: string;
}

export function DialogBox({ speaker, text }: DialogBoxProps) {
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
      className="bg-black/70 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700"
    >
      <p className="text-xs md:text-sm font-bold text-amber-400 mb-2 md:mb-3">{speaker}</p>
      <p className="text-sm md:text-base text-white leading-relaxed">{text}</p>
    </motion.div>
  );
}
