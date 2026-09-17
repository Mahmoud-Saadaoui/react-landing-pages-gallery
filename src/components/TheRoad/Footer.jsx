import { footerLinks } from "./data";

const Footer = () => (
  <footer className="footer">
    <div className="footer-list">
      {footerLinks.map((label) => (
        <a key={label} href="#" className="footer-link">
          {label}
        </a>
      ))}
    </div>
    <p className="footer-paragraph">
      Copyright &copy; CodeAndCreate All Rights Reserved
    </p>
  </footer>
);

export default Footer;