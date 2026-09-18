import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiHeart3Fill,
  RiShoppingBagFill,
} from "react-icons/ri";
import { trending, arrowClass } from "./data";

const iconBtn =
  "px-[10px] py-[8px] outline-none border-none text-[24px] text-[#767368] bg-white rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.2)] cursor-pointer transition-all duration-300 hover:text-white hover:bg-[#fc6601]";

export const Trending = () => (
  <section className="py-[80px]">
    <div className="mx-auto max-w-[1200px] px-[16px] mb-[32px] flex flex-col-reverse items-center justify-between gap-[32px] min-[769px]:flex-row">
      <div className="flex items-center gap-[16px]">
        <span className={arrowClass}>
          <RiArrowLeftSLine />
        </span>
        <span className={arrowClass}>
          <RiArrowRightSLine />
        </span>
      </div>
      <h2 className="relative mb-[16px] text-[40px] font-bold text-[#333333] after:absolute after:content-[''] after:top-1/2 after:right-full after:-translate-x-[32px] after:-translate-y-1/2 after:h-[2px] after:w-[80px] after:bg-[#fc6601]">
        Trending <span className="text-[48px] text-[#fc6601]">Collection</span>
      </h2>
    </div>
    <Swiper className="w-full py-[32px]" loop slidesPerView="auto" spaceBetween={50}>
      {trending.map((shoe) => (
        <SwiperSlide className="max-w-[300px]" key={shoe.name}>
          <div className="group relative isolate overflow-hidden rounded-[10px] shadow-[5px_5px_20px_rgba(0,0,0,0.2)]">
            <img src={shoe.image} alt="trending" loading="lazy" className="w-full" />
            <div className="absolute inset-0 opacity-0 bg-[rgba(255,255,255,0.75)] z-[1] transition-all duration-300 group-hover:opacity-100">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[16px]">
                <button aria-label="like" className={iconBtn}>
                  <RiHeart3Fill />
                </button>
                <button aria-label="add to bag" className={iconBtn}>
                  <RiShoppingBagFill />
                </button>
              </div>
              <div className="absolute bottom-[16px] w-full text-center">
                <h4 className="text-[19.2px] font-semibold text-[#333333]">{shoe.name}</h4>
                <p className="mb-[8px] text-[#767368]">Style: {shoe.style}</p>
                <h3 className="text-[19.2px] font-bold text-[#fc6601]">{shoe.price}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);