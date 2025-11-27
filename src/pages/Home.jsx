import { ponies } from "../data/ponies.js";
import { galleryImages } from "../data/galleryImages.js";
import { PonyGrid } from "../components/PonyGrid.jsx";
import { GalleryGrid } from "../components/GalleryGrid.jsx";
import { ContactForm } from "../components/ContactForm.jsx";

export function Home({ onNavigate }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="container wrap">
          <div>
            <div className="chip">Фан-світ My Little Pony</div>
            <h1>Твій власний чарівний всесвіт поні</h1>
            <p>
              Додавай своїх персонажів, ділися історіями та зберігай
              моменти дружби в одній затишній галереї.
            </p>
            <div className="buttons">
              <button className="cta" onClick={() => onNavigate?.("ponies")}>
                Наші поні
              </button>
              <button className="btn" onClick={() => onNavigate?.("gallery")}>
                Переглянути галерею
              </button>
            </div>
          </div>

          <div className="pony-blob" />
        </div>
      </section>

      <section className="section" id="ponies">
        <div className="container">
          <h2>Наші герої</h2>
          <p className="lead">Клікни «Детальніше», щоб відкрити сторінку персонажа...</p>

          <PonyGrid ponies={ponies.slice(0, 5)} />

          <div className="pony-actions">
            <button className="btn" onClick={() => onNavigate?.("ponies")}>
              Усі поні
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <h2>Галерея моментів дружби</h2>
          <p className="lead">Плейсхолдери для твоїх зображень.</p>

          <GalleryGrid images={galleryImages.slice(0, 6)} />

          <button
            className="btn"
            style={{ marginTop: 15 }}
            onClick={() => onNavigate?.("gallery")}
          >
            Переглянути всі зображення
          </button>
        </div>
      </section>

      <ContactForm />
    </>
  );
}