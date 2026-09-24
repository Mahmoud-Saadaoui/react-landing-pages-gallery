import { useEffect, useRef, useState } from "react";
import {
  RiMenuLine,
  RiCloseLine,
  RiSearchFill,
  RiUserFill,
  RiSearchLine,
  RiArrowDownDoubleLine,
} from "react-icons/ri";
import { navLinks, heroParagraph } from "./data";
import headerBg from "./assets/header.jpg";

const MENU_ICONS = { open: <RiCloseLine />, closed: <RiMenuLine /> };

export const Header = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const onSubmit = (e) => e.preventDefault();
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("${headerBg}")`,
      }}
    >
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-8 max-[600px]:fixed max-[600px]:top-0 max-[600px]:z-[99] max-[600px]:w-full max-[600px]:bg-black max-[600px]:p-4">
        <div className="flex-1">
          <a href="#" className="text-2xl font-semibold text-white">
            MyFurniture
          </a>
        </div>
        <ul
          className={`flex list-none items-center gap-8 max-[600px]:absolute max-[600px]:top-16 max-[600px]:left-0 max-[600px]:w-full max-[600px]:origin-top max-[600px]:flex-col max-[600px]:bg-black/90 max-[600px]:p-8 max-[600px]:transition-[opacity,transform,visibility] max-[600px]:duration-300 ${
            open
              ? "max-[600px]:visible max-[600px]:translate-y-0 max-[600px]:opacity-100 max-[600px]:pointer-events-auto"
              : "max-[600px]:invisible max-[600px]:-translate-y-2 max-[600px]:opacity-0 max-[600px]:pointer-events-none"
          }`}
          id="nav-links"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={close}
                className="relative py-[10px] text-white transition duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="hidden text-2xl text-white max-[600px]:block"
          id="menu-btn"
          onClick={toggle}
          aria-controls="nav-links"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {MENU_ICONS[open ? "open" : "closed"]}
        </button>
        <div className="flex flex-1 items-center justify-end gap-8 max-[900px]:hidden">
          <span className="cursor-pointer text-[1.2rem] text-white">
            <RiSearchFill />
          </span>
          <span className="cursor-pointer text-[1.2rem] text-white">
            <RiUserFill />
          </span>
        </div>
      </nav>
      <div className="mx-auto w-full max-w-[1200px] px-4 py-20 text-center text-white" id="home">
        <h1 className="mb-4 animate-fade-in-up text-[4.5rem] font-semibold max-[600px]:mt-16 max-[600px]:text-[3.5rem]">
          Make Your Interior More Minimalistic &amp; Modern
        </h1>
        <p
          className="mx-auto mb-16 max-w-[600px] animate-fade-in-up text-[1.2rem]"
          style={{ animationDelay: "0.5s" }}
        >
          {heroParagraph}
        </p>
        <form
          action="/"
          ref={formRef}
          className="mx-auto mb-16 flex w-full max-w-[350px] items-center rounded-full border border-white py-1 pr-1 pl-5 backdrop-blur-[10px] animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search furniture"
            className="w-full border-none bg-transparent text-base text-white outline-none placeholder:text-white"
          />
          <button className="cursor-pointer rounded-full border-none bg-[#2f2f2f] p-[11px_12px] text-[1.25rem] text-white outline-none">
            <RiSearchLine />
          </button>
        </form>
        <a
          href="#choose"
          className="inline-block animate-fade-in-up rounded-full border border-white px-3 text-[3rem] text-white backdrop-blur-[10px]"
          style={{ animationDelay: "1.5s" }}
        >
          <RiArrowDownDoubleLine />
        </a>
      </div>
    </header>
  );
};
