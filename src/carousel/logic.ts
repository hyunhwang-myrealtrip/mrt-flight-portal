export const AIRPORTS: Record<string, [string, string, string]> = {
  ICN: ["인천", "KR", "Seoul"], GMP: ["김포", "KR", "Seoul"], PUS: ["부산", "KR", "Busan"], CJU: ["제주", "KR", "Jeju Island"],
  TAE: ["대구", "KR", "Daegu"], KWJ: ["광주", "KR", "Gwangju"], RSU: ["여수", "KR", "Yeosu"], USN: ["울산", "KR", "Ulsan"],
  WJU: ["원주", "KR", "Wonju"], KUV: ["군산", "KR", "Gunsan"], HIN: ["사천", "KR", "Sacheon"], YNY: ["양양", "KR", "Yangyang"],
  CJJ: ["청주", "KR", "Cheongju"],
  NRT: ["도쿄", "JP", "Tokyo"], HND: ["도쿄", "JP", "Tokyo"], KIX: ["오사카", "JP", "Osaka"], FUK: ["후쿠오카", "JP", "Fukuoka"],
  CTS: ["삿포로", "JP", "Sapporo"], OKA: ["오키나와", "JP", "Okinawa"], NGO: ["나고야", "JP", "Nagoya"],
  UKB: ["고베", "JP", "Kobe"], FSZ: ["시즈오카", "JP", "Shizuoka"], HIJ: ["히로시마", "JP", "Hiroshima"],
  MYJ: ["마쓰야마", "JP", "Matsuyama"], OIT: ["오이타", "JP", "Oita"], KKJ: ["기타큐슈", "JP", "Kitakyushu"],
  ISG: ["이시가키", "JP", "Ishigaki"], SHI: ["시모지시마", "JP", "Shimojishima"],
  TPE: ["타이베이", "TW", "Taipei"], TSA: ["타이베이", "TW", "Taipei"], KHH: ["가오슝", "TW", "Kaohsiung"], RMQ: ["타이중", "TW", "Taichung"],
  HKG: ["홍콩", "HK", "Hong Kong"], MFM: ["마카오", "MO", "Macau"],
  PVG: ["상하이", "CN", "Shanghai"], PEK: ["베이징", "CN", "Beijing"], PKX: ["베이징(다싱)", "CN", "Beijing Daxing"],
  TAO: ["칭다오", "CN", "Qingdao"], CAN: ["광저우", "CN", "Guangzhou"], WEH: ["웨이하이", "CN", "Weihai"],
  YNJ: ["옌지", "CN", "Yanji"], HRB: ["하얼빈", "CN", "Harbin"], YNT: ["옌타이", "CN", "Yantai"],
  SZX: ["선전", "CN", "Shenzhen"], SHE: ["선양", "CN", "Shenyang"], URC: ["우루무치", "CN", "Urumqi"],
  BKK: ["방콕", "TH", "Bangkok"], CNX: ["치앙마이", "TH", "Chiang Mai"], HKT: ["푸켓", "TH", "Phuket"],
  DAD: ["다낭", "VN", "Da Nang"], HAN: ["하노이", "VN", "Hanoi"], SGN: ["호치민", "VN", "Ho Chi Minh City"], PQC: ["푸꾸옥", "VN", "Phu Quoc"],
  CXR: ["나트랑", "VN", "Nha Trang"],
  CEB: ["세부", "PH", "Cebu"], MNL: ["마닐라", "PH", "Manila"], CRK: ["클락", "PH", "Clark Philippines"], MPH: ["보라카이", "PH", "Boracay (Caticlan)"],
  TAG: ["보홀", "PH", "Bohol"],
  SIN: ["싱가포르", "SG", "Singapore"], KUL: ["쿠알라룸푸르", "MY", "Kuala Lumpur"], BKI: ["코타키나발루", "MY", "Kota Kinabalu"],
  DPS: ["발리", "ID", "Bali"], CGK: ["자카르타", "ID", "Jakarta"],
  VTE: ["비엔티안", "LA", "Vientiane"], RGN: ["양곤", "MM", "Yangon"],
  GUM: ["괌", "GU", "Guam"], SPN: ["사이판", "MP", "Saipan"],
  SYD: ["시드니", "AU", "Sydney"], MEL: ["멜버른", "AU", "Melbourne"], BNE: ["브리즈번", "AU", "Brisbane"], AKL: ["오클랜드", "NZ", "Auckland"],
  PER: ["퍼스", "AU", "Perth"], OOL: ["골드코스트", "AU", "Gold Coast"], CHC: ["크라이스트처치", "NZ", "Christchurch"],
  ZQN: ["퀸스타운", "NZ", "Queenstown"],
  HNL: ["호놀룰루", "US", "Honolulu"], LAX: ["로스앤젤레스", "US", "Los Angeles"], JFK: ["뉴욕", "US", "New York City"],
  SFO: ["샌프란시스코", "US", "San Francisco"], SEA: ["시애틀", "US", "Seattle"], LAS: ["라스베이거스", "US", "Las Vegas"],
  ORD: ["시카고", "US", "Chicago"], BOS: ["보스턴", "US", "Boston"], IAD: ["워싱턴 D.C.", "US", "Washington D.C."],
  ATL: ["애틀랜타", "US", "Atlanta"], MIA: ["마이애미", "US", "Miami"], DFW: ["댈러스", "US", "Dallas"], DEN: ["덴버", "US", "Denver"],
  MEX: ["멕시코시티", "MX", "Mexico City"], CUN: ["칸쿤", "MX", "Cancun"],
  GRU: ["상파울루", "BR", "Sao Paulo"], EZE: ["부에노스아이레스", "AR", "Buenos Aires"],
  YVR: ["밴쿠버", "CA", "Vancouver"], YYZ: ["토론토", "CA", "Toronto"], YUL: ["몬트리올", "CA", "Montreal"],
  FCO: ["로마", "IT", "Rome"], MXP: ["밀라노", "IT", "Milan"], VCE: ["베네치아", "IT", "Venice"],
  BCN: ["바르셀로나", "ES", "Barcelona"], MAD: ["마드리드", "ES", "Madrid"], LIS: ["리스본", "PT", "Lisbon"],
  CDG: ["파리", "FR", "Paris"], NCE: ["니스", "FR", "Nice"], LHR: ["런던", "GB", "London"], MAN: ["맨체스터", "GB", "Manchester"],
  EDI: ["에든버러", "GB", "Edinburgh"], FRA: ["프랑크푸르트", "DE", "Frankfurt"],
  MUC: ["뮌헨", "DE", "Munich"], ZRH: ["취리히", "CH", "Zurich"], VIE: ["비엔나", "AT", "Vienna"],
  PRG: ["프라하", "CZ", "Prague"], AMS: ["암스테르담", "NL", "Amsterdam"], BRU: ["브뤼셀", "BE", "Brussels"],
  IST: ["이스탄불", "TR", "Istanbul"], ATH: ["아테네", "GR", "Athens"], HEL: ["헬싱키", "FI", "Helsinki"],
  CPH: ["코펜하겐", "DK", "Copenhagen"], OSL: ["오슬로", "NO", "Oslo"], ARN: ["스톡홀름", "SE", "Stockholm"],
  DUB: ["더블린", "IE", "Dublin"], BUD: ["부다페스트", "HU", "Budapest"], WAW: ["바르샤바", "PL", "Warsaw"],
  DXB: ["두바이", "AE", "Dubai"], AUH: ["아부다비", "AE", "Abu Dhabi"], DOH: ["도하", "QA", "Doha"], CAI: ["카이로", "EG", "Cairo"],
  DEL: ["델리", "IN", "Delhi"], ULN: ["울란바토르", "MN", "Ulaanbaatar"], UBN: ["울란바토르", "MN", "Ulaanbaatar"],
  TAS: ["타슈켄트", "UZ", "Tashkent"], ALA: ["알마티", "KZ", "Almaty"], SVO: ["모스크바", "RU", "Moscow"],
};

export const SHORT = ["KR", "JP", "TW", "CN", "HK", "MO", "TH", "VN", "PH", "SG", "MY", "ID", "GU", "MP", "MN"];

interface StayGroup {
  name: string;
  codes?: string[];
  order: number[];
}

// 지역별 체류 일정 우선순위 — 값은 엑셀 '가격조회 기간'(총 일수). 4박5일 = 5
export const STAY_GROUPS: StayGroup[] = [
  { name: "동남아", codes: ["TH", "VN", "PH", "SG", "MY", "ID"], order: [4, 5, 3] },
  { name: "일본", codes: ["JP"], order: [3, 4, 5] },
  { name: "중국·대만·홍콩", codes: ["CN", "TW", "HK", "MO"], order: [4, 3, 5] },
  { name: "괌·사이판", codes: ["GU", "MP"], order: [5, 4, 6] },
  { name: "국내", codes: ["KR"], order: [2, 3] },
  { name: "대양주", codes: ["AU", "NZ"], order: [8, 7, 9] },
  { name: "미주", codes: ["US", "CA"], order: [8, 9, 10] },
];
const LONG_DEFAULT: StayGroup = { name: "장거리", order: [8, 9, 7] };

export function stayGroup(arr: string): StayGroup {
  const c = AIRPORTS[arr] ? AIRPORTS[arr][1] : null;
  if (!c) return { name: "미확인", order: [5, 4, 3] };
  const g = STAY_GROUPS.find((x) => x.codes?.indexOf(c) !== -1);
  return g || LONG_DEFAULT;
}

export const AIRLINES = [
  { code: "ALL", label: "전체 (ALL)" },
  { code: "KE", label: "대한항공 (KE)" },
  { code: "OZ", label: "아시아나항공 (OZ)" },
  { code: "7C", label: "제주항공 (7C)" },
  { code: "LJ", label: "진에어 (LJ)" },
  { code: "TW", label: "티웨이항공 (TW)" },
  { code: "ZE", label: "이스타항공 (ZE)" },
  { code: "BX", label: "에어부산 (BX)" },
  { code: "RS", label: "에어서울 (RS)" },
  { code: "YP", label: "에어프레미아 (YP)" },
  { code: "RF", label: "에어로케이 (RF)" },
  { code: "WE", label: "파라타항공 (WE)" },
  { code: "MU", label: "중국동방항공 (MU)" },
  { code: "CA", label: "중국국제항공 (CA)" },
  { code: "CZ", label: "중국남방항공 (CZ)" },
  { code: "SC", label: "산동항공 (SC)" },
  { code: "GS", label: "천진항공 (GS)" },
  { code: "FM", label: "상하이항공 (FM)" },
  { code: "ZH", label: "심천항공 (ZH)" },
  { code: "CX", label: "캐세이퍼시픽 (CX)" },
  { code: "HX", label: "홍콩항공 (HX)" },
  { code: "NX", label: "마카오항공 (NX)" },
  { code: "CI", label: "중화항공 (CI)" },
  { code: "BR", label: "에바항공 (BR)" },
  { code: "PR", label: "필리핀항공 (PR)" },
  { code: "NH", label: "ANA (NH)" },
  { code: "JL", label: "일본항공 (JL)" },
  { code: "MM", label: "피치항공 (MM)" },
  { code: "TG", label: "타이항공 (TG)" },
  { code: "VN", label: "베트남항공 (VN)" },
  { code: "VJ", label: "비엣젯 (VJ)" },
  { code: "5J", label: "세부퍼시픽 (5J)" },
  { code: "SQ", label: "싱가포르항공 (SQ)" },
  { code: "MH", label: "말레이시아항공 (MH)" },
  { code: "GA", label: "가루다인도네시아 (GA)" },
  { code: "EY", label: "에티하드항공 (EY)" },
  { code: "EK", label: "에미레이트항공 (EK)" },
  { code: "QR", label: "카타르항공 (QR)" },
  { code: "TK", label: "터키항공 (TK)" },
  { code: "LH", label: "루프트한자 (LH)" },
  { code: "AF", label: "에어프랑스 (AF)" },
  { code: "KL", label: "KLM (KL)" },
  { code: "AY", label: "핀에어 (AY)" },
  { code: "UA", label: "유나이티드항공 (UA)" },
  { code: "DL", label: "델타항공 (DL)" },
  { code: "AA", label: "아메리칸항공 (AA)" },
  { code: "HA", label: "하와이안항공 (HA)" },
  { code: "AC", label: "에어캐나다 (AC)" },
];

export interface Theme {
  id: string;
  label: string;
  emoji: string;
  title: string;
  routes: string;
}

export const THEMES: Theme[] = [
  { id: "sea", label: "동남아", emoji: "🌴", title: "햇살 아래 쉬어가는 동남아", routes: "ICN-BKK\nICN-DAD\nICN-CEB\nICN-SIN\nICN-BKI" },
  { id: "us", label: "미주", emoji: "🗽", title: "꿈꾸던 장면 속 미주 여행", routes: "ICN-HNL\nICN-LAX\nICN-JFK\nICN-SFO\nICN-YVR" },
  { id: "jp", label: "일본", emoji: "🍜", title: "가까운 일본, 지금 가장 싸게", routes: "ICN-NRT\nICN-KIX\nICN-FUK\nICN-CTS\nICN-OKA" },
  { id: "cn", label: "중화권", emoji: "🏮", title: "가까워서 더 좋은 중화권 여행", routes: "ICN-TPE\nICN-HKG\nICN-MFM\nICN-PVG\nICN-CAN" },
  { id: "eu", label: "유럽", emoji: "❄️", title: "겨울이 기다리는 유럽으로", routes: "ICN-FCO\nICN-BCN\nICN-MAD\nICN-LIS\nICN-CDG" },
  { id: "kr", label: "국내", emoji: "✈️", title: "주말에 떠나는 국내 항공", routes: "GMP-CJU\nGMP-PUS\nICN-CJU\nPUS-CJU" },
];

export const SLOT_BG = ["#eef3f7", "#f2f0ec", "#eef1f6", "#f1f4f1", "#f4f1f3"];

export const LS_UNSPLASH_KEY = "carousel_unsplash_key";

export function addDays(iso: string, n: number): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

export function isDomestic(dep: string, arr: string): boolean {
  return !!(AIRPORTS[dep] && AIRPORTS[arr] && AIRPORTS[dep][1] === "KR" && AIRPORTS[arr][1] === "KR");
}

const AIR_WEB = "https://air-web.myrealtrip.com/results";
const CABINS: Record<string, string> = { Y: "ECONOMY", S: "PREMIUM_ECONOMY", C: "BUSINESS", F: "FIRST" };

export interface SearchCfg {
  trip: string;
  adt: string;
  chd: string;
  inf: string;
  nonstop: boolean;
  cabinclass: string;
  boardFrom: string;
}

// 실제 검색 페이지 링크 — trip=A.ICN.A.DAD.2026-09-28/A.DAD.A.ICN.2026-10-02
export function buildSearchUrl(cfg: SearchCfg, r: { dep: string; arr: string; date: string }, span: string): string {
  const dep = r.dep;
  const arr = r.arr;
  const out = r.date || cfg.boardFrom;
  if (!dep || !arr || !out) return AIR_WEB;
  const rt = cfg.trip === "왕복";
  const back = addDays(out, Math.max(Number(span || 1) - 1, 1));
  const legs = ["A." + dep + ".A." + arr + "." + out];
  if (rt) legs.push("A." + arr + ".A." + dep + "." + back);
  const p: [string, string][] = [
    ["trip", legs.join("/")],
    ["adult", cfg.adt || "1"],
    ["directOnly", cfg.nonstop ? "true" : "false"],
    ["cabins", CABINS[cfg.cabinclass] || "ECONOMY"],
    ["tripType", rt ? "ROUND_TRIP" : "ONE_WAY"],
    ["cityNames", ko(dep) + "," + ko(arr)],
    ["useProgressUi", "false"],
  ];
  if (Number(cfg.chd) > 0) p.push(["child", cfg.chd]);
  if (Number(cfg.inf) > 0) p.push(["infant", cfg.inf]);
  return AIR_WEB + "?" + p.map(([k, v]) => k + "=" + encodeURIComponent(v)).join("&");
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

export function zipStore(files: { name: string; data: Uint8Array }[]): Blob {
  const enc = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;
  files.forEach((f) => {
    const name = enc.encode(f.name);
    const crc = crc32(f.data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true);
    lh.setUint16(4, 20, true);
    lh.setUint16(6, 0x0800, true);
    lh.setUint16(8, 0, true);
    lh.setUint32(14, crc, true);
    lh.setUint32(18, f.data.length, true);
    lh.setUint32(22, f.data.length, true);
    lh.setUint16(26, name.length, true);
    chunks.push(new Uint8Array(lh.buffer), name, f.data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true);
    ch.setUint16(4, 20, true);
    ch.setUint16(6, 20, true);
    ch.setUint16(8, 0x0800, true);
    ch.setUint32(16, crc, true);
    ch.setUint32(20, f.data.length, true);
    ch.setUint32(24, f.data.length, true);
    ch.setUint16(28, name.length, true);
    ch.setUint32(42, offset, true);
    central.push(new Uint8Array(ch.buffer), name);
    offset += 30 + name.length + f.data.length;
  });
  const centralSize = central.reduce((a, b) => a + b.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, centralSize, true);
  end.setUint32(16, offset, true);
  return new Blob([...chunks, ...central, new Uint8Array(end.buffer)] as BlobPart[], { type: "application/zip" });
}

function num(v: string): string {
  return String(v || "").replace(/[^0-9]/g, "");
}

export function won(v: string): string {
  const n = num(v);
  return n ? Number(n).toLocaleString("ko-KR") + "원" : "가격 미입력";
}

export function ko(c: string): string {
  return AIRPORTS[c] ? AIRPORTS[c][0] : c;
}

export function en(c: string): string {
  return AIRPORTS[c] ? AIRPORTS[c][2] : "";
}

export function routeLabel(dep: string, arr: string): string {
  if (!dep && !arr) return "노선 미입력";
  return (ko(dep) || "?") + " → " + (ko(arr) || "?");
}

export function isShort(arr: string): boolean {
  const c = AIRPORTS[arr] ? AIRPORTS[arr][1] : null;
  return c ? SHORT.indexOf(c) !== -1 : true;
}

export interface Row {
  dep: string;
  arr: string;
  date: string;
  price: string;
  span: string;
  img: string;
  credit: string;
  status: string;
  label: string;
}

// 시안 슬롯·상품명에 쓰는 이름. 직접 입력한 label이 있으면 그걸 쓰고, 없으면 국내선은
// "김포 ↔ 제주"(왕복)/"김포 → 제주"(편도)처럼 출발지까지 표기하고, 국제선은 도착지 한글명만 쓴다.
export function effectiveLabel(r: Row, trip?: string): string {
  if (r.label.trim()) return r.label.trim();
  if (isDomestic(r.dep, r.arr)) {
    return ko(r.dep) + (trip === "편도" ? " → " : " ↔ ") + ko(r.arr);
  }
  return ko(r.arr);
}

// 도착지 공항코드 → 큐레이션 사진 URL. 값을 채워두면 "사진 일괄 불러오기"에서
// Unsplash 자동 검색 대신 이 사진을 항상 씁니다. 원하는 사진의 URL을 여기 추가하세요.
export const LANDMARK_PHOTOS: Partial<Record<string, string>> = {
  BKK: "https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?auto=format&fit=crop&w=1080&q=80", // 방콕 · 파란/노란 자동 인력거
  DAD: "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?auto=format&fit=crop&w=1080&q=80", // 다낭 · 골든브릿지
  CXR: "https://images.unsplash.com/photo-1653611136846-7c67d6746638?auto=format&fit=crop&w=1080&q=80", // 나트랑 · 보트가 있는 수역
  PQC: "https://images.unsplash.com/photo-1693294603830-f44c9511d643?auto=format&fit=crop&w=1080&q=80", // 푸꾸옥 · 시계탑 조감도
  HAN: "https://images.unsplash.com/photo-1726346234848-a6c0e78efd8c?auto=format&fit=crop&w=1080&q=80", // 하노이 · 기찻길
  SGN: "https://images.unsplash.com/photo-1667412069803-270c58412317?auto=format&fit=crop&w=1080&q=80", // 호치민 · 거리
  CEB: "https://images.unsplash.com/photo-1710330759028-e6c3c73678ba?auto=format&fit=crop&w=1080&q=80", // 세부 · 강 위 오두막
  MPH: "https://images.unsplash.com/photo-1542213493895-edf5b94f5a96?auto=format&fit=crop&w=1080&q=80", // 보라카이 · 코코넛 나무
};

export function mkRow(dep?: string, arr?: string): Row {
  const arrUp = (arr || "").toUpperCase();
  const curated = LANDMARK_PHOTOS[arrUp];
  return {
    dep: (dep || "").toUpperCase(),
    arr: arrUp,
    date: "",
    price: "",
    span: String(stayGroup(arrUp).order[0]),
    img: curated ?? "",
    credit: curated ? "큐레이션" : "",
    status: curated ? "큐레이션 사진" : "",
    label: "",
  };
}

export function parseRoutes(text: string): Row[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const p = l.split(/[\s,\-–>→]+/).filter(Boolean);
      return mkRow(p[0], p[1]);
    });
}

export function isDateOutOfRange(date: string, boardFrom: string, boardTo: string): boolean {
  return !!date && ((!!boardFrom && date < boardFrom) || (!!boardTo && date > boardTo));
}

const CMS_HEADERS = [
  "항공사코드 (선택, 빈값=ALL)",
  "출발지*",
  "도착지*",
  "가는날*",
  "가격조회 기간*",
  "경유* (0=직항, 1=1회경유, 2=2회경유, -1=구분없음)",
  "왕복/편도*",
  "상품명*",
  "탭 구분 (선택)",
  "노출 시작 일시 (선택)",
  "노출 종료 일시 (선택)",
  "좌상단 태그 카피 (선택)",
  "혜택 텍스트 1 (선택)",
  "혜택 텍스트 2 (선택)",
  "(싱글 전용) 특가 태그 레이블",
  "판매가 (선택)",
];

// CMS 원본 템플릿(항공_상품카드_아이템_등록_템플릿.xlsx)과 서식을 그대로 맞춘 xlsx를 만든다.
// 1행 비움 · 2행 헤더(굵게·흰 글자·회색#808080 배경·가운데 정렬·얇은 테두리) ·
// 3행부터 데이터(회색#808080 글자·얇은 테두리) · 전 컬럼 너비 25.
export async function buildXlsx(rows: Row[], airlineCode: string, trip: string): Promise<Blob> {
  const ExcelJS = (await import("exceljs")).default;
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("Sheet1");

  ws.columns = CMS_HEADERS.map(() => ({ width: 25 }));

  const thin = { style: "thin" as const };

  const headerRow = ws.getRow(2);
  CMS_HEADERS.forEach((text, i) => {
    const cell = headerRow.getCell(i + 1);
    cell.value = text;
    cell.font = { name: "Calibri", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF808080" } };
    cell.alignment = { horizontal: "center", vertical: "middle" };
    // 헤더는 칸마다 좌/우/위 테두리 (아래쪽은 데이터 첫 행의 윗변이 대신한다).
    cell.border = { left: thin, right: thin, top: thin };
  });
  headerRow.height = 17.4;
  headerRow.commit();

  const lastCol = CMS_HEADERS.length - 1;
  const lastRowIdx = rows.length - 1;
  rows.forEach((r, i) => {
    const values = [
      airlineCode,
      r.dep,
      r.arr,
      r.date,
      r.span,
      "-1",
      trip,
      effectiveLabel(r, trip),
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    const row = ws.getRow(3 + i);
    values.forEach((v, j) => {
      const cell = row.getCell(j + 1);
      cell.value = v;
      cell.font = { name: "Calibri", size: 11, color: { argb: "FF808080" } };
      // 데이터 영역은 칸 사이에 선을 넣지 않고, 전체를 감싸는 바깥 테두리만 긋는다:
      // 첫 행만 윗변, 마지막 행만 아랫변, 첫 열만 왼쪽, 마지막 열만 오른쪽.
      cell.border = {
        ...(i === 0 ? { top: thin } : {}),
        ...(i === lastRowIdx ? { bottom: thin } : {}),
        ...(j === 0 ? { left: thin } : {}),
        ...(j === lastCol ? { right: thin } : {}),
      };
    });
    row.height = 17.4;
    row.commit();
  });

  const buf = await wb.xlsx.writeBuffer();
  return new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

export function applyLabPaste(
  rows: Row[],
  labPaste: string,
  boardFrom: string,
  boardTo: string
): { rows: Row[]; hit: number } {
  const lines = labPaste
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const next = rows.slice();
  let hit = 0;
  lines.forEach((line) => {
    const codes = (line.toUpperCase().match(/\b[A-Z]{3}\b/g) || []).filter((c) => AIRPORTS[c]);
    const dm = line.match(/(20\d{2})[-./](\d{1,2})[-./](\d{1,2})/);
    const nums = (line.match(/[\d,]{4,}/g) || []).map((n) => Number(n.replace(/,/g, ""))).filter((n) => n > 10000);
    const price = nums.length ? Math.max(...nums) : null;
    const date = dm ? dm[1] + "-" + String(dm[2]).padStart(2, "0") + "-" + String(dm[3]).padStart(2, "0") : null;
    if (!codes.length || (!price && !date)) return;
    const dep = codes.length > 1 ? codes[0] : null;
    const arr = codes.length > 1 ? codes[1] : codes[0];
    const i = next.findIndex((r) => (dep ? r.dep === dep && r.arr === arr : r.arr === arr));
    if (i === -1) return;
    const inRange = !date || ((!boardFrom || date >= boardFrom) && (!boardTo || date <= boardTo));
    next[i] = {
      ...next[i],
      date: date || next[i].date,
      price: price ? String(price) : next[i].price,
      status: inRange ? "붙여넣기 적용" : "붙여넣기 적용 — 탑승 기간 밖 확인",
    };
    hit += 1;
  });
  return { rows: next, hit };
}

export interface UnsplashPhoto {
  urls: { regular: string };
  user?: { name?: string };
  likes?: number;
}

// 관련도 정렬 결과의 1번째(index 0)는 광고성·엉뚱한 사진이 섞이는 경우가 많아
// 2번째(index 1) 결과를 쓴다.
// offset 0 = 기존 "관련성 두번째 사진" 그대로. 같은 도착지가 여러 노선에 나오면
// offset을 1씩 늘려 호출해서 서로 다른 사진을 받게 한다(결과 개수를 넘으면 순환).
export function pickUnsplashPhoto(results: UnsplashPhoto[], offset = 0): UnsplashPhoto | null {
  if (!results.length) return null;
  const idx = (1 + offset) % results.length;
  return results[idx];
}

export async function searchUnsplashPhoto(query: string, accessKey: string, offset = 0): Promise<UnsplashPhoto | null> {
  const res = await fetch(
    "https://api.unsplash.com/search/photos?per_page=8&query=" +
      encodeURIComponent(query) +
      "&client_id=" +
      encodeURIComponent(accessKey)
  );
  if (!res.ok) throw new Error(String(res.status));
  const data = await res.json();
  return pickUnsplashPhoto((data.results ?? []) as UnsplashPhoto[], offset);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface FlightSearchResultItem {
  dep_date: string;
  airline_code: string;
  price: number;
  stop_cnt: number;
}

// 사내 항공 최저가 스크레이핑 서버(myrealflight.duckdns.org, /api/flightSearch로 프록시).
// MCP와 달리 레이트리밋이 없고, 노선당 딱 한 번의 비동기 요청으로 조회기간 전체 날짜 x 전
// 항공사(저가항공사 포함) 가격을 한꺼번에 받아온다 — 그래서 캘린더로 후보를 추리고 실시간으로
// 재확인하던 예전 방식이 통째로 필요 없어졌다. 검색은 비동기(task_id 발급 후 폴링)라 완료까지
// 보통 20~30초 걸린다.
export async function fetchLowestPrice(
  dep: string,
  arr: string,
  boardFrom: string,
  boardTo: string,
  onProgress?: (done: number, total: number) => void,
  airlineCode?: string
): Promise<{ price: number; date: string; span: string } | "blocked" | null> {
  const period = stayGroup(arr).order[0];
  const nights = period - 1;
  const lastMonth = new Date(boardTo + "T00:00:00").getMonth() + 1;
  const airline = airlineCode && airlineCode !== "ALL" ? airlineCode : "";

  const searchBody = {
    dom_int: "I",
    trip_type: "RT",
    channel: "organic",
    max_stops: 2,
    airline,
    dep_city: dep,
    arr_city: arr,
    adt: 1,
    chd: 0,
    inf: 0,
    cabin_class: "Y",
    dep_from: boardFrom,
    dep_to: boardTo,
    dep_months: String(lastMonth),
    nights: String(nights),
    nights_label: nights + "박" + period + "일",
    fare_type: "성인운임",
    arr_flight_no: "",
    dep_flight_no: "",
    arr_time_patterns: ["전체"],
    dep_time_patterns: ["전체"],
    dep_weekdays: ["전체"],
    ret_arr_city: "",
    ret_dep_city: "",
  };

  let taskId: string;
  try {
    const res = await fetch("/api/flightSearch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchBody),
    });
    if (!res.ok) return "blocked";
    const data = await res.json();
    if (!data?.task_id) return "blocked";
    taskId = data.task_id;
  } catch {
    return "blocked";
  }

  const maxAttempts = 60;
  for (let i = 0; i < maxAttempts; i++) {
    await sleep(2000);
    onProgress?.(i + 1, maxAttempts);
    let data: { status?: string; results?: FlightSearchResultItem[] };
    try {
      const res = await fetch("/api/flightSearch?taskId=" + encodeURIComponent(taskId));
      if (!res.ok) continue;
      data = await res.json();
    } catch {
      continue;
    }
    if (data.status !== "done") continue;

    const items = data.results ?? [];
    // air-web 기본 검색·마프랩 최저가 그래프 둘 다 경유 포함 전체에서 최저가를 보여준다.
    // 장거리 노선은 직항이 드물고 비싸서, 직항만 우선하면 훨씬 싼 경유편을 놓치게 된다.
    // airline이 지정돼 있으면(ALL이 아니면) 서버 필터를 믿지 않고 한 번 더 걸러서, 다른
    // 항공사 요금이 섞여 나오는 경우를 막는다.
    const inWindow = items.filter(
      (x) => x.dep_date >= boardFrom && x.dep_date <= boardTo && (!airline || x.airline_code === airline)
    );
    if (!inWindow.length) return null;
    const cheapest = inWindow.reduce((a, b) => (b.price < a.price ? b : a));
    return { price: cheapest.price, date: cheapest.dep_date, span: String(period) };
  }
  return "blocked";
}
