import { snippets } from "./data";

const H3 = "mb-8 text-4xl font-bold leading-10 text-[hsl(210_10%_33%)] md:text-5xl md:leading-none";

const sectionContainer = "mx-auto max-w-6xl px-10 text-center";

const Snippets = () => (
  <section id="snippets">
    <div className={`${sectionContainer} my-20`}>
      <h3 className={H3}>{snippets.title}</h3>
      <p className="mx-auto mb-24 max-w-[48rem] text-center text-xl leading-9 text-[hsl(201_11%_66%)]">
        {snippets.description}
      </p>
    </div>
  </section>
);

export default Snippets;