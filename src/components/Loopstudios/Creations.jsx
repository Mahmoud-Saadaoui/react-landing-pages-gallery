import { creations } from "./data";

const CreationItem = ({ item }) => (
  <div className="group item">
    <img
      src={item.desktop}
      alt=""
      className="hidden w-full duration-200 md:block group-hover:scale-110"
      loading="lazy"
    />
    <img
      src={item.mobile}
      alt=""
      className="w-full md:hidden"
      loading="lazy"
    />
    <div className="item-gradient" />
    <h5>{item.name}</h5>
  </div>
);

const Creations = () => (
  <section id="creations">
    <div className="mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
      <div className="mb-20 flex justify-center md:justify-between">
        <h2 className="text-4xl uppercase md:text-left md:text-5xl text-center">
          Our Creations
        </h2>
        <button className="btn hidden md:block">See All</button>
      </div>

      <div className="item-container">
        {creations.slice(0, 4).map((item) => (
          <CreationItem key={item.name} item={item} />
        ))}
      </div>

      <div className="item-container mt-10">
        {creations.slice(4).map((item) => (
          <CreationItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-center md:hidden">
        <button className="btn w-full md:hidden">See All</button>
      </div>
    </div>
  </section>
);

export default Creations;