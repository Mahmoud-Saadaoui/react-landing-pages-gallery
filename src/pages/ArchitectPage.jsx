import { useEffect, useState } from "react";
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
    <>
      <style>
        {`
@keyframes displayCircles {
  0% { opacity: 0; visibility: hidden; }
  25% { opacity: 1; visibility: visible; }
  90% { opacity: 1; visibility: visible; }
  100% { opacity: 0; visibility: hidden; }
}
@keyframes circles {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
@keyframes scale {
  0% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
@keyframes moveBanner {
  0% { transform: translateY(40rem) rotateY(-20deg); }
  100% { transform: translateY(0) rotateY(0); opacity: 1; }
}
`}
      </style>
      <div className={`architect-page group/display${displayed ? " display" : ""}`}>
        <Spinner />
        <div className={`container group/change${displayed ? " block" : " hidden"}${menuOpen ? " change" : ""}`}>
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
    </>
  );
};

export default ArchitectPage;
