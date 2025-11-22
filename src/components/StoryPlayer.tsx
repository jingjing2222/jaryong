"use client";

import { useState } from "react";
import { storyData } from "@/data/storyData";
import { CharacterDisplay } from "./CharacterDisplay";
import { DialogBox } from "./DialogBox";
import { Controls } from "./Controls";

export function StoryPlayer() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);

  const currentPhase = storyData.phases[phaseIndex];
  const currentDialog = currentPhase.dialogSteps[dialogIndex];
  const totalDialogs = currentPhase.dialogSteps.length;
  const totalPhases = storyData.phases.length;

  const handleNext = () => {
    if (dialogIndex < totalDialogs - 1) {
      setDialogIndex(dialogIndex + 1);
    } else if (phaseIndex < totalPhases - 1) {
      setPhaseIndex(phaseIndex + 1);
      setDialogIndex(0);
    }
  };

  const handlePrev = () => {
    if (dialogIndex > 0) {
      setDialogIndex(dialogIndex - 1);
    } else if (phaseIndex > 0) {
      setPhaseIndex(phaseIndex - 1);
      setDialogIndex(storyData.phases[phaseIndex - 1].dialogSteps.length - 1);
    }
  };

  return (
    <div
      className={`min-h-screen w-full ${currentPhase.backgroundColor} transition-colors duration-500 flex flex-col justify-between p-8`}
    >
      {/* 캐릭터 표시 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full">
          <CharacterDisplay characters={currentPhase.characters} />
        </div>
      </div>

      {/* 대사창 */}
      <div className="flex-1 flex flex-col justify-end gap-8">
        <div className="max-w-2xl mx-auto w-full">
          <DialogBox speaker={currentDialog.speaker} text={currentDialog.text} />
        </div>

        {/* 컨트롤 */}
        <div className="max-w-2xl mx-auto w-full">
          <Controls
            onNext={handleNext}
            onPrev={handlePrev}
            phaseIndex={phaseIndex}
            dialogIndex={dialogIndex}
            totalDialogs={totalDialogs}
            totalPhases={totalPhases}
            phaseTitle={currentPhase.title}
          />
        </div>
      </div>
    </div>
  );
}
