export type CardStatus = "운영중" | "재구축 예정" | "신규 개발" | "프로토타입";
export type CardAction = "바로 열기" | "시트 열기" | "새 문서" | "준비 중" | "위키에서 받기" | "Figma에서 열기" | "폴더 열기";

export interface ToolCard {
  title: string;
  description: string;
  url: string;
  status: CardStatus;
  action: CardAction;
  icon: string;
  /** 카드 썸네일에 쓸 실제 이미지 URL. 없으면 기존 그라디언트+아이콘으로 표시. */
  image?: string;
}

export interface ToolSection {
  id: string;
  title: string;
  description: string;
  dotColor: string;
  cards: ToolCard[];
}

export const TOOL_SECTIONS: ToolSection[] = [
  {
    id: "docs",
    title: "기획 · 문서",
    description: "PDR 작성과 관리",
    dotColor: "#a7d4f9",
    cards: [
      {
        title: "PDR 생성 앱",
        description: "라이브·기획전 PDR을 폼으로 작성",
        url: "https://promo-proposal-app.vercel.app/",
        status: "운영중",
        action: "바로 열기",
        icon: "plus",
      },
      {
        title: "PDR 관리 시트",
        description: "작성된 PDR 목록과 진행 상태",
        url: "https://docs.google.com/spreadsheets/d/1jq_zowdGnbvdR-F0eLFKLmZ20DHe4ECYFuKMZyy8HGs/edit?gid=964440552",
        status: "운영중",
        action: "시트 열기",
        icon: "menu",
      },
      {
        title: "라이브 상품안 드라이브",
        description: "기존 라이브 상품안 모음 폴더",
        url: "https://drive.google.com/drive/folders/16ml5TwbRO3iRv5HDpD0RXPsc17rTxJ-X",
        status: "운영중",
        action: "폴더 열기",
        icon: "bookmark",
      },
    ],
  },
  {
    id: "creative",
    title: "소재 제작",
    description: "프모페 · 배너 · 영상 소재",
    dotColor: "#d0b4fd",
    cards: [
      {
        title: "프모페 생성 앱",
        description: "프로모션 페이지 시안 자동 생성",
        url: "https://promotion-design-studio.vercel.app/",
        status: "재구축 예정",
        action: "바로 열기",
        icon: "share",
      },
      {
        title: "기본 진입점 배너 메이커",
        description: "항공홈 진입점 배너 제작",
        url: "https://flight-banner-maker.vercel.app/requests",
        status: "운영중",
        action: "바로 열기",
        icon: "bookmark",
      },
      {
        title: "DA 숏츠 메이커",
        description: "인스타용 광고 숏츠 제작",
        url: "https://da-shorts-maker.myrealtrip.net/",
        status: "운영중",
        action: "바로 열기",
        icon: "activity",
      },
      {
        title: "지금 특가 AI 동영상 제작",
        description: "지금 특가 소재용 AI 동영상",
        url: "https://aidea-final.vercel.app/",
        status: "운영중",
        action: "바로 열기",
        icon: "star",
      },
      {
        title: "캐로셀 자동화",
        description: "노선 입력 → 시안 + 엑셀 → ZIP",
        url: "/carousel",
        status: "운영중",
        action: "바로 열기",
        icon: "home",
      },
    ],
  },
  {
    id: "pricing",
    title: "최저가 · 항공링크",
    description: "노선 최저가 조회와 검색 링크",
    dotColor: "#94e7d1",
    cards: [
      {
        title: "프로모킷",
        description: "노선별 최저가 일괄 조회",
        url: "https://my-real-promokit.streamlit.app/",
        status: "운영중",
        action: "바로 열기",
        icon: "airplane_ticket",
      },
      {
        title: "myreal flight pricing lab (마프랩)",
        description: "노선별 최저가 일정 상세 조회",
        url: "http://myrealflight.duckdns.org/",
        status: "운영중",
        action: "바로 열기",
        icon: "filter",
      },
      {
        title: "항공링크 생성 시트",
        description: "검색 링크 일괄 생성",
        url: "https://docs.google.com/spreadsheets/d/1MtN-IK7BtlxbtfmyAq7xViv4U0oiLmgdZPk8huP4ETo/edit?gid=1173658748",
        status: "운영중",
        action: "시트 열기",
        icon: "calendar",
      },
    ],
  },
  {
    id: "plugins",
    title: "플러그인 도구",
    description: "피그마 · CMS 플러그인",
    dotColor: "#ffd4cc",
    cards: [
      {
        title: "CMS 앵커링 자동화",
        description: "프모페 등록 · 앵커링 자동화",
        url: "https://myrealtrip.atlassian.net/wiki/spaces/~712020e9e743b8b4f94ad8a7966d5623decc10/pages/5819367450/CMS+ver+3.1",
        status: "운영중",
        action: "위키에서 받기",
        icon: "activity",
      },
      {
        title: "피그마 노선 카드 생성",
        description: "노선 카드 일괄 생성",
        url: "https://myrealtrip.atlassian.net/wiki/spaces/~712020e9e743b8b4f94ad8a7966d5623decc10/pages/edit-v2/5999755432",
        status: "운영중",
        action: "위키에서 받기",
        icon: "bookmark",
      },
      {
        title: "RENAME IT",
        description: "레이어 이름 일괄 변경 (Figma 커뮤니티 플러그인)",
        url: "https://www.figma.com/community/plugin/731271836271143349/rename-it",
        status: "운영중",
        action: "Figma에서 열기",
        icon: "search",
      },
    ],
  },
];

export interface AdminRow {
  task: string;
  page: string;
  url: string;
  connected: boolean;
}

export interface AdminGroup {
  title: string;
  rows: AdminRow[];
}

export const ADMIN_GROUPS: AdminGroup[] = [
  {
    title: "구좌",
    rows: [
      {
        task: "응모 아이디 생성",
        page: "프로모션 응모 관리",
        url: "https://manager.myrealtrip.com/promotion/promotion-enrolls",
        connected: true,
      },
      {
        task: "지금 특가 등록",
        page: "지금 특가 관리",
        url: "https://manager.myrealtrip.com/now-deal",
        connected: true,
      },
      {
        task: "지금 특가 동영상 보관",
        page: "지금 특가 영상 소스 (Google Drive)",
        url: "https://drive.google.com/drive/folders/1mBrnetct9qfdNwxCd6K09ClYAHV9D8Cd",
        connected: true,
      },
      {
        task: "프모페 등록 · 앵커링",
        page: "프로모션 CMS",
        url: "https://promotion.myrealtrip.com/promotion/",
        connected: true,
      },
      {
        task: "플로팅 배너 등록",
        page: "버티컬홈 관리 → 최저가 알림 받기 캐러셀",
        url: "https://manager.myrealtrip.com/vertical-home/flight-overseas",
        connected: true,
      },
      {
        task: "캐로셀 등록",
        page: "버티컬홈 관리 → 항공홈 1줄 캐로셀",
        url: "https://manager.myrealtrip.com/vertical-home/flight-overseas",
        connected: true,
      },
      {
        task: "배너 · 팝업 · 숏컷 등록",
        page: "파트너사이트 광고 관리",
        url: "https://partner.myrealtrip.com/advertisement/list",
        connected: true,
      },
    ],
  },
  {
    title: "라이브 관리",
    rows: [
      {
        task: "샵라이브 관리",
        page: "샵라이브 캠페인 어드민",
        url: "https://adm.shoplive.cloud/#/campaigns?_p=1&_l=30&campaignStatus=ALL&_sc=scheduled_at&_sa=false&_expand=service&zoneId=1&_ci=20086&viewType=list",
        connected: true,
      },
      {
        task: "라이브 상품 에어브릿지 생성",
        page: "라이브 상품 에어브릿지 생성 시트",
        url: "https://docs.google.com/spreadsheets/d/1tPsaM2pZhel45UrFhmr2mXO00cJ08Jgych3tyWCEOIU/edit?gid=175705095#gid=175705095",
        connected: true,
      },
      {
        task: "라이브 경품 추첨",
        page: "라이브 경품 추첨 시트",
        url: "https://docs.google.com/spreadsheets/d/1laDisEq7BER4SJ32YwCVsyKYPxFjOttQU1roLF5fSA8/edit?pli=1&gid=2069621977#gid=2069621977",
        connected: true,
      },
      {
        task: "KIE 라이브 에셋",
        page: "KIE 라이브 에셋 모음 (Figma)",
        url: "https://www.figma.com/design/1Z5xeAs4UAPk2MbeXwRbzk/-%25EC%2597%2590%25EC%259D%25B4%25EC%25B9%2598%25ED%258B%25B0%25EC%25BC%2580%25EC%259D%25B4--%25EC%2597%2590%25EC%2585%258B-%25EB%25AA%25A8%25EC%259D%258C?node-id=0-1&p=f&t=t7Ne0u2yCJHI6T6g-0",
        connected: true,
      },
    ],
  },
];

// 소재별 추출 규격 (진행 가이드 하단에 표시)
export const EXPORT_SPECS: { target: string; spec: string }[] = [
  { target: "PC 배너", spec: "JPEG 2배수" },
  { target: "MO 배너", spec: "JPEG 3배수" },
  { target: "메인홈 팝업", spec: "JPEG 4배수" },
  { target: "숏컷", spec: "40×40 · JPEG 3배수" },
  { target: "메인홈 · 버티컬홈 배너", spec: "JPEG 1배수" },
  { target: "OG 이미지 (CMS 썸네일)", spec: "JPEG 1배수" },
];

export interface TrackSubstep {
  id: string;
  title: string;
  description: string;
  tool?: string;
  toolUrl?: string;
  links?: { label: string; url: string }[];
}

export interface TrackStep {
  title: string;
  substeps: TrackSubstep[];
}

export interface Track {
  id: string;
  label: string;
  steps: TrackStep[];
}

export const TRACKS: Track[] = [
  {
    id: "live",
    label: "라이브",
    steps: [
      {
        title: "기획",
        substeps: [
          { id: "0-0", title: "PDR · 상품안 작성", description: "라이브 상품 기획안 작성", tool: "PDR 생성 앱", toolUrl: "https://promo-proposal-app.vercel.app/", links: [{ label: "라이브 상품안", url: "https://docs.google.com/spreadsheets/d/1zI36i-Wfz2_CZugynfXkOMO74y2qlEDxBl1PItuinlw/edit?gid=1301630918#gid=1301630918" }] },
        ],
      },
      {
        title: "사전알림 준비",
        substeps: [
          { id: "1-0", title: "응모 아이디 생성", description: "사전알림 응모 이벤트 준비", tool: "어드민", toolUrl: "https://manager.myrealtrip.com/promotion/promotion-enrolls" },
          { id: "1-1", title: "사전알림용 프모페 제작", description: "프로모션 페이지 제작 및 CMS 등록", links: [{ label: "피그마", url: "https://www.figma.com/design/kBfQMzTMmrvVM3Xu7WhkjO/%ED%95%AD%EA%B3%B5-%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98_%ED%86%B5%ED%95%A9?node-id=7896-17335&t=0uotC2qViYWMQW21-1" }, { label: "CMS 등록", url: "https://promotion.myrealtrip.com/promotion/" }] },
          { id: "1-2", title: "기본 진입점 제작", description: "항공홈 진입점 배너 및 팝업 제작", tool: "배너 메이커", toolUrl: "https://flight-banner-maker.vercel.app/requests" },
          { id: "1-3", title: "DA 제작", description: "인스타용 광고 소재 제작", tool: "DA 숏츠 메이커", toolUrl: "https://da-shorts-maker.myrealtrip.net/" },
          { id: "1-4", title: "지금 특가 등록", description: "기존 소재 재사용 / 신규 제작", tool: "어드민", toolUrl: "https://manager.myrealtrip.com/now-deal" },
          { id: "1-5", title: "플로팅 배너 등록", description: "플로팅 배너 소재 등록", tool: "어드민", toolUrl: "https://manager.myrealtrip.com/vertical-home/flight-overseas" },
          { id: "1-6", title: "앱푸시 발송 준비", description: "앱푸시 소재 및 발송 예약" },
        ],
      },
      {
        title: "본프로모션 준비",
        substeps: [
          { id: "2-0", title: "프모페 제작", description: "본프로모션 페이지 제작 및 CMS 등록", tool: "프모페 생성 앱", toolUrl: "https://promotion-design-studio.vercel.app/", links: [{ label: "피그마", url: "https://www.figma.com/design/kBfQMzTMmrvVM3Xu7WhkjO/%ED%95%AD%EA%B3%B5-%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98_%ED%86%B5%ED%95%A9?node-id=7896-17335&t=0uotC2qViYWMQW21-1" }] },
          { id: "2-1", title: "당일 최저가 업데이트", description: "당일 최저가로 노선 카드 갱신", tool: "프로모킷", toolUrl: "https://my-real-promokit.streamlit.app/" },
        ],
      },
      {
        title: "검수",
        substeps: [
          { id: "3-0", title: "KIE 에셋 검수", description: "방송 전 최종 검수", tool: "KIE 라이브 에셋", toolUrl: "https://www.figma.com/design/1Z5xeAs4UAPk2MbeXwRbzk/-%25EC%2597%2590%25EC%259D%25B4%25EC%25B9%2598%25ED%258B%25B0%25EC%25BC%2580%25EC%259D%25B4--%25EC%2597%2590%25EC%2585%258B-%25EB%25AA%25A8%25EC%259D%258C?node-id=0-1&p=f&t=t7Ne0u2yCJHI6T6g-0" },
        ],
      },
    ],
  },
  {
    id: "promo",
    label: "기획전",
    steps: [
      {
        title: "기획",
        substeps: [{ id: "0-0", title: "PDR 작성", description: "기획전 PDR 작성", tool: "PDR 생성 앱", toolUrl: "https://promo-proposal-app.vercel.app/" }],
      },
      {
        title: "제작",
        substeps: [
          { id: "1-0", title: "프모페 · 배너 자동화", description: "자동화 앱으로 소재 생성", tool: "프모페 생성 앱", toolUrl: "https://promotion-design-studio.vercel.app/" },
          { id: "1-1", title: "피그마로 프모페 제작", description: "수작업 프모페 시안 제작" },
          { id: "1-2", title: "기본 진입점 제작", description: "항공홈 진입점 배너 제작", tool: "배너 메이커", toolUrl: "https://flight-banner-maker.vercel.app/requests" },
        ],
      },
      {
        title: "운영",
        substeps: [
          { id: "2-0", title: "당일 최저가 업데이트", description: "당일 최저가로 노선 카드 갱신", tool: "프로모킷", toolUrl: "https://my-real-promokit.streamlit.app/" },
        ],
      },
    ],
  },
  {
    id: "banner",
    label: "배너",
    steps: [
      {
        title: "제작",
        substeps: [
          { id: "0-0", title: "배너 제작", description: "피그마 '26년 *월' 페이지에서 작업 · 항공사 로고도 있어요", tool: "배너 메이커", toolUrl: "https://flight-banner-maker.vercel.app/requests", links: [{ label: "피그마", url: "https://www.figma.com/design/0PiUr7x2pFG9hpjEdnY2mo/-%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98--%ED%95%AD%EA%B3%B5-%ED%99%88-%EB%B0%B0%EB%84%88?node-id=65-226&t=lezmb7YjiEEct6Rn-1" }] },
        ],
      },
      {
        title: "등록",
        substeps: [
          { id: "1-0", title: "배너 등록", description: "파트너사이트 광고 관리에서 등록", tool: "파트너사이트", toolUrl: "https://partner.myrealtrip.com/advertisement/list" },
        ],
      },
    ],
  },
  {
    id: "carousel",
    label: "캐로셀",
    steps: [
      {
        title: "제작 · 등록",
        substeps: [
          { id: "0-0", title: "캐로셀 제작", description: "노선 입력 → 시안 + 엑셀 생성", tool: "캐로셀 자동화", toolUrl: "/carousel" },
          { id: "0-1", title: "캐로셀 등록", description: "항공홈 1줄 캐로셀 등록", tool: "어드민", toolUrl: "https://manager.myrealtrip.com/vertical-home/flight-overseas" },
        ],
      },
    ],
  },
  {
    id: "shortcut",
    label: "숏컷",
    steps: [
      {
        title: "제작 · 등록",
        substeps: [
          { id: "0-0", title: "숏컷 제작", description: "신규 제작 또는 기존 숏컷 사용", links: [{ label: "피그마", url: "https://www.figma.com/design/kBfQMzTMmrvVM3Xu7WhkjO/%ED%95%AD%EA%B3%B5-%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98_%ED%86%B5%ED%95%A9?node-id=7658-16813&t=0uotC2qViYWMQW21-1" }] },
          { id: "0-1", title: "숏컷 등록", description: "파트너사이트 광고 관리에서 등록", tool: "파트너사이트", toolUrl: "https://partner.myrealtrip.com/advertisement/list" },
        ],
      },
    ],
  },
  {
    id: "daily",
    label: "당일 최저가 업데이트",
    steps: [
      {
        title: "조회",
        substeps: [
          { id: "0-0", title: "프로모킷 실행", description: "노선별 최저가 일괄 조회", tool: "프로모킷", toolUrl: "https://my-real-promokit.streamlit.app/" },
          { id: "0-1", title: "비싼 노선 직접 확인", description: "이상치 노선은 마프랩에서 재확인", tool: "마프랩", toolUrl: "http://myrealflight.duckdns.org/" },
        ],
      },
      {
        title: "반영",
        substeps: [
          { id: "1-0", title: "시트 복사 후 피그마 플러그인", description: "결과를 시트로 복사해 시안 반영" },
          { id: "1-1", title: "CMS 등록 후 앵커링", description: "갱신된 캐로셀 CMS 등록", tool: "어드민", toolUrl: "https://promotion.myrealtrip.com/promotion/" },
        ],
      },
    ],
  },
];
