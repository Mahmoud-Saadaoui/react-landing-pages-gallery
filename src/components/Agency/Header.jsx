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

  return (
    <header id="top">
      <div className="overlay">
        <div className="container-fluid">
          <div className="slider">
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                {slides.map(({ text, link }, i) => (
                  <div key={text} className={`carousel-item${index === i ? " active" : ""}`}>
                    <div className="carousel-caption">
                      <h3>{text}</h3>
                      <a
                        className="scroll"
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
                className="carousel-control-prev"
                href="#carousel"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIndex((i) => (i - 1 + slides.length) % slides.length);
                }}
              >
                <FaAngleLeft className="fa fa-angle-left fa-2x" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIndex((i) => (i + 1) % slides.length);
                }}
              >
                <FaAngleRight className="fa fa-angle-right fa-2x" aria-hidden="true" />
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