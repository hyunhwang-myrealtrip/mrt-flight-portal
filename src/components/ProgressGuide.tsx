import { useEffect, useState } from "react";
import { EXPORT_SPECS, TRACKS } from "../data";

type DoneState = Record<string, string[]>;

const STORAGE_KEY = "portal_progress";

function loadDone(): DoneState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as DoneState;
  } catch {
    return {};
  }
}

export function ProgressGuide() {
  const [trackId, setTrackId] = useState(TRACKS[0].id);
  const [done, setDone] = useState<DoneState>(() => loadDone());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done]);

  const track = TRACKS.find((t) => t.id === trackId)!;
  const doneIds = done[trackId] ?? [];
  const totalSteps = track.steps.reduce((sum, s) => sum + s.substeps.length, 0);
  const donePercent = totalSteps === 0 ? 0 : Math.round((doneIds.length / totalSteps) * 100);

  function toggle(substepId: string) {
    setDone((prev) => {
      const current = prev[trackId] ?? [];
      const next = current.includes(substepId)
        ? current.filter((id) => id !== substepId)
        : [...current, substepId];
      return { ...prev, [trackId]: next };
    });
  }

  function reset() {
    setDone((prev) => ({ ...prev, [trackId]: [] }));
  }

  let stepCounter = 0;

  return (
    <section id="guide" className="portal-section">
      <div className="section-header">
        <h2>진행 가이드</h2>
        <span className="section-description">트랙별 준비 단계 체크리스트</span>
      </div>

      <div className="guide-tabs">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            className={`guide-tab ${t.id === trackId ? "guide-tab-active" : ""}`}
            onClick={() => setTrackId(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="guide-container">
        <div className="guide-header-row">
          <span>{track.label}</span>
          <div className="guide-progress-area">
            <div className="guide-progress-track">
              <div className="guide-progress-fill" style={{ width: `${donePercent}%` }} />
            </div>
            <button className="guide-reset-pill" onClick={reset}>
              초기화
            </button>
          </div>
        </div>

        {track.steps.length === 0 && <div className="guide-empty">단계 준비 중이에요</div>}

        {track.steps.map((step) => {
          stepCounter += 1;
          const stepNumber = stepCounter;
          return (
            <div key={step.title}>
              <div className="guide-step-header">
                <span className="guide-step-number">{stepNumber}</span>
                <span className="guide-step-title">{step.title}</span>
                <span className="guide-step-count">
                  {step.substeps.filter((s) => doneIds.includes(s.id)).length} / {step.substeps.length}
                </span>
              </div>
              {step.substeps.map((sub) => {
                const isDone = doneIds.includes(sub.id);
                return (
                  <div key={sub.id} className="guide-substep-row">
                    <button className="guide-substep-main" onClick={() => toggle(sub.id)}>
                      <span className={`guide-check ${isDone ? "guide-check-done" : ""}`}>
                        {isDone ? "✓" : ""}
                      </span>
                      <span className="guide-substep-text">
                        <span className="guide-substep-title">{sub.title}</span>
                        <span className="guide-substep-desc">{sub.description}</span>
                      </span>
                    </button>
                    <div className="guide-substep-tools">
                      {sub.tool &&
                        (sub.toolUrl ? (
                          <a href={sub.toolUrl} target="_blank" rel="noreferrer" className="guide-substep-tool guide-substep-tool-link">
                            {sub.tool}
                          </a>
                        ) : (
                          <span className="guide-substep-tool">{sub.tool}</span>
                        ))}
                      {sub.links?.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="guide-substep-tool guide-substep-tool-link">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="guide-specs">
        <div className="guide-specs-title">소재별 추출 규격</div>
        <div className="guide-specs-grid">
          {EXPORT_SPECS.map((item) => (
            <div key={item.target} className="guide-specs-item">
              <span className="guide-specs-target">{item.target}</span>
              <span className="guide-specs-value">{item.spec}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
