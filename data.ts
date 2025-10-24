import * as dataEn from "./data-en";

export interface TeamMember {
  role: string;
  name: string;
  nameEn: string;
  portfolio: string;
}

export interface ExhibitionRecord {
  name: string;
  date: string;
  location: string;
  address: string;
  imageUrl: string;
}

// Korean data (default)
export const project = {
  mainTitle: "RE:PERSONA",
  subTitle: "에너지의 형상, 나의 흔적",
};

export const projectIntro = {
  catchyPhrase:
    "음악이 흐르고 당신이 움직이는 순간,\n당신의 에너지가 공간을 채웁니다.",
  title: "리페르소나:\n에너지의 형상, 나의 흔적",
  description: [
    "'RE:PERSONA'는 관람객의 움직임과 열에너지를 실시간으로 감지하여, 눈앞의 LED 공간에 당신만의 빛과 이미지로 확장시키는 1인 몰입형 체험입니다.",
    "체험은 우주적 프리즘 이미지를 시작으로, 스크린 속 화면은 곧 당신의 몸짓, 체온, 리듬을 받아들여 다른 누구와도 다른 예술적 초상으로 변모합니다. 기술은 단순한 연출이 아니라, 보이지 않는 나의 에너지를 시각적으로 증명하는 장치입니다.",
    "'내 에너지가 이렇게 생겼다고?'라는 놀라움은 단순한 흥미를 넘어 자신을 새롭게 바라보게 하는 경험으로 남습니다.",
  ],
  experienceInfo: {
    title: "체험 정보",
    details: [
      "1인 체험형",
      "소요 시간: 약 2분 30초",
      "참여 방식: 현장 참여",
      "공간 구성: 스크린 / 실시간 시각화",
    ],
  },
  qrSection: {
    title: "당신의 에너지는 어떤 이미지로 남았나요?",
    description: "체험 후, 당신만의 리페르소나 영상을 제공합니다.",
  },
};

export const teamIntro = {
  title: "Our TEAM",
  description:
    "팀 도파민은 예술적 자극을 통해 사람들의 감각을 깨우고, 내면의 긍정적인 에너지를 분출시키는 창작자 그룹입니다. 우리가 말하는 도파민은 단순한 쾌감이 아니라, 몸과 마음을 움직이게 하는 창조적 동력입니다. 각자 기획, 기술, 디자인, 아트 분야의 전문성을 지닌 우리는 이 동력을 몰입형 체험 예술로 구현합니다. 우리의 목표는 간단합니다. '예술을 머리로 이해하는 것이 아니라, 온몸과 마음으로 느끼고 즐기는 것.' 리페르소나는 바로 그 철학을 실현하는 첫 번째 실험입니다.",
  membersTitle: "crews",
  contact: "teamdopamine.info@gmail.com",
  members: [
    {
      role: "프로젝트 총괄, 기획",
      name: "최유리",
      nameEn: "CHOI YURI",
      portfolio: "#",
    },
    { role: "개발 총괄", name: "이다진", nameEn: "LEE DAJIN", portfolio: "#" },
    {
      role: "기술 개발",
      name: "안광민",
      nameEn: "AHN KWANGMIN",
      portfolio: "#",
    },
    {
      role: "아트 개발, 디자인",
      name: "김무림",
      nameEn: "KIM MURIM",
      portfolio: "#",
    },
  ] as TeamMember[],
};

export const exhibitions = {
  title: "EXHIBITION",
  records: [
    {
      name: "<더 어울림(The Oulim)>",
      date: "25.10.23 - 25.10.24",
      location: "SJ 쿤스트할레",
      address: "서울시 강남구 언주로 148길 5",
      imageUrl: "/images/3-oulim.png",
    },
    {
      name: "<깔,깔,깔>",
      date: "25.08.27 - 25.09.02",
      location: "스페이스 458",
      address: "서울시 마포구 동교로17길 37",
      imageUrl: "/images/2-kal.png",
    },
    {
      name: "<2025 NCA 장기과정 2기 쇼케이스>",
      date: "25.08.21-25.08.22",
      location: "콘텐츠인재캠퍼스 및 콘텐츠문화광장",
      address: "서울시 동대문구 회기로 66",
      imageUrl: "/images/1-nca.jpg",
    },
  ] as ExhibitionRecord[],
};

export const getData = (language: "ko" | "en") => {
  if (language === "ko") {
    return {
      project,
      projectIntro,
      teamIntro,
      exhibitions,
    };
  } else {
    return dataEn;
  }
};
