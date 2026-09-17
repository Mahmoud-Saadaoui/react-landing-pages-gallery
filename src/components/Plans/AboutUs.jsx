import { aboutParagraph } from "./data";

const AboutUs = () => (
  <div className="about-us">
    <div className="container">
      <h2 className="h1 text-center">About Us</h2>
      <p className="responsive-paragraph">{aboutParagraph}</p>
    </div>
  </div>
);

export default AboutUs;