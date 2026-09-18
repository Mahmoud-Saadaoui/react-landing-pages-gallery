import { hero } from "./data";
import curvyLight from "./images/bg-curvy-light-mode.svg";
import curvyDark from "./images/bg-curvy-dark-mode.svg";

const Hero = ({ dark }) => (
  <section
    id="hero"
    className="bg-contain bg-bottom bg-no-repeat"
    style={{ backgroundImage: `url(${dark ? curvyDark : curvyLight})` }}
  >
    <div className="mx-auto w-full px-6 pb-52 text-center md:pt-20 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <img src={hero.intro} alt="" className="mx-auto" />
      <h1 className="mx-auto mt-14 mb-10 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
        {hero.title}
      </h1>
      <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
        {hero.description}
      </p>
      <button className="bg-[hsl(176_68%_64%)] w-52 rounded-full p-3 hover:scale-95">
        Get Started
      </button>
    </div>
  </section>
);

export default Hero;