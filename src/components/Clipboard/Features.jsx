import { features } from "./data";

const H5 = "mb-2 text-2xl font-bold leading-8 text-[hsl(210_10%_33%)]";

const sectionContainer = "mx-auto max-w-6xl px-10 text-center";

const Features = () => (
  <section id="features">
    <div className={`${sectionContainer} my-20`}>
      <div className="relative flex flex-col md:flex-row md:space-x-32">
        <div className="md:w-1/2">
          <img src={features.computer} alt="" className="top-0 right-[50%] md:absolute" loading="lazy" />
        </div>

        <div className="mt-16 mb-24 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
          {features.items.map((item) => (
            <div key={item.title}>
              <h5 className={H5}>{item.title}</h5>
              <p className="max-w-md text-[hsl(201_11%_66%)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;