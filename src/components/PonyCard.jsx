export function PonyCard({ pony }) {
  return (
    <article className="pony-card">
      <img src={pony.img} alt={pony.name} />
      {pony.short && <p className="pony-desc">{pony.short}</p>}
    </article>
  );
}