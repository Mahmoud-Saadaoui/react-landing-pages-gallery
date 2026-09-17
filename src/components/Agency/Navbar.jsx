import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { brand, navLinks } from "./data";
import { scrollTo } from "./utils";

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("services");

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY >= 500);
      for (const { target } of navLinks) {
        const el = document.querySelector(`.agency-page #${target}`);
        if (el && el.getBoundingClientRect().top <= 120) setActive(target);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-md fixed-top${solid ? " noTransparrent" : ""}`} id="navBar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggler-icon">
            <FaBars aria-hidden="true" />
          </span>
        </button>
        <a className="navbar-brand scroll" href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo("gallery"); }}>
          <img src={brand} alt="logo" />
        </a>
        <div
          className={`collapse navbar-collapse${open ? " show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {navLinks.map(({ label, target }) => (
              <li className={`nav-item${active === target ? " active" : ""}`} key={target}>
                <a
                  className="nav-link scroll"
                  href={`#${target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(target);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;