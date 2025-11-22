export interface DialogStep {
  speaker: string;
  text: string;
}

export interface Character {
  name: string;
  image: string;
  position: "left" | "right";
}

export interface StoryPhase {
  id: number;
  title: string;
  backgroundColor: string;
  characters: Character[];
  dialogSteps: DialogStep[];
}

export interface StoryData {
  phases: StoryPhase[];
}

export const storyData: StoryData = {
  phases: [
    {
      id: 1,
      title: "첫 만남",
      backgroundColor: "bg-amber-100",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_young.png", position: "left" },
        { name: "유비", image: "/images/liu_bei_young.png", position: "right" },
      ],
      dialogSteps: [
        { speaker: "유비", text: "저기... 혹시 당신이 그 유명한 조자룡인가?" },
        { speaker: "조자룡", text: "저는 단지 이 혼란한 세상에서 의로운 사람을 찾고 있을 뿐입니다." },
        { speaker: "유비", text: "의로움이라... 나도 그런 길을 걷고 싶네요." },
        { speaker: "조자룡", text: "그렇다면 함께 가시겠습니까? 함께라면 세상도 바꿀 수 있을 것 같습니다." },
        { speaker: "유비", text: "좋습니다. 함께 의로운 세상을 만들어봅시다." },
      ],
    },
    {
      id: 2,
      title: "장군 시절",
      backgroundColor: "bg-blue-900",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_general.png", position: "left" },
        { name: "유비", image: "/images/liu_bei_young.png", position: "right" },
      ],
      dialogSteps: [
        { speaker: "조자룡", text: "세월이 이렇게 많이 흘렀군요... 이 나라에서의 모든 영광도 결국..." },
        { speaker: "조자룡", text: "형님... 당신은 어디에서 무엇을 하고 계십니까?" },
        { speaker: "유비", text: "자룡이로군! 이렇게 만나다니... 그동안 정말 그리웠습니다!" },
        { speaker: "조자룡", text: "형님! 이 모든 세월 속에서 당신을 찾고 있었습니다. 드디어..." },
        { speaker: "유비", text: "나도 당신을 다시 만날 수 있다면... 그것만으로 족합니다." },
      ],
    },
    {
      id: 3,
      title: "재회",
      backgroundColor: "bg-yellow-100",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_loyal.png", position: "left" },
        { name: "유비", image: "/images/liu_bei_reunion.png", position: "right" },
      ],
      dialogSteps: [
        { speaker: "조자룡", text: "형님, 저는 이 모든 것을 버리고 당신을 따르겠습니다." },
        { speaker: "유비", text: "자룡이, 그럴 필요는 없습니다. 하지만... 함께할 수 있다면?" },
        { speaker: "조자룡", text: "저는 이미 당신과 함께하는 것 외에 다른 길은 없습니다. 진정한 주인은 형님뿐입니다." },
        { speaker: "유비", text: "그렇다면 이제부터 우리는 다시 하나가 되겠군요. 어떤 어려움이 와도." },
      ],
    },
    {
      id: 4,
      title: "아내와 아들 구출",
      backgroundColor: "bg-red-200",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_rescue.png", position: "left" },
        { name: "미부인", image: "/images/lady_xiahou_rescued.png", position: "right" },
      ],
      dialogSteps: [
        { speaker: "조자룡", text: "형님의 아내와 아들이 조조의 병사들에게 쫓기고 있습니다! 제가 지금 나가겠습니다!" },
        { speaker: "조자룡", text: "형님, 저를 믿으십시오. 반드시 무사히 돌려오겠습니다!" },
        { speaker: "조자룡", text: "길을 내어라! 내가 가는 곳은 누구도 막을 수 없다!" },
        { speaker: "미부인", text: "아! 구원자여! 우리를... 우리 아들을 구해주십시오!" },
        { speaker: "조자룡", text: "형님의 아내와 아들이시다! 이 조자룡, 죽음도 두렵지 않습니다!" },
        { speaker: "조자룡", text: "형님! 돌아왔습니다!" },
        { speaker: "유비", text: "자룡이... 감사합니다. 우리 아들은..." },
        { speaker: "유비", text: "하마터면 훌륭하고 용맹한 장수를 잃을 뻔했다!" },
        { speaker: "조자룡", text: "..." },
      ],
    },
    {
      id: 5,
      title: "무력 수준",
      backgroundColor: "bg-gray-900",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_powerful.png", position: "left" },
      ],
      dialogSteps: [
        { speaker: "나레이션", text: "조자룡의 무력은 시대를 뛰어넘었다. 그의 푸른 창 한 자루가 휩쓸면 백 명의 적군이 무너졌고, 그 말 위의 몸은 수천 명의 화살을 모두 피해냈다." },
        { speaker: "나레이션", text: "그가 여든이 넘은 나이에도 여전히 적군을 격파했을 때, 당대의 모든 장수들이 그의 위대함을 인정했다." },
        { speaker: "조자룡", text: "제 무력의 근원은 형님에 대한 충성심입니다. 그것이 없었다면 제 팔은 단지 약한 팔일 뿐입니다." },
        { speaker: "나레이션", text: "오호대장군의 일원으로 불리던 그의 이름은, 형님과 함께한 모든 시간 동안 전설이 되어갔다." },
        { speaker: "나레이션", text: "나이, 피로, 상처 무엇도 그의 눈빛과 팔을 흐리게 하지 못했다. 오직 하나, 형님을 위한 길만이 그를 움직였다." },
      ],
    },
    {
      id: 6,
      title: "마지막",
      backgroundColor: "bg-purple-900",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_elder.png", position: "left" },
        { name: "제갈공명", image: "/images/zhuge_liang_elder.png", position: "right" },
      ],
      dialogSteps: [
        { speaker: "조자룡", text: "공명이시, 이제 우리의 큰 꿈도 거의 다 왔습니다." },
        { speaker: "제갈공명", text: "자룡이여, 이 모든 세월 나를 따라준 당신이 없었다면..." },
        { speaker: "조자룡", text: "공명이시, 이것이 제 길입니다. 당신 곁에서 마지막까지." },
        { speaker: "조자룡", text: "형님을 만났을 때부터... 저는 이미 죽을 준비가 되어 있었습니다." },
        { speaker: "조자룡", text: "하지만 이 모든 시간은 결코 헛되지 않았습니다. 함께할 수 있었으니까요." },
        { speaker: "나레이션", text: "다른 장수들은 역사 속에서 비참하게 사라졌지만, 우리는 의로움과 함께했다." },
      ],
    },
  ],
};
