import { access } from "./data";

const H3 = "mb-8 text-4xl font-bold leading-10 text-[hsl(210_10%_33%)] md:text-5xl md:leading-none";

const sectionContainer = "mx-auto max-w-6xl px-10 text-center";

const Access = () => (
  <section id="access">
    <div className={`${sectionContainer} my-20`}>
      <h3 className={H3}>{access.title}</h3>
      <p className="mx-auto mb-24 max-w-[48rem] text-center text-xl leading-9 text-[hsl(201_11%_66%)]">
        {access.description}
      </p>
      <img src={access.devices} alt="" className="mx-auto" loading="lazy" />
    </div>
  </section>
);

export default Access;