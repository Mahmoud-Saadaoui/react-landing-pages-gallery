import { useEffect, useState } from "react";
import "../components/WineHouse/WineHouse.css";
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

  const left = (index) => (index < active ? "-100vw" : "0");
  const scale = (index) => (index === active ? 1 : 1.5);

  return (
    <div className="container">
      <WineNavbar open={menuOpen} onToggle={() => setMenuOpen((p) => !p)} />

      <button type="button" className="page-btn left-btn" onClick={goBackward}>
        <img src={arrow} alt="" aria-hidden="true" />
      </button>
      <button type="button" className="page-btn right-btn" onClick={goForward}>
        <img src={arrow} alt="" aria-hidden="true" />
      </button>

      <div className="progress-wrapper">
        <div className="progress">
          <h2>{active + 1}/{TOTAL}</h2>
        </div>
        <div className="circle-wrapper">
          {Array.from({ length: TOTAL }, (_, index) => (
            <div
              key={index}
              className={`circle circle-${index + 1}`}
              style={{
                backgroundColor: index === active ? "#ddd" : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      <div className="wrapper">
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