import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { clients, testimonialText } from "./data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="testim text-center">
      <div className="overlay">
        <div className="container">
          {clients.map(({ img, name }, i) => (
            <div key={name} className={`client${index === i ? " active" : " hidden"}`}>
              <img src={img} alt="" />
              <p>{testimonialText}</p>
              <span>{name}</span>
            </div>
          ))}
          <FaChevronRight
            className="fa-chevron-right fa-2x"
            style={{ display: index === clients.length - 1 ? "none" : "block" }}
            onClick={() => setIndex((i) => Math.min(clients.length - 1, i + 1))}
          />
          <FaChevronLeft
            className="fa-chevron-left fa-2x"
            style={{ display: index === 0 ? "none" : "block" }}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;