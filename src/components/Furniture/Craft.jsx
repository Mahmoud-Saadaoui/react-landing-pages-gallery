import { RiAddLine } from "react-icons/ri";
import { craftItems } from "./data";

export const Craft = () => (
  <section className="section__container craft__container" id="craft">
    <div className="craft__content">
      <h2 className="section__header">Crafted with excellent material</h2>
      <p className="section__subheader">Elevate Your Space with Quality and Style</p>
      <button className="btn">Explore</button>
    </div>
    {craftItems.map((item) => (
      <div className="craft__image" key={item.name}>
        <div className="craft__image__content">
          <img src={item.image} alt="craft" loading="lazy" />
          <p>{item.name}</p>
          <h4>{item.price}</h4>
        </div>
        <a href="#">
          <RiAddLine />
        </a>
      </div>
    ))}
  </section>
);