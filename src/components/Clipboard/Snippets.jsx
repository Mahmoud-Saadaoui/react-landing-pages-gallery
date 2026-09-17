import { snippets } from "./data";

const Snippets = () => (
  <section id="snippets">
    <div className="section-container my-20">
      <h3>{snippets.title}</h3>
      <p className="section-content mb-24 text-xl">{snippets.description}</p>
    </div>
  </section>
);

export default Snippets;