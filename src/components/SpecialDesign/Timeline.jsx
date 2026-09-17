import { timeline } from "./data";

const Timeline = () => (
  <div className="timeline">
    <div className="container">
      <div className="timeline-content">
        {timeline.map(({ year, entries }) => (
          <div key={year}>
            <div className="year">{year}</div>
            {entries.map(({ side, heading, text }, i) => (
              <div key={`${year}-${i}`}>
                <div className={side}>
                  <div className="content">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;