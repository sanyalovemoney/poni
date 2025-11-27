import { useState, useMemo } from "react";
import { ponies } from "../data/ponies.js";
import { PonyCard } from "../components/PonyCard.jsx";

export function Ponies() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return ponies.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.desc?.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="section ponies-page">
      <div className="container">
        <header className="ponies-header">
          <h1>Поні</h1>
          <form
            className="search-box"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Знайти поні..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </form>
        </header>

        <div className="hero-cards">
          {filtered.map(p => (
            <PonyCard key={p.id} pony={p} />
          ))}
        </div>
      </div>
    </section>
  );
}