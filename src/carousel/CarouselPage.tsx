import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import logo from "../assets/logo_mrt_wordmark.png";
import "./CarouselPage.css";
import {
  AIRLINES,
  THEMES,
  SLOT_BG,
  LS_UNSPLASH_KEY,
  type Row,
  type Theme,
  mkRow,
  parseRoutes,
  searchUnsplashPhoto,
  LANDMARK_PHOTOS,
  stayGroup,
  isShort,
  isDomestic,
  isDateOutOfRange,
  routeLabel,
  effectiveLabel,
  won,
  ko,
  en,
  buildSearchUrl,
  fetchLowestPrice,
  buildXlsx,
  zipStore,
} from "./logic";

interface CarouselState {
  airline: string;
  airlineCode: string;
  trip: string;
  theme: string;
  emoji: string;
  title: string;
  bulk: string;
  rows: Row[];
  unsplashKey: string;
  boardFrom: string;
  boardTo: string;
  nonstop: boolean;
  cabinclass: string;
  adt: string;
  chd: string;
  inf: string;
  zipLog: string;
  zipOk: boolean;
  photoLog: string;
  photoOk: boolean;
  priceLog: string;
  priceOk: boolean;
  photosRunning: boolean;
  pricesRunning: boolean;
  priceCurrent: number;
  priceTotal: number;
}

function initialState(): CarouselState {
  return {
    airline: "ALL",
    airlineCode: "ALL",
    trip: "왕복",
    theme: "sea",
    emoji: THEMES[0].emoji,
    title: THEMES[0].title,
    bulk: THEMES[0].routes,
    rows: parseRoutes(THEMES[0].routes),
    unsplashKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY ?? "",
    boardFrom: "",
    boardTo: "",
    nonstop: false,
    cabinclass: "Y",
    adt: "1",
    chd: "0",
    inf: "0",
    zipLog: "",
    zipOk: true,
    photoLog: "",
    photoOk: true,
    priceLog: "",
    priceOk: true,
    photosRunning: false,
    pricesRunning: false,
    priceCurrent: 0,
    priceTotal: 0,
  };
}

function download(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function CarouselPage() {
  const [s, setS] = useState<CarouselState>(initialState());
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const envKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      const k = envKey || localStorage.getItem(LS_UNSPLASH_KEY);
      setS((prev) => ({ ...prev, unsplashKey: k ?? prev.unsplashKey }));
    } catch {
      // ignore
    }
  }, []);

  function patch(i: number, key: keyof Row, val: string) {
    setS((prev) => {
      const rows = prev.rows.slice();
      const r = { ...rows[i], [key]: val } as Row;
      if (key === "arr") {
        r.span = String(stayGroup(val).order[0]);
        const curated = LANDMARK_PHOTOS[val];
        if (curated) {
          r.img = curated;
          r.credit = "큐레이션";
          r.status = "큐레이션 사진";
        }
      }
      rows[i] = r;
      return { ...prev, rows };
    });
  }

  function applyTheme(t: Theme) {
    setS((prev) => ({ ...prev, theme: t.id, emoji: t.emoji, title: t.title, bulk: t.routes, rows: parseRoutes(t.routes) }));
  }

  function cfg() {
    return {
      trip: s.trip,
      adt: s.adt,
      chd: s.chd,
      inf: s.inf,
      nonstop: s.nonstop,
      cabinclass: s.cabinclass,
      boardFrom: s.boardFrom,
    };
  }

  async function fetchPhotos() {
    if (s.pricesRunning || s.photosRunning) {
      setS((prev) => ({ ...prev, photoLog: "최저가 조회가 끝난 뒤에 시도해 주세요.", photoOk: false }));
      return;
    }
    const key = s.unsplashKey.trim();
    if (!key) {
      setS((prev) => ({ ...prev, photoLog: "Access Key를 입력해 주세요.", photoOk: false }));
      return;
    }
    try {
      localStorage.setItem(LS_UNSPLASH_KEY, key);
    } catch {
      // ignore
    }
    setS((prev) => ({ ...prev, photoLog: "불러오는 중…", photoOk: true, photosRunning: true }));
    let ok = 0;
    let rows = s.rows.slice();
    const seenCount: Record<string, number> = {};
    try {
      for (let i = 0; i < rows.length; i++) {
        if (LANDMARK_PHOTOS[rows[i].arr]) {
          ok += 1;
          continue;
        }
        const q = en(rows[i].arr) || ko(rows[i].arr);
        if (!q) {
          rows[i] = { ...rows[i], status: "도착지 코드를 확인해 주세요" };
          continue;
        }
        // 같은 도착지가 여러 노선에 나오면 순서대로 다른 사진을 받도록 offset을 늘린다.
        const offset = seenCount[rows[i].arr] ?? 0;
        seenCount[rows[i].arr] = offset + 1;
        try {
          const hit = await searchUnsplashPhoto(q, key, offset);
          if (!hit) throw new Error("no result");
          rows[i] = {
            ...rows[i],
            img: hit.urls.regular,
            credit: hit.user?.name ?? "",
            status: "Unsplash · " + q + (hit.user?.name ? " · " + hit.user.name : ""),
          };
          ok += 1;
        } catch (e) {
          const reason = e instanceof Error && e.message === "403" ? "요청 한도 초과(403)" : e instanceof Error ? e.message : "알 수 없는 오류";
          rows[i] = { ...rows[i], status: "사진 조회 실패(" + reason + ") — 직접 URL 입력" };
        }
        rows = rows.slice();
        setS((prev) => ({ ...prev, rows }));
      }
      setS((prev) => ({ ...prev, rows, photoLog: ok + " / " + rows.length + "장 불러옴", photoOk: ok > 0 }));
    } finally {
      setS((prev) => ({ ...prev, photosRunning: false }));
    }
  }

  async function fetchPrices() {
    if (s.pricesRunning || s.photosRunning) {
      setS((prev) => ({ ...prev, priceLog: "사진 조회가 끝난 뒤에 시도해 주세요.", priceOk: false }));
      return;
    }
    if (!s.boardFrom || !s.boardTo) {
      setS((prev) => ({ ...prev, priceLog: "탑승 기간을 먼저 입력해 주세요.", priceOk: false }));
      return;
    }
    const days = Math.round((new Date(s.boardTo).getTime() - new Date(s.boardFrom).getTime()) / 86400000) + 1;
    if (days > 180) {
      setS((prev) => ({ ...prev, priceLog: "조회는 탑승 기간 180일까지 지원합니다 — 기간을 줄여 주세요.", priceOk: false }));
      return;
    }
    let rows = s.rows.slice();
    const total = rows.filter((r) => r.dep && r.arr && !isDomestic(r.dep, r.arr)).length;

    setS((prev) => ({
      ...prev,
      priceLog: total ? "0/" + total + " 노선 조회 중… (평균 3분 소요)" : "조회할 노선이 없습니다.",
      priceOk: true,
      pricesRunning: true,
      priceCurrent: 0,
      priceTotal: total,
    }));

    let ok = 0;
    let blockedCount = 0;
    let current = 0;

    try {
      for (let i = 0; i < rows.length; i++) {
        const r = rows[i];
        if (!r.dep || !r.arr) continue;
        if (isDomestic(r.dep, r.arr)) {
          rows[i] = { ...rows[i], status: "국내선은 최저가 조회 미지원 — 수동 입력" };
          rows = rows.slice();
          setS((prev) => ({ ...prev, rows }));
          continue;
        }
        rows[i] = { ...rows[i], status: "조회 중…" };
        rows = rows.slice();
        setS((prev) => ({ ...prev, rows }));
        const result = await fetchLowestPrice(
          r.dep,
          r.arr,
          s.boardFrom,
          s.boardTo,
          (done) => {
            rows[i] = { ...rows[i], status: "조회 중… (" + done * 2 + "초)" };
            rows = rows.slice();
            setS((prev) => ({ ...prev, rows }));
          },
          s.airlineCode
        );
        if (result === "blocked") {
          blockedCount += 1;
          rows[i] = { ...rows[i], status: "조회 서버 연결 실패 — 다시 시도해 주세요" };
        } else if (result) {
          rows[i] = {
            ...rows[i],
            price: String(result.price),
            date: result.date,
            span: result.span,
            status:
              (s.airlineCode && s.airlineCode !== "ALL" ? s.airlineCode + " 조회" : "전체 항공사 조회") +
              " · " +
              (Number(result.span) - 1) +
              "박" +
              result.span +
              "일",
          };
          ok += 1;
        } else {
          rows[i] = { ...rows[i], status: "직항 왕복 데이터 없음 — 수동 확인" };
        }
        rows = rows.slice();
        current += 1;
        setS((prev) => ({
          ...prev,
          rows,
          priceCurrent: current,
          priceLog: current + "/" + total + " 노선 조회 중… (평균 3분 소요)",
        }));
      }

      setS((prev) => ({
        ...prev,
        rows,
        priceLog:
          ok + " / " + rows.length + "건 조회됨" + (blockedCount ? " (" + blockedCount + "건 연결 실패 — 다시 시도해 보세요)" : ""),
        priceOk: ok > 0,
      }));
    } finally {
      setS((prev) => ({ ...prev, pricesRunning: false }));
    }
  }

  function baseName() {
    const t = (s.title || "캐로셀").replace(/[\\/:*?"<>|]/g, "").slice(0, 30);
    return s.airlineCode + "_" + t;
  }

  async function pngBlob(): Promise<Blob | null> {
    const node = proofRef.current;
    if (!node) return null;
    // position:sticky인 카드를 그대로 찍으면 html2canvas의 리사이즈 트릭과 충돌해서
    // 유령 이미지/회색 배경이 생긴다. 화면 밖 멀리(큰 음수 left) 두는 방식도 같은 문제가
    // 있어서, 그냥 페이지 맨 끝에 평범하게(fixed/absolute 없이) 붙였다가 찍고 바로 없앤다.
    const clone = node.cloneNode(true) as HTMLElement;
    clone.style.width = "max-content";
    clone.style.backgroundColor = "#ffffff";
    // 화면에서는 카드가 떠 보이도록 은은한 그림자를 쓰는데, 항공사에 보내는 이미지에는
    // 안 어울리므로 캡처본에서는 그림자를 없애 완전히 평평한 흰 배경으로 만든다.
    clone.style.boxShadow = "none";
    const slotsEl = clone.querySelector<HTMLElement>(".carousel-proof-slots");
    if (slotsEl) {
      slotsEl.style.overflow = "visible";
      slotsEl.style.width = "max-content";
    }
    document.body.appendChild(clone);
    try {
      const canvas = await html2canvas(clone, {
        backgroundColor: "#ffffff",
        scale: 1,
        useCORS: true,
      });
      // 카드 모서리가 둥글어서 바깥쪽이 투명하게 빠질 수 있다. 완전히 불투명한 흰 배경
      // 위에 합성해서, 투명을 검게 표시하는 프로그램에서도 하얗게 보이도록 만든다.
      const opaque = document.createElement("canvas");
      opaque.width = canvas.width;
      opaque.height = canvas.height;
      const octx = opaque.getContext("2d");
      if (octx) {
        octx.fillStyle = "#ffffff";
        octx.fillRect(0, 0, opaque.width, opaque.height);
        octx.drawImage(canvas, 0, 0);
      }
      return await new Promise((res) => opaque.toBlob(res, "image/png"));
    } catch {
      return null;
    } finally {
      document.body.removeChild(clone);
    }
  }

  // 노선별 사진을 정사각형으로 크롭해 개별 PNG로 만든다 (캐로셀 CMS 등록용).
  async function squarePhotoBlob(url: string, size = 1080): Promise<Blob | null> {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("image load failed"));
        img.src = url;
      });
      const side = Math.min(img.naturalWidth, img.naturalHeight);
      const sx = (img.naturalWidth - side) / 2;
      const sy = (img.naturalHeight - side) / 2;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
      return await new Promise((res) => canvas.toBlob(res, "image/png"));
    } catch {
      return null;
    }
  }

  async function downloadCsv() {
    const blob = await buildXlsx(s.rows, s.airlineCode, s.trip);
    download(baseName() + "_일괄등록.xlsx", blob);
  }

  async function downloadPng() {
    const b = await pngBlob();
    if (b) download(baseName() + "_시안.png", b);
    else alert("시안 이미지를 만들지 못했습니다. 외부 사진 URL이 CORS를 막고 있는지 확인해 주세요.");
  }

  async function downloadZip() {
    setS((prev) => ({ ...prev, zipLog: "만드는 중…", zipOk: true }));
    const xlsxBlob = await buildXlsx(s.rows, s.airlineCode, s.trip);
    const files = [{ name: baseName() + "_일괄등록.xlsx", data: new Uint8Array(await xlsxBlob.arrayBuffer()) }];
    const png = await pngBlob();
    if (png) files.push({ name: baseName() + "_시안.png", data: new Uint8Array(await png.arrayBuffer()) });

    let squareOk = 0;
    const withPhotos = s.rows.filter((r) => r.img);
    for (let i = 0; i < withPhotos.length; i++) {
      const r = withPhotos[i];
      const sq = await squarePhotoBlob(r.img);
      if (sq) {
        const safeName = effectiveLabel(r, s.trip).replace(/[\\/:*?"<>|]/g, "");
        files.push({ name: i + 1 + "_" + safeName + ".png", data: new Uint8Array(await sq.arrayBuffer()) });
        squareOk += 1;
      }
    }

    download(baseName() + ".zip", zipStore(files));
    setS((prev) => ({
      ...prev,
      zipLog: png
        ? "ZIP 생성 완료 (엑셀 + 시안 PNG + 정사각형 사진 " + squareOk + "장)"
        : "시안 이미지 생성 실패 — 엑셀만 포함됨. 사진 URL의 CORS를 확인해 주세요",
      zipOk: !!png,
    }));
  }

  return (
    <div className="carousel-page">
      <header className="carousel-header">
        <div className="carousel-header-left">
          <img src={logo} alt="MyRealTrip" className="carousel-logo" />
          <span className="carousel-header-title">캐로셀 자동화</span>
        </div>
        <div className="carousel-header-right">
          <Link to="/" className="btn-ghost">
            포탈로
          </Link>
          <a href="http://myrealflight.duckdns.org/" target="_blank" rel="noreferrer" className="btn-ghost">
            마프랩 열기
          </a>
          <button className="btn-ghost" onClick={downloadCsv}>
            엑셀만
          </button>
          <button className="btn-ghost" onClick={downloadPng}>
            시안 PNG만
          </button>
          <button className="btn-primary" onClick={downloadZip}>
            시안 + 엑셀 ZIP 다운
          </button>
        </div>
      </header>

      <div className="carousel-body">
        <div className="carousel-input-col">
          <SectionHeader n={1} title="항공사 · 테마" desc="항공사 선택 후 테마 고르기" />

          <div className="carousel-airline-row">
            <select value={s.airline} onChange={(e) => setS((p) => ({ ...p, airline: e.target.value, airlineCode: e.target.value }))}>
              {AIRLINES.map((a) => (
                <option key={a.code} value={a.code}>
                  {a.label}
                </option>
              ))}
            </select>
            <input
              value={s.airlineCode}
              onChange={(e) => setS((p) => ({ ...p, airlineCode: e.target.value.toUpperCase() }))}
              placeholder="코드"
              title="일괄등록 엑셀에 들어가는 항공사 코드 · 직접 수정 가능"
              className="input-center"
            />
            <select value={s.trip} onChange={(e) => setS((p) => ({ ...p, trip: e.target.value }))}>
              <option value="왕복">왕복</option>
              <option value="편도">편도</option>
            </select>
          </div>

          <div className="carousel-theme-row">
            {THEMES.map((t) => {
              const on = t.id === s.theme;
              return (
                <button key={t.id} className={`theme-chip ${on ? "theme-chip-on" : ""}`} onClick={() => applyTheme(t)}>
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="carousel-title-row">
            <input value={s.emoji} onChange={(e) => setS((p) => ({ ...p, emoji: e.target.value }))} placeholder="🌴" className="input-emoji" />
            <input value={s.title} onChange={(e) => setS((p) => ({ ...p, title: e.target.value }))} placeholder="시안 제목" className="input-title" />
          </div>

          <SectionHeader n={2} title="노선 입력" desc="한 줄에 하나 · ICN-TPE 또는 ICN TPE" />
          <textarea
            value={s.bulk}
            onChange={(e) => setS((p) => ({ ...p, bulk: e.target.value }))}
            rows={5}
            className="carousel-textarea"
          />
          <div className="carousel-row-actions">
            <button
              className="btn-dark"
              onClick={() => {
                const p = parseRoutes(s.bulk);
                if (p.length) setS((prev) => ({ ...prev, rows: p }));
              }}
            >
              노선 불러오기
            </button>
            <button className="btn-ghost" onClick={() => setS((prev) => ({ ...prev, rows: prev.rows.concat([mkRow("ICN", "")]) }))}>
              행 추가
            </button>
            <span className="carousel-row-count">{s.rows.length}개 노선</span>
          </div>

          <SectionHeader n={3} title="탑승 기간" desc="이 기간 안에서 최저가 일자를 찾습니다" />
          <div className="carousel-date-range">
            <input type="date" value={s.boardFrom} onChange={(e) => setS((p) => ({ ...p, boardFrom: e.target.value }))} />
            <span>—</span>
            <input type="date" value={s.boardTo} onChange={(e) => setS((p) => ({ ...p, boardTo: e.target.value }))} />
          </div>

          <SectionHeader n={4} title="여행지 사진" desc="Unsplash 일괄 · 직접 등록" />
          <div className="carousel-card">
            <input
              type="password"
              value={s.unsplashKey}
              onChange={(e) => setS((p) => ({ ...p, unsplashKey: e.target.value }))}
              placeholder="Unsplash Access Key"
            />
            <div className="carousel-inline-action">
              <button className="btn-dark" onClick={fetchPhotos} disabled={s.photosRunning || s.pricesRunning}>
                사진 일괄 불러오기
              </button>
              <span className={s.photoOk ? "text-success" : "text-danger"}>{s.photoLog}</span>
            </div>
            <div className="carousel-hint">
              키는 이 브라우저에만 저장됩니다. 각 노선 사진은 아래에서 직접 URL로 교체할 수 있습니다. 최저가 조회와 동시에는 실행할 수
              없습니다.
            </div>
          </div>

          <SectionHeader n={5} title="최저가 일괄 조회" desc="노선별 최저가 일자 · 가격 채우기" />
          <div className="carousel-card">
            <div className="carousel-card-label">
              최저가 일괄 조회 <span className="text-success">API 키 불필요</span>
            </div>
            <div className="carousel-inline-action">
              <button className="btn-dark" onClick={fetchPrices} disabled={s.photosRunning || s.pricesRunning}>
                최저가 일괄 조회
              </button>
              <span className={s.priceOk ? "text-success" : "text-danger"}>{s.priceLog}</span>
            </div>
            {s.pricesRunning && s.priceTotal > 0 && (
              <div className="carousel-progress-bar">
                <div
                  className="carousel-progress-bar-fill"
                  style={{ width: (s.priceCurrent / s.priceTotal) * 100 + "%" }}
                />
              </div>
            )}
            <div className="carousel-hint">
              노선마다 우선순위 체류일수로 조회기간 전체 날짜 x 전 항공사(저가항공사 포함) 가격을 한 번에 조회해 최저가를 찾습니다(평균 3분
              소요). 탑승 기간은 최대 180일 · 국제선 직항 왕복 지원 · 별도 키가 필요 없습니다. 사진 조회와 동시에는 실행할 수 없습니다.
            </div>
          </div>

          <SectionHeader n={6} title="노선별 확인" desc="조회 기간은 지역 우선순위로 자동" />
          <div className="carousel-rows">
            {s.rows.map((r, i) => {
              const short = isShort(r.arr);
              const g = stayGroup(r.arr);
              const outOfRange = isDateOutOfRange(r.date, s.boardFrom, s.boardTo);
              const fail = r.status.includes("실패") || r.status.includes("확인");
              return (
                <div key={i} className="carousel-row-card">
                  <div className="carousel-row-top">
                    <span className="carousel-row-num">{i + 1}</span>
                    <input value={r.dep} onChange={(e) => patch(i, "dep", e.target.value.toUpperCase())} placeholder="ICN" maxLength={3} className="input-code" />
                    <span className="carousel-row-arrow">→</span>
                    <input value={r.arr} onChange={(e) => patch(i, "arr", e.target.value.toUpperCase())} placeholder="TPE" maxLength={3} className="input-code" />
                    <div className="carousel-row-label">{routeLabel(r.dep, r.arr)}</div>
                    <span className={`badge ${short ? "badge-success" : "badge-info"}`}>{short ? "단거리" : "장거리"}</span>
                    {r.date || s.boardFrom ? (
                      <a href={buildSearchUrl(cfg(), r, r.span)} target="_blank" rel="noreferrer" className="carousel-search-link">
                        검색
                      </a>
                    ) : (
                      <span className="carousel-search-link carousel-search-link-disabled" title="탑승 기간 또는 최저가 조회 결과가 있어야 검색할 수 있습니다">
                        검색
                      </span>
                    )}
                    <button className="carousel-row-remove" onClick={() => setS((prev) => ({ ...prev, rows: prev.rows.filter((_, j) => j !== i) }))}>
                      삭제
                    </button>
                  </div>
                  <div className="carousel-row-fields">
                    <input type="date" value={r.date} onChange={(e) => patch(i, "date", e.target.value)} />
                    <input value={r.price} onChange={(e) => patch(i, "price", e.target.value)} placeholder="가격 398700" />
                    <input value={r.span} onChange={(e) => patch(i, "span", e.target.value)} placeholder="조회기간" />
                  </div>
                  <input
                    value={r.img}
                    onChange={(e) => patch(i, "img", e.target.value)}
                    placeholder="여행지 사진 URL (직접 등록 가능)"
                    className="carousel-row-img"
                  />
                  <input
                    value={r.label}
                    onChange={(e) => patch(i, "label", e.target.value)}
                    placeholder={"슬롯 이름 (비우면 자동: " + effectiveLabel({ ...r, label: "" }, s.trip) + ")"}
                    className="carousel-row-img"
                  />
                  <div className="carousel-row-status">
                    <span className="text-muted">
                      {g.name} · {g.order.map((n) => n - 1 + "박" + n + "일").join(" → ")}
                    </span>
                    {outOfRange && <span className="text-danger">탑승 기간 밖</span>}
                    <span className={fail ? "text-danger" : "text-success"}>{r.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-output-col">
          <SectionHeader n={0} title="항공사 발송용 시안" desc="항공홈 1줄 캐로셀 기준" />
          <div id="carousel-proof" ref={proofRef} className="carousel-proof">
            <div className="carousel-proof-title-row">
              <span className="carousel-proof-emoji">{s.emoji}</span>
              <div className="carousel-proof-title">{s.title}</div>
            </div>
            <div className="carousel-proof-slots">
              {s.rows.map((r, i) => (
                <div key={i} className="carousel-slot">
                  <div className="carousel-slot-img" style={{ background: SLOT_BG[i % SLOT_BG.length] }}>
                    {r.img ? (
                      <div className="carousel-slot-img-fill" style={{ backgroundImage: `url(${r.img})` }} />
                    ) : (
                      <span className="carousel-slot-noimg">사진 없음</span>
                    )}
                  </div>
                  <div className="carousel-slot-label">{effectiveLabel(r, s.trip)}</div>
                  <div className="carousel-slot-price">{won(r.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-section-gap">
            <SectionHeader n={0} title="일괄등록 엑셀 미리보기" desc={`${s.rows.length}개 노선`} />
          </div>
          <div className="carousel-excel-preview">
            <div className="carousel-excel-grid">
              <div className="carousel-excel-head">항공사코드</div>
              <div className="carousel-excel-head">출발지</div>
              <div className="carousel-excel-head">도착지</div>
              <div className="carousel-excel-head">가는날</div>
              <div className="carousel-excel-head">가격조회 기간</div>
              <div className="carousel-excel-head">경유</div>
              <div className="carousel-excel-head">왕복/편도</div>
              <div className="carousel-excel-head">상품명</div>
              {s.rows.map((r, i) => {
                const outOfRange = isDateOutOfRange(r.date, s.boardFrom, s.boardTo);
                return (
                  <Fragment key={i}>
                    <div className="carousel-excel-cell">{s.airlineCode}</div>
                    <div className="carousel-excel-cell">{r.dep}</div>
                    <div className="carousel-excel-cell">{r.arr}</div>
                    <div className="carousel-excel-cell" style={{ color: !r.date || outOfRange ? "#ec4937" : undefined }}>
                      {r.date || "미입력"}
                    </div>
                    <div className="carousel-excel-cell">{r.span}</div>
                    <div className="carousel-excel-cell">-1</div>
                    <div className="carousel-excel-cell">{s.trip}</div>
                    <div className="carousel-excel-cell carousel-excel-cell-ellipsis">{effectiveLabel(r, s.trip)}</div>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="carousel-zip-banner">
            <div>
              <div className="carousel-zip-title">시안 + 엑셀 한 번에</div>
              <div className="carousel-zip-desc">ZIP 안에 일괄등록 엑셀(CSV), 시안 PNG, 노선별 정사각형 사진(PNG)이 함께 들어갑니다.</div>
              <div className={s.zipOk ? "text-success" : "text-danger"}>{s.zipLog}</div>
            </div>
            <button className="btn-primary" onClick={downloadZip}>
              ZIP 다운로드
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="carousel-section-header">
      <span className="carousel-section-title">{n > 0 ? `${n} · ${title}` : title}</span>
      <span className="carousel-section-desc">{desc}</span>
    </div>
  );
}
