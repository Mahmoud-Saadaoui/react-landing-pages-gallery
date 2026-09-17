import { services, serviceText } from "./data";

const Services = () => (
  <section className="services" id="services">
    <div className="title text-center">
      <h2>خدمات الشركة</h2>
    </div>
    <div className="container">
      <div className="row">
        {services.map(({ img, title }) => (
          <div className="col-md" key={title}>
            <div className="card text-center">
              <img src={img} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{serviceText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;