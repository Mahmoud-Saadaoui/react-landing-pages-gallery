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

  const toggle = () => setOpen((o) => !o);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-20 border-b transition-all duration-500 ${
        solid ? "border-[#eee] bg-white" : "border-transparent"
      }`}
      id="navBar"
    >
      <div className="relative mx-auto flex min-h-[56px] w-full max-w-full items-center justify-between px-[15px] md:justify-start md:px-8 xl:max-w-[1140px]">
        <a
          className="flex shrink-0 items-center py-2"
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            scrollTo("gallery");
          }}
        >
          <img src={brand} alt="logo" className="h-[44px] w-auto object-contain" />
        </a>

        <button
          className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-[20px] outline-none transition-colors duration-500 md:hidden ${
            solid ? "text-[#16aeca]" : "text-white"
          }`}
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={toggle}
        >
          <FaBars aria-hidden="true" />
        </button>

        <div
          className={`${
            open ? "block" : "hidden"
          } absolute left-0 right-0 top-full border-t px-[15px] pb-2 pt-1 shadow-xl md:static md:flex md:flex-1 md:items-center md:border-0 md:px-0 md:pb-0 md:pt-0 md:shadow-none ${
            solid
              ? "max-md:border-[#eee] max-md:bg-white"
              : "max-md:border-white/15 max-md:bg-[#16aeca]"
          }`}
          id="navbarSupportedContent"
        >
          <ul
            className={`m-0 flex w-full flex-col gap-0 p-0 md:w-auto md:flex-row md:items-center ${
              solid
                ? "max-md:divide-y max-md:divide-[#eee]"
                : "max-md:divide-y max-md:divide-white/10"
            }`}
          >
            {navLinks.map(({ label, target }) => (
              <li key={target}>
                <a
                  className={`block whitespace-nowrap px-6 py-2.5 text-[16px] leading-[40px] transition-all duration-500 max-md:px-5 max-md:py-3 max-md:text-center max-md:leading-none ${
                    solid
                      ? active === target
                        ? "bg-[#16aeca] text-[#dae413]"
                        : "text-[#16aeca] hover:bg-[#16aeca] hover:text-[#dae413]"
                      : active === target
                      ? "bg-white text-[#16aeca]"
                      : "text-white hover:bg-white hover:text-[#16aeca]"
                  }`}
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