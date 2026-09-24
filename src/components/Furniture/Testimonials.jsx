import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "./data";

const sectionHeader = "mb-4 text-[2.5rem] font-bold text-[#18181b]";

export const Testimonials = () => (
  <section className="mx-auto w-full max-w-[1200px] px-4 py-20" id="testimonial">
    <h2 className={`${sectionHeader} text-center`}>Testimonials</h2>
    <Swiper
      className="furniture-testimonials-swiper mt-8 w-full"
      modules={[Pagination]}
      loop
      pagination={{ clickable: true }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <div className="mx-auto max-w-[900px] p-4 text-center">
            <p className="mb-4 text-[1.1rem] text-[#18181b]">{testimonial.quote}</p>
            <img
              src={testimonial.image}
              alt={`${testimonial.name} testimonial`}
              loading="lazy"
              className="mx-auto mb-4 aspect-square h-[60px] w-[60px] rounded-full object-cover shadow-[5px_5px_20px_rgba(0,0,0,0.2)]"
            />
            <h4 className="text-[1.2rem] font-semibold text-[#18181b]">{testimonial.name}</h4>
            <h5 className="text-base font-medium text-[#71717a]">{testimonial.role}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
