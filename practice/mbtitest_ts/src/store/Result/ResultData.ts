import { IResult } from "./types";
import 스핑크스 from "../../assets/cat/스핑크스.jpg";
import 러시안블루 from "../../assets/cat/러시안블루.jpg";
import 샴 from "../../assets/cat/샴.jpg";
import 페르시안 from "../../assets/cat/페르시안.jpg";
import 뱅갈 from "../../assets/cat/뱅갈.jpg";
import 앙고라 from "../../assets/cat/앙고라.jpg";
import 아비시니안 from "../../assets/cat/아비시니안.jpg";
import 노르웨이숲 from "../../assets/cat/노르웨이숲.jpg";
import 아메리칸숏헤어 from "../../assets/cat/아메리칸숏헤어.jpg";
import 코리안숏헤어 from "../../assets/cat/코리안숏헤어.jpg";
import 엑조틱 from "../../assets/cat/엑조틱.jpg";
import 스코티쉬 from "../../assets/cat/스코티쉬.jpg";
import 먼치킨 from "../../assets/cat/먼치킨.jpg";
import 렉돌 from "../../assets/cat/렉돌.jpg";
import 브리티쉬 from "../../assets/cat/브리티쉬.jpg";
import 메인쿤 from "../../assets/cat/메인쿤.jpg";

export const ResultData: IResult[] = [
  {
    id: 1,
    name: "러시안 블루",
    best: "ESTJ",
    mbti: "ISFJ",
    desc: "겁이 많아요. 워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다.",
    image: `${러시안블루}`,
  },
  {
    id: 2,
    name: "샴",
    best: "ESFP",
    mbti: "INFP",
    desc: "대체적으로 온순하고 느긋한 성격입니다. 외로움을 잘타며 질투심이 강해요. 수다스럽고 독립심이 강한 고양이 입니다.",
    image: `${샴}`,
  },
  {
    id: 3,
    name: "페르시안",
    best: "ENTJ",
    mbti: "ISTP",
    desc: "조용하고 성격도 순한 편이여서 개냥이가 되는 경우가 많습니다. 장모종이라서 털이 굉장히 부드럽습니다.",
    image: `${페르시안}`,
  },
  {
    id: 4,
    name: "뱅갈",
    best: "INTP",
    mbti: "ISFP",
    desc: "활동력이 어마어마한 고양이예요! 그렇기 때문에 살이 안찌는 고양이 중 하나입니다.",
    image: `${뱅갈}`,
  },
  {
    id: 5,
    name: "터키쉬 앙고라",
    best: "INTJ",
    mbti: "INFP",
    desc: "우아한 고양이! 그러다 보니 까칠하고 성질이 조금 급합니다. 잔머리가 많고 복수심이 많은 고양이입니다.",
    image: `${앙고라}`,
  },
  {
    id: 6,
    name: "아비시니안",
    best: "ISTJ",
    mbti: "ESFJ",
    desc: "민첩하고 호기심이 많고 똑똑한 고양이입니다! 굉장히 수다쟁이여서 집사가 부르면 야옹하고 대답도 잘하는 고양이입니다.",
    image: `${아비시니안}`,
  },
  {
    id: 7,
    name: "노르웨이 숲",
    best: "ESTP",
    mbti: "ESTJ",
    desc: "조용하고 사람을 매우 좋아하는 고양이 중 하나! 숲에서 살던 고양이라 본능적으로 사냥놀이를 굉장히 좋아합니다.",
    image: `${노르웨이숲}`,
  },
  {
    id: 8,
    name: "아메리칸 숏헤어",
    best: "INFP",
    mbti: "ISTJ",
    desc: "주인에 대한 호기심이 높고 애교가 굉장히 많습니다. 다만! 집사 내꺼야! 독점욕도 굉장히 강합니다.",
    image: `${아메리칸숏헤어}`,
  },
  {
    id: 9,
    name: "코리안 숏헤어",
    best: "ISFP",
    mbti: "ESFJ",
    desc: "많은 고양이의 혈통이 섞여있는 고양이예요! 대부분 활발하고 쾌활한 성격을 지니고 있고 친밀하고 영리합니다.",
    image: `${코리안숏헤어}`,
  },
  {
    id: 10,
    name: "엑조틱",
    best: "ISFJ",
    mbti: "ENFP",
    desc: "낯을 가리지 않고, 주인 옆에서 느긋하게 일상을 즐기는 고양이입니다. 다만 운동량이 많지 않아 뚱뚱 합니다. ",
    image: `${엑조틱}`,
  },
  {
    id: 11,
    name: "스코티쉬 골드",
    best: "ENFP",
    mbti: "INFJ",
    desc: "사교적인 ESTP와 어울리는 스핑크스는 장난기가 많습니다.",
    image: `${스코티쉬}`,
  },
  {
    id: 12,
    name: "먼치킨",
    best: "INFJ",
    mbti: "INTJ",
    desc: "사교적인 성격으로 놀기 좋아하며, 호기심이 많고 장난감을 가지고 달리고 쫓기는 것을 좋아합니다.",
    image: `${먼치킨}`,
  },
  {
    id: 13,
    name: "렉돌",
    best: "ESFJ",
    mbti: "INTP",
    desc: "긴 털과 아주 예쁜 외모로 많이 사랑받는 고양이! 봉제인형이라는 이름처럼 집사가 안으면 인형처럼 안겨있는 모습이 매력적입니다.",
    image: `${렉돌}`,
  },
  {
    id: 14,
    name: "브리티쉬 숏헤서",
    best: "ENTP",
    mbti: "ESFJ",
    desc: "이름과 같이 영국 신사와 같은 고양이!, 배려심이 깊고 매우 조용하고 인내심이 강한 고양이입니다. 덩치가 큰 편이예요",
    image: `${브리티쉬}`,
  },
  {
    id: 15,
    name: "스핑크스",
    best: "ISTP",
    mbti: "ESTP",
    desc: "유일하게 털이 없는 고양이 입니다. 외모와는 다르게 고양이 중에서 가장 성격이 좋다고 하는 고양이계의 골든리트리버 입니다.",
    image: `${스핑크스}`,
  },
  {
    id: 16,
    name: "메인쿤",
    best: "ENFJ",
    mbti: "ESFP",
    desc: "거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 매우 똑똑하고 크기와 생김새가 기가 막힙니다.",
    image: `${메인쿤}`,
  },
];
