import bg from "./images/bg.jpg";

const Banner = () => (
  <header className="header relative h-screen w-full overflow-hidden [perspective:100rem]">
    <div className="img-wrapper h-full w-full overflow-hidden bg-[rgba(0,0,0,0.8)]">
      <img
        src={bg}
        alt=""
        className="h-full w-full object-cover opacity-50 [animation:scale_25s]"
      />
    </div>
    <div className="banner absolute left-[15%] top-[30%]">
      <h1 className="w-[50%] text-[8rem] font-light leading-[9rem] tracking-[0.2rem] text-white opacity-0 [text-shadow:0_0.3rem_0.5rem_rgba(0,0,0,0.4)] [animation:moveBanner_1s_0.5s_forwards] max-[1400px]:text-[6rem] max-[1400px]:leading-[7rem] max-[1000px]:text-[5rem] max-[1000px]:leading-[6rem] max-[700px]:text-[4rem] max-[700px]:leading-[5rem]">
        Architecture &amp; Interior Design
      </h1>
      <p className="mb-[3rem] w-[70%] text-[4rem] tracking-[0.1rem] text-white opacity-0 [text-shadow:0_0.3rem_0.5rem_rgba(0,0,0,0.4)] [animation:moveBanner_1s_0.7s_forwards] max-[1400px]:text-[3rem] max-[1000px]:text-[2.5rem] max-[700px]:text-[2rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="h-[7rem] w-[25rem] cursor-pointer border-none bg-[#c29525] text-[2rem] uppercase text-white opacity-0 [text-shadow:0_0.2rem_0.4rem_rgba(0,0,0,0.2)] [box-shadow:0_0.3rem_0.5rem_rgba(0,0,0,0.4)] [animation:moveBanner_1s_0.9s_forwards] max-[1400px]:h-[5rem] max-[1400px]:w-[20rem] max-[1400px]:text-[1.6rem] max-[1000px]:h-[4rem] max-[1000px]:w-[18rem] max-[1000px]:text-[1.5rem]">
        Discover now
      </button>
    </div>
  </header>
);

export default Banner;