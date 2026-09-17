import { useEffect, useRef, useState } from "react";
import {
  RiMenuLine,
  RiCloseLine,
  RiSearchFill,
  RiUserFill,
  RiSearchLine,
  RiArrowDownDoubleLine,
} from "react-icons/ri";
import { navLinks, heroParagraph } from "./data";

const MENU_ICONS = { open: <RiCloseLine />, closed: <RiMenuLine /> };

export const Header = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const onSubmit = (e) => e.preventDefault();
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <nav>
        <div className="nav__logo">
          <a href="#">MyFurniture</a>
        </div>
        <ul className={`nav__links${open ? " open" : ""}`} id="nav-links">
          {navLinks.map((link) => (
            <li className="link" key={link.id}>
              <a href={`#${link.id}`} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggle}>
          <span>{MENU_ICONS[open ? "open" : "closed"]}</span>
        </div>
        <div className="nav__actions">
          <span>
            <RiSearchFill />
          </span>
          <span>
            <RiUserFill />
          </span>
        </div>
      </nav>
      <div className="section__container header__container" id="home">
        <h1>Make Your Interior More Minimalistic &amp; Modern</h1>
        <p>{heroParagraph}</p>
        <form action="/" ref={formRef}>
          <input type="text" name="search" autoComplete="off" placeholder="Search furniture" />
          <button>
            <RiSearchLine />
          </button>
        </form>
        <a href="#choose">
          <RiArrowDownDoubleLine />
        </a>
      </div>
    </header>
  );
};