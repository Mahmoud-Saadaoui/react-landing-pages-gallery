import { offersTop, offersBottom, offerTitle, offerSubtitle } from "./data";

export const Offers = () => (
  <section className="offer__container" id="offer">
    <div className="offer__grid__top">
      {offersTop.map((image) => (
        <img key={image} src={image} alt="offer" loading="lazy" />
      ))}
      <div className="offer__content">
        <h2 className="section__header">{offerTitle}</h2>
        <p className="section__subheader">{offerSubtitle}</p>
        <button className="btn">Explore Now</button>
      </div>
    </div>
    <div className="offer__grid__bottom">
      {offersBottom.map((image) => (
        <img key={image} src={image} alt="offer" loading="lazy" />
      ))}
    </div>
  </section>
);