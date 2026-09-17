import { pricingPlans } from "./data";

const PricingPlan = ({ plan }) => (
  <div className={`pricing-plan float-left ${plan.modifier}`}>
    <h3>{plan.name}</h3>
    <span className="pricing">{plan.price}</span>
    <ul className="classic-list">
      {plan.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </div>
);

const PricingTable = () => (
  <div className="pricing-table text-center">
    <div className="container">
      <h2 className="h1">Our Pricing Plans</h2>
      {pricingPlans.map((plan) => (
        <PricingPlan plan={plan} key={plan.name} />
      ))}
      <div className="clearfix"></div>
    </div>
  </div>
);

export default PricingTable;