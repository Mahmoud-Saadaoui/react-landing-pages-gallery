import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { slides } from "./data";
import { scrollTo } from "./utils";
import bgImg from "./images/bg.webp";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <header id="top" className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="min-h-screen bg-gradient-to-r from-[#29999b]/80 to-[#a7ad2c]/80">
        <div className="mx-auto w-full px-[15px]">
          <div className="slider">
            <div className="carousel slide relative">
              <div className="carousel-inner relative flex overflow-hidden">
                {slides.map(({ text, link }, i) => (
                  <div
                    key={text}
                    className={`carousel-item absolute inset-0 min-h-screen transition-opacity duration-500 ${
                      index === i ? "z-10 opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`absolute bottom-[30%] left-0 right-0 transition-opacity duration-500 max-[980px]:bottom-[25%] max-[575px]:left-[2%] max-[575px]:right-[2%] ${
                        index === i ? "z-10 opacity-100" : "opacity-0"
                      }`}
                    >
                      <h3
                        className={`mb-0 text-[40px] leading-[60px] text-white transition-all duration-1000 max-[980px]:text-[30px] ${
                          index === i ? "translate-y-0" : "translate-y-[-50px]"
                        }`}
                      >
                        {text}
                      </h3>
                      <a
                        className={`mt-[30px] inline-block rounded-[30px] bg-[#16aeca] px-8 text-[18px] leading-[50px] text-white transition-all duration-1000 hover:bg-[#dae413] hover:text-[#555] ${
                          index === i ? "translate-y-0" : "translate-y-[50px]"
                        }`}
                        href={`#${link.target}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(link.target);
                        }}
                      >
                        {link.label}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev absolute bottom-[45%] left-[20px] top-auto z-20 flex w-auto items-center justify-center text-center text-white no-underline max-[575px]:hidden"
                href="#carousel"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIndex((i) => (i - 1 + slides.length) % slides.length);
                }}
              >
                <FaAngleLeft className="border-2 border-white p-[30px_20px] text-[2em]" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next absolute bottom-[45%] right-[20px] top-auto z-20 flex w-auto items-center justify-center text-center text-white no-underline max-[575px]:hidden"
                href="#carousel"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIndex((i) => (i + 1) % slides.length);
                }}
              >
                <FaAngleRight className="border-2 border-white p-[30px_20px] text-[2em]" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;