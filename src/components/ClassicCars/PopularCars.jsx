import Section from "./Section";
import { cars } from "./data";

const PopularCars = ({ open, onClose }) => (
  <Section
    id="popular-cars"
    className="section-2 target"
    open={open}
    onClose={onClose}
  >
    <h1 className="section-heading">Popular Cars</h1>
    <div className="cards-wrapper center">
      {cars.map((car) => (
        <div className="card" key={car.price}>
          <h2 className="car-name">{car.name}</h2>
          <img src={car.image} alt="" aria-hidden="true" className="card-img" loading="lazy" />
          <h3 className="car-price">{car.price}</h3>
          <button type="button" className="card-btn">
            See More
          </button>
        </div>
      ))}
    </div>
  </Section>
);

export default PopularCars;