import { pricingPlans } from "./data";

const PricingPlan = ({ plan }) => (
  <div
    className={`float-left relative mb-5 w-full border-[3px] border-white py-5 md:mb-5 md:w-full lg:mb-0 lg:w-[32.66666%] ${
      plan.modifier !== "ultimate" ? "lg:mr-[1%]" : ""
    } ${plan.modifier === "plus" ? "lg:left-[33.66666%]" : ""} ${
      plan.modifier === "premium" ? "lg:right-[33.66666%]" : ""
    }`}
  >
    <h3 className="mx-0 mb-[10px] mt-0 text-[26px]">{plan.name}</h3>
    <span className="mb-[10px] inline-block text-[22px] text-[#bfbfbf]">{plan.price}</span>
    <ul className="m-0 list-none p-0 text-[18px] leading-[2]">
      {plan.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </div>
);

const PricingTable = () => (
  <div className="pricing-table bg-[#444] py-[50px] text-center text-white">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <h2 className="mb-10 mt-0 text-[50px]">Our Pricing Plans</h2>
      {pricingPlans.map((plan) => (
        <PricingPlan plan={plan} key={plan.name} />
      ))}
      <div className="clear-both"></div>
    </div>
  </div>
);

export default PricingTable;