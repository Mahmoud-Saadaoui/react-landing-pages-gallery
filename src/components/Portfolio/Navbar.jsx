import { navLinks } from "./data";

const Navbar = ({ navRef, sticky, active }) => (
  <nav
    ref={navRef}
    className={`absolute z-[300] flex h-[4rem] w-full items-center justify-center bg-[#e41c6f] shadow-[0.2rem_0.2rem_0.5rem_#555]${
      sticky ? " fixed top-0" : ""
    }`}
  >
    {navLinks.map((link, index) => (
      <a
        key={link.label}
        href={link.href}
        className={`group relative mx-[3rem] text-[1.7rem] font-semibold uppercase tracking-[0.3rem] max-[600px]:mx-[2rem] max-[600px]:text-[1.5rem] max-[450px]:mx-[1.5rem] ${
          active === index
            ? "text-white"
            : "text-[#333] group-hover:text-white"
        }`}
      >
        {link.label}
        <span
          className={`absolute right-[-15%] bottom-[-0.3rem] h-[0.2rem] bg-white transition-[width] duration-200 ${
            active === index ? "w-[130%]" : "w-0 group-hover:w-[130%]"
          }`}
        />
      </a>
    ))}
  </nav>
);

export default Navbar;