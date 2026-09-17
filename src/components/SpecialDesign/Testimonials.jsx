import { testimonials } from "./data";

const Testimonials = () => (
  <div className="testimonials">
    <div className="container">
      <h2>Testimonials</h2>
      {testimonials.map(({ img, name, position, text }) => (
        <div className="ts-box" key={name}>
          <p>{text}</p>
          <div className="person-info">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="clearfix" />
  </div>
);

export default Testimonials;