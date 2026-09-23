import Navbar from "../components/PortfolioRtl/Navbar";
import Header from "../components/PortfolioRtl/Header";
import Licence from "../components/PortfolioRtl/Licence";
import Statistics from "../components/PortfolioRtl/Statistics";
import Gallery from "../components/PortfolioRtl/Gallery";
import Contacts from "../components/PortfolioRtl/Contacts";

export default function PortfolioRtlPage() {

  return (
    <div className="portfolio-rtl-page overflow-x-hidden">
      <Navbar />
      <Header />
      <Licence />
      <Statistics />
      <Gallery />
      <Contacts />
    </div>
  );
}