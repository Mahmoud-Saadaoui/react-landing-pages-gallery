import { useState } from "react";
import { features, tabs } from "./data";

const Features = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-center text-4xl font-semibold">{features.title}</h2>
          <p className="mx-auto max-w-md text-center text-grayishBlue">
            {features.description}
          </p>
        </div>
      </section>

      <section id="tabs">
        <div className="container relative mx-auto mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>

          <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`flex cursor-pointer justify-center text-center text-gray-600 hover:text-softRed md:w-1/3 border-b md:border-b-0`}
                onClick={() => setActive(index)}
              >
                <div
                  className={`py-5 ${
                    active === index ? "border-b-4 border-softRed" : ""
                  }`}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>

          <div id="panels" className="container mx-auto">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1${
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
                  <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    {tab.title}
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    {tab.description}
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
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