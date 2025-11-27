import { ponies } from "../data/ponies.js";
import { galleryImages } from "../data/galleryImages.js";
import { PonyGrid } from "../components/PonyGrid.jsx";
import { GalleryGrid } from "../components/GalleryGrid.jsx";
import { ContactForm } from "../components/ContactForm.jsx";

export function Home() {
  return (
    <>
      <section className="hero" id="home">
        {/* вся верстка hero з index.html переноситься сюди один в один */}
      </section>

      <section className="section" id="ponies">
        <div className="container">
          <h2>Наші герої</h2>
          <p className="lead">
            Клікни «Детальніше», щоб відкрити сторінку персонажа...
          </p>

          <PonyGrid ponies={ponies.slice(0, 5)} />

          <div className="pony-actions">
            <button className="btn">Детальніше</button>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <h2>Галерея моментів дружби</h2>
          <p className="lead">Плейсхолдери для твоїх зображень.</p>

          <GalleryGrid images={galleryImages.slice(0, 6)} />

          <button className="btn" style={{ marginTop: 15 }}>
            Переглянути всі зображення
          </button>
        </div>
      </section>

      <ContactForm />
    </>
  );
}