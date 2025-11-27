import { PonyCard } from "./PonyCard.jsx";

export function PonyGrid({ ponies }) {
  return (
    <div id="ponyGrid">
      {ponies.map(p => (
        <PonyCard key={p.id} pony={p} />
      ))}
    </div>
  );
}