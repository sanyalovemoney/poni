export function PonyGrid({ ponies }) {
  return (
    <div id="ponyGrid">
      {ponies.map((p) => (
        <img
          key={p.id}
          src={p.img}
          alt={p.name}
          className="pony-card"
        />
      ))}
    </div>
  );
}