import { useEffect, useRef } from "react";
import { RiSearchLine, RiShoppingBagLine, RiAddLine } from "react-icons/ri";
import { logo, heroDescription } from "./data";
import { Socials } from "./Socials";

export const Header = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const onSubmit = (e) => e.preventDefault();
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return (
    <header className="section__container header__container">
      <nav>
        <div className="nav__bar">
          <div className="nav__logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <form action="/" ref={formRef}>
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">
              <RiSearchLine />
            </button>
          </form>
        </div>
        <div className="nav__btn">
          <span>
            <RiShoppingBagLine />
          </span>
        </div>
      </nav>
      <div className="header__content">
        <h1>
          Expl<span>o</span>re New Things
        </h1>
        <p className="section__description">{heroDescription}</p>
        <button className="btn">
          <span>
            <RiAddLine />
          </span>{" "}
          Explore More
        </button>
      </div>
      <div className="header__image">
        <Socials className="header__socials" />
      </div>
    </header>
  );
};