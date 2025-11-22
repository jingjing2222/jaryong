"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IntroPageProps {
  onStart: () => void;
}

export function IntroPage({ onStart }: IntroPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-black flex flex-col items-center justify-center p-8"
    >
      <div className="max-w-2xl text-center space-y-8">
        {/* 제목 */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-amber-100"
        >
          조자룡
        </motion.h1>

        {/* 부제 */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-amber-200"
        >
          趙子龍
        </motion.p>

        {/* 소개 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 text-amber-50"
        >
          <p className="text-lg leading-relaxed">
            삼국지 연의 속 가장 완벽한 영웅
          </p>
          <p className="text-base leading-relaxed text-amber-100">
            유비를 만난 순간부터 죽음까지, 의로움과 충성심으로 한 시대를 밝혔던 그의 이야기
          </p>
        </motion.div>

        {/* 라인 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"
        />

        {/* 시작 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            onClick={onStart}
            className="px-12 py-3 text-lg bg-amber-600 hover:bg-amber-700 text-white rounded-lg"
          >
            이야기 시작하기
          </Button>
        </motion.div>

        {/* 안내문 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm text-amber-300 mt-8"
        >
          화살표 키나 스페이스바로 이야기를 진행할 수 있습니다
        </motion.p>
      </div>
    </motion.div>
  );
}
