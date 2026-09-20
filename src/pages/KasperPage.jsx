import Header from "../components/Kasper/Header";
import Landing from "../components/Kasper/Landing";
import Services from "../components/Kasper/Services";
import Design from "../components/Kasper/Design";
import Portfolio from "../components/Kasper/Portfolio";
import Video from "../components/Kasper/Video";
import About from "../components/Kasper/About";
import Stats from "../components/Kasper/Stats";
import Skills from "../components/Kasper/Skills";
import Quote from "../components/Kasper/Quote";
import Pricing from "../components/Kasper/Pricing";
import Subscribe from "../components/Kasper/Subscribe";
import Contact from "../components/Kasper/Contact";
import Footer from "../components/Kasper/Footer";
import useReveal from "../hooks/useReveal";

const KasperPage = () => {
  useReveal(".kasper-page");
  return (
    <div className="kasper-page">
      <Header />
    <Landing />
    <Services />
    <Design />
    <Portfolio />
    <Video />
    <About />
    <Stats />
    <Skills />
    <Quote />
    <Pricing />
    <Subscribe />
    <Contact />
      <Footer />
    </div>
  );
};

export default KasperPage;