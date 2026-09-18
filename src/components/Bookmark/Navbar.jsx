import { useState } from "react";
import { navLinks, logos } from "./data";

const container =
  "mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]";

const line = "absolute left-0 top-0 h-[3px] w-6 bg-black transition-all duration-500";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <nav className={`${container} relative p-6`}>
      <div className="my-6 flex items-center justify-between space-x-20">
        <div className="z-30">
          <img
            src={open ? logos.logoFooter : logos.logo}
            alt=""
            id="logo"
          />
        </div>

        <div className="hidden items-center space-x-10 uppercase text-[#9194a1] md:flex">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="tracking-widest hover:text-[#fa5757]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg border-2 border-[#fa5757] bg-[#fa5757] px-8 py-2 text-white shadow-md hover:bg-white hover:text-[#fa5757]"
          >
            Login
          </a>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle menu"
          id="menu-btn"
          className={`relative z-30 block h-6 w-6 cursor-pointer transition-all duration-[250ms] focus:outline-none md:hidden${
            open ? " fixed right-[25px] top-[50px]" : ""
          }`}
        >
          <span
            className={`${line} ${
              open ? "rotate-45 translate-x-1.5 translate-y-1.5 bg-white" : ""
            }`}
          ></span>
          <span
            className={`${line} ${
              open ? "hidden" : "translate-y-[7px]"
            }`}
          ></span>
          <span
            className={`${line} ${
              open
                ? "-rotate-45 -translate-y-1.5 translate-x-1.5 bg-white"
                : "translate-y-[14px]"
            }`}
          ></span>
        </button>
      </div>

      <div
        id="menu"
        className={`fixed inset-0 z-20 h-full w-full flex-col items-center self-end divide-y divide-gray-500 bg-[#252b46] px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-white opacity-90${
          open ? " flex" : " hidden"
        }`}
      >
        {navLinks.map((link) => (
          <div key={link.label} className="w-full py-3 text-center">
            <a href={link.href} onClick={() => setOpen(false)} className="block hover:text-[#fa5757]">
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;