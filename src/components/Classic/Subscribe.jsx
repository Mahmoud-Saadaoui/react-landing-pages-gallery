import subscribeBg from "./images/subscribe.webp";

const container = "relative mx-auto w-[1200px] max-w-full";

const Subscribe = () => (
  <div className="subscribe bg-cover" style={{ backgroundImage: `url(${subscribeBg})` }}>
    <div className="overlay h-full w-full bg-[rgba(49,55,61,.9)]">
      <div className={container}>
        <form className="mx-auto w-[700px] max-w-full py-[100px] text-center">
          <input
            className="relative top-[2px] h-[37px] w-[320px] rounded-[10px] border-none px-[10px] text-[20px] leading-[37px] placeholder:text-[14px]"
            type="email"
            name="mail"
            placeholder="Enter Your email adress for newsletter"
          />
          <button
            className="ml-[20px] w-[200px] rounded-[10px] border-none bg-[#f7600e] p-[10px] text-[14px] uppercase text-white"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Subscribe;
