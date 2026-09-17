import { useEffect, useRef, useState } from "react";
import { FaApple } from "react-icons/fa";
import screen from "./images/MacBook/macbook-screen.png";
import keyboard from "./images/MacBook/macbook-keyboard.png";

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
    <section className="section-3 center" id="section-3">
      <h1 className="section-3-heading">MacBook Air</h1>
      <div className={`section-3-content center${changed ? " change" : ""}`} ref={contentRef}>
        <img src={screen} className="macbook-img-1" alt="" />
        <img src={keyboard} className="macbook-img-2" alt="" />
        <div className="loading-wrapper">
          <div className="loading center">
            <FaApple />
            <div className="progress-bar" />
          </div>
        </div>
        <div className="macbook-info">
          <h2 className="macbook-info-heading">Light. Speed.</h2>
          <p className="macbook-price">Starting at $999</p>
          <button className="macbook-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;