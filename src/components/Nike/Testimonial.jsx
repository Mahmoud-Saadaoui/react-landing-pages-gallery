import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { testimonials, arrowClass } from "./data";

export const Testimonial = () => (
  <section className="mx-auto max-w-[1200px] px-[16px] py-[80px]">
    <h2 className="mb-[16px] text-[40px] font-bold text-[#333333] text-center">
      <span className="text-[48px] text-[#fc6601]">Nike</span>
    </h2>
    <p className="mb-[32px] text-[#767368] text-center">The legacy evolves</p>
    <div style={{ position: "relative" }}>
      <Swiper
        className="w-full mt-[64px]"
        modules={[Navigation]}
        loop
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          addIcons: false,
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.author}>
            <div className="max-w-[800px] mx-auto px-[64px] text-center">
              <p className="mb-[32px] text-[#333333]">{testimonial.quote}</p>
              <h4 className="text-[19.2px] font-semibold text-[#333333]">
                {testimonial.author}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <span className={arrowClass}>
          <RiArrowLeftSLine />
        </span>
      </div>
      <div className="swiper-button-next">
        <span className={arrowClass}>
          <RiArrowRightSLine />
        </span>
      </div>
    </div>
  </section>
);