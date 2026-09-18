import { FaShoppingCart } from "react-icons/fa";
import { plans } from "./data";

export default function Prices() {
  return (
    <section className="prices bg-[#f7f7f7] py-[55px]">
      <div className="title text-center">
        <h3 className="text-[30px] text-[#555]">خطط الاسعار</h3>
      </div>
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="row -mx-[15px] flex flex-wrap">
          {[0, 2].map((start) => (
            <div className="col-lg grow basis-0 px-[15px] max-w-full" key={start}>
              <div className="row -mx-[15px] flex flex-wrap">
                {plans.slice(start, start + 2).map((plan, i) => (
                  <div className="col-sm grow basis-0 px-[15px] max-w-full max-md:basis-auto" key={i}>
                    <div
                      className={`plan border-2 border-[#ededed] bg-white text-center text-[#a9a9ab] ${
                        plan.popular
                          ? "mt-[55px] px-0 pb-0 pt-[60px] max-md:mt-[100px] max-md:pt-[15px]"
                          : "mt-[100px] pt-[15px]"
                      }`}
                    >
                      <p className="text-[18px] text-[#a044ff]">{plan.name}</p>
                      <h3 className="mx-auto my-[30px] text-[50px]">
                        {plan.price}
                        <span className="align-bottom text-[15px]">ريال</span>
                      </h3>
                      <ul className="m-0 list-none p-0">
                        {plan.features.map((f, j) => (
                          <li key={j} className="mb-5 text-[15px] leading-[30px]">
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className={`btn rounded-none border border-[#7233a2] px-7 py-2 ${
                          plan.popular
                            ? "bg-[#7233a2] text-white hover:bg-white hover:text-[#7233a2]"
                            : "bg-white text-[#7233a2] hover:bg-[#7233a2] hover:text-white"
                        }`}
                      >
                        <FaShoppingCart aria-hidden="true" /> اطلب الآن
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}