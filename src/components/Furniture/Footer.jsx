import { useEffect, useRef } from "react";
import { footerText, footerLinks } from "./data";

export const Footer = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const onSubmit = (e) => e.preventDefault();
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__content">
          <h4>SUBSCRIBE TO GET THE LATEST NEWS ABOUT US</h4>
          <p>{footerText}</p>
        </div>
        <div className="footer__form">
          <form action="/" ref={formRef}>
            <input type="text" name="email" autoComplete="off" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="section__container footer__bar">
        <div className="footer__logo">
          <h4>
            <a href="#">MyFurniture</a>
          </h4>
          <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
        </div>
        <ul className="footer__nav">
          {footerLinks.map((label) => (
            <li className="footer__link" key={label}>
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};