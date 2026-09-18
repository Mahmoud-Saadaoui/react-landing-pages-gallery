import { bottom } from "./data";
import CtaButtons from "./CtaButtons";

const H3 = "mb-8 text-4xl font-bold leading-10 text-[hsl(210_10%_33%)] md:text-5xl md:leading-none";

const sectionContainer = "mx-auto max-w-6xl px-10 text-center";

const Bottom = () => (
  <section id="bottom">
    <div className={`${sectionContainer} my-20`}>
      <h3 className={H3}>{bottom.title}</h3>
      <p className="mx-auto mb-10 max-w-[48rem] text-center text-xl leading-9 text-[hsl(201_11%_66%)]">
        {bottom.description}
      </p>
      <CtaButtons />
    </div>
  </section>
);

export default Bottom;