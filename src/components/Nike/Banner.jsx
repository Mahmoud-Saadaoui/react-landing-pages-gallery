import { RiAddLine } from "react-icons/ri";
import { bannerImg, bannerBg, bannerDescription, btnArrow } from "./data";

export const Banner = () => (
  <section className="mx-auto max-w-[1200px] px-[16px] py-[80px]">
    <div className="px-[32px] py-[80px] grid gap-[32px] rounded-[16px] shadow-[5px_5px_20px_rgba(0,0,0,0.2)] overflow-hidden min-[769px]:grid-cols-2 min-[769px]:items-center">
      <div>
        <img src={bannerImg} alt="banner" loading="lazy" className="w-full max-w-[500px] mx-auto" />
      </div>
      <div className="relative isolate">
        <h2 className="mb-[16px] text-[40px] font-bold text-[#333333]">
          Get Your Shoes Now on <span className="text-[48px] text-[#fc6601]">15%</span> Discount
        </h2>
        <p className="mb-[32px] text-[#767368]">{bannerDescription}</p>
        <button className={btnArrow}>
          <span>
            <RiAddLine />
          </span>{" "}
          Buy Now
        </button>
        <img
          src={bannerBg}
          alt="banner bg"
          className="absolute bottom-[-128px] right-[-192px] -z-[1] opacity-50 w-full"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);