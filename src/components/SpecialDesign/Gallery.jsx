import { gallery } from "./data";

const Gallery = ({ onOpen }) => (
  <div className="gallery">
    <div className="container">
      <h2>Our Gallery</h2>
      <div className="images-box">
        {gallery.map(({ src, alt }) => (
          <img
            src={src}
            alt={alt}
            key={src}
            onClick={() => onOpen({ src, alt })}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;