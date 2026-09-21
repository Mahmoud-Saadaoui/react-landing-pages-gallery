import { useEffect, useRef, useState } from "react";
import { FaApple } from "react-icons/fa";
import screen from "./images/MacBook/macbook-screen.png";
import keyboard from "./images/MacBook/macbook-keyboard.png";
import loadingBg from "./images/MacBook/macbook-1-desktop.webp";

const Section3 = () => {
  const [changed, setChanged] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el || changed) return;
      if (window.scrollY + window.innerHeight >= el.offsetTop + el.offsetHeight / 2) {
        setChanged(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [changed]);

  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center bg-[#000] px-0 py-[15rem] [clip-path:polygon(68%_0,100%_0,100%_97%,38%_100%,0_100%,0_3%)] max-[700px]:px-[2rem] max-[700px]:py-[8rem]"
      id="section-3"
    >
      <h1 className="mb-[15rem] text-[10rem] font-extralight text-[#6edae6] max-[550px]:text-[8rem] max-[450px]:text-[6rem]">
        MacBook Air
      </h1>
      <div
        className={`relative flex w-[80%] flex-col items-center justify-center max-[900px]:w-[90%] [perspective:1000rem]`}
        ref={contentRef}
      >
        <img
          src={screen}
          className={`w-full origin-bottom max-[700px]:[transform:rotateX(0)] ${
            changed
              ? "[transform:rotateX(0)] transition-transform duration-[3000ms]"
              : "[transform:rotateX(-80deg)]"
          }`}
          alt=""
        />
        <img src={keyboard} className="w-full" alt="" />
        <div
          className={`absolute top-[5.5%] left-[13%] h-[81%] w-[73.5%] bg-cover bg-center bg-no-repeat ${
            changed
              ? "opacity-100 transition-opacity duration-[1000ms] delay-[2000ms]"
              : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(" +
              loadingBg +
              ")",
          }}
        >
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center bg-[#000] ${
              changed
                ? "opacity-0 transition-opacity duration-[1000ms] delay-[5000ms]"
                : ""
            }`}
          >
            <FaApple className="mb-[2rem] text-[10rem] text-white max-[900px]:text-[6rem]" />
            <div className="relative h-[0.3rem] w-[22rem] rounded-[5rem] bg-[#888]">
              <span
                className={`absolute top-0 left-0 h-full bg-white ${
                  changed
                    ? "w-full transition-[width] duration-[1000ms] delay-[3000ms]"
                    : "w-0"
                }`}
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute w-[70rem] text-center max-[700px]:w-[50rem] max-[450px]:w-[40rem] ${
            changed
              ? "opacity-100 transition-opacity duration-[1000ms] delay-[6000ms]"
              : "opacity-0"
          }`}
        >
          <h2 className="text-[6rem] text-[#6edae6] max-[550px]:text-[5rem] max-[450px]:text-[3.5rem]">
            Light. Speed.
          </h2>
          <p className="my-[3rem] text-[2.5rem] font-extralight max-[450px]:text-[2rem] max-[450px]:font-light">
            Starting at $999
          </p>
          <button className="h-[5rem] w-[25rem] cursor-pointer rounded-[0.5rem] border-none bg-[linear-gradient(#ddd,#fff)] text-[1.5rem] font-medium tracking-[0.2rem] text-[#6edae6] [box-shadow:0.1rem_0.1rem_0.1rem_#fff,-0.1rem_-0.1rem_0.1rem_#fff] max-[550px]:h-[3rem] max-[550px]:w-[15rem] max-[550px]:text-[1.3rem]">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;