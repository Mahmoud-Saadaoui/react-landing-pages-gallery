import { navLinks } from "./data";

const Navbar = ({ open, onLinkClick }) => (
  <nav className={`navbar target${open ? " change" : ""}`}>
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="navbar-link"
        onClick={onLinkClick}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default Navbar;