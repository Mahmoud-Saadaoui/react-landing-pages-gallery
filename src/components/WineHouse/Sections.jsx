import { useState } from "react";
import bag from "./images/bag.png";
import wineBottle from "./images/wine-bottle.webp";
import frame from "./images/frame.webp";
import grapes from "./images/grapes.webp";
import newWines from "./images/section-4-bg.jpg";
import footerImg from "./images/footer-img.webp";
import section1Bg from "./images/section-1-bg.jpg";
import section2Bg from "./images/section-2-bg.jpg";
import section3Bg from "./images/section-3-bg.jpg";
import section5Bg from "./images/section-5-bg.jpg";
import { footerLists } from "./data";

const SECTION_BASE = "absolute inset-0 overflow-hidden transition-transform duration-[1.5s]";
const WRAPPER_BASE = "h-full w-full transition-all duration-[2s]";

export const Section1 = ({ left, scale }) => (
  <section className={`${SECTION_BASE} z-[50]`} style={{ transform: `translateX(${left})` }}>
    <div
      className={`${WRAPPER_BASE} bg-cover bg-center bg-no-repeat`}
      style={{
        transform: `scale(${scale})`,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${section1Bg})`,
      }}
    >
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-[1200px]:w-[80%]">
        <h1 className="border-b-[0.2rem] border-solid border-[#d50000] text-right text-[9rem] font-light capitalize tracking-[0.1rem] text-[#fff] select-none max-[1200px]:text-[7rem] max-[800px]:text-[5rem] max-[600px]:text-[3.6rem]">
          Fresh fruit cocktails every day
        </h1>
      </div>
    </div>
  </section>
);

export const Section2 = ({ left, scale }) => (
  <section className={`${SECTION_BASE} z-[40]`} style={{ transform: `translateX(${left})` }}>
    <div
      className={`${WRAPPER_BASE} flex items-center justify-evenly bg-cover bg-center bg-no-repeat max-[1000px]:flex-col`}
      style={{
        transform: `scale(${scale})`,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${section2Bg})`,
      }}
    >
      <div className="flex flex-col items-center justify-center max-[1000px]:order-1">
        <img
          src={bag}
          alt="Takeaway Tote Bag"
          loading="lazy"
          className="w-[45rem] opacity-[0.9] max-[1600px]:w-[35rem] max-[1300px]:w-[30rem] max-[1200px]:w-[25rem] max-[800px]:w-[20rem] max-[600px]:w-[15rem]"
        />
        <button
          type="button"
          className="mt-[4rem] h-[5rem] w-[20rem] border-[0.1rem] border-solid border-[#fff] bg-transparent text-[2rem] font-light uppercase tracking-[0.1rem] text-[#fff] transition-colors duration-200 hover:bg-[#d50000] max-[1200px]:h-[4rem] max-[1200px]:w-[15rem] max-[1200px]:text-[1.7rem] max-[600px]:h-[3rem] max-[600px]:w-[12rem] max-[600px]:text-[1.4rem]"
        >
          order now!
        </button>
      </div>
<img
        src={wineBottle}
        alt="Fruit Cocktail Glass"
        loading="lazy"
        className="w-[50rem] opacity-60 max-[1600px]:w-[42rem] max-[1300px]:w-[38rem] max-[1200px]:w-[32rem] max-[800px]:w-[28rem] max-[600px]:w-[22rem]"
      />
    </div>
  </section>
);

export const Section3 = ({ left, scale }) => {
  const [dimmed, setDimmed] = useState(false);

  return (
    <section className={`${SECTION_BASE} z-[30] bg-[#000]`} style={{ transform: `translateX(${left})` }}>
      <div
        className={`${WRAPPER_BASE} flex items-center justify-center bg-cover bg-center bg-no-repeat`}
        style={{
          transform: `scale(${scale})`,
          opacity: dimmed ? 0.5 : 1,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${section3Bg})`,
        }}
      >
        <h1 className="-rotate-20 text-center text-[20rem] uppercase text-[#ccc] select-none [text-shadow:0_0.5rem_1.5rem_#000] max-[1000px]:text-[12rem] max-[800px]:text-[11rem] max-[800px]:opacity-70 max-[600px]:text-[10rem] max-[500px]:text-[8rem]">
          the best quality
        </h1>
        <img
          src={frame}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute w-[100rem] opacity-50 max-[1000px]:w-[70rem] max-[800px]:w-[60rem] max-[600px]:w-[35rem]"
        />
        <img
          src={grapes}
          alt="Fresh Fruit Slices"
          loading="lazy"
          onMouseOver={() => setDimmed(true)}
          onMouseOut={() => setDimmed(false)}
          className="absolute w-[35rem] opacity-70 transition-all duration-[1.5s] hover:scale-[2] hover:opacity-100 max-[1000px]:w-[22rem] max-[500px]:w-[14rem] max-[500px]:hover:w-[22rem]"
        />
      </div>
    </section>
  );
};

export const Section4 = ({ left, scale }) => (
  <section className={`${SECTION_BASE} z-[20]`} style={{ transform: `translateX(${left})` }}>
    <div className={`${WRAPPER_BASE} flex flex-col items-center justify-center`} style={{ transform: `scale(${scale})` }}>
      <div
        className="absolute z-[-1] h-[110%] w-[110%] bg-cover bg-center bg-no-repeat blur-[0.5rem]"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${newWines})` }}
      />
      <h1 className="mb-[7rem] text-center text-[10rem] font-light text-[#d50000] select-none max-[1000px]:text-[8rem] max-[600px]:text-[6rem]">
        New Fruity Cocktails
      </h1>
      <img
        src={newWines}
        alt="New Fruity Cocktails"
        loading="lazy"
        className="w-[70rem] border-[0.1rem] border-solid border-[#fff] p-[1rem] opacity-70 max-[1000px]:w-[60rem] max-[800px]:w-[45rem] max-[600px]:w-[35rem]"
      />
    </div>
  </section>
);

export const Section5 = ({ left, scale }) => (
  <section className={`${SECTION_BASE} z-[10]`} style={{ transform: `translateX(${left})` }}>
    <div
      className={`${WRAPPER_BASE} flex items-center justify-center bg-cover bg-center bg-no-repeat max-[1000px]:flex-col`}
      style={{
        transform: `scale(${scale})`,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${section5Bg})`,
      }}
    >
      {footerLists.map((list) => (
        <ul key={list.title} className="max-[1000px]:mx-auto max-[1000px]:my-[2rem] max-[1000px]:w-[20rem]">
          <li className="my-[1rem] text-[2rem] font-bold tracking-[0.1rem] text-[#ddd] first:uppercase first:text-white">
            {list.title}
          </li>
          {list.items.map((item) => (
            <li key={item} className="my-[1rem] text-[2rem] font-bold tracking-[0.1rem] text-[#ddd]">
              {item}
            </li>
          ))}
        </ul>
      ))}
      <img
        src={footerImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="mx-[20rem] w-[60rem] opacity-[0.9] max-[1600px]:mx-[12rem] max-[1600px]:w-[45rem] max-[1300px]:mx-[10rem] max-[1300px]:w-[35rem] max-[1200px]:mx-[7rem] max-[1200px]:w-[25rem] max-[1000px]:order-1 max-[1000px]:w-[20rem]"
      />
      <p className="absolute bottom-[2rem] text-center text-[2rem] font-semibold tracking-[0.2rem] text-[#eee]">
        Copyright &copy; CodeAndCreate. All Rights Reserved
      </p>
    </div>
  </section>
);