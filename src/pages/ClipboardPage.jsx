import Hero from "../components/Clipboard/Hero";
import Snippets from "../components/Clipboard/Snippets";
import Features from "../components/Clipboard/Features";
import Access from "../components/Clipboard/Access";
import Supercharge from "../components/Clipboard/Supercharge";
import References from "../components/Clipboard/References";
import Bottom from "../components/Clipboard/Bottom";
import Footer from "../components/Clipboard/Footer";
import bgDesktop from "../components/Clipboard/images/bg-header-desktop.png";
import bgMobile from "../components/Clipboard/images/bg-header-mobile.png";

const ClipboardPage = () => (
  <div
    className="clipboard-page overflow-x-hidden bg-contain bg-no-repeat bg-[image:var(--bg-desktop)] max-[576px]:bg-[image:var(--bg-mobile)]"
    style={{
      "--bg-desktop": `url(${bgDesktop})`,
      "--bg-mobile": `url(${bgMobile})`,
    }}
  >
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