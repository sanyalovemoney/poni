export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="orb" aria-hidden="true" />
        My Little Pony World
      </a>

      <nav className="main-nav" aria-label="Головна навігація">
        <a className="nav-link" href="/ponies">Поні</a>
        <a className="nav-link" href="/gallery">Галерея</a>
      </nav>
    </header>
  );
}