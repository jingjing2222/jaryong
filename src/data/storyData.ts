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
        { speaker: "나레이션", text: "후한의 말년, 세상은 혼란에 빠졌다. 원소와 공손찬이 북방에서 대립하던 시대, 공손찬의 진영에서 두 명의 영웅이 만났다." },
        { speaker: "조자룡", text: "그대가 유현덕인가? 내 이름은 조자룡이라 한다." },
        { speaker: "유비", text: "조자룡이신가! 세상에 이런 영웅이 있다니... 이 유비입니다." },
        { speaker: "조자룡", text: "공손찬 장군께서는 그만의 그릇이 있으실 뿐... 나는 당신을 보고 다른 뜻을 느꼈습니다." },
        { speaker: "유비", text: "그렇다면 함께 가시겠습니까? 이 혼란한 세상을 바꾸려면 당신 같은 분이 필요합니다." },
        { speaker: "조자룡", text: "당신이라면... 언젠가 반드시 다시 만나길 원합니다. 그때 함께하겠습니다." },
      ],
    },
    {
      id: 2,
      title: "헤어짐과 재회의 기다림",
      backgroundColor: "bg-blue-900",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_general.png", position: "left" },
      ],
      dialogSteps: [
        { speaker: "나레이션", text: "시간이 흘렀다. 조조가 서주를 점령하고 유비는 원소의 진영으로 피신했다. 조자룡은 공손찬의 생각이 옅어져가고 있었다." },
        { speaker: "조자룡", text: "공손찬 장군... 나는 유현덕 형님을 따르고 싶습니다." },
        { speaker: "나레이션", text: "조자룡은 마침내 공손찬을 떠나 원소의 휘하에 몸을 맡겼다. 그곳에서도 그는 형님을 향한 믿음을 잃지 않았다." },
        { speaker: "조자룡", text: "원소 장군 휘하에서도, 형님의 소식을 들으며 살고 있습니다." },
        { speaker: "조자룡", text: "언젠가 반드시 다시 만날 것이라고... 나는 그것만 생각하며 살아왔습니다." },
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
        { speaker: "나레이션", text: "유비는 원소의 진영에서 조자룡의 소식을 듣고 직접 찾아갔다. 그것이 그들의 두 번째 만남이었다." },
        { speaker: "유비", text: "자룡이! 이렇게 만나다니... 그동안 정말 그리웠습니다!" },
        { speaker: "조자룡", text: "형님! 이 모든 세월 속에서 당신을 찾고 있었습니다. 드디어..." },
        { speaker: "나레이션", text: "조자룡은 원소의 진영을 떠나기로 결심했다. 삼국지에서 유비는 조자룡과 같은 침대에서 함께 잤다고 기록될 정도로, 두 사람의 신뢰는 깊었다." },
        { speaker: "조자룡", text: "이제 저는 형님을 따르겠습니다. 죽을 때까지." },
        { speaker: "유비", text: "자룡이... 나도 당신과 함께할 수 있다면 그것만으로 족합니다." },
      ],
    },
    {
      id: 4,
      title: "아내와 아들 구출",
      backgroundColor: "bg-red-200",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_loyal.png", position: "left" },
        { name: "미부인", image: "/images/lady_xiahou_rescued.png", position: "right" },
      ],
      dialogSteps: [
        { speaker: "나레이션", text: "당양현 장판에서의 그 유명한 전투. 조조의 대군이 유비를 추격했고, 유비의 진영은 흩어져갔다." },
        { speaker: "조자룡", text: "형님의 아내와 아들이 조조의 병사들에게 쫓기고 있습니다! 제가 지금 나가겠습니다!" },
        { speaker: "나레이션", text: "조자룡은 스스로 진을 나갔다. 그는 백마 위에서 푸른 창을 들고, 수천의 조조 병사들 속으로 돌진했다." },
        { speaker: "조자룡", text: "길을 내어라! 내가 가는 곳은 누구도 막을 수 없다!" },
        { speaker: "미부인", text: "아! 구원자여! 우리를... 우리 아들을 구해주십시오!" },
        { speaker: "조자룡", text: "형님의 아내와 아들이시다! 이 조자룡, 죽음도 두렵지 않습니다!" },
        { speaker: "나레이션", text: "조자룡은 아내 미부인을 안고 아들 아두를 가슴에 품고 적진을 헤쳐 나갔다. 수백의 화살이 빗발쳤지만, 그는 모두를 막아냈다." },
        { speaker: "조자룡", text: "형님! 돌아왔습니다!" },
        { speaker: "유비", text: "자룡이... 감사합니다. 우리 아들은..." },
        { speaker: "유비", text: "하마터면 훌륭하고 용맹한 장수를 잃을 뻔했다!" },
        { speaker: "나레이션", text: "이 순간, 유비는 자신의 결정이 얼마나 옳았는지 깨달았다. 조자룡은 단순한 전사가 아니라, 그가 믿을 수 있는 진정한 형제였다." },
        { speaker: "조자룡", text: "..." },
      ],
    },
    {
      id: 5,
      title: "무력 수준",
      backgroundColor: "bg-gray-900",
      characters: [
        { name: "조자룡", image: "/images/zhao_yun_general.png", position: "left" },
      ],
      dialogSteps: [
        { speaker: "나레이션", text: "당대의 기록에서 조자룡의 무력은 전설적이었다. 관우, 장비와 함께 오호대장군으로 불렸던 그는 전투마다 기적을 만들어냈다." },
        { speaker: "나레이션", text: "조자룡의 푸른 창 한 자루가 휩쓸면 백 명의 적군이 무너졌다. 그 말 위의 몸은 수천 명의 화살을 모두 피해냈고, 어떤 칼도 그를 상하게 하지 못했다." },
        { speaker: "나레이션", text: "장판에서의 구출 사건 후, 조자룡은 아문장군으로 승진했다. 그의 무력과 충성심은 모두의 인정을 받았다." },
        { speaker: "조자룡", text: "제 무력의 근원은 형님에 대한 충성심입니다. 그것이 없었다면 제 팔은 단지 약한 팔일 뿐입니다." },
        { speaker: "나레이션", text: "그가 여든이 넘은 나이에도 여전히 적군을 격파했을 때, 당대의 모든 장수들이 그의 위대함을 인정했다. 나이가 무력을 빼앗아가지 못했다." },
        { speaker: "나레이션", text: "오호대장군의 일원으로 불리던 조자룡의 이름은, 형님과 함께한 모든 시간 동안 영원한 전설이 되어갔다." },
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
        { speaker: "나레이션", text: "삼국지의 막바지. 많은 장수들이 비참한 최후를 맞이했다. 관우는 오관 육장에서 죽음을 맞이했고, 장비도 부하에게 참살당했다." },
        { speaker: "나레이션", text: "그러나 조자룡은 달랐다. 유비 곁에서 시작했고, 제갈공명 곁에서 마지막을 맞이했다. 그의 삶은 의로움으로 시작해 의로움으로 끝났다." },
        { speaker: "조자룡", text: "공명이시, 이제 우리의 큰 꿈도 거의 다 왔습니다." },
        { speaker: "제갈공명", text: "자룡이여, 이 모든 세월 나를 따라준 당신이 없었다면 어떤 계획도 성공하지 못했을 것입니다." },
        { speaker: "조자룡", text: "공명이시, 이것이 제 길입니다. 당신 곁에서 마지막까지." },
        { speaker: "나레이션", text: "조자룡은 여든이 넘은 나이에도 제갈공명을 모시며 북벌에 나섰다. 죽음 앞에서도 그는 흔들리지 않았다." },
        { speaker: "조자룡", text: "형님을 만났을 때부터... 저는 이미 죽을 준비가 되어 있었습니다." },
        { speaker: "조자룡", text: "하지만 이 모든 시간은 결코 헛되지 않았습니다. 함께할 수 있었으니까요." },
        { speaker: "나레이션", text: "역사 속에서 조자룡의 최후는 영광스러웠다. 다른 장수들은 배반으로, 질병으로, 적의 칼에 죽었지만, 조자룡은 의로움 속에서 눈을 감았다." },
        { speaker: "나레이션", text: "후대의 사람들은 그를 기억했다. 백마 위의 영웅, 푸른 창을 든 장수, 그리고 절대로 흔들리지 않은 충성심의 화신으로." },
      ],
    },
  ],
};
