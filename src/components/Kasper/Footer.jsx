import logo from "./images/logo.png";
import { socialIcons } from "./data";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <img src={logo} alt="Logo" />
      <p>We Are Social</p>
      <div className="social-icons">
        {socialIcons.map((icon) => (
          <i key={icon} className={icon}></i>
        ))}
      </div>
      <p className="copyright">
        &copy; 2021 <span>Kasper</span> All Right Reserved
      </p>
    </div>
  </div>
);

export default Footer;