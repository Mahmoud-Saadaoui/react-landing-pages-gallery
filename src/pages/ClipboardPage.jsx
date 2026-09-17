import "../components/Clipboard/css/clipboard.css";
import Hero from "../components/Clipboard/Hero";
import Snippets from "../components/Clipboard/Snippets";
import Features from "../components/Clipboard/Features";
import Access from "../components/Clipboard/Access";
import Supercharge from "../components/Clipboard/Supercharge";
import References from "../components/Clipboard/References";
import Bottom from "../components/Clipboard/Bottom";
import Footer from "../components/Clipboard/Footer";

const ClipboardPage = () => (
  <div className="clipboard-page">
    <Hero />
    <Snippets />
    <Features />
    <Access />
    <Supercharge />
    <References />
    <Bottom />
    <Footer />
  </div>
);

export default ClipboardPage;