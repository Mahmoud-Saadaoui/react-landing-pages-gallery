import "../components/Furniture/styles.css";
import { Header } from "../components/Furniture/Header";
import { Choose } from "../components/Furniture/Choose";
import { Offers } from "../components/Furniture/Offers";
import { Craft } from "../components/Furniture/Craft";
import { Modern } from "../components/Furniture/Modern";
import { Testimonials } from "../components/Furniture/Testimonials";
import { Blogs } from "../components/Furniture/Blogs";
import { Footer } from "../components/Furniture/Footer";

export default function FurniturePage() {
  return (
    <>
      <Header />
      <Choose />
      <Offers />
      <Craft />
      <Modern />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}