// window 객체에 씬별 배역 이름 저장
declare global {
  interface Window {
    castNames: Record<number, Record<string, string>>;
  }
}

// 초기화
if (typeof window !== 'undefined' && !window.castNames) {
  window.castNames = {};
}

// 배역 이름 설정 (씬 ID별)
export function setCastName(phaseId: number, character: string, actorName: string) {
  if (typeof window !== 'undefined') {
    if (!window.castNames[phaseId]) {
      window.castNames[phaseId] = {};
    }
    window.castNames[phaseId][character] = actorName;
  }
}

// 배역 이름 가져오기 (씬 ID별)
export function getCastName(phaseId: number, character: string): string {
  if (typeof window !== 'undefined') {
    return window.castNames[phaseId]?.[character] || '';
  }
  return '';
}
