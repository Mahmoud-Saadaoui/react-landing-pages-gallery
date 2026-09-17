import { navLinks, navColors } from "./data";

const Navbar = ({ onOpen, onClose }) => (
  <>
    <div className="open-navbar-icon navbar-icon center" onClick={onOpen}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="close-navbar-icon navbar-icon center" onClick={onClose}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
        <div className="nav-list">
          {navLinks.map((label, index) => (
            <a
              key={label}
              href="#"
              className="nav-link center"
              style={{ backgroundColor: navColors[index] }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  </>
);

export default Navbar;