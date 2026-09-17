import { features } from "./data";

const Features = () => (
  <div className="features">
    <h2>Our Features</h2>
    <div className="container">
      {features.map(({ img, title, text }) => (
        <div className="feat-box" key={title}>
          <img src={img} alt="" />
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
      <div className="clearfix" />
    </div>
  </div>
);

export default Features;