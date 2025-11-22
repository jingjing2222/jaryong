import { Button } from "@/components/ui/button";

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  phaseIndex: number;
  dialogIndex: number;
  totalDialogs: number;
  totalPhases: number;
  phaseTitle: string;
}

export function Controls({
  onNext,
  onPrev,
  phaseIndex,
  dialogIndex,
  totalDialogs,
  totalPhases,
  phaseTitle,
}: ControlsProps) {
  const isFirstPhase = phaseIndex === 0;
  const isLastDialog = dialogIndex === totalDialogs - 1;
  const isLastPhase = phaseIndex === totalPhases - 1;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{phaseTitle}</h2>
        <p className="text-base md:text-lg text-gray-300">
          페이즈 {phaseIndex + 1}/{totalPhases}
        </p>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          대사 {dialogIndex + 1}/{totalDialogs}
        </p>
      </div>

      <div className="flex justify-between items-center gap-2 md:gap-4">
        <Button
          onClick={onPrev}
          disabled={isFirstPhase && dialogIndex === 0}
          variant="outline"
          className="min-w-24 md:min-w-32 text-xs md:text-sm"
        >
          ← 이전
        </Button>

        <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-300"
            style={{
              width: `${(((phaseIndex * 10 + dialogIndex) / (totalPhases * 10 - 1)) * 100).toFixed(0)}%`,
            }}
          />
        </div>

        <Button
          onClick={onNext}
          disabled={isLastPhase && isLastDialog}
          variant="default"
          className="min-w-24 md:min-w-32 text-xs md:text-sm"
        >
          다음 →
        </Button>
      </div>
    </div>
  );
}
