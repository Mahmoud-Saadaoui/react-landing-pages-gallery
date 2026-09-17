import { useEffect, useState } from "react";
import {
  FaApple,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import iphone from "./images/iphone.webp";
import { navLinks, slideshowBgs } from "./data";

const Section1 = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 20, z: 0 });
  const [playing, setPlaying] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(
      () => setRotation((r) => ({ ...r, y: r.y + 1 })),
      100
    );
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slideshowBgs.length), 20000);
    return () => clearInterval(id);
  }, []);

  const rotate = (axis, delta) =>
    setRotation((r) => ({ ...r, [axis]: r[axis] + delta }));

  return (
    <section className="section-1" id="section-1">
      <a href="#" className="logo" aria-label="Apple">
        <FaApple />
      </a>
      <nav className="navbar">
        {navLinks.map(({ label, href }) => (
          <a href={href} className="navbar-link" key={label}>
            {label}
          </a>
        ))}
      </nav>
      <div className="cube-wrapper">
        <div className="cube" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)` }}>
          <div className="front-side">
            <img src={iphone} alt="" />
          </div>
          <div className="back-side center">
            <FaApple />
          </div>
        </div>
        <div
          className="controls"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          <a href="#" className="top-x-control" onClick={(e) => { e.preventDefault(); rotate("x", 20); }} aria-label="Tilt up">
            <FaArrowUp />
          </a>
          <a href="#" className="bottom-x-control" onClick={(e) => { e.preventDefault(); rotate("x", -20); }} aria-label="Tilt down">
            <FaArrowDown />
          </a>
          <a href="#" className="left-y-control" onClick={(e) => { e.preventDefault(); rotate("y", -20); }} aria-label="Rotate left">
            <FaArrowLeft />
          </a>
          <a href="#" className="right-y-control" onClick={(e) => { e.preventDefault(); rotate("y", 20); }} aria-label="Rotate right">
            <FaArrowRight />
          </a>
          <a href="#" className="top-z-control" onClick={(e) => { e.preventDefault(); rotate("z", -20); }} aria-label="Spin counterclockwise">
            <FaArrowDown />
          </a>
          <a href="#" className="bottom-z-control" onClick={(e) => { e.preventDefault(); rotate("z", 20); }} aria-label="Spin clockwise">
            <FaArrowUp />
          </a>
        </div>
      </div>
      <div className="section-1-banner center">
        <h1>&#8592; Best Gift</h1>
        <p>&quot;Creativity is just connecting things.&quot;</p>
        <span> - Steve Jobs</span>
        <button type="button">Buy Now</button>
      </div>
      <div className="slideshow">
        {slideshowBgs.map((bg, i) => (
          <div
            key={bg}
            className={i === active ? "change" : ""}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Section1;