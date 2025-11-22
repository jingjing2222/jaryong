# 조자룡 스토리 웹사이트 구현 계획

## 📌 프로젝트 개요
- Next.js 기반 PPT 스타일 인터랙티브 웹사이트
- 조자룡의 삼국지 스토리를 6개 페이즈로 전개
- Framer Motion으로 부드러운 애니메이션 연출
- shadcn UI로 깔끔한 버튼/컴포넌트 구현

---

## 🎬 6개 페이즈 구조

| 페이즈 | 제목 | 주요 캐릭터 | 배경색 | 핵심 내용 |
|------|------|----------|------|---------|
| 1 | 첫 만남 | 조자룡(young), 유비 | 따뜻한 갈색 | 유비가 조자룡을 처음 만남 |
| 2 | 장군 시절 | 조자룡(general), 유비 | 진한 파란색 | 다른 나라 장군으로 활동 중 재회 |
| 3 | 재회 | 조자룡(loyal), 유비 | 밝은 황금색 | 함께하기로 결심 |
| 4 | 아내 구출 | 조자룡(rescue), 유비, 둘째 아내 | 빨간색/주황색 | **최애 씬** - 위험한 상황에서 아내 구출 |
| 5 | 무력 수준 | 조자룡(powerful) | 검은색/진회색 | 조자룡의 전투력 표현 |
| 6 | 마지막 | 조자룡(elder), 제갈공명(elder) | 짙은 자주색 | 제갈공명 곁에서 영광스럽게 최후 |

---

## 🏗️ 폴더 구조

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx (메인 페이지)
│
├── components/
│   ├── StoryPlayer.tsx (전체 스토리 플레이어 - 상태 관리)
│   ├── PhaseRenderer.tsx (현재 페이즈 렌더링)
│   ├── DialogBox.tsx (대사창)
│   ├── CharacterDisplay.tsx (캐릭터 이미지)
│   └── Controls.tsx (이전/다음 버튼, 페이즈 인디케이터)
│
├── data/
│   └── storyData.ts (모든 페이즈 데이터, 대사, 캐릭터 정보)
│
└── styles/
    └── globals.css (전역 스타일, 배경색)

public/
└── images/
    ├── zhao_yun_young.png
    ├── zhao_yun_general.png
    ├── zhao_yun_loyal.png
    ├── zhao_yun_rescue.png
    ├── zhao_yun_powerful.png
    ├── zhao_yun_elder.png
    ├── liu_bei_young.png
    ├── liu_bei_reunion.png
    ├── liu_bei_desperate.png
    ├── liu_bei_elder.png
    ├── zhuge_liang_young.png
    ├── zhuge_liang_elder.png
    ├── lady_xiahou_danger.png
    └── lady_xiahou_rescued.png
```

---

## 💾 데이터 구조 (storyData.ts)

### 타입 정의

```typescript
interface DialogStep {
  speaker: string; // "조자룡", "유비" 등
  text: string; // 대사
}

interface Character {
  name: string;
  image: string; // "/images/zhao_yun_young.png"
  position: "left" | "right"; // 캐릭터 위치
}

interface StoryPhase {
  id: number;
  title: string;
  backgroundColor: string; // Tailwind 색상 클래스
  characters: Character[]; // 이 페이즈에 등장하는 캐릭터들
  dialogSteps: DialogStep[]; // 순차적 대사
}

interface StoryData {
  phases: StoryPhase[];
}
```

### 데이터 예시

```typescript
const storyData: StoryData = {
  phases: [
    {
      id: 1,
      title: "첫 만남",
      backgroundColor: "bg-amber-100",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_young.png", position: "left" },
        { name: "유비", image: "/images/liu_bei_young.png", position: "right" }
      ],
      dialogSteps: [
        { speaker: "유비", text: "이 누구신가?" },
        { speaker: "조자룡", text: "저는 조자룡입니다." },
        // ... 더 많은 대사
      ]
    },
    // ... 5개 페이즈 더
  ]
};
```

---

## 🎨 컴포넌트 상세 설명

### 1. **StoryPlayer.tsx** (상태 관리 + 레이아웃)

**역할:**
- 현재 페이즈 인덱스 관리
- 현재 대사 단계 인덱스 관리
- 전체 컨테이너 레이아웃

**상태:**
```typescript
const [phaseIndex, setPhaseIndex] = useState(0);
const [dialogIndex, setDialogIndex] = useState(0);

const currentPhase = storyData.phases[phaseIndex];
const currentDialog = currentPhase.dialogSteps[dialogIndex];
```

**로직:**
- 다음 버튼 클릭:
  - dialogIndex < 마지막 대사라면 dialogIndex++
  - 마지막 대사면 phaseIndex++, dialogIndex = 0
- 이전 버튼 클릭:
  - dialogIndex > 0이면 dialogIndex--
  - dialogIndex = 0이면 phaseIndex--, dialogIndex = 마지막

**렌더링:**
```
<div className={`${currentPhase.backgroundColor} transition-colors duration-500`}>
  <CharacterDisplay characters={currentPhase.characters} />
  <DialogBox speaker={currentDialog.speaker} text={currentDialog.text} />
  <Controls
    onNext={handleNext}
    onPrev={handlePrev}
    phaseIndex={phaseIndex}
    dialogIndex={dialogIndex}
    totalDialogs={currentPhase.dialogSteps.length}
  />
</div>
```

---

### 2. **PhaseRenderer.tsx** (선택사항 - 페이즈별 렌더링 최적화)

만약 각 페이즈가 다른 레이아웃을 가져야 한다면 사용. 지금은 일관된 레이아웃이므로 생략 가능.

---

### 3. **CharacterDisplay.tsx** (캐릭터 표시)

**Props:**
```typescript
interface CharacterDisplayProps {
  characters: Character[];
}
```

**기능:**
- 왼쪽/오른쪽에 캐릭터 이미지 배치
- 페이즈 전환 시 이미지 변경
- Framer Motion 애니메이션:
  - initial: `opacity: 0, x: -50` (왼쪽) / `x: 50` (오른쪽)
  - animate: `opacity: 1, x: 0`
  - transition: `duration: 0.5`

**렌더링:**
```
<div className="flex justify-between items-center">
  {characters.map(char => (
    <motion.img
      key={char.name}
      src={char.image}
      animate={{ opacity: 1 }}
      className={char.position === "left" ? "w-40" : "w-40"}
    />
  ))}
</div>
```

---

### 4. **DialogBox.tsx** (대사창)

**Props:**
```typescript
interface DialogBoxProps {
  speaker: string;
  text: string;
}
```

**기능:**
- 화자명과 대사 표시
- 하단에 배치
- Framer Motion으로 부드러운 페이드인

**렌더링:**
```
<motion.div
  className="bg-black/70 text-white p-6 rounded-lg"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  <p className="font-bold text-lg">{speaker}</p>
  <p className="text-sm mt-2">{text}</p>
</motion.div>
```

---

### 5. **Controls.tsx** (컨트롤 버튼)

**Props:**
```typescript
interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  phaseIndex: number;
  dialogIndex: number;
  totalDialogs: number;
}
```

**기능:**
- shadcn Button 사용
- 이전/다음 버튼
- 페이즈 진행률 표시 (예: 1/6)
- 대사 진행 상태 (예: 2/5)

**렌더링:**
```
<div className="flex justify-between items-center mt-6">
  <Button onClick={onPrev} variant="outline">← 이전</Button>

  <div className="text-center">
    <p>페이즈 {phaseIndex + 1}/6</p>
    <p className="text-sm text-gray-500">{dialogIndex + 1}/{totalDialogs}</p>
  </div>

  <Button onClick={onNext} variant="default">다음 →</Button>
</div>
```

---

## 🎬 Framer Motion 애니메이션

### 1. 배경색 전환
```typescript
className={`${currentPhase.backgroundColor} transition-colors duration-500`}
```

### 2. 캐릭터 등장/퇴장
```typescript
<motion.img
  key={character.name}
  initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: position === "left" ? -50 : 50 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>
```

### 3. 대사창 페이드
```typescript
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.3 }}
/>
```

### 4. 버튼 호버 (shadcn 기본값 사용)

---

## 🎨 색상 팔레트 (Tailwind)

| 페이즈 | 색상 | Tailwind 클래스 |
|------|------|----------------|
| 1 | 따뜻한 갈색 | `bg-amber-100` |
| 2 | 진한 파란색 | `bg-blue-900` |
| 3 | 밝은 황금색 | `bg-yellow-100` |
| 4 | 빨간색/주황색 | `bg-red-200` |
| 5 | 검은색/진회색 | `bg-gray-900` |
| 6 | 짙은 자주색 | `bg-purple-900` |

---

## 🔄 사용자 인터랙션 흐름

```
1. 페이지 로드
   ↓
2. Phase 1, Dialog 1 표시
   ↓
3. 사용자 "다음" 클릭
   ↓
4. Dialog 2 표시 (같은 Phase)
   ↓
5. Dialog 마지막까지 반복
   ↓
6. Phase 2로 전환 (배경색 + 캐릭터 변경)
   ↓
7. 반복... Phase 6까지
   ↓
8. Phase 6, Dialog 마지막에서 "다음" 클릭 불가
```

---

## 📦 필요한 패키지

```json
{
  "dependencies": {
    "framer-motion": "^10.x",
    "@radix-ui/react-button": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
```

shadcn 버튼은 이미 설치되어 있다고 가정.

---

## 🚀 구현 순서

1. **storyData.ts 작성** - 모든 페이즈 + 대사 + 캐릭터 데이터
2. **Controls.tsx 구현** - shadcn Button으로 버튼 레이아웃
3. **CharacterDisplay.tsx 구현** - 이미지 표시 + Framer Motion
4. **DialogBox.tsx 구현** - 대사창 표시
5. **StoryPlayer.tsx 구현** - 전체 상태 관리 + 레이아웃
6. **page.tsx 수정** - StoryPlayer 렌더링
7. **스타일링 + 최적화** - 반응형, 성능 체크

---

## ✅ 체크리스트

- [ ] storyData.ts 작성
- [ ] Controls 컴포넌트 구현
- [ ] CharacterDisplay 컴포넌트 구현
- [ ] DialogBox 컴포넌트 구현
- [ ] StoryPlayer 컴포넌트 구현
- [ ] page.tsx 연결
- [ ] Framer Motion 애니메이션 테스트
- [ ] 반응형 레이아웃 확인
- [ ] 배경색 전환 스무스하게
- [ ] 최종 테스트

---

## 🎯 최종 결과물

- 클릭만으로 조자룡의 스토리 흐름 체험
- 부드러운 Framer Motion 애니메이션
- 깔끔한 shadcn UI 버튼
- 각 페이즈별 고유한 배경색
- 반응형 레이아웃 (모바일 대응)
