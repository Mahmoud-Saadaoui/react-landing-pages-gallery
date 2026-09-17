import { supercharge } from "./data";

const Supercharge = () => (
  <section id="supercharge">
    <div className="section-container my-20">
      <h3>{supercharge.title}</h3>
      <p className="section-content mb-16 text-xl">{supercharge.description}</p>

      <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
        {supercharge.items.map((item) => (
          <div key={item.title} className="flex flex-col items-center space-y-5">
            <img src={item.icon} alt="" className="mb-6" loading="lazy" />
            <h5>{item.title}</h5>
            <p className="max-w-md text-grayishBlue">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Supercharge;