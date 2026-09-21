import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { watchBands, watchCases } from "./data";

const controlPositions = {
  top: "top-[22vh] left-1/2 -translate-x-1/2",
  right: "top-1/2 right-[2rem] -translate-y-1/2",
  bottom: "left-1/2 bottom-[20vh] -translate-x-1/2",
  left: "top-1/2 left-[2rem] -translate-y-1/2",
};

const Section4 = () => {
  const [axisX, setAxisX] = useState(0);
  const [axisY, setAxisY] = useState(0);

  const hide = {
    top: axisY === -280,
    bottom: axisY === 280,
    right: axisX === 280,
    left: axisX === -280,
  };

  const move = (dir) => {
    if (dir === "top") setAxisY((v) => Math.max(-280, Math.min(280, v - 70)));
    if (dir === "bottom") setAxisY((v) => Math.max(-280, Math.min(280, v + 70)));
    if (dir === "right") setAxisX((v) => Math.max(-280, Math.min(280, v + 70)));
    if (dir === "left") setAxisX((v) => Math.max(-280, Math.min(280, v - 70)));
  };

  const control = (name, Icon, label) => (
    <a
      href="#"
      className={`absolute flex h-[5rem] w-[5rem] items-center justify-center rounded-[5rem] bg-[#6edae6] transition-transform duration-300 [box-shadow:0_0.4rem_1.2rem_rgba(0,0,0,0.2)] ${
        hide[name] ? "cursor-default" : "hover:scale-[1.15]"
      } ${controlPositions[name]}`}
      onClick={(e) => {
        e.preventDefault();
        move(name);
      }}
      aria-label={label}
    >
      <Icon className={`text-[3rem] text-white ${hide[name] ? "opacity-40" : ""}`} />
    </a>
  );

  return (
    <section className="relative flex h-[140vh] flex-col items-center justify-center px-0 py-[20vh]" id="section-4">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div
          className="absolute flex items-center justify-center transition-[margin-right] duration-[1000ms]"
          style={{ marginRight: `${axisX}rem` }}
        >
          {watchBands.map((band) => (
            <img src={band} className="h-[35rem] w-[35rem] object-contain max-[700px]:h-[24rem] max-[700px]:w-[24rem]" key={band} alt="" />
          ))}
        </div>
        <div
          className="absolute flex flex-col items-center justify-center transition-[margin-top] duration-[1000ms]"
          style={{ marginTop: `${axisY}rem` }}
        >
          {watchCases.map((c) => (
            <img src={c} className="h-[35rem] w-[35rem] object-contain max-[700px]:h-[24rem] max-[700px]:w-[24rem]" key={c} alt="" />
          ))}
        </div>
      </div>
      {control("top", FaAngleUp, "Move bands up")}
      {control("right", FaAngleRight, "Move bands right")}
      {control("bottom", FaAngleDown, "Move bands down")}
      {control("left", FaAngleLeft, "Move bands left")}
      <button className="absolute bottom-[30vh] right-[35%] h-[5rem] w-[13rem] cursor-pointer rounded-[4rem] border-[0.1rem] border-dashed border-white bg-[#000] text-[1.6rem] font-extralight text-[#6edae6] max-[1100px]:right-[25%] max-[700px]:right-[15%] max-[450px]:right-[5%]">
        Buy Now
      </button>
    </section>
  );
};

export default Section4;