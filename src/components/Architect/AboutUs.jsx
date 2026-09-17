import { services, serviceText } from "./data";
import house from "./images/house.png";

const AboutUs = () => (
  <section className="about-us">
    <div className="section-header">
      <h1 className="section-heading">About Us</h1>
      <div className="underline" />
    </div>
    <div className="services">
      {services.map(({ title, Icon }) => (
        <div className="service" key={title}>
          <div className="service-header">
            <Icon />
            <h3>{title}</h3>
          </div>
          <p className="service-text">{serviceText}</p>
        </div>
      ))}
      <div className="about-us-img-wrapper">
        <img src={house} alt="" />
      </div>
    </div>
  </section>
);

export default AboutUs;
