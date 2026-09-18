import iphones1 from "./images/iPhones/iphones-1-img.webp";
import iphones2 from "./images/iPhones/iphones-2-img.webp";

const Section2 = () => (
  <section className="flex h-[120vh] w-full flex-col items-center justify-around py-[10vh]" id="section-2">
    <h1 className="relative mb-[5rem] text-[10rem] font-extralight text-[#000] max-[550px]:text-[8rem]">
      <span className="absolute top-0 left-0 h-[30vw] w-[130%] -skew-x-[50deg] origin-top-left rounded-[1rem] -z-[1] bg-[linear-gradient(#6edae6,#fff)]" />
      iPhone 12
    </h1>
    <div className="group relative h-[60vh] w-[50vw] rounded-[0.5rem] bg-[linear-gradient(#6edae6,#fff)] max-[700px]:h-[70vh] max-[700px]:w-[70vw] max-[450px]:w-[75vw]">
      <img
        src={iphones1}
        className="absolute inset-0 h-full w-full object-contain transition-opacity duration-[3000ms] group-hover:opacity-0"
        alt=""
      />
      <img
        src={iphones2}
        className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-[3000ms] group-hover:opacity-100"
        alt=""
      />
    </div>
    <div className="flex">
      <a
        href="#"
        className="group relative mx-[3rem] flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-[linear-gradient(to_right,#333_60%,#525252)]"
        onClick={(e) => e.preventDefault()}
      >
        <span className="block h-[50%] w-[50%] rounded-[1rem] border-[0.1rem] border-solid border-[#6edae6]" />
        <span className="absolute top-[-3rem] w-max text-[1.6rem] uppercase tracking-[0.1rem] text-[#6edae6] [transform:scale(0)] transition-transform duration-500 group-hover:[transform:scale(1)]">
          Learn More
        </span>
      </a>
      <a
        href="#"
        className="group relative mx-[3rem] flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-[linear-gradient(to_right,#333_60%,#525252)]"
        onClick={(e) => e.preventDefault()}
      >
        <span className="block h-[50%] w-[50%] rounded-[1rem] border-[0.1rem] border-solid border-[#6edae6]" />
        <span className="absolute top-[-3rem] w-max text-[1.6rem] uppercase tracking-[0.1rem] text-[#6edae6] [transform:scale(0)] transition-transform duration-500 group-hover:[transform:scale(1)]">
          Shop
        </span>
      </a>
    </div>
  </section>
);

export default Section2;