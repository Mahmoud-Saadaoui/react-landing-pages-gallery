import { useEffect, useState } from "react";
import Menu from "../components/ClassicCars/Menu";
import Navbar from "../components/ClassicCars/Navbar";
import Hero from "../components/ClassicCars/Hero";
import PopularCars from "../components/ClassicCars/PopularCars";
import VideoGallery from "../components/ClassicCars/VideoGallery";
import ImageGallery from "../components/ClassicCars/ImageGallery";
import Contact from "../components/ClassicCars/Contact";

const ClassicCarsPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("classic-cars-root");
    return () => document.documentElement.classList.remove("classic-cars-root");
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <div className="bg-[#ccc] pr-[3rem] max-[1000px]:pr-0">
      <Menu open={open} onClick={() => setOpen((prev) => !prev)} />
      <Navbar open={open} onLinkClick={closeMenu} />
      <Hero open={open} onClose={closeMenu} />
      <PopularCars open={open} onClose={closeMenu} />
      <VideoGallery open={open} onClose={closeMenu} />
      <ImageGallery open={open} onClose={closeMenu} />
      <Contact open={open} onClose={closeMenu} />
    </div>
  );
};

export default ClassicCarsPage;