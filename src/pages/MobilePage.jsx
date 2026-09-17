import "../components/Mobile/css/animate.css";
import "../components/Mobile/css/bootstrap.css";
import "../components/Mobile/css/style.css";
import Banner from "../components/Mobile/Banner";
import Feature from "../components/Mobile/Feature";
import Option from "../components/Mobile/Option";
import Slider from "../components/Mobile/Slider";
import Faq from "../components/Mobile/Faq";
import Footer from "../components/Mobile/Footer";
import useWOW from "../components/Mobile/useWOW";

const MobilePage = () => {
  useWOW();
  return (
    <div className="mobile-page">
      <Banner />
      <Feature />
      <Option />
      <Slider />
      <Faq />
      <Footer />
    </div>
  );
};

export default MobilePage;