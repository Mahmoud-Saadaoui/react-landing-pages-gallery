import { useEffect, useRef } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (headerRef.current) headerRef.current.style.height = `${window.innerHeight}px`;
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="overlay">
        <div className="container table">
          <div className="navbar">
            <span className="logo">
              Tanatos<span className="main-color">Studio</span>
            </span>
            <span className="links">
              Menu
              <FaBars className="fa-bars fa-lg" />
            </span>
          </div>
          <div className="table-row">
            <div className="intro text-center">
              <h1 className="upper">
                We Design <span className="main-color">Things</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="buttons">
                <button
                  className="hire upper"
                  onClick={() => document.querySelector(".classic-page .our-team")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Hire Us
                </button>
                <button
                  className="upper"
                  onClick={() => document.querySelector(".classic-page .our-work")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
        <span
          className="arrow"
          onClick={() => document.querySelector(".classic-page .features")?.scrollIntoView({ behavior: "smooth" })}
        >
          <FaChevronDown className="fa-chevron-down fa-lg" />
        </span>
      </div>
    </div>
  );
};

export default Header;