import Navbar from "../components/Agency/Navbar";
import Header from "../components/Agency/Header";
import Services from "../components/Agency/Services";
import Gallery from "../components/Agency/Gallery";
import Statistics from "../components/Agency/Statistics";
import Contacts from "../components/Agency/Contacts";
import Footer from "../components/Agency/Footer";

const AgencyPage = () => (
  <div className="agency-page overflow-x-hidden text-right">
    <Navbar />
    <Header />
    <Services />
    <Gallery />
    <Statistics />
    <Contacts />
    <Footer />
  </div>
);

export default AgencyPage;