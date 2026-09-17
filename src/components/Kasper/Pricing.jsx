import MainHeading from "./MainHeading";
import { plans } from "./data";

const features = [
  "Feature No 1",
  "Extra Feature",
  "Extra Feature No 2",
  "Feature",
];

const Pricing = () => (
  <div className="pricing">
    <div className="container">
      <MainHeading title="Pricing" />
      <div className="plans">
        {plans.map((plan) => (
          <div className="plan" key={plan.name}>
            <div className="head">
              <h3>{plan.name}</h3>
              <span>{plan.price}</span>
            </div>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="foot">
              <a href="#">Buy Now</a>
            </div>
          </div>
        ))}
      </div>
      <p className="contact-text">Contact us if you have special request</p>
      <a href="#" className="contact-link">
        Contact Us
      </a>
    </div>
  </div>
);

export default Pricing;