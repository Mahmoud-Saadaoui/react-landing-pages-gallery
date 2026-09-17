import { FaRegLightbulb, FaCut, FaTachometerAlt, FaRocket } from "react-icons/fa";
import { skills, services } from "./data";

const icons = {
  lightbulb: FaRegLightbulb,
  cut: FaCut,
  tachometer: FaTachometerAlt,
  rocket: FaRocket,
};

const Section2 = ({ progressRef, animated }) => (
  <section className="section-2" id="section-2">
    <h1 className="section-heading section-2-heading">About Me</h1>

    <div ref={progressRef} className="progress-bars-wrapper">
      {skills.map((skill) => (
        <div key={skill.name} className="progress-bar">
          <p className="progress-text">
            {skill.name}
            <span>{animated ? skill.percent : ""}</span>%
          </p>
          <div
            className="progress-percent"
            style={{ width: animated ? `${skill.percent}%` : 0 }}
          />
        </div>
      ))}
    </div>

    <div className="services">
      {services.map((service) => {
        const Icon = icons[service.icon];
        return (
          <div key={service.heading} className="service">
            <i>
              <Icon />
            </i>
            <h2 className="service-heading">{service.heading}</h2>
          </div>
        );
      })}
    </div>
  </section>
);

export default Section2;