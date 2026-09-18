import { featuresLeft, featuresRight, optionText } from "./data";
import mobile from "./images/mobile-2.webp";

const Media = ({ Icon, title, side }) => (
  <div className="mb-[70px] flex items-start">
    {side === "right" ? (
      <>
        <div className="mr-3 flex h-[70px] w-[70px] flex-none items-center justify-center rounded-[2px] bg-[#ef473a] text-[2em] text-white max-[990px]:h-[50px] max-[990px]:w-[50px]">
          <Icon aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h5 className="mb-[12px] mt-0 text-[24px] text-[#080808]">{title}</h5>
          <p className="mb-2 text-[15px] leading-[20px] text-[#757474]">{optionText}</p>
        </div>
      </>
    ) : (
      <>
        <div className="flex-1">
          <h5 className="mb-[12px] mt-0 text-[24px] text-[#080808]">{title}</h5>
          <p className="mb-2 text-[15px] leading-[20px] text-[#757474]">{optionText}</p>
        </div>
        <div className="ml-3 flex h-[70px] w-[70px] flex-none items-center justify-center rounded-[2px] bg-[#ef473a] text-[2em] text-white max-[990px]:h-[50px] max-[990px]:w-[50px]">
          <Icon aria-hidden="true" />
        </div>
      </>
    )}
  </div>
);

const Feature = () => (
  <section className="feature relative z-20 bg-white py-[80px] text-right max-[990px]:pt-[90px] max-[990px]:pb-0">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="-mx-[15px] flex flex-wrap">
        {/* Left features column */}
        <div className="w-full px-[15px] md:max-w-full md:flex-[1_1_0%]">
          <div className="features mt-[90px] text-left max-[990px]:-mt-10">
            {featuresLeft.map((f) => (
              <Media key={f.title} {...f} side="left" />
            ))}
          </div>
        </div>

        {/* Right features column */}
        <div className="w-full px-[15px] md:order-4 md:max-w-full md:flex-[1_1_0%]">
          <div className="features mt-[90px] max-[990px]:-mt-10">
            {featuresRight.map((f) => (
              <Media key={f.title} {...f} side="right" />
            ))}
          </div>
        </div>

        {/* Phone image column */}
        <div className="w-full px-[15px] md:order-1 md:max-w-full md:flex-[1_1_0%]">
          <div className="mobile-img">
            <img src={mobile} alt="mobile-app" className="mx-auto block w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Feature;