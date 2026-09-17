import Section from "./Section";
import heroImage from "./images/car-section1.webp";

const Hero = ({ open, onClose }) => (
  <Section id="home" className="section-1 target center" open={open} onClose={onClose}>
    <h1 className="section-heading section-1-heading">Classic Cars</h1>
    <img src={heroImage} alt="" aria-hidden="true" className="section-1-img" />
  </Section>
);

export default Hero;