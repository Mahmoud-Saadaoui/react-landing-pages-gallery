import { bottom } from "./data";
import CtaButtons from "./CtaButtons";

const Bottom = () => (
  <section id="bottom">
    <div className="section-container my-20">
      <h3>{bottom.title}</h3>
      <p className="section-content mb-10 text-xl">{bottom.description}</p>
      <CtaButtons />
    </div>
  </section>
);

export default Bottom;