import { FaThLarge } from "react-icons/fa";
import { galleryFilters } from "./data";
import img1 from "./images/gallery/1.jpg";
import img2 from "./images/gallery/2.jpg";
import img3 from "./images/gallery/3.jpg";
import img4 from "./images/gallery/4.jpg";
import img5 from "./images/gallery/5.jpg";
import img6 from "./images/gallery/6.jpg";

const items = [
  { type: "item-type-1", src: img1 },
  { type: "item-type-3", src: img2 },
  { type: "item-type-2", src: img3 },
  { type: "item-type-2", src: img4 },
  { type: "item-type-1", src: img5 },
  { type: "item-type-3", src: img6 },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="title text-center">
        <h2>
          <FaThLarge aria-hidden="true" />
          الأعمال السابقة
        </h2>
      </div>
      <div className="container">
        <div className="work-gallery text-center">
          {galleryFilters.map((f) => (
            <input
              key={f.id}
              id={f.id}
              name="radio-set-1"
              type="radio"
              className={f.id}
              defaultChecked={f.type === null}
            />
          ))}
          {galleryFilters.map((f) => (
            <label key={f.id} htmlFor={f.id} className={f.cls}>
              {f.label}
            </label>
          ))}
          <div className="clear-fix" />
          <div className="row items">
            {items.map((it, i) => (
              <div className={`col-md-4 col-sm-6 item ${it.type}`} key={i}>
                <img src={it.src} alt="gallery img" className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}