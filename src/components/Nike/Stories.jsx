import { RiArrowLeftSLine, RiArrowRightSLine, RiAddLine } from "react-icons/ri";
import { storyIntro, stories } from "./data";

export const Stories = () => (
  <section className="section__container story__container">
    <div className="story__content">
      <h2 className="section__header">
        Nike
        <br />
        <span>Stories</span>
      </h2>
      <p className="section__description">{storyIntro}</p>
      <div className="section__nav">
        <span>
          <RiArrowLeftSLine />
        </span>
        <span>
          <RiArrowRightSLine />
        </span>
      </div>
    </div>
    {stories.map((story) => (
      <div className="story__card" key={story.text.slice(0, 24)}>
        <img src={story.image} alt="story" loading="lazy" />
        <div className="story__card__content">
          <p className="section__description">{story.text}</p>
          <button className="btn">
            <span>
              <RiAddLine />
            </span>{" "}
            Explore More
          </button>
        </div>
      </div>
    ))}
  </section>
);