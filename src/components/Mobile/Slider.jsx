import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { sliderImages } from "./data";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % sliderImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="slider bg-white py-[80px]" id="slider">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="title mb-[60px] text-center">
          <h3 className="mb-0 text-[36px]">شاهد التطبيق بالتفصيل</h3>
        </div>
        <div id="carouselExampleIndicators" className="relative" data-ride="carousel">
          <ol
            className="absolute -bottom-[60px] left-0 right-0 z-10 m-0 flex list-none justify-center p-0"
          >
            {sliderImages.map((_, i) => (
              <li
                key={i}
                data-slide-to={i}
                className={`mx-[3px] h-[20px] w-[20px] max-w-[20px] cursor-pointer flex-[0_1_auto] rounded-full border border-[#ef473a] text-indent-[-999px] ${
                  index === i ? "active bg-[#ef473a]" : ""
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </ol>
          <div className="carousel-inner relative mx-auto w-[60%] overflow-hidden" role="listbox">
            {sliderImages.map((img, i) => (
              <div
                key={i}
                className={`carousel-item relative w-full ${index === i ? "block" : "hidden"}`}
              >
                <img className="mx-auto block w-full" src={img} alt={`app-img ${i + 1} slide`} />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev absolute bottom-0 left-0 top-0 z-10 mt-[130px] flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#ef473a] text-center text-[#ef473a] opacity-100 no-underline"
            href="#carouselExampleIndicators"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i - 1 + sliderImages.length) % sliderImages.length);
            }}
          >
            <FaAngleLeft style={{ fontSize: 28 }} aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next absolute bottom-0 right-0 top-0 z-10 mt-[130px] flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#ef473a] text-center text-[#ef473a] opacity-100 no-underline"
            href="#carouselExampleIndicators"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + 1) % sliderImages.length);
            }}
          >
            <FaAngleRight style={{ fontSize: 28 }} aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;