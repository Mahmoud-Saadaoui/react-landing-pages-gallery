import { features } from "./data";

const Features = () => (
  <div className="features">
    <div className="container">
      <h2 className="h1 text-center">Our Features</h2>
      {features.map(({ title, text }) => (
        <div className="feat float-left" key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      ))}
      <div className="clearfix"></div>
    </div>
  </div>
);

export default Features;