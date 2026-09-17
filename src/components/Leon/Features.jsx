import { features } from "./data";

const Features = () => (
  <div className="features">
    <div className="container">
      {features.map(({ icon: Icon, title, text }) => (
        <div className="feat" key={title}>
          <Icon size={48} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;