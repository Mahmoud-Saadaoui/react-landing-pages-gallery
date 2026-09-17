import { logo, hero } from "./data";
import CtaButtons from "./CtaButtons";

const Hero = () => (
  <section id="hero">
    <div className="section-container mb-40 pt-16">
      <img src={logo} alt="" className="mx-auto my-16" />
      <h3>{hero.title}</h3>
      <p className="section-content mb-10 text-2xl">{hero.description}</p>
      <CtaButtons />
    </div>
  </section>
);

export default Hero;