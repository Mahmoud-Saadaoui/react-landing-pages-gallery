import Section, { sectionHeading } from "./Section";
import { cars } from "./data";

const PopularCars = ({ open, onClose }) => (
  <Section
    id="popular-cars"
    className="flex flex-col justify-around max-[1500px]:h-auto max-[1500px]:pb-[10rem]"
    open={open}
    onClose={onClose}
  >
    <h1 className={`${sectionHeading} mb-[10rem]`}>Popular Cars</h1>
    <div className="flex items-center justify-center max-[1500px]:flex-wrap">
      {cars.map((car) => (
        <div
          key={car.price}
          className="group relative mx-[3rem] w-[50rem] bg-white p-[1rem] shadow-[0.6rem_0.6rem_0.6rem_#bbb] transition-shadow duration-500 hover:shadow-[0.8rem_0.8rem_0.8rem_#bbb] max-[1500px]:m-[3rem] max-[1500px]:w-[40rem]"
        >
          <h2 className="absolute left-[2rem] top-[2rem] z-10 text-[2rem] font-semibold uppercase text-white">
            {car.name}
          </h2>
          <img
            src={car.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          />
          <h3 className="my-[0.5rem] text-[1.8rem] text-[#777]">{car.price}</h3>
          <button
            type="button"
            className="mt-[1rem] w-full cursor-pointer border-0 bg-white p-[0.5rem] text-[1.7rem] uppercase tracking-[0.3rem] text-white [text-shadow:0.1rem_0.1rem_0.3rem_#000] shadow-[0.1rem_0.1rem_0.5rem_#bbb]"
          >
            See More
          </button>
        </div>
      ))}
    </div>
  </Section>
);

export default PopularCars;