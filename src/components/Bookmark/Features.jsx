import { useState } from "react";
import { features, tabs } from "./data";

const container =
  "mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]";

const Features = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <section id="features">
        <div className={`${container} mt-16 px-6`}>
          <h2 className="mb-6 text-center text-4xl font-semibold">{features.title}</h2>
          <p className="mx-auto max-w-md text-center text-[#9194a1]">
            {features.description}
          </p>
        </div>
      </section>

      <section id="tabs">
        <div className={`${container} relative mb-32 mt-12 px-6`}>
          <div className="hidden h-[300px] w-[2000px] rounded-r-full bg-[#5368df] min-[1020px]:absolute min-[1020px]:right-[60%] min-[1020px]:top-[240px]"></div>

          <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`flex cursor-pointer justify-center border-b text-center text-gray-600 hover:text-[#fa5757] md:w-1/3 md:border-b-0`}
                onClick={() => setActive(index)}
              >
                <div
                  className={`py-5 ${
                    active === index ? "border-b-4 border-[#fa5757]" : ""
                  }`}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>

          <div id="panels" className={container}>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`flex flex-col py-5 md:flex-row md:space-x-7${
                  active === index ? "" : " hidden"
                }`}
              >
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={tab.image}
                    alt=""
                    loading="lazy"
                    className="relative z-10"
                  />
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                    {tab.title}
                  </h3>
                  <p className="max-w-md text-center text-[#9194a1] md:text-left">
                    {tab.description}
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="mt-4 rounded-lg border-2 border-white bg-[#5368df] px-6 py-3 font-semibold text-white hover:border-[#5368df] hover:bg-white hover:text-[#5368df] md:inline-flex"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;