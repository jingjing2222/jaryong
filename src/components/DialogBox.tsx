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
      className="bg-black/70 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700"
    >
      <p className="text-xl md:text-2xl font-bold text-amber-400 mb-3 md:mb-4">{speaker}</p>
      <p className="text-xl md:text-2xl text-white leading-relaxed">{text}</p>
    </motion.div>
  );
}
