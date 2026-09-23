import Header from "../components/Product/Header";
import Features from "../components/Product/Features";
import Prices from "../components/Product/Prices";
import Faq from "../components/Product/Faq";
import VideoSection from "../components/Product/VideoSection";
import Contact from "../components/Product/Contact";
import Footer from "../components/Product/Footer";

export default function ProductPage() {

  return (
    <div className="product-page overflow-x-hidden">
      <Header />
      <Features />
      <Prices />
      <Faq />
      <VideoSection />
      <Contact />
      <Footer />
    </div>
  );
}