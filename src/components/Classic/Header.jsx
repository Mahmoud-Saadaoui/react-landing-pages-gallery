import { useEffect, useRef } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import headerBg from "./images/header_stock.webp";

const container = "relative mx-auto w-[1200px] max-w-full";

const buttonClass =
  "mx-[8px] w-[180px] rounded-[10px] border border-[#909090] bg-transparent py-[10px] text-[14px] uppercase transition-all duration-500 ease-in-out hover:border-[#f7600e] hover:bg-[#f7600e] hover:text-white";

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
    <div
      className="header bg-cover text-white"
      style={{ backgroundImage: `url(${headerBg})` }}
      ref={headerRef}
    >
      <div className="overlay h-full w-full bg-[rgba(49,55,61,.9)]">
        <div className={`${container} table h-full`}>
          <div className="navbar absolute left-0 top-0 w-full overflow-hidden py-5">
            <span className="logo text-[24px]">
              Tanatos<span className="text-[#f7600e]">Studio</span>
            </span>
            <span className="links float-right">
              Menu
              <FaBars className="ml-[5px] text-[1.33333333em]" />
            </span>
          </div>
          <div className="table-row">
            <div className="intro text-center">
              <h1 className="m-0 text-[50px] font-extrabold uppercase">
                We Design <span className="text-[#f7600e]">Things</span>
              </h1>
              <p className="mb-[40px] mt-[5px] text-[20px] leading-[1.9] text-[#E2E2E2]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="buttons">
                <button
                  className={buttonClass}
                  onClick={() =>
                    document.querySelector('[data-section="team"]')?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire Us
                </button>
                <button
                  className={buttonClass}
                  onClick={() =>
                    document.querySelector('[data-section="work"]')?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
        <span
          className="arrow absolute bottom-0 left-0 w-full py-[40px] text-center"
          onClick={() =>
            document.querySelector('[data-section="features"]')?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <FaChevronDown className="h-[40px] w-[40px] cursor-pointer rounded-full border-2 border-[#7B7B7B] text-[1.33333333em] leading-[32px]" />
        </span>
      </div>
    </div>
  );
};

export default Header;
