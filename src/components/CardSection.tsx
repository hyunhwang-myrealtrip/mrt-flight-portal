import type { ToolSection } from "../data";
import { ToolCard } from "./ToolCard";

const GRADIENTS: Record<string, [string, string]> = {
  docs: ["#a7d4f9", "#cbe7fd"],
  creative: ["#d0b4fd", "#e6d7fe"],
  pricing: ["#94e7d1", "#d7f6ee"],
  plugins: ["#ffd4cc", "#fbf1ef"],
};

interface CardSectionProps {
  section: ToolSection;
}

export function CardSection({ section }: CardSectionProps) {
  if (section.cards.length === 0) return null;

  return (
    <section id={section.id} className="portal-section">
      <div className="section-header">
        <h2>{section.title}</h2>
        <span className="section-description">{section.description}</span>
      </div>
      <div className="card-grid">
        {section.cards.map((card) => (
          <ToolCard
            key={card.title}
            card={card}
            gradient={GRADIENTS[section.id] ?? ["#e9ecef", "#f8f9fa"]}
          />
        ))}
      </div>
    </section>
  );
}
