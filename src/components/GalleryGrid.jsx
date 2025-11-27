export function GalleryGrid({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  );
}