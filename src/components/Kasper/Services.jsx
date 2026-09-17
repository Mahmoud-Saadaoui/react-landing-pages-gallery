import MainHeading from "./MainHeading";
import { services } from "./data";

const Services = () => (
  <div className="services">
    <div className="container">
      <MainHeading title="Services" />
      <div className="services-container">
        {services.map((srv) => (
          <div className="srv-box" key={srv.icon}>
            <i className={`fas ${srv.icon} fa-3x`}></i>
            <div className="text">
              <h3>{srv.title}</h3>
              <p>{srv.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;