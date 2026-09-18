import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import useScrollSpy from "./useScrollSpy";
import { navLinks } from "./utils";
import smoothScroll from "./utils";

const linkClass = (active, scrolled) => {
  const state = active ? (scrolled ? "bg-[#0575e6] text-white" : "bg-white text-[#0575e6]") : (scrolled ? "text-[#0575e6]" : "text-white");
  const hover = scrolled ? "hover:bg-[#0575e6] hover:text-white" : "hover:bg-white hover:text-[#0575e6]";
  return `${state} ${hover}`;
};

export default function Navbar() {
  const { active, scrolled } = useScrollSpy(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => smoothScroll(id), 50);
  };

  return (
    <nav
      ref={navRef}
      id="navBar"
      className={`fixed left-0 right-0 top-0 z-[100] w-full text-right transition-colors duration-500 max-[767px]:min-h-[80px] ${
        scrolled ? "noTransparrent border-b border-[#eee] bg-white" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto w-full px-[15px] max-[767px]:min-h-[40px] max-[767px]:w-full max-[767px]:max-w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <button
          className={`cursor-pointer border-0 bg-transparent p-3 md:hidden ${
            scrolled ? "max-[767px]:mt-[30px]" : "max-[767px]:absolute max-[767px]:left-0 max-[767px]:top-0 max-[767px]:mt-0"
          }`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`flex items-center justify-center text-[25px] ${scrolled ? "text-[#0575e6]" : ""}`}>
            <FaBars />
          </span>
        </button>
        <div
          id="navbarSupportedContent"
          className={`w-full md:flex md:flex-row ${open ? "flex flex-col" : "hidden"}`}
        >
          <ul className="mx-auto flex list-none flex-col p-0 max-[767px]:pr-0 md:flex-row md:items-center">
            {navLinks.map((l) => (
              <li className={`nav-item list-none text-center${active === l.id ? " active" : ""}`} key={l.id}>
                <a
                  className={`nav-link scroll block px-[1.5rem] text-[16px] leading-[60px] no-underline transition-colors duration-500 max-[990px]:px-3 ${linkClass(
                    active === l.id,
                    scrolled
                  )}`}
                  onClick={() => go(l.id)}
                  href={`#${l.id}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}