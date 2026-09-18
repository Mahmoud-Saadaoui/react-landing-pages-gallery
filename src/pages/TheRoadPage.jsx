import { useEffect, useState } from "react";
import Navbar from "../components/TheRoad/Navbar";
import Header from "../components/TheRoad/Header";
import Tours from "../components/TheRoad/Tours";
import Stories from "../components/TheRoad/Stories";
import Contact from "../components/TheRoad/Contact";
import Footer from "../components/TheRoad/Footer";

const TheRoadPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("the-road-root");
    return () => document.documentElement.classList.remove("the-road-root");
  }, []);

  return (
    <>
      <style>
        {`
@keyframes drop-letters {
  0% { transform: translateY(0); }
  10% { transform: translateY(0); }
  15% { transform: translateY(-100%); }
  20% { transform: translateY(0); }
  100% { transform: translateY(0); }
}
@keyframes image-float {
  0% { transform: translateZ(40rem); opacity: 1; }
  40% { transform: translateZ(-500rem) translateX(150rem); opacity: 0.8; }
  70% { transform: translateZ(-1500rem) translateX(800rem); opacity: 0.6; }
  80% { transform: translateZ(-50rem) translateX(100rem); opacity: 0.8; }
  100% { transform: translateZ(40rem); opacity: 1; }
}
@keyframes contact-bg {
  0% { background-color: #3d3d3d; }
  25% { background-color: #ced8e4; }
  50% { background-color: #1e81f3; }
  75% { background-color: #ff7842; }
  100% { background-color: #3d3d3d; }
}
`}
      </style>
      <div className="m-[3.5rem] overflow-hidden bg-[#eee] shadow-[0_1rem_3rem_#555] max-[650px]:m-0">
        <Navbar
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        />
        <Header />
        <Tours />
        <Stories />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default TheRoadPage;