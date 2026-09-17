import { useState } from "react";
import { navLinks, logos } from "./data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <nav className="container relative mx-auto p-6">
      <div className="my-6 flex items-center justify-between space-x-20">
        <div className="z-30">
          <img
            src={open ? logos.logoFooter : logos.logo}
            alt=""
            id="logo"
          />
        </div>

        <div className="hidden items-center space-x-10 text-grayishBlue uppercase md:flex">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="tracking-widest hover:text-softRed"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg border-2 border-softRed bg-softRed px-8 py-2 text-white shadow-md hover:bg-white hover:text-softRed"
          >
            Login
          </a>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle menu"
          id="menu-btn"
          className={`hamburger z-30 block focus:outline-none md:hidden${open ? " open" : ""}`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className={`fixed inset-0 z-20 h-full w-full flex-col items-center self-end bg-veryDarkBlue px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-white opacity-90 divide-y divide-gray-500${
          open ? " flex" : " hidden"
        }`}
      >
        {navLinks.map((link) => (
          <div key={link.label} className="w-full py-3 text-center">
            <a href={link.href} onClick={() => setOpen(false)} className="block hover:text-softRed">
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;