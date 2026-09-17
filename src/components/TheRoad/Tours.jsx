import { useState } from "react";
import { tours } from "./data";

const TourCard = ({ tour }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card${flipped ? " change" : ""}`}>
      <div className="front-side">
        <img src={tour.image} alt="" aria-hidden="true" className="card-image" loading="lazy" />
        <h1 className="tour-name">{tour.name}</h1>
        <ul className="card-list">
          {tour.items.map((item) => (
            <li key={item} className="card-list-item">
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navigation-button"
          onClick={() => setFlipped((prev) => !prev)}
        >
          price &gt;&gt;
        </button>
      </div>
      <div className="back-side center">
        <button
          type="button"
          className="navigation-button"
          onClick={() => setFlipped((prev) => !prev)}
        >
          &lt;&lt; back
        </button>
        <h3 className="tour-price">{tour.price}</h3>
        <button type="button" className="card-button">
          Booking
        </button>
      </div>
    </div>
  );
};

const Tours = () => (
  <section className="popular-tours">
    <h1 className="popular-tours-heading">The Most Popular Tours</h1>
    <div className="cards-wrapper">
      {tours.map((tour) => (
        <TourCard key={tour.name} tour={tour} />
      ))}
    </div>
  </section>
);

export default Tours;