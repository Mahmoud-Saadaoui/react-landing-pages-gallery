import { useEffect, useState } from "react";
import { sections } from "./data";
import landingBg from "./imgs/01.jpg";

const Landing = ({ bg, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <div
      className="relative min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bg || landingBg})` }}
    >
      <div className="absolute inset-0 z-[1] bg-black/60" />
      <div className="relative z-[999] mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="relative z-[2] flex p-[10px] text-white">
          <div className="w-[300px] p-[15px] font-bold">Special Design</div>
          <div className="w-full text-right">
            <ul
              className={`list-none p-0${
                menuOpen
                  ? " max-[991px]:absolute max-[991px]:left-0 max-[991px]:top-[50px] max-[991px]:z-[2] max-[991px]:block max-[991px]:w-full max-[991px]:rounded-[4px] max-[991px]:bg-white max-[991px]:p-[10px] max-[991px]:text-left"
                  : " max-[991px]:hidden"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {sections.map(({ label, selector }) => (
                <li className="inline-block ml-[10px] max-[991px]:m-[10px] max-[991px]:block" key={selector}>
                  <a
                    href="#"
                    data-section={selector}
                    className={`no-underline transition-colors duration-300 hover:text-[var(--main-color)]${
                      menuOpen
                        ? " max-[991px]:font-bold max-[991px]:text-[var(--main-color)]"
                        : " text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      onNavigate(selector);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className={`relative z-[2] mt-[15px] hidden w-10 cursor-pointer bg-transparent focus:outline-none max-[991px]:inline-block${
                menuOpen ? " menu-active" : ""
              }`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((m) => !m);
              }}
            >
              {menuOpen && (
                <span className="absolute bottom-[-15px] left-[10px] border-[10px] border-transparent border-b-white" />
              )}
              <span className="mb-1 block h-1 bg-white" />
              <span className="mb-1 block h-1 bg-white" />
              <span className="block h-1 bg-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-[2] w-[95%] -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="mb-[12px] text-[34px] font-bold max-[575px]:text-[26px]">
          We Are <span className="text-[var(--main-color)]">Creative</span> Agency
        </h1>
        <p className="text-[20px] leading-[1.6]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit nihil ullam nesciunt quidem iste
        </p>
      </div>
    </div>
  );
};

export default Landing;