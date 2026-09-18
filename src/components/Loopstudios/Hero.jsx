import { useState } from "react";
import { logo, navLinks, heroText } from "./data";
import heroDesktop from "./images/desktop/image-hero.jpg";
import heroMobile from "./images/mobile/image-hero.jpg";

const NavLink = ({ label }) => (
  <div className="group">
    <a href="#">{label}</a>
    <div className="mx-2 border-blue-50 group-hover:border-b" />
  </div>
);

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroDesktop})` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-center max-[576px]:block"
        style={{ backgroundImage: `url(${heroMobile})` }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="" />
          <div className="hidden h-10 md:flex md:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className={`relative z-40 block h-6 w-6 transition-all duration-[250ms] focus:outline-none ${
                open ? "rotate-90" : ""
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 bg-white transition-all duration-500 ${
                  open ? "translate-x-1.5 translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 bg-white transition-all duration-500 ${
                  open ? "hidden" : "translate-y-[7px]"
                }`}
              />
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 bg-white transition-all duration-500 ${
                  open
                    ? "-translate-x-1.5 translate-y-1.5 -rotate-45"
                    : "translate-y-[14px]"
                }`}
              />
            </button>
          </div>
        </nav>

        <div
          id="menu"
          className={`absolute bottom-0 left-0 top-0 flex-col space-y-3 bg-black py-1 pl-12 pt-40 text-lg uppercase text-white min-h-screen w-full ${
            open ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-pink-500">
              {link}
            </a>
          ))}
        </div>

        <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl">
          {heroText}
        </div>
      </div>
    </section>
  );
};

export default Hero;