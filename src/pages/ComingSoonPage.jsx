import "../components/ComingSoon/css/bootstrap.min.css";
import "../components/ComingSoon/css/animate.css";
import "../components/ComingSoon/css/countdown.css";
import "../components/ComingSoon/css/coming-soon.css";
import Header from "../components/ComingSoon/Header";
import Features from "../components/ComingSoon/Features";
import Footer from "../components/ComingSoon/Footer";

const ComingSoonPage = () => (
  <div className="coming-soon-page" dir="rtl">
    <Header />
    <Features />
    <Footer />
  </div>
);

export default ComingSoonPage;