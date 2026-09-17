import { features, lorem } from "./data";
import tablet1 from "./images/feature/tablet-1.webp";
import tablet2 from "./images/feature/tablet-2.webp";
import tablet3 from "./images/feature/tablet-3.webp";

const imgs = [tablet1, tablet2, tablet3];

export default function Features() {
  return (
    <section className="features">
      <div className="title text-center">
        <h3>مميزات المنتج</h3>
      </div>
      <div className="container">
        {features.map((f, i) => (
          <div className="feature" key={i}>
            <div className="media">
              {i % 2 === 0 ? (
                <>
                  <img src={imgs[i]} alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className={f.extra ? "mt-0" : ""}>{f.title}</h5>
                    <p className={f.extra ? "mb-2" : ""}>{lorem}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="media-body">
                    <h5>{f.title}</h5>
                    <p>{lorem}</p>
                  </div>
                  <img src={imgs[i]} alt="Generic placeholder image" />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}