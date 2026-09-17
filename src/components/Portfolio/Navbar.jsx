import { navLinks } from "./data";

const Navbar = ({ navRef, sticky, active }) => (
  <nav ref={navRef} className={`navbar center${sticky ? " sticky" : ""}`}>
    {navLinks.map((link, index) => (
      <a
        key={link.label}
        href={link.href}
        className={`navbar-link${active === index ? " change" : ""}`}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default Navbar;