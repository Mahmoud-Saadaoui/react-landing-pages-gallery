import { RiAddLine } from "react-icons/ri";
import { whyImg, whyParagraphs } from "./data";

export const WhyChoose = () => (
  <section className="section__container why__container">
    <div className="why__image">
      <img src={whyImg} alt="why image" loading="lazy" />
    </div>
    <div className="why__content">
      <h2 className="section__header">
        Why Choose
        <br />
        <span>Nike</span>
      </h2>
      {whyParagraphs.map((paragraph) => (
        <p className="section__description" key={paragraph.slice(0, 24)}>
          {paragraph}
        </p>
      ))}
      <button className="btn">
        <span>
          <RiAddLine />
        </span>{" "}
        Explore More
      </button>
    </div>
  </section>
);