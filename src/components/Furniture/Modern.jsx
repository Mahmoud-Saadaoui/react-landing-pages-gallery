import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { dotBg, modern1, modern2, modern3, modernParagraph, modernPoints } from "./data";

export const Modern = () => (
  <section className="section__container modern__container" id="modern">
    <div className="modern__image">
      <img src={dotBg} alt="bg" className="modern__bg" loading="lazy" />
      <img src={modern1} alt="modern" className="modern__img-1" loading="lazy" />
      <img src={modern2} alt="modern" className="modern__img-2" loading="lazy" />
      <img src={modern3} alt="modern" className="modern__img-3" loading="lazy" />
    </div>
    <div className="modern__content">
      <h2 className="section__header">We help you design modern interior design</h2>
      <p className="section__subheader">{modernParagraph}</p>
      <div className="modern__grid">
        {modernPoints.map((point) => (
          <div className="modern__card" key={point.slice(0, 24)}>
            <span>
              <RiCheckboxBlankCircleLine />
            </span>
            <p>{point}</p>
          </div>
        ))}
      </div>
      <button className="btn">Explore</button>
    </div>
  </section>
);