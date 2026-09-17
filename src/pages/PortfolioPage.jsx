import { useEffect, useRef, useState } from "react";
import "../components/Portfolio/css/portfolio.css";
import Navbar from "../components/Portfolio/Navbar";
import Section1 from "../components/Portfolio/Section1";
import Section2 from "../components/Portfolio/Section2";
import Section3 from "../components/Portfolio/Section3";
import Section4 from "../components/Portfolio/Section4";
import Section5 from "../components/Portfolio/Section5";

const sectionIds = ["section-1", "section-2", "section-3", "section-4"];

const PortfolioPage = () => {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);
  const navbarRef = useRef(null);
  const progressRef = useRef(null);
  const navbarOffset = useRef(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (navbar) {
      navbarOffset.current =
        navbar.getBoundingClientRect().top + window.scrollY;
    }

    const onScroll = () => {
      const y = window.scrollY;
      setSticky(y >= navbarOffset.current);

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section && y >= section.offsetTop - 10) setActive(index);
      });

      const progress = progressRef.current;
      if (progress && y + window.innerHeight >= progress.offsetTop) {
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("portfolio-root");
    return () => document.documentElement.classList.remove("portfolio-root");
  }, []);

  return (
    <div className="portfolio-page">
      <Section1 />
      <Navbar navRef={navbarRef} sticky={sticky} active={active} />
      <Section2 progressRef={progressRef} animated={animated} />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default PortfolioPage;