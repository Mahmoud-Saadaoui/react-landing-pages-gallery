import MainHeading from "./MainHeading";
import about from "./images/about.png";

const About = () => (
  <div className="about">
    <div className="container">
      <MainHeading title="About Us" />
      <img src={about} alt="" loading="lazy" />
    </div>
  </div>
);

export default About;