import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import useScrollSpy from "./useScrollSpy";
import { navLinks } from "./utils";
import smoothScroll from "./utils";

export default function Navbar() {
  const { active, scrolled } = useScrollSpy(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => smoothScroll(id), 50);
  };

  return (
    <nav ref={navRef} id="navBar" className={`navbar navbar-expand-md fixed-top${scrolled ? " noTransparrent" : ""}`}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`navbar-toggler-icon${open ? " open" : ""}`}>
            <FaBars />
          </span>
        </button>
        <div id="navbarSupportedContent" className={`collapse navbar-collapse${open ? " show" : ""}`}>
          <ul className="navbar-nav mr-auto ml-auto">
            {navLinks.map((l) => (
              <li className={`nav-item${active === l.id ? " active" : ""}`} key={l.id}>
                <a className="nav-link scroll" href={`#${l.id}`} onClick={() => go(l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}