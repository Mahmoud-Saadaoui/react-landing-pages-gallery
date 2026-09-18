import { useEffect, useState } from "react";
import WineNavbar from "../components/WineHouse/WineNavbar";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "../components/WineHouse/Sections";
import arrow from "../components/WineHouse/images/arrow.png";

const TOTAL = 5;

const WineHousePage = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goForward = () =>
    setActive((prev) => (prev === TOTAL - 1 ? 0 : prev + 1));
  const goBackward = () =>
    setActive((prev) => (prev === 0 ? TOTAL - 1 : prev - 1));

  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY > 0) {
        goForward();
      } else {
        goBackward();
      }
    };

    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("wine-house-root");
    return () => document.documentElement.classList.remove("wine-house-root");
  }, []);

  const left = (index) => (index < active ? "-100vw" : "0");
  const scale = (index) => (index === active ? 1 : 1.5);

  return (
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <WineNavbar open={menuOpen} onToggle={() => setMenuOpen((p) => !p)} />

      <button
        type="button"
        className="fixed top-1/2 left-[4rem] z-[100] -translate-y-1/2 border-none bg-transparent max-[800px]:left-[2rem] max-[500px]:left-[0.5rem]"
        onClick={goBackward}
      >
        <img
          src={arrow}
          alt=""
          aria-hidden="true"
          className="w-[4rem] -rotate-90 cursor-pointer opacity-40 transition-opacity duration-200 hover:opacity-100"
        />
      </button>
      <button
        type="button"
        className="fixed top-1/2 right-[4rem] z-[100] -translate-y-1/2 border-none bg-transparent max-[800px]:right-[2rem] max-[500px]:right-[0.5rem]"
        onClick={goForward}
      >
        <img
          src={arrow}
          alt=""
          aria-hidden="true"
          className="w-[4rem] rotate-90 cursor-pointer opacity-40 transition-opacity duration-200 hover:opacity-100"
        />
      </button>

      <div className="fixed bottom-[2rem] left-[3rem] z-[100] max-[800px]:top-0 max-[800px]:left-1/2 max-[800px]:-translate-x-1/2">
        <div className="my-[1rem] text-center">
          <h2 className="text-[2.5rem] font-light text-[#fff]">{active + 1}/{TOTAL}</h2>
        </div>
        <div className="flex">
          {Array.from({ length: TOTAL }, (_, index) => (
            <div
              key={index}
              className="mx-[0.3rem] h-[1rem] w-[1rem] rounded-full border-[0.1rem] border-solid border-[#fff] transition-colors duration-300"
              style={{
                backgroundColor: index === active ? "#ddd" : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative h-screen w-screen overflow-hidden">
        <Section1 left={left(0)} scale={scale(0)} />
        <Section2 left={left(1)} scale={scale(1)} />
        <Section3 left={left(2)} scale={scale(2)} />
        <Section4 left={left(3)} scale={scale(3)} />
        <Section5 left={left(4)} scale={scale(4)} />
      </div>
    </div>
  );
};

export default WineHousePage;