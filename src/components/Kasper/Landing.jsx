import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import landing from "./images/landing.jpg";
import design from "./images/design-features.jpg";
import subscribe from "./images/subscribe.jpg";

const slides = [
  {
    image: landing,
    title: ["We Are Kasper", "We Make Art."],
    text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
  },
  {
    image: design,
    title: ["We Design Experiences", "Minimal & Clean."],
    text: "Every detail is crafted for clarity and speed. A design that is simple on the surface, powerful underneath, and perfectly aligned with your goals.",
  },
  {
    image: subscribe,
    title: ["Creative Ideas", "Never Stop."],
    text: "From the first sketch to the final pixel, we turn ideas into interfaces people love to use, day after day.",
  },
];

const AUTOPLAY_MS = 5000;

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = slides.length;

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, length]);

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  const slide = slides[index];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#1f2021]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className="absolute inset-0 bg-cover transition-opacity duration-[1200ms] ease-in-out"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[rgba(0,0,0,.6)]"></div>

      <div className="absolute left-0 top-1/2 flex w-1/2 -translate-y-1/2 justify-end max-[767px]:w-full">
        <div
          key={index}
          className="animate-fade-in-up bg-[rgba(15,116,143,.7)] p-[50px] text-white max-[767px]:w-full"
        >
          <div className="max-w-[500px] max-[767px]:max-w-full">
            <h2 className="mb-[20px] text-[32px] font-normal leading-[1.5]">
              {slide.title[0]}
              <br />
              {slide.title[1]}
            </h2>
            <p className="text-[14px] leading-[2]">{slide.text}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-[30px] top-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent text-[2em] text-[#ddd] transition-colors duration-300 hover:text-white max-[767px]:hidden"
      >
        <FaAngleLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-[30px] top-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent text-[2em] text-[#ddd] transition-colors duration-300 hover:text-white max-[767px]:hidden"
      >
        <FaAngleRight aria-hidden="true" />
      </button>

      <ul className="absolute bottom-[30px] left-1/2 flex -translate-x-1/2">
        {slides.map((s, i) => (
          <li key={i} className="mr-[10px]">
            <button
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-[20px] w-[20px] cursor-pointer rounded-full border border-white transition-colors duration-300 ${
                i === index ? "bg-[#19c8fa]" : "bg-transparent hover:bg-white"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Landing;