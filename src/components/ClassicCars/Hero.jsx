import Section, { sectionHeading } from "./Section";
import heroImage from "./images/car-section1.webp";
import bg1 from "./images/bg-section1.jpg";

const Hero = ({ open, onClose }) => (
  <Section
    id="home"
    className="flex flex-col items-center justify-center bg-cover bg-center max-[1500px]:justify-evenly"
    open={open}
    onClose={onClose}
    style={{ backgroundImage: `url(${bg1})` }}
  >
    <h1
      className={`${sectionHeading} mb-[3rem] uppercase [text-shadow:1rem_1rem_1rem_#000,2rem_2rem_2rem_#111,3rem_3rem_3rem_#222]`}
    >
      Classic Cars
    </h1>
    <img
      src={heroImage}
      alt=""
      aria-hidden="true"
      className="w-[70%] max-[1000px]:w-[90%] max-[600px]:w-full"
    />
  </Section>
);

export default Hero;