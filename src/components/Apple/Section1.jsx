import { useEffect, useState } from "react";
import {
  FaApple,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import iphone from "./images/iphone.webp";
import { navLinks, slideshowBgs } from "./data";

const bannerBtn = "cursor-pointer rounded-[0.5rem] border-none bg-[#000] px-[4rem] py-[2rem] text-[2rem] tracking-[0.1rem] text-[#6edae6] [clip-path:polygon(50%_0%,81%_5%,100%_0,100%_100%,80%_95%,50%_100%,20%_95%,0_100%,0_0,23%_5%)] transition-[clip-path] duration-500";

const Section1 = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 20, z: 0 });
  const [playing, setPlaying] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(
      () => setRotation((r) => ({ ...r, y: r.y + 1 })),
      100
    );
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slideshowBgs.length), 20000);
    return () => clearInterval(id);
  }, []);

  const rotate = (axis, delta) =>
    setRotation((r) => ({ ...r, [axis]: r[axis] + delta }));

  return (
    <section
      className="relative flex h-screen w-full items-center justify-evenly bg-[#6edae6] [clip-path:polygon(100%_0,100%_95%,38%_100%,0_100%,0_0)]"
      id="section-1"
    >
      <a
        href="#"
        className="absolute top-[3rem] left-[3rem] max-[700px]:top-0 max-[700px]:left-[2rem] max-[450px]:top-[10rem] max-[450px]:left-1/2 max-[450px]:-translate-x-1/2"
        aria-label="Apple"
      >
        <FaApple className="text-[10rem] text-[rgba(0,0,0,0.8)] max-[700px]:text-[8rem]" />
      </a>
      <nav className="absolute top-[3rem] right-[10%] max-[450px]:left-1/2 max-[450px]:w-max max-[450px]:-translate-x-1/2">
        {navLinks.map(({ label, href }) => (
          <a
            href={href}
            className="inline-block mx-[3rem] text-[2rem] text-[#000] transition-transform duration-500 hover:scale-150 max-[1100px]:font-bold max-[550px]:mx-[1.5rem]"
            key={label}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="max-[700px]:opacity-70 [perspective:100rem]">
        <div
          className="relative top-[-2rem] h-[55rem] w-[30rem] transition-transform duration-500 max-[700px]:top-[3rem] [transform-style:preserve-3d]"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)` }}
        >
          <div className="absolute h-full w-full bg-[#fee] p-[2.5rem] [box-shadow:inset_0.1rem_0.1rem_0.1rem_#ddd,inset_-0.1rem_-0.1rem_0.1rem_#ddd] [transform:translateZ(5rem)] [transform-style:preserve-3d]">
            <span className="absolute top-0 left-0 h-[10rem] w-full bg-[#fee] origin-top [box-shadow:inset_0.1rem_0.1rem_0.1rem_#ddd,inset_-0.1rem_-0.1rem_0.1rem_#ddd] [transform:rotateX(-90deg)]" />
            <span className="absolute bottom-0 left-0 h-[10rem] w-full bg-[#fee] origin-bottom [box-shadow:inset_0.1rem_0.1rem_0.1rem_#ddd,inset_-0.1rem_-0.1rem_0.1rem_#ddd] [transform:rotateX(90deg)]" />
            <img src={iphone} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="absolute flex h-full w-full items-center justify-center bg-[#fee] [box-shadow:inset_0.1rem_0.1rem_0.1rem_#ddd,inset_-0.1rem_-0.1rem_0.1rem_#ddd] [transform:translateZ(-5rem)] [transform-style:preserve-3d]">
            <span className="absolute top-0 left-0 flex h-full w-[10rem] items-center justify-center bg-[#fee] text-[2rem] font-light text-[#ec1919] origin-left [box-shadow:inset_0.1rem_0.1rem_0.1rem_#ddd,inset_-0.1rem_-0.1rem_0.1rem_#ddd] [transform:rotateY(-90deg)]">
              iPhone
            </span>
            <span className="absolute top-0 right-0 flex h-full w-[10rem] items-center justify-center bg-[#fee] text-[2rem] font-light text-[#ec1919] origin-right [box-shadow:inset_0.1rem_0.1rem_0.1rem_#ddd,inset_-0.1rem_-0.1rem_0.1rem_#ddd] [transform:rotateY(90deg)]">
              iPhone
            </span>
            <FaApple className="text-[12rem] text-[#6edae6] [text-shadow:0.1rem_0.1rem_0.2rem_#aaa,-0.1rem_-0.1rem_0.2rem_#aaa] [transform:rotateY(180deg)]" />
          </div>
        </div>
        <div
          className="absolute bottom-[-15rem] left-1/2 h-[10rem] w-[10rem] -translate-x-1/2 rounded-full border-[1rem] border-solid border-[rgba(0,0,0,0.8)] bg-[rgba(0,0,0,0.9)] max-[700px]:hidden"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          <a href="#" className="group absolute top-0 left-1/2 -translate-x-1/2" onClick={(e) => { e.preventDefault(); rotate("x", 20); }} aria-label="Tilt up">
            <FaArrowUp className="text-[1.5rem] text-[#6edae6] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a href="#" className="group absolute bottom-0 left-1/2 -translate-x-1/2" onClick={(e) => { e.preventDefault(); rotate("x", -20); }} aria-label="Tilt down">
            <FaArrowDown className="text-[1.5rem] text-[#6edae6] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a href="#" className="group absolute top-1/2 left-0 -translate-y-1/2" onClick={(e) => { e.preventDefault(); rotate("y", -20); }} aria-label="Rotate left">
            <FaArrowLeft className="text-[1.5rem] text-[#6edae6] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a href="#" className="group absolute top-1/2 right-0 -translate-y-1/2" onClick={(e) => { e.preventDefault(); rotate("y", 20); }} aria-label="Rotate right">
            <FaArrowRight className="text-[1.5rem] text-[#6edae6] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a href="#" className="group absolute top-[10%] right-[10%] rotate-45" onClick={(e) => { e.preventDefault(); rotate("z", -20); }} aria-label="Spin counterclockwise">
            <FaArrowDown className="text-[1.5rem] text-[#6edae6] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a href="#" className="group absolute bottom-[10%] left-[10%] rotate-45" onClick={(e) => { e.preventDefault(); rotate("z", 20); }} aria-label="Spin clockwise">
            <FaArrowUp className="text-[1.5rem] text-[#6edae6] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
        </div>
      </div>
      <div className="flex flex-col max-[700px]:absolute">
        <h1 className="text-[13rem] font-light uppercase tracking-[0.5rem] max-[1100px]:text-[8rem]">
          <span className="max-[700px]:invisible max-[700px]:opacity-0">&#8592;</span> Best Gift
        </h1>
        <p className="mt-[6rem] mb-[4rem] text-[4rem] tracking-[0.1rem] max-[1100px]:text-[3rem] max-[450px]:text-center">
          &quot;Creativity is just connecting things.&quot;
        </p>
        <span className="mb-[5rem] text-[3rem]"> - Steve Jobs</span>
        <button
          type="button"
          className={`${bannerBtn} hover:[clip-path:polygon(40%_15%,77%_15%,100%_10%,100%_90%,75%_85%,40%_85%,30%_100%,0_50%,0_50%,30%_0)] max-[700px]:hover:[clip-path:polygon(50%_0%,81%_5%,100%_0,100%_100%,80%_95%,50%_100%,20%_95%,0_100%,0_0,23%_5%)]`}
        >
          Buy Now
        </button>
      </div>
      <div className="absolute top-0 left-0 h-full w-full [z-index:-1]">
        {slideshowBgs.map((bg, i) => (
          <div
            key={bg}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[5000ms] ${i === active ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Section1;