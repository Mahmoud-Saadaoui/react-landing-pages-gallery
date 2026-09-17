import Section from "./Section";
import { galleries } from "./data";

const ImageGallery = ({ open, onClose }) => (
  <Section
    id="image-gallery"
    className="section-4 target"
    open={open}
    onClose={onClose}
  >
    <h1 className="section-heading">Image Gallery</h1>
    {galleries.map((row, rowIndex) => (
      <div className="gallery center" key={rowIndex}>
        <div className="gallery-shelf"></div>
        {row.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`gallery-img-${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    ))}
  </Section>
);

export default ImageGallery;