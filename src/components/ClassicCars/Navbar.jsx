import { navLinks } from "./data";

const Navbar = ({ open, onLinkClick }) => (
  <nav
    className={`fixed top-0 z-10 flex h-screen w-[15vw] flex-col bg-white pt-[4rem] pl-[4rem] transition-[left] duration-500 max-[1500px]:w-[20vw] max-[1500px]:pt-[2rem] max-[1500px]:pl-[2rem] max-[1000px]:w-[25vw] max-[750px]:w-[30vw] max-[600px]:w-[40vw] ${
      open
        ? "left-0"
        : "left-[-15vw] max-[1500px]:left-[-20vw] max-[1000px]:left-[-25vw] max-[750px]:left-[-30vw] max-[600px]:left-[-40vw]"
    }`}
  >
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={onLinkClick}
        className="my-[2rem] text-[1.5rem] font-semibold uppercase tracking-[0.3rem] text-[#777] transition-colors duration-300 hover:text-[#111]"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default Navbar;