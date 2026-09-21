import airpods1 from "./images/AirPods/airpods-1.png";
import airpods2 from "./images/AirPods/airpods-2.png";

const Section5 = () => (
  <section className="flex h-screen w-full items-center justify-center" id="section-5">
    <div className="relative flex h-[80%] w-[90%]">
      <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] font-light whitespace-nowrap text-white [text-shadow:0.1rem_0.1rem_0_#999] max-[900px]:text-[12rem] max-[700px]:text-[#0b2e30] max-[700px]:[text-shadow:none]">
        AirPods
      </h1>
      <img src={airpods1} className="h-full w-[50%] object-contain max-[700px]:hidden" alt="" />
      <img
        src={airpods2}
        className="h-full w-[50%] bg-[#6edae6] object-contain max-[700px]:w-full"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 mt-[5rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap max-[550px]:w-[50rem] max-[550px]:whitespace-normal max-[550px]:text-center">
        <button
          type="button"
          className="mx-[2rem] h-[4rem] w-[15rem] cursor-pointer rounded-[0.5rem] border-none bg-[#6edae6] text-white max-[700px]:bg-white max-[700px]:text-[#6edae6] max-[700px]:shadow-[0.1rem_0.1rem_0.1rem_#ddd]"
        >
          Learn More
        </button>
        <button
          type="button"
          className="mx-[2rem] h-[4rem] w-[15rem] cursor-pointer rounded-[0.5rem] border-none bg-white text-[#6edae6] max-[700px]:bg-white max-[700px]:text-[#6edae6] max-[700px]:shadow-[0.1rem_0.1rem_0.1rem_#ddd]"
        >
          Buy
        </button>
      </div>
    </div>
  </section>
);

export default Section5;