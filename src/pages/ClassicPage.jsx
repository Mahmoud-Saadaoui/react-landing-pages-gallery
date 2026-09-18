import Header from "../components/Classic/Header";
import Features from "../components/Classic/Features";
import Subscribe from "../components/Classic/Subscribe";
import OurWork from "../components/Classic/OurWork";
import Testimonials from "../components/Classic/Testimonials";
import OurTeam from "../components/Classic/OurTeam";
import Contact from "../components/Classic/Contact";
import Footer from "../components/Classic/Footer";
import NiceScroll from "../components/Classic/NiceScroll";

const ClassicPage = () => (
  <div className="classic-page">
    <Header />
    <Features />
    <Subscribe />
    <OurWork />
    <Testimonials />
    <OurTeam />
    <Contact />
    <Footer />
    <NiceScroll />
  </div>
);

export default ClassicPage;