import { galleryImages } from "../data/galleryImages.js";
import { GalleryGrid } from "../components/GalleryGrid.jsx";

export function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2>Галерея</h2>
        <GalleryGrid images={galleryImages} />
      </div>
    </section>
  );
}