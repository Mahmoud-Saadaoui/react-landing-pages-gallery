import Header from "../components/Plans/Header";
import Features from "../components/Plans/Features";
import AboutUs from "../components/Plans/AboutUs";
import OurWorks from "../components/Plans/OurWorks";
import PricingTable from "../components/Plans/PricingTable";
import TheySay from "../components/Plans/TheySay";
import Information from "../components/Plans/Information";
import Footer from "../components/Plans/Footer";
import "../components/Plans/css/plans.css";

const PlansPage = () => (
  <>
    <Header />
    <Features />
    <AboutUs />
    <OurWorks />
    <PricingTable />
    <TheySay />
    <Information />
    <Footer />
  </>
);

export default PlansPage;