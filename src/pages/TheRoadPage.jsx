import { useState } from "react";
import "../components/TheRoad/TheRoad.css";
import Navbar from "../components/TheRoad/Navbar";
import Header from "../components/TheRoad/Header";
import Tours from "../components/TheRoad/Tours";
import Stories from "../components/TheRoad/Stories";
import Contact from "../components/TheRoad/Contact";
import Footer from "../components/TheRoad/Footer";

const TheRoadPage = () => {
  const [open, setOpen] = useState(false);

  return (
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
  );
};

export default TheRoadPage;