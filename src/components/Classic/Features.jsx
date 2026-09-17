import { features } from "./data";

const Features = () => (
  <div className="features text-center">
    <div className="container">
      {features.map(({ icon: Icon, title }) => (
        <div className="box" key={title}>
          <div className="icon-circle">
            <Icon className="fa-3x" />
          </div>
          <h3>{title}</h3>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;