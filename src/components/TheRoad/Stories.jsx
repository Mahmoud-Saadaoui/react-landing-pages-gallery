import { stories } from "./data";

const Stories = () => (
  <section className="stories">
    <div className="video-container">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        preload="metadata"
        poster="/videos/the-road.jpg"
      >
        <source src="/videos/the-road.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="stories-wrapper">
      {stories.map((story, index) => (
        <div className="story-bg" key={index}>
          <div className="story">
            <img
              src={story.image}
              alt="Customer image"
              className="story-image"
              loading="lazy"
            />
            <div className="story-text">
              <h1 className="story-heading">{story.heading}</h1>
              <p className="story-paragraph">{story.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stories;