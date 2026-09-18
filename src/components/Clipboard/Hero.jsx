import { logo, hero } from "./data";
import CtaButtons from "./CtaButtons";

const sectionContainer =
  "mx-auto max-w-6xl px-10 text-center";

const H3 = "mb-8 text-4xl font-bold leading-10 text-[hsl(210_10%_33%)] md:text-5xl md:leading-none";

const Hero = () => (
  <section id="hero">
    <div className={`${sectionContainer} mb-40 pt-16`}>
      <img src={logo} alt="" className="mx-auto my-16" />
      <h3 className={H3}>{hero.title}</h3>
      <p className="mx-auto mb-10 max-w-[48rem] text-center text-2xl leading-9 text-[hsl(201_11%_66%)]">
        {hero.description}
      </p>
      <CtaButtons />
    </div>
  </section>
);

export default Hero;