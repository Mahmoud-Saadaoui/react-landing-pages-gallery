import { RiAddLine } from "react-icons/ri";
import { bannerImg, bannerBg, bannerDescription } from "./data";

export const Banner = () => (
  <section className="section__container">
    <div className="banner__container">
      <div className="banner__image">
        <img src={bannerImg} alt="banner" loading="lazy" />
      </div>
      <div className="banner__content">
        <h2 className="section__header">
          Get Your Shoes Now on <span>15%</span> Discount
        </h2>
        <p className="section__description">{bannerDescription}</p>
        <button className="btn">
          <span>
            <RiAddLine />
          </span>{" "}
          Buy Now
        </button>
        <img src={bannerBg} alt="banner bg" className="banner__bg" loading="lazy" />
      </div>
    </div>
  </section>
);