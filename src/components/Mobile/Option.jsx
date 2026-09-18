import { options, optionText } from "./data";
import mobile from "./images/mobile-3.webp";

const Option = () => (
  <section className="option relative z-[-2] bg-[#f8f8f8] pt-[120px] text-right max-[990px]:pt-10">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="-mx-[15px] flex flex-wrap">
        {/* Options text column */}
        <div className="w-full px-[15px] md:order-5 md:max-w-[58.333333%] md:flex-[0_0_58.333333%]">
          <div className="options mt-10 mr-[40px] mb-0 max-[500px]:mr-0 max-[767px]:mb-[300px]">
            {options.map(({ icon, title }) => (
              <div className="mb-[60px] flex items-start max-[990px]:mb-[30px]" key={title}>
                <img
                  className="ml-3 flex-none self-start"
                  src={icon}
                  alt="Generic placeholder image"
                />
                <div className="flex-1">
                  <h5 className="mt-0 text-[24px] leading-[40px] text-[#141414]">{title}</h5>
                  <p className="mb-2 text-[15px] leading-[20px] text-[#757474]">{optionText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone image column */}
        <div className="w-full px-[15px] md:order-1 md:max-w-[41.666667%] md:flex-[0_0_41.666667%]">
          <div className="images absolute bottom-[-150px] z-[-1] max-[767px]:bottom-[-400px]">
            <img src={mobile} alt="app-img" className="block max-w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Option;