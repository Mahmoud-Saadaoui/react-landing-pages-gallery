import { features } from "./data";

const Features = () => (
  <section className="features">
    <div className="container">
      <h2>مميزات اللعبة</h2>
      <div className="row">
        {features.map((feature) => (
          <div className="col-md-6" key={feature.title}>
            <div className="media">
              {!feature.reverse && <img src={feature.icon} alt="feature icon" />}
              <div className="media-body">
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
              {feature.reverse && <img src={feature.icon} alt="feature icon" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;