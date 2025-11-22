"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { storyData } from "@/data/storyData";
import { setCastName } from "@/lib/cast";

interface CastFormPageProps {
  onComplete: () => void;
}

export function CastFormPage({ onComplete }: CastFormPageProps) {
  // 씬별 입력값: { phaseId: { character: name } }
  const [inputs, setInputs] = useState<Record<number, Record<string, string>>>({});

  const handleInputChange = (phaseId: number, character: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [phaseId]: {
        ...prev[phaseId],
        [character]: value
      }
    }));
    setCastName(phaseId, character, value);
  };

  const handleComplete = () => {
    onComplete();
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100">
            배역 입력
          </h1>
          <p className="text-lg text-amber-200">
            각 씬에 등장하는 인물의 배역 이름을 입력하세요
          </p>
        </motion.div>

        <div className="space-y-12">
          {storyData.phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/50 rounded-lg p-6 border border-amber-600/30"
            >
              <h2 className="text-2xl font-bold text-amber-300 mb-6">
                {index + 1}. {phase.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 나레이션은 항상 표시 */}
                <div className="space-y-2">
                  <label className="text-lg text-amber-100 block">
                    나레이션
                  </label>
                  <input
                    type="text"
                    value={inputs[phase.id]?.['나레이션'] || ''}
                    onChange={(e) => handleInputChange(phase.id, '나레이션', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-amber-600/50 rounded focus:outline-none focus:border-amber-400"
                    placeholder="이름 입력"
                  />
                </div>

                {/* 해당 씬의 캐릭터들 */}
                {phase.characters.map(char => (
                  <div key={char.name} className="space-y-2">
                    <label className="text-lg text-amber-100 block">
                      {char.name}
                    </label>
                    <input
                      type="text"
                      value={inputs[phase.id]?.[char.name] || ''}
                      onChange={(e) => handleInputChange(phase.id, char.name, e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 text-white border border-amber-600/50 rounded focus:outline-none focus:border-amber-400"
                      placeholder="이름 입력"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-black via-black to-transparent pt-8 pb-4">
          <Button
            onClick={handleComplete}
            className="w-full max-w-md mx-auto flex justify-center px-8 py-4 text-lg bg-amber-600 hover:bg-amber-700 text-white rounded-lg"
          >
            완료
          </Button>
        </div>
      </div>
    </div>
  );
}
