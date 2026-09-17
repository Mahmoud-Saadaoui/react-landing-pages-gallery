import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowLeftSLine, RiArrowRightSLine, RiHeart3Fill, RiShoppingBagFill } from "react-icons/ri";
import { trending } from "./data";

export const Trending = () => (
  <section className="trending__container">
    <div className="section__container trending__header">
      <div className="section__nav">
        <span>
          <RiArrowLeftSLine />
        </span>
        <span>
          <RiArrowRightSLine />
        </span>
      </div>
      <h2 className="section__header">
        Trending <span>Collection</span>
      </h2>
    </div>
    <Swiper className="trending__swiper" loop slidesPerView="auto" spaceBetween={50}>
      {trending.map((shoe) => (
        <SwiperSlide className="trending__swiper-slide" key={shoe.name}>
          <div className="trending__card">
            <img src={shoe.image} alt="trending" loading="lazy" />
            <div className="trending__card__content">
              <div className="trending__btns">
                <button aria-label="like">
                  <RiHeart3Fill />
                </button>
                <button aria-label="add to bag">
                  <RiShoppingBagFill />
                </button>
              </div>
              <div className="trending__card__details">
                <h4>{shoe.name}</h4>
                <p>Style: {shoe.style}</p>
                <h3>{shoe.price}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);