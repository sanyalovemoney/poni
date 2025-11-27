export function PonyCard({ pony }) {
  return (
    <article className="card">
      <div className="thumb">
        <img src={pony.img} alt={pony.name} className="pony-svg" />
      </div>
      <div className="body">
        <h3>{pony.name}</h3>
        {pony.tag && <span className="badge">{pony.tag}</span>}
        {pony.traits && (
          <div className="traits">
            {pony.traits.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        )}
        {pony.desc && <p>{pony.desc}</p>}
        <div className="actions">
          <button className="btn">Детальніше</button>
        </div>
      </div>
    </article>
  );
}