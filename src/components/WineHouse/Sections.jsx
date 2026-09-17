import { useState } from "react";
import bag from "./images/bag.png";
import wineBottle from "./images/wine-bottle.webp";
import frame from "./images/frame.webp";
import grapes from "./images/grapes.webp";
import newWines from "./images/section-4-bg.jpg";
import footerImg from "./images/footer-img.png";
import { footerLists } from "./data";

export const Section1 = ({ left, scale }) => (
  <section className="section-1" style={{ left }}>
    <div
      className="section-wrapper section-1-wrapper"
      style={{ transform: `scale(${scale})` }}
    >
      <div className="section-1-heading-wrapper">
        <h1 className="section-1-heading">The best wines around the world</h1>
      </div>
    </div>
  </section>
);

export const Section2 = ({ left, scale }) => (
  <section className="section-2" style={{ left }}>
    <div
      className="section-wrapper section-2-wrapper"
      style={{ transform: `scale(${scale})` }}
    >
      <div className="sale">
        <img src={bag} alt="Sale Bag" className="sale-bag" loading="lazy" />
        <button type="button" className="sale-btn">
          order now!
        </button>
      </div>
      <img src={wineBottle} alt="Wine Bottle" className="wine-bottle" loading="lazy" />
    </div>
  </section>
);

export const Section3 = ({ left, scale }) => {
  const [dimmed, setDimmed] = useState(false);

  return (
    <section className="section-3" style={{ left }}>
      <div
        className="section-wrapper section-3-wrapper"
        style={{
          transform: `scale(${scale})`,
          opacity: dimmed ? 0.5 : 1,
        }}
      >
        <h1 className="section-3-heading">the best quality</h1>
        <img src={frame} alt="" aria-hidden="true" className="frame-img" loading="lazy" />
        <img
          src={grapes}
          alt="Grapes"
          className="grapes-img"
          loading="lazy"
          onMouseOver={() => setDimmed(true)}
          onMouseOut={() => setDimmed(false)}
        />
      </div>
    </section>
  );
};

export const Section4 = ({ left, scale }) => (
  <section className="section-4" style={{ left }}>
    <div
      className="section-wrapper section-4-wrapper"
      style={{ transform: `scale(${scale})` }}
    >
      <div className="section-4-bg"></div>
      <h1 className="section-4-heading">Newly Released Wines</h1>
      <img src={newWines} alt="New Wines" className="new-wines-img" loading="lazy" />
    </div>
  </section>
);

export const Section5 = ({ left, scale }) => (
  <section className="section-5" style={{ left }}>
    <div
      className="section-wrapper section-5-wrapper"
      style={{ transform: `scale(${scale})` }}
    >
      {footerLists.map((list) => (
        <ul key={list.title} className="footer-list">
          <li>{list.title}</li>
          {list.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
      <img src={footerImg} alt="" aria-hidden="true" className="footer-img" loading="lazy" />
      <p className="copyright">
        Copyright &copy; CodeAndCreate. All Rights Reserved
      </p>
    </div>
  </section>
);