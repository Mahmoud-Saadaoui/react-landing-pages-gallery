import { references } from "./data";

const References = () => (
  <section id="references">
    <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
      {references.map((logo, index) => (
        <img key={index} src={logo} alt="" loading="lazy" />
      ))}
    </div>
  </section>
);

export default References;