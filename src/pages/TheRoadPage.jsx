import { useEffect, useState } from "react";
import "../components/TheRoad/css/the-road.css";
import Navbar from "../components/TheRoad/Navbar";
import Header from "../components/TheRoad/Header";
import Tours from "../components/TheRoad/Tours";
import Stories from "../components/TheRoad/Stories";
import Contact from "../components/TheRoad/Contact";
import Footer from "../components/TheRoad/Footer";

const TheRoadPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("the-road-root");
    return () => document.documentElement.classList.remove("the-road-root");
  }, []);

  return (
    <div className="the-road-page">
      <div className={`container${open ? " change" : ""}`}>
        <Navbar
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        />
        <Header />
        <Tours />
        <Stories />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default TheRoadPage;