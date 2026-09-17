import { useEffect, useState } from "react";
import { sections } from "./data";

const Landing = ({ bg, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <div
      className="landing-page"
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className="overlay" />
      <div className="container">
        <div className="header-area">
          <div className="logo">Special Design</div>
          <div className="links-container">
            <ul
              className={`links${menuOpen ? " open" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              {sections.map(({ label, selector }) => (
                <li key={selector}>
                  <a
                    href="#"
                    data-section={selector}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      onNavigate(selector);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className={`toggle-menu${menuOpen ? " menu-active" : ""}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((m) => !m);
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div className="introduction-text">
        <h1>
          We Are <span>Creative</span> Agency
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit nihil ullam nesciunt quidem iste
        </p>
      </div>
    </div>
  );
};

export default Landing;