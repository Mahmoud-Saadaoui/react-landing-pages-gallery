import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { testimonials } from "./data";

export const Testimonial = () => (
  <section className="section__container testimonial__container">
    <h2 className="section__header">
      <span>Nike</span>
    </h2>
    <p className="section__description">The legacy evolves</p>
    <div style={{ position: "relative" }}>
      <Swiper
        className="testimonial__swiper"
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
          <SwiperSlide className="testimonial__swiper-slide" key={testimonial.author}>
            <div className="testimonial__card">
              <p>{testimonial.quote}</p>
              <h4>{testimonial.author}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <span>
          <RiArrowLeftSLine />
        </span>
      </div>
      <div className="swiper-button-next">
        <span>
          <RiArrowRightSLine />
        </span>
      </div>
    </div>
  </section>
);