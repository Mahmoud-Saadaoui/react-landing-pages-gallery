import { useState } from "react";
import { FaSearchPlus, FaTags } from "react-icons/fa";
import { gallery, galleryTitle, tags } from "./data";

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="title text-center">
        <h2>أعمال الشركة</h2>
      </div>
      <div className="work-gallery">
        <div className="row no-gutters">
          <div className="col-md row no-gutters">
            {gallery.slice(0, 2).map(({ small }, i) => (
              <div className="col-sm" key={`t-${i}`}>
                <a
                  href={`#image-${i + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i);
                  }}
                >
                  <img src={small} alt="gallery img" className="img-fluid" />
                  <div className="hover">
                    <FaSearchPlus aria-hidden="true" />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="col-md row no-gutters">
            {gallery.slice(2, 4).map(({ small }, i) => (
              <div className="col-sm" key={`b-${i}`}>
                <a
                  href={`#image-${i + 3}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i + 2);
                  }}
                >
                  <img src={small} alt="gallery img" className="img-fluid" />
                  <div className="hover">
                    <FaSearchPlus aria-hidden="true" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md row no-gutters">
            {gallery.slice(4, 6).map(({ small }, i) => (
              <div className="col-sm" key={`c-${i}`}>
                <a
                  href={`#image-${i + 5}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i + 4);
                  }}
                >
                  <img src={small} alt="gallery img" className="img-fluid" />
                  <div className="hover">
                    <FaSearchPlus aria-hidden="true" />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="col-md row no-gutters">
            {gallery.slice(6, 8).map(({ small }, i) => (
              <div className="col-sm" key={`d-${i}`}>
                <a
                  href={`#image-${i + 7}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i + 6);
                  }}
                >
                  <img src={small} alt="gallery img" className="img-fluid" />
                  <div className="hover">
                    <FaSearchPlus aria-hidden="true" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {active !== null && (
        <div
          className="overlay-gallery row open"
          style={{ opacity: 1, marginTop: 0 }}
        >
          <div className="col-sm">
            <img src={gallery[active].large} alt="gallery img" />
          </div>
          <div className="col-sm gallery-text">
            <h3>{galleryTitle}</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <FaTags aria-hidden="true" />
              </li>
              {tags.map((t) => (
                <li className="list-inline-item" key={t}>
                  <a href="">{t},</a>
                </li>
              ))}
            </ul>
            <p>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات
            </p>
            <a href="#" className="visit">
              زيارة المشروع
            </a>
          </div>
          <a href="#gallery" className="close" onClick={(e) => { e.preventDefault(); setActive(null); }}>
            X
          </a>
        </div>
      )}
    </section>
  );
};

export default Gallery;