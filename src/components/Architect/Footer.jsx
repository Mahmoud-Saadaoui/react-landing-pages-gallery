import { socials } from "./data";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p className="copyright">
        Copyright &copy; 2020, CodeAndCreate - All Rights Reserved
      </p>
      <div className="social-list">
        {socials.map(({ label, Icon }) => (
          <a href="#" key={label} aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
