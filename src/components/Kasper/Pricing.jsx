import MainHeading from "./MainHeading";
import { plans } from "./data";

const features = [
  "Feature No 1",
  "Extra Feature",
  "Extra Feature No 2",
  "Feature",
];

const Pricing = () => (
  <div className="py-[100px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <MainHeading title="Pricing" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[30px]">
        {plans.map((plan, index) => (
          <div
            data-reveal
            style={{ transitionDelay: `${index * 100}ms` }}
            className="bg-[#fcfcfc] text-center"
            key={plan.name}
          >
            <div className="border-y border-[#19c8fa] px-[20px] py-[40px]">
              <h3 className="mb-[20px] font-normal uppercase">{plan.name}</h3>
              <span className="relative text-[60px] font-bold before:relative before:top-[-40px] before:mr-[15px] before:text-[25px] before:font-normal before:content-['$'] after:relative after:right-[-15px] after:text-[20px] after:content-['/Mo']">
                {plan.price}
              </span>
            </div>
            <ul className="border-b border-[#19c8fa]">
              {features.map((feature) => (
                <li
                  className="relative p-[20px] not-last:after:absolute not-last:after:bottom-0 not-last:after:left-1/2 not-last:after:h-px not-last:after:w-[140px] not-last:after:-translate-x-1/2 not-last:after:bg-[#19c8fa] not-last:after:content-['']"
                  key={feature}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div className="foot">
              <a
                href="#"
                className="mx-auto my-[30px] block w-fit border border-[#19c8fa] px-[20px] py-[20px] no-underline"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <p
        data-reveal
        className="mx-auto mb-[20px] mt-[50px] text-center text-[20px]"
      >
        Contact us if you have special request
      </p>
      <a
        data-reveal
        href="#"
        className="mx-auto my-[20px] block w-fit bg-[#19c8fa] px-[30px] py-[15px] text-center text-white no-underline"
      >
        Contact Us
      </a>
    </div>
  </div>
);

export default Pricing;