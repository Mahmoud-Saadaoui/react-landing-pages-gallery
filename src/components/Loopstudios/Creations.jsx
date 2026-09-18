import { creations } from "./data";

const CreationItem = ({ item }) => (
  <div className="group relative overflow-hidden md:w-1/4">
    <img
      src={item.desktop}
      alt=""
      className="hidden w-full transition duration-200 md:block group-hover:scale-110"
      loading="lazy"
    />
    <img src={item.mobile} alt="" className="w-full md:hidden" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827] group-hover:from-[#f9fafb] group-hover:to-white group-hover:opacity-70" />
    <h5 className="absolute bottom-[16px] w-[208px] px-6 text-white transition duration-200 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
      {item.name}
    </h5>
  </div>
);

const Creations = () => (
  <section id="creations">
    <div className="mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
      <div className="mb-20 flex justify-center md:justify-between">
        <h2 className="text-center text-4xl uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button className="hidden border-2 border-black px-10 py-2 font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white md:block">
          See All
        </button>
      </div>

      <div className="flex w-full flex-col justify-between gap-6 text-2xl uppercase text-white md:flex-row md:gap-8">
        {creations.slice(0, 4).map((item) => (
          <CreationItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-10 flex w-full flex-col justify-between gap-6 text-2xl uppercase text-white md:flex-row md:gap-8">
        {creations.slice(4).map((item) => (
          <CreationItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-center md:hidden">
        <button className="w-full border-2 border-black px-10 py-2 font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white md:hidden">
          See All
        </button>
      </div>
    </div>
  </section>
);

export default Creations;