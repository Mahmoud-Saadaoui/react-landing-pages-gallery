import { feature } from "./data";

const Feature = () => (
  <section id="feature">
    <div className="relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0">
      <img src={feature.image} alt="" loading="lazy" />
      <div className="bg-white pr-0 md:absolute md:right-0 md:top-48 md:py-20 md:pl-20">
        <h2 className="mb-6 mt-10 max-w-lg font-sans text-center text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
          {feature.title}
        </h2>
        <p className="max-w-md text-center md:text-left">{feature.description}</p>
      </div>
    </div>
  </section>
);

export default Feature;