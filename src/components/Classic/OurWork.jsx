import { useState } from "react";
import { works, projectText } from "./data";

const container = "relative mx-auto w-[1200px] max-w-full";

const OurWork = () => {
  const [shown, setShown] = useState(false);

  return (
    <div className="our-work py-[50px] text-center" data-section="work">
      <div className={container}>
        <h2 className="mb-0 text-[35px] font-medium uppercase">
          Our <span className="text-[#f7600e]">Work</span>
        </h2>
        <p className="mb-[40px] mt-[10px] leading-[2]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          <br />
          laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <div className="items-box overflow-hidden">
          {works.map((img, i) => (
            <div
              className={`group relative float-left mb-[12px] ml-[1.33333%] h-[403px] w-[30%] overflow-hidden rounded-[10px]${i >= 6 ? (shown ? " animate-fade-in-up" : " hidden") : ""}`}
              key={`${img}-${i}`}
            >
              <img src={img} alt="" />
              <div className="over absolute inset-0 hidden bg-[rgba(247,96,14,.9)] text-center text-white transition-all duration-500 ease-in-out group-hover:block">
                <h4 className="mb-0 mt-[80px] text-[24px] uppercase">Abazoo Website</h4>
                <p className="mb-[50px] mt-[10px] leading-[2]">
                  {projectText} <br /> laboris nisi ut aliquip ex ea commodo
                </p>
                <button className="w-[180px] rounded-[10px] border border-white bg-transparent p-[10px] uppercase transition-all duration-500 ease-in-out hover:border-white hover:bg-white hover:text-[#f7600e]">
                  Show Project
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-[20px] w-[180px] rounded-[10px] border border-[#CCC] bg-transparent p-[10px] text-[#555] uppercase transition-all duration-500 ease-in-out hover:border-[#f7600e] hover:bg-[#f7600e] hover:text-white"
          type="button"
          onClick={() => setShown(true)}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurWork;
