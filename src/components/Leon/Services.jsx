import { servicesItems } from "./data";
import servicesImage from "./images/services.jpg";

const ServiceItem = ({ icon: Icon, title, text }) => (
  <div className="srv">
    <Icon size={32} />
    <div className="text">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="services" id="services">
    <div className="container">
      <h2 className="special-heading">Services</h2>
      <p>Don&apos;t be busy, be productive</p>
      <div className="services-content">
        <div className="col">
          {servicesItems.slice(0, 2).map((item) => (
            <ServiceItem key={item.title} {...item} />
          ))}
        </div>
        <div className="col">
          {servicesItems.slice(2).map((item) => (
            <ServiceItem key={item.title} {...item} />
          ))}
        </div>
        <div className="col">
          <div className="image image-column">
            <img src={servicesImage} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services;