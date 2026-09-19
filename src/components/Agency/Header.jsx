import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { slides } from "./data";
import { scrollTo } from "./utils";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <header id="top" className="relative min-h-screen overflow-hidden">
      <style>{`@keyframes agency-kenburns { 0% { transform: scale(1.03); } 100% { transform: scale(1.15); } }`}</style>

      <div className="carousel-inner relative min-h-screen">
        {slides.map(({ image, text, link }, i) => (
          <div
            key={text}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
              index === i ? "z-10 opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center [animation:agency-kenburns_30s_ease-in-out_infinite_alternate]"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#29999b]/70 to-[#a7ad2c]/70" />

            <div className="relative z-10 flex h-full w-full items-center justify-center px-[15px] max-[575px]:px-[2%]">
              <div
                className={`flex flex-col items-center text-center transition-all duration-[900ms] ease-out ${
                  index === i
                    ? "translate-y-0 opacity-100 delay-[120ms]"
                    : "translate-y-[50px] opacity-0"
                }`}
              >
                <h3 className="mb-0 max-w-[760px] text-[40px] leading-[50px] text-white max-[980px]:text-[30px] max-[575px]:max-w-[250px] max-[575px]:text-[24px] max-[575px]:leading-[40px]">
                  {text}
                </h3>
                <a
                  className={`mt-[30px] inline-block w-fit rounded-[30px] bg-[#16aeca] px-8 text-[18px] leading-[50px] text-white transition-all duration-[900ms] ease-out hover:bg-[#dae413] hover:text-[#555] ${
                    index === i
                      ? "translate-y-0 opacity-100 delay-[260ms]"
                      : "translate-y-[50px] opacity-0"
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
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute left-[20px] top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#dae413] hover:bg-[#dae413] hover:text-[#555] max-[575px]:left-[10px] max-[575px]:h-[40px] max-[575px]:w-[40px]"
      >
        <FaAngleLeft className="pointer-events-none text-[1.4em]" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-[20px] top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#dae413] hover:bg-[#dae413] hover:text-[#555] max-[575px]:right-[10px] max-[575px]:h-[40px] max-[575px]:w-[40px]"
      >
        <FaAngleRight className="pointer-events-none text-[1.4em]" aria-hidden="true" />
      </button>
    </header>
  );
};

export default Header;