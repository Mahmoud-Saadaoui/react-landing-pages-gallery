import { useState } from "react";
import { logo, navLinks, heroText } from "./data";

const NavLink = ({ label }) => (
  <div className="group">
    <a href="#">{label}</a>
    <div className="border-blue-50 mx-2 group-hover:border-b" />
  </div>
);

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="" />
          <div className="font-alata hidden h-10 md:flex md:space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={`focus:outline-none hamburger z-40 block md:hidden${open ? " open" : ""}`}
            >
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </nav>

        <div
          id="menu"
          className={`absolute top-0 bottom-0 left-0 flex-col self-end min-h-screen w-full space-y-3 bg-black py-1 pt-40 pl-12 text-lg uppercase text-white${
            open ? " flex" : " hidden"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-pink-500">
              {link}
            </a>
          ))}
        </div>

        <div className="mt-32 mb-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl">
          {heroText}
        </div>
      </div>
    </section>
  );
};

export default Hero;