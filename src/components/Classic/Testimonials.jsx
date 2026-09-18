import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { clients, testimonialText } from "./data";
import testimonialsBg from "./images/testimonials.webp";

const container = "relative mx-auto w-[1200px] max-w-full";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="testim bg-cover text-center" style={{ backgroundImage: `url(${testimonialsBg})` }}>
      <div className="overlay h-full w-full bg-[rgba(49,55,61,.9)]">
        <div className={`${container} min-h-[392px]`}>
          {clients.map(({ img, name }, i) => (
            <div
              key={name}
              className={`py-[50px] text-[20px] text-white${index === i ? " animate-fade-in-up" : " hidden"}`}
            >
              <img className="rounded-full" src={img} alt="" />
              <p className="italic leading-[2]">{testimonialText}</p>
              <span>{name}</span>
            </div>
          ))}
          <FaChevronRight
            className="absolute right-0 top-1/2 cursor-pointer text-[2em] text-[#999] hover:text-[#f7600e]"
            style={{ display: index === clients.length - 1 ? "none" : "block" }}
            onClick={() => setIndex((i) => Math.min(clients.length - 1, i + 1))}
          />
          <FaChevronLeft
            className="absolute left-0 top-1/2 cursor-pointer text-[2em] text-[#999] hover:text-[#f7600e]"
            style={{ display: index === 0 ? "none" : "block" }}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
