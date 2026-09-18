import { useEffect, useRef, useState } from "react";
import SettingsBox from "../components/SpecialDesign/SettingsBox";
import NavBullets from "../components/SpecialDesign/NavBullets";
import Landing from "../components/SpecialDesign/Landing";
import AboutUs from "../components/SpecialDesign/AboutUs";
import Skills from "../components/SpecialDesign/Skills";
import Gallery from "../components/SpecialDesign/Gallery";
import Timeline from "../components/SpecialDesign/Timeline";
import Features from "../components/SpecialDesign/Features";
import Testimonials from "../components/SpecialDesign/Testimonials";
import Contact from "../components/SpecialDesign/Contact";
import Footer from "../components/SpecialDesign/Footer";
import { landingBgs } from "../components/SpecialDesign/data";

const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
};

const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
};

const SpecialDesignPage = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [color, setColor] = useState(() => getItem("color_option"));
  const [bgEnabled, setBgEnabled] = useState(() => {
    const v = getItem("background_option");
    return v === null || v === "true";
  });
  const [bulletsVisible, setBulletsVisible] = useState(
    () => getItem("bullets_option") !== "none"
  );
  const [bg, setBg] = useState(null);
  const [skillsShown, setSkillsShown] = useState(false);
  const [popup, setPopup] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    if (!color) return undefined;
    document.documentElement.style.setProperty("--main-color", color);
    return () => document.documentElement.style.removeProperty("--main-color");
  }, [color]);

  useEffect(() => {
    if (!bgEnabled) return undefined;
    const id = setInterval(() => {
      setBg(landingBgs[Math.floor(Math.random() * landingBgs.length)]);
    }, 10000);
    return () => clearInterval(id);
  }, [bgEnabled]);

  useEffect(() => {
    const onScroll = () => {
      const el = skillsRef.current;
      if (!el || skillsShown) return;
      if (window.scrollY > el.offsetTop + el.offsetHeight - window.innerHeight) {
        setSkillsShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [skillsShown]);

  const handleColor = (c) => {
    setColor(c);
    setItem("color_option", c);
  };

  const handleBg = (value) => {
    setBgEnabled(value);
    setItem("background_option", String(value));
  };

  const handleBullets = (value) => {
    setBulletsVisible(value);
    setItem("bullets_option", value ? "block" : "none");
  };

  const handleReset = () => {
    removeItem("color_option");
    removeItem("background_option");
    removeItem("bullets_option");
    window.location.reload();
  };

  const navigateTo = (selector) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="special-design-page"
      style={{ "--main-color": color || "#FF9800" }}
    >
      <SettingsBox
        open={settingsOpen}
        onToggleOpen={() => setSettingsOpen((o) => !o)}
        color={color}
        onColor={handleColor}
        bgEnabled={bgEnabled}
        onBg={handleBg}
        bulletsVisible={bulletsVisible}
        onBullets={handleBullets}
        onReset={handleReset}
      />
      <NavBullets visible={bulletsVisible} onNavigate={navigateTo} />
      <Landing bg={bg} onNavigate={navigateTo} />
      <AboutUs />
      <div ref={skillsRef}>
        <Skills shown={skillsShown} />
      </div>
      <Gallery onOpen={setPopup} />
      <Timeline />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
      {popup && (
        <>
          <div className="fixed left-0 top-0 z-[1000] h-full w-full bg-black/70" />
          <div className="fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2 border border-[#CCC] bg-white p-[20px]">
            {popup.alt && (
              <h3 className="mb-[20px] text-center font-bold text-[var(--main-color)]">
                {popup.alt}
              </h3>
            )}
            <img src={popup.src} alt="" className="max-w-full" />
            <span
              className="absolute right-[-15px] top-[-15px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--main-color)] text-[20px] font-bold text-white [font-family:Arial,Tahoma]"
              onClick={() => setPopup(null)}
            >
              X
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SpecialDesignPage;