import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "./data";

export const Testimonials = () => (
  <section className="section__container testimonial__container" id="testimonial">
    <h2 className="section__header">Testimonials</h2>
    <Swiper
      className="swiper"
      modules={[Pagination]}
      loop
      pagination={{}}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <div className="testimonial__card">
            <p>{testimonial.quote}</p>
            <img src={testimonial.image} alt="testimonial" loading="lazy" />
            <h4>{testimonial.name}</h4>
            <h5>{testimonial.role}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);