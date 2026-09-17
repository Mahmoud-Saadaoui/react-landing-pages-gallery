import { logo, footerColumns } from "./data";
import { Socials } from "./Socials";

export const Footer = () => (
  <>
    <footer className="section__container footer__container">
      <div className="footer__col">
        <div className="footer__logo">
          <a href="#">
            <img src={logo} alt="logo" loading="lazy" />
          </a>
        </div>
        <Socials className="footer__socials" />
      </div>
      {footerColumns.map((column) => (
        <div className="footer__col" key={column.title}>
          <h4>{column.title}</h4>
          <p>{column.text}</p>
        </div>
      ))}
    </footer>
    <div className="footer__bar">Copyright © 2023 Web Design Mastery. All rights reserved.</div>
  </>
);