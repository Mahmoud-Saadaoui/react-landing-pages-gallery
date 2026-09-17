import { hero } from "./data";

const Hero = () => (
  <section
    id="hero"
    className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-contain bg-bottom bg-no-repeat"
  >
    <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
      <img src={hero.intro} alt="" className="mx-auto" />
      <h1 className="mx-auto mt-14 mb-10 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
        {hero.title}
      </h1>
      <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
        {hero.description}
      </p>
      <button className="bg-accentCyan w-52 rounded-full p-3 hover:scale-95">
        Get Started
      </button>
    </div>
  </section>
);

export default Hero;