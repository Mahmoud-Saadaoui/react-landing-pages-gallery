import { access } from "./data";

const Access = () => (
  <section id="access">
    <div className="section-container my-20">
      <h3>{access.title}</h3>
      <p className="section-content mb-24 text-xl">{access.description}</p>
      <img src={access.devices} alt="" className="mx-auto" loading="lazy" />
    </div>
  </section>
);

export default Access;