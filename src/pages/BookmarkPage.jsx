import Navbar from "../components/Bookmark/Navbar";
import Hero from "../components/Bookmark/Hero";
import Features from "../components/Bookmark/Features";
import Download from "../components/Bookmark/Download";
import Faq from "../components/Bookmark/Faq";
import Newsletter from "../components/Bookmark/Newsletter";
import Footer from "../components/Bookmark/Footer";

const BookmarkPage = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <Features />
    <Download />
    <Faq />
    <Newsletter />
    <Footer />
  </div>
);

export default BookmarkPage;