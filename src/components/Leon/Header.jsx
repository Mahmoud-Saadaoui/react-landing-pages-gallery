import { navLinks } from "./data";
import logo from "./images/logo.png";

const Header = () => (
  <div className="header">
    <div className="container">
      <img className="logo" src={logo} alt="Leon" />
      <div className="links">
        <span className="icon">
          <span />
          <span />
          <span />
        </span>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;