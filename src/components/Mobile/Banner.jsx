import { FaApple } from "react-icons/fa";
import { appIcon, bannerText, heading, playButton } from "./data";
import phone from "./images/mobile-1.webp";

const Banner = () => (
  <section className="banner relative z-10 bg-cover bg-center bg-fixed text-right">
    <div className="overlay relative bg-[rgba(239,71,58,0.8)] pt-[90px]">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="-mx-[15px] flex flex-wrap">
          {/* App text + buttons column */}
          <div className="w-full px-[15px] md:order-7 md:max-w-[58.333333%] md:flex-[0_0_58.333333%]">
            <div className="wow" data-wow="fade-in-up">
              <img
                src={appIcon}
                alt="app-icon"
                className="mx-auto mb-[50px] mt-[120px] block max-[990px]:mb-[30px] max-[990px]:mt-0 max-[575px]:mx-auto max-[575px]:block"
              />
            </div>

            <div className="banner-text max-[575px]:mb-[350px] max-[575px]:text-center max-[767px]:mb-[350px]">
              <h1 className="wow mb-[30px] text-[30px] text-white" data-wow="fade-in-down">
                {heading}
              </h1>
              <p className="wow mb-[40px] text-[18px] leading-[32px] text-white" data-wow="fade-in-down">
                {bannerText}
              </p>

              <button
                type="button"
                className="wow mb-[40px] inline-block cursor-pointer items-center rounded-[4px] bg-[#fafafa] px-4 py-2 text-right leading-[50px] max-[500px]:mb-[15px] max-[500px]:mt-[15px] max-[767px]:leading-[40px] max-[990px]:mb-[40px] max-[990px]:mt-0 max-[990px]:w-[210px]"
                data-wow="flip-in-y"
              >
                <img
                  src={playButton}
                  alt=""
                  className="mb-0 mr-3 inline-block w-[50px] align-sub max-[767px]:w-[40px]"
                />
                <p className="mb-0 mr-3 inline-block text-[14px] leading-[25px] text-[#090909]">
                  حمل التطبيق من
                  <br />
                  <span className="text-[18px] font-bold">متجر جوجل</span>
                </p>
              </button>

              <button
                type="button"
                className="wow mb-[40px] inline-block cursor-pointer items-center rounded-[4px] bg-[#fafafa] px-4 py-2 text-right leading-[50px] max-[500px]:mb-[15px] max-[500px]:mr-0 max-[500px]:mt-[15px] max-[767px]:leading-[40px] max-[990px]:mb-[40px] max-[990px]:mr-0 max-[990px]:w-[210px]"
                data-wow="flip-in-y"
              >
                <FaApple
                  aria-hidden="true"
                  className="mr-3 inline-block text-[50px] text-[#333] max-[767px]:text-[40px]"
                />
                <p className="mb-0 mr-3 inline-block text-[14px] leading-[25px] text-[#090909]">
                  حمل التطبيق من
                  <br />
                  <span className="text-[18px] font-bold">متجر أبل</span>
                </p>
              </button>
            </div>
          </div>

          {/* Phone image column */}
          <div className="w-full px-[15px] md:order-1 md:max-w-[41.666667%] md:flex-[0_0_41.666667%]">
            <div
              className="images wow absolute bottom-[-250px] right-0 z-[-1] max-[575px]:bottom-[-500px] max-[575px]:left-[5%] max-[575px]:right-[5%] max-[767px]:bottom-[-500px] max-[767px]:right-[20%] max-[990px]:bottom-[-80px] max-[990px]:right-[-80px]"
              data-wow="fade-in-up"
            >
              <img src={phone} alt="app-img" className="block max-w-full max-[990px]:w-[115%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;