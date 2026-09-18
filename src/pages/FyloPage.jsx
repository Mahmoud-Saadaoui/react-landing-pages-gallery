import { useEffect, useState } from "react";
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
      <div className={dark ? "bg-[hsl(217_28%_15%)] text-white" : ""}>
        <Header dark={dark} onToggle={() => setDark((value) => !value)} />
        <Hero dark={dark} />
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