import { useEffect, useState } from "react";
import "../components/Fylo/css/fylo.css";
import Header from "../components/Fylo/Header";
import Hero from "../components/Fylo/Hero";
import Features from "../components/Fylo/Features";
import Productive from "../components/Fylo/Productive";
import Testimonials from "../components/Fylo/Testimonials";
import EarlyAccess from "../components/Fylo/EarlyAccess";
import Footer from "../components/Fylo/Footer";

const getInitialTheme = () => {
  const stored = localStorage.getItem("color-theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const FyloPage = () => {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("color-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="font-opensans dark:bg-darkBlue dark:text-white">
        <Header dark={dark} onToggle={() => setDark((value) => !value)} />
        <Hero />
        <Features />
        <Productive />
        <Testimonials />
        <EarlyAccess />
        <Footer />
      </div>
    </div>
  );
};

export default FyloPage;