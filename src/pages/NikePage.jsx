import "../components/Nike/styles.css";
import { Header } from "../components/Nike/Header";
import { Trending } from "../components/Nike/Trending";
import { WhyChoose } from "../components/Nike/WhyChoose";
import { Testimonial } from "../components/Nike/Testimonial";
import { Stories } from "../components/Nike/Stories";
import { Banner } from "../components/Nike/Banner";
import { Footer } from "../components/Nike/Footer";

export default function NikePage() {
  return (
    <>
      <Header />
      <Trending />
      <WhyChoose />
      <Testimonial />
      <Stories />
      <Banner />
      <Footer />
    </>
  );
}