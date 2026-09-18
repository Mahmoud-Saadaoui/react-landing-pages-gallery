import { supercharge } from "./data";

const H3 = "mb-8 text-4xl font-bold leading-10 text-[hsl(210_10%_33%)] md:text-5xl md:leading-none";

const H5 = "mb-2 text-2xl font-bold leading-8 text-[hsl(210_10%_33%)]";

const sectionContainer = "mx-auto max-w-6xl px-10 text-center";

const Supercharge = () => (
  <section id="supercharge">
    <div className={`${sectionContainer} my-20`}>
      <h3 className={H3}>{supercharge.title}</h3>
      <p className="mx-auto mb-16 max-w-[48rem] text-center text-xl leading-9 text-[hsl(201_11%_66%)]">
        {supercharge.description}
      </p>

      <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
        {supercharge.items.map((item) => (
          <div key={item.title} className="flex flex-col items-center space-y-5">
            <img src={item.icon} alt="" className="mb-6" loading="lazy" />
            <h5 className={H5}>{item.title}</h5>
            <p className="max-w-md text-[hsl(201_11%_66%)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Supercharge;