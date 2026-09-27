import type { ToolCard as ToolCardData } from "../data";
import { ICONS } from "../icons";

const STATUS_STYLE: Record<string, { bg: string; fg: string }> = {
  "운영중": { bg: "var(--success-bg)", fg: "var(--success-fg)" },
  "재구축 예정": { bg: "var(--info-badge-bg)", fg: "var(--info-badge-fg)" },
  "신규 개발": { bg: "var(--danger-bg)", fg: "var(--danger-fg)" },
  "프로토타입": { bg: "var(--warning-bg)", fg: "var(--warning-fg)" },
};

interface ToolCardProps {
  card: ToolCardData;
  gradient: [string, string];
}

export function ToolCard({ card, gradient }: ToolCardProps) {
  const statusStyle = STATUS_STYLE[card.status];
  const iconOpacity = card.title === "캐로셀 자동화" ? 0.45 : 0.6;

  return (
    <a href={card.url} target="_blank" rel="noreferrer" className="tool-card">
      <div
        className="tool-card-thumb"
        style={
          card.image
            ? undefined
            : {
                background: `radial-gradient(120% 120% at 100% 0%, ${gradient[0]} 0%, transparent 60%), linear-gradient(160deg, ${gradient[1]} 0%, #ffffff 100%)`,
              }
        }
      >
        {card.image ? (
          <img src={card.image} alt="" className="tool-card-thumb-img" />
        ) : (
          <img
            src={ICONS[card.icon]}
            alt=""
            className="tool-card-icon"
            style={{ opacity: iconOpacity }}
          />
        )}
      </div>
      <div className="tool-card-badges">
        <span className="badge badge-action">{card.action}</span>
        <span className="badge" style={{ background: statusStyle.bg, color: statusStyle.fg }}>
          {card.status}
        </span>
      </div>
      <div className="tool-card-title">{card.title}</div>
      <div className="tool-card-description">{card.description}</div>
    </a>
  );
}
