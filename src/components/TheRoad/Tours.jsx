import { useState } from "react";
import { tours } from "./data";

const TourCard = ({ tour }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-[35rem] [perspective:150rem] max-[1200px]:my-[3rem]">
      <div
        className={`relative z-10 rounded-[0.3rem] bg-white text-center opacity-90 [transition:opacity_0.4s,transform_0.4s,box-shadow_0.4s]${
          flipped
            ? " z-0 opacity-50 shadow-[0_2rem_4rem_#777] [transform:translateZ(-5rem)_translateX(3rem)]"
            : ""
        }`}
      >
        <img
          src={tour.image}
          alt=""
          aria-hidden="true"
          className="w-full rounded-t-[0.3rem]"
          loading="lazy"
        />
        <h1 className="absolute right-[1.5rem] top-[30%] text-[2.5rem] font-bold uppercase text-white [text-shadow:0_0_1rem_#000]">
          {tour.name}
        </h1>
        <ul className="mx-auto w-[80%] pb-[3rem] pt-[2rem]">
          {tour.items.map((item) => (
            <li
              key={item}
              className="my-[2rem] border-b-[0.1rem] border-[#2b81e4] pb-[1.5rem] text-[1.6rem] font-medium text-[#777]"
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="absolute left-[0.5rem] top-[0.5rem] cursor-pointer rounded-[0.3rem] border-none bg-[rgba(255,255,255,0.8)] p-[0.5rem] text-[1.5rem] font-semibold uppercase tracking-[0.2rem] text-[#777]"
          onClick={() => setFlipped((prev) => !prev)}
        >
          price &gt;&gt;
        </button>
      </div>
      <div
        className={`absolute top-0 flex h-full w-full flex-col items-center justify-center rounded-[0.3rem] bg-[#2b81e4] opacity-50 shadow-[0_2rem_4rem_#777] [transform:translateZ(-5rem)_translateX(3rem)] [transition:opacity_0.4s,transform_0.4s,box-shadow_0.4s]${
          flipped
            ? " opacity-90 shadow-[0_0.5rem_2rem_#aaa] [transform:translateZ(0)_translateX(0)]"
            : ""
        }`}
      >
        <button
          type="button"
          className="absolute left-[0.5rem] top-[0.5rem] cursor-pointer rounded-[0.3rem] border-none bg-[rgba(255,255,255,0.8)] p-[0.5rem] text-[1.5rem] font-semibold uppercase tracking-[0.2rem] text-[#777]"
          onClick={() => setFlipped((prev) => !prev)}
        >
          &lt;&lt; back
        </button>
        <h3 className="mb-[3rem] text-[5rem] font-light text-white">
          {tour.price}
        </h3>
        <button
          type="button"
          className="cursor-pointer rounded-[5rem] border-none bg-white px-[2rem] py-[1rem] text-[2.5rem] tracking-[0.2rem] text-[#2b81e4]"
        >
          Booking
        </button>
      </div>
    </div>
  );
};

const Tours = () => (
  <section className="pb-[10rem] pt-[5rem]">
    <h1 className="mb-[8rem] text-center text-[8rem] text-[#2b81e4] [text-shadow:0_0.1rem_0.2rem_#2b81e4] max-[1000px]:text-[6rem] max-[800px]:text-[5rem]">
      The Most Popular Tours
    </h1>
    <div className="flex justify-evenly max-[1200px]:flex-col max-[1200px]:items-center">
      {tours.map((tour) => (
        <TourCard key={tour.name} tour={tour} />
      ))}
    </div>
  </section>
);

export default Tours;