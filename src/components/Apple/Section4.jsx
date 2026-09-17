import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { watchBands, watchCases } from "./data";

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
    if (dir === "top") setAxisY((v) => v - 70);
    if (dir === "bottom") setAxisY((v) => v + 70);
    if (dir === "right") setAxisX((v) => v + 70);
    if (dir === "left") setAxisX((v) => v - 70);
  };

  const control = (name, Icon, label) => (
    <a
      href="#"
      className={`watch-control watch-${name}-control center${hide[name] ? " hideControl" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        move(name);
      }}
      aria-label={label}
    >
      <Icon />
    </a>
  );

  return (
    <section className="section-4 center" id="section-4">
      <div className="watches center">
        <div className="watch-bands center" style={{ marginRight: `${axisX}rem` }}>
          {watchBands.map((band) => (
            <img src={band} className="watch-band-img" key={band} alt="" />
          ))}
        </div>
        <div className="watch-cases center" style={{ marginTop: `${axisY}rem` }}>
          {watchCases.map((c) => (
            <img src={c} className="watch-case-img" key={c} alt="" />
          ))}
        </div>
      </div>
      {control("top", FaAngleUp, "Move bands up")}
      {control("right", FaAngleRight, "Move bands right")}
      {control("bottom", FaAngleDown, "Move bands down")}
      {control("left", FaAngleLeft, "Move bands left")}
      <button className="watch-btn">Buy Now</button>
    </section>
  );
};

export default Section4;