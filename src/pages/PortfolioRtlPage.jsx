import { useEffect } from "react";
import Navbar from "../components/PortfolioRtl/Navbar";
import Header from "../components/PortfolioRtl/Header";
import Licence from "../components/PortfolioRtl/Licence";
import Statistics from "../components/PortfolioRtl/Statistics";
import Gallery from "../components/PortfolioRtl/Gallery";
import Contacts from "../components/PortfolioRtl/Contacts";
import "../components/PortfolioRtl/css/bootstrap.css";
import "../components/PortfolioRtl/css/style.css";

export default function PortfolioRtlPage() {
  useEffect(() => {
    document.title = "صفحة هبوط شخصية";
  }, []);

  return (
    <div className="portfolio-rtl-page" data-spy="scroll" data-target=".navbar" data-offset="100">
      <Navbar />
      <Header />
      <Licence />
      <Statistics />
      <Gallery />
      <Contacts />
    </div>
  );
}