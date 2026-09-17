import logo from "./images/logo.png";
import { navLinks } from "./data";

const Header = () => (
  <header>
    <div className="container">
      <a href="#" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <i className="fas fa-bars toggle-menu"></i>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className={link.active ? "active" : ""} href="#">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="form">
          <i className="fas fa-search"></i>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;