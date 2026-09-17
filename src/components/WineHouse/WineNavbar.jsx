import logo from "./images/logo.png";
import { navLinks } from "./data";

const WineNavbar = ({ open, onToggle }) => (
  <div className={`navbar${open ? " change" : ""}`}>
    <a href="#" className="logo-link">
      <img src={logo} alt="Logo" className="logo" />
    </a>

    <a href="#" className="menu" onClick={onToggle}>
      <div className="menu-line menu-line-1"></div>
      <div className="menu-line menu-line-2"></div>
      <div className="menu-line menu-line-3"></div>
    </a>

    <nav className="nav-list">
      {navLinks.map((label) => (
        <a key={label} href="#" className="nav-link">
          {label}
        </a>
      ))}
    </nav>
  </div>
);

export default WineNavbar;