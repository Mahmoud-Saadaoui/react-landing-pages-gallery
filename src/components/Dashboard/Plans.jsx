import { FaCheck, FaXmark, FaCircleInfo } from "react-icons/fa6";
import { plansData } from "./data";
import PageTitle from "./PageTitle";

const COLORS = {
  green: "#22c55e",
  blue: "#0075ff",
  orange: "#f59e0b",
};

const Plans = () => (
  <>
    <PageTitle>Plans</PageTitle>
    <div className="m-[20px] grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(450px,1fr))] max-md:mx-[10px] max-md:gap-[10px] max-md:[grid-template-columns:minmax(250px,1fr)]">
      {plansData.map((plan) => {
        const c = COLORS[plan.color];
        return (
          <div key={plan.name} className="bg-white p-[20px]">
            <div className="border-3 border-solid border-white p-[20px] text-center" style={{ backgroundColor: c, outline: `3px solid ${c}` }}>
              <h2 className="mt-0 mb-0 text-[1.5em] font-bold text-white">{plan.name}</h2>
              <div className="relative mx-auto w-fit text-[40px] text-white">
                <span className="absolute left-[-20px] top-0 text-[25px]">$</span>
                {plan.price}
              </div>
            </div>
            <ul className="m-0 list-none p-0">
              {plan.features.map((f) => (
                <li key={f.label} className="flex items-center border-b border-[#eee] py-[15px] text-[15px]">
                  {f.yes ? (
                    <FaCheck aria-hidden className="mr-[5px] text-[18px] text-[#22c55e]" />
                  ) : (
                    <FaXmark aria-hidden className="mr-[5px] text-[18px] text-[#f44336]" />
                  )}
                  <span>{f.label}</span>
                  <FaCircleInfo aria-hidden className="ml-auto cursor-pointer text-[#888]" />
                </li>
              ))}
            </ul>
            {plan.current ? (
              <p className="mt-[15px] mb-0 text-center text-[#888]">This Is Your Current Plan</p>
            ) : (
              <a
                href="#"
                className="mt-[15px] block w-fit rounded-[6px] px-[10px] py-[4px] text-white"
                style={{ backgroundColor: c }}
              >
                Join
              </a>
            )}
          </div>
        );
      })}
    </div>
  </>
);

export default Plans;