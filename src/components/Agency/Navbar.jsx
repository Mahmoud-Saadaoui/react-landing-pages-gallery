import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { brand, navLinks } from "./data";
import { scrollTo } from "./utils";

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("services");

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY >= 500);
      for (const { target } of navLinks) {
        const el = document.querySelector(`.agency-page #${target}`);
        if (el && el.getBoundingClientRect().top <= 120) setActive(target);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 border-b transition-all duration-1000 ${
        solid
          ? "border-[#eee] bg-white"
          : "border-transparent"
      }`}
      id="navBar"
    >
      <div className="mx-auto flex w-full max-w-full flex-row-reverse items-center px-[15px] md:max-w-[720px] md:flex-row lg:max-w-[960px] xl:max-w-[1140px]">
        <button
          className={`md:hidden ml-auto mr-0 flex items-center justify-center p-[.5rem] outline-none transition-all duration-1000`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`flex items-center justify-center ${solid ? "text-[#16aeca]" : "text-white"}`}>
            <FaBars aria-hidden="true" />
          </span>
        </button>
        <a
          className="shrink-0 py-2.5"
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("gallery");
          }}
        >
          <img src={brand} alt="logo" className="w-[80%] transition-all duration-1000" />
        </a>
        <div
          className={`${open ? "block" : "hidden"} md:flex md:flex-1 md:items-center ${
            solid ? "max-md:bg-white" : "max-md:bg-[#16aeca]"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="m-0 flex list-none flex-col gap-0 p-0 md:flex-row md:items-center">
            {navLinks.map(({ label, target }) => (
              <li key={target}>
                <a
                  className={`block whitespace-nowrap px-6 py-2.5 text-[16px] leading-[40px] transition-all duration-500 ${
                    solid
                      ? active === target
                        ? "bg-[#16aeca] text-[#dae413]"
                        : "text-[#16aeca] hover:bg-[#16aeca] hover:text-[#dae413]"
                      : active === target
                      ? "bg-white text-[#16aeca]"
                      : "text-white hover:bg-white hover:text-[#16aeca]"
                  } max-md:px-2`}
                  href={`#${target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(target);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;