import { useEffect, useState } from "react";
import "../components/Architect/css/architect.css";
import Spinner from "../components/Architect/Spinner";
import Hamburger from "../components/Architect/Hamburger";
import Banner from "../components/Architect/Banner";
import Sidebar from "../components/Architect/Sidebar";
import AboutUs from "../components/Architect/AboutUs";
import Team from "../components/Architect/Team";
import Contact from "../components/Architect/Contact";
import Footer from "../components/Architect/Footer";
import ScrollBtn from "../components/Architect/ScrollBtn";

const ArchitectPage = () => {
  const [displayed, setDisplayed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDisplayed(true), 4000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("architect-root");
    return () => document.documentElement.classList.remove("architect-root");
  }, []);

  return (
    <div className="architect-page">
      <div className={displayed ? "display" : ""}>
        <Spinner />
        <div className={`container${menuOpen ? " change" : ""}`}>
          <Hamburger open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
          <Banner />
          <Sidebar onNavigate={() => setMenuOpen(false)} />
          <AboutUs />
          <Team />
          <Contact />
          <Footer />
          <ScrollBtn />
        </div>
      </div>
    </div>
  );
};

export default ArchitectPage;
