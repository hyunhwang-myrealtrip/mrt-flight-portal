import { useMemo, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { CardSection } from "./components/CardSection";
import { AdminSection } from "./components/AdminSection";
import { ProgressGuide } from "./components/ProgressGuide";
import { TOOL_SECTIONS } from "./data";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TOOL_SECTIONS;
    return TOOL_SECTIONS.map((section) => ({
      ...section,
      cards: section.cards.filter(
        (card) =>
          card.title.toLowerCase().includes(q) || card.description.toLowerCase().includes(q)
      ),
    }));
  }, [query]);

  return (
    <div className="portal-root">
      <Sidebar />
      <main className="portal-main">
        <Header query={query} onQueryChange={setQuery} />
        {filteredSections.map((section) => (
          <CardSection key={section.id} section={section} />
        ))}
        <AdminSection />
        <ProgressGuide />
      </main>
    </div>
  );
}

export default App;
