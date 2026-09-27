import { ADMIN_GROUPS } from "../data";

export function AdminSection() {
  return (
    <section id="admin" className="portal-section">
      <div className="section-header">
        <h2>내부 어드민 · 매니저 페이지 및 구좌</h2>
        <span className="section-description">작업별 이동 경로</span>
      </div>
      {ADMIN_GROUPS.map((group) => (
        <div key={group.title} className="admin-group">
          <h3 className="admin-group-title">{group.title}</h3>
          <div className="admin-table">
            <div className="admin-row admin-row-header">
              <span>작업</span>
              <span>페이지 · 툴</span>
              <span>상태</span>
            </div>
            {group.rows.map((row) => (
              <a
                key={row.task}
                className="admin-row"
                href={row.url || undefined}
                target="_blank"
                rel="noreferrer"
                style={{ pointerEvents: row.url ? "auto" : "none" }}
              >
                <span>{row.task}</span>
                <span>{row.page}</span>
                <span
                  className="badge"
                  style={
                    row.connected
                      ? { background: "var(--success-bg)", color: "var(--success-fg)" }
                      : { background: "var(--warning-bg)", color: "var(--warning-fg)" }
                  }
                >
                  {row.connected ? "연결됨" : "URL 필요"}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
