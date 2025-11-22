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
      className={`w-screen h-screen ${currentPhase.backgroundColor} transition-colors duration-500 flex flex-col justify-between p-4 md:p-8 overflow-hidden`}
    >
      {/* 캐릭터 표시 */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full">
          <CharacterDisplay characters={currentPhase.characters} />
        </div>
      </div>

      {/* 대사창 및 컨트롤 */}
      <div className="flex-1 flex flex-col justify-end gap-4 md:gap-8 pb-4 md:pb-0">
        <div className="max-w-2xl mx-auto w-full px-2 md:px-0">
          <DialogBox speaker={currentDialog.speaker} text={currentDialog.text} />
        </div>

        {/* 컨트롤 */}
        <div className="max-w-2xl mx-auto w-full px-2 md:px-0">
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
