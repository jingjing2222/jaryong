"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CharacterInfoPageProps {
  onNext: () => void;
}

export function CharacterInfoPage({ onNext }: CharacterInfoPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black overflow-y-auto flex items-center justify-center p-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl space-y-6 py-8"
      >
        {/* 제목 */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-amber-300 text-center">
          조자룡
        </motion.h1>

        {/* 중국식 이름 */}
        <motion.p variants={itemVariants} className="text-2xl text-amber-200 text-center">
          趙雲 | 자는 자룡(子龍)
        </motion.p>

        {/* 구분선 */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />

        {/* 기본 정보 */}
        <motion.div variants={itemVariants} className="space-y-4 text-gray-200">
          <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
            <h3 className="text-amber-400 font-bold mb-2">신분</h3>
            <p className="text-lg">촉한의 무장, 오호대장군 중 한 명</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
            <h3 className="text-amber-400 font-bold mb-2">출신</h3>
            <p className="text-lg">기주 상산군 진정현 출신</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
            <h3 className="text-amber-400 font-bold mb-2">외모</h3>
            <p className="text-lg">신장 8척(약 184cm), 우람한 풍채, 흰 피부</p>
            <p className="text-base text-gray-300 mt-2">상처 하나 없는 깨끗한 몸, 백마 위의 영웅으로 불림</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
            <h3 className="text-amber-400 font-bold mb-2">생애</h3>
            <p className="text-lg leading-relaxed">
              처음 원소의 진영에서 출발하여 공손찬을 거쳐 유비를 만났다.
              유비와의 만남에서 그의 인생이 완성되었으며,
              장판에서 유비의 아내와 아들을 구출함으로써 영웅의 이름을 떨쳤다.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
            <h3 className="text-amber-400 font-bold mb-2">특징</h3>
            <p className="text-lg leading-relaxed">
              탁월한 무력, 흔들리지 않는 충성심, 절대적인 신뢰.
              여든이 넘은 나이에도 전장에서 활약했으며,
              다른 장수들의 비참한 최후와 달리 의로움 속에서 눈을 감았다.
            </p>
          </div>

          <div className="bg-amber-900/30 rounded-lg p-5 border border-amber-600">
            <h3 className="text-amber-300 font-bold mb-2">✨ 역사 속의 조자룡</h3>
            <p className="text-lg leading-relaxed">
              삼국지 정사에는 그의 기록이 짧지만,
              나올 때마다 엄청난 임팩트를 남겼다.
            </p>
            <p className="text-base text-amber-200 mt-3 leading-relaxed">
              • 당양현 장판: 수천의 적군 속에서 홀로 아내와 아들을 구해낸 영웅
              <br />• 일생: 유비를 만난 그 순간부터 죽음까지 흔들리지 않은 모습
              <br />• 최후: 다른 장수들의 비참한 끝과 달리 의로움 속에서 영광스럽게 마감
            </p>
            <p className="text-base text-amber-100 mt-4 italic">
              "적게 나타나지만, 나타날 때마다 역사를 바꾸는 인물"
            </p>
          </div>
        </motion.div>

        {/* 명언 */}
        <motion.div variants={itemVariants} className="text-center mt-8 pt-6 border-t border-gray-700">
          <p className="text-xl text-amber-300 italic">
            "형님을 따르는 것이 제 길입니다"
          </p>
          <p className="text-gray-400 mt-3">— 조자룡의 신념</p>
        </motion.div>

        {/* 다음 버튼 */}
        <motion.div variants={itemVariants} className="pt-6 flex justify-center">
          <Button
            onClick={onNext}
            className="px-12 py-3 text-lg bg-amber-600 hover:bg-amber-700 text-white rounded-lg"
          >
            이야기 시작하기
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
