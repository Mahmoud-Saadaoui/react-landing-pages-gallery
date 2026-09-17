import { useEffect } from "react";
import Header from "../components/Product/Header";
import Features from "../components/Product/Features";
import Prices from "../components/Product/Prices";
import Faq from "../components/Product/Faq";
import VideoSection from "../components/Product/VideoSection";
import Contact from "../components/Product/Contact";
import Footer from "../components/Product/Footer";
import "../components/Product/css/bootstrap.css";
import "../components/Product/css/style.css";

export default function ProductPage() {
  useEffect(() => {
    document.title = "صفحة هبوط لمنتج";
  }, []);

  return (
    <div className="product-page">
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