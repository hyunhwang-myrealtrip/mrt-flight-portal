import logo from "../assets/logo_mrt_wordmark.png";
import { TOOL_SECTIONS } from "../data";

const NAV_ITEMS = [
  ...TOOL_SECTIONS.map((s) => ({ id: s.id, label: s.title, dot: s.dotColor })),
  { id: "admin", label: "내부 어드민", dot: "#e6d7fe" },
  { id: "guide", label: "진행 가이드", dot: "#ffe182" },
];

const BUILD_PROGRESS = {
  percent: 65,
  label: "포탈 구축 진행률",
  note: "마케팅 포탈 + 캐로셀 자동화 기본 구현 완료",
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Sidebar() {
  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo-row">
          <img src={logo} alt="MyRealTrip" className="sidebar-logo" />
          <span className="sidebar-logo-x">×</span>
          <span className="sidebar-logo-plane">✈️</span>
        </div>
        <span className="sidebar-title">항공 마케팅 운영 포탈</span>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="sidebar-nav-item"
            onClick={() => scrollToSection(item.id)}
          >
            <span className="nav-dot" style={{ background: item.dot }} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-today">
        <div className="sidebar-today-label">오늘</div>
        <div className="sidebar-today-date">{today}</div>
      </div>

      <div className="sidebar-build-card">
        <div className="build-card-label">{BUILD_PROGRESS.label}</div>
        <div className="build-card-track">
          <div
            className="build-card-fill"
            style={{ width: `${BUILD_PROGRESS.percent}%` }}
          />
        </div>
        <div className="build-card-note">{BUILD_PROGRESS.note}</div>
      </div>
    </aside>
  );
}
