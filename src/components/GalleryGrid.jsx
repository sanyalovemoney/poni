export function GalleryGrid({ images }) {
  return (
    <div className="gallery">
      {images.map((src, i) => (
        <div className="shot" key={i}>
          <img src={src} alt={`Момент дружби ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}