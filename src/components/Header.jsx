export function Header({ onNavigate }) {
  return (
    <header>
      <div className="container nav">
        <button
          className="brand"
          onClick={() => onNavigate("home")}
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <span className="logo" />
          <span>My Little Pony World</span>
        </button>

        <nav>
          <ul>
            <li>
              <button
                onClick={() => onNavigate("ponies")}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Поні
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("gallery")}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Галерея
              </button>
            </li>
          </ul>
        </nav>

        
      </div>
    </header>
  );
}
