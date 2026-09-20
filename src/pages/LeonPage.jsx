import Header from "../components/Leon/Header";
import Hero from "../components/Leon/Hero";
import Features from "../components/Leon/Features";
import Services from "../components/Leon/Services";
import Portfolio from "../components/Leon/Portfolio";
import About from "../components/Leon/About";
import Contact from "../components/Leon/Contact";
import Footer from "../components/Leon/Footer";
import useReveal from "../hooks/useReveal";

const LeonPage = () => {
  useReveal(".leon-page");
  return (
  <div className="leon-page scroll-smooth">
    <Header />
    <Hero />
    <Features />
    <Services />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
  );
};

export default LeonPage;