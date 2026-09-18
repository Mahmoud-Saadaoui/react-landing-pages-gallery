import { FaEnvelope } from "react-icons/fa";
import subscribeBg from "./images/subscribe.jpg";

const Subscribe = () => (
  <div
    className="relative bg-cover py-[100px] text-white before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)]"
    style={{ backgroundImage: `url(${subscribeBg})` }}
  >
    <div className="relative mx-auto flex items-center px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px] max-[991px]:flex-col">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative flex w-[500px] max-w-full"
      >
        <FaEnvelope
          aria-hidden="true"
          className="absolute left-[25px] top-1/2 -translate-y-1/2 text-[1.33333em]"
        />
        <input
          type="email"
          name="mail"
          placeholder="Your Email"
          autoComplete="email"
          className="w-[calc(100%_-_130px)] border border-white border-r-0 bg-transparent p-[20px] pl-[60px] caret-[#19c8fa] placeholder:text-white focus:outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="w-[130px] border border-white border-l-0 bg-[#19c8fa] px-[20px] py-[10px] uppercase text-white focus:outline-none"
        />
      </form>
      <p className="ml-[50px] leading-[2] max-[991px]:ml-0 max-[991px]:mt-[30px]">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
        blan dit aliquet elit, eget tincidunt.
      </p>
    </div>
  </div>
);

export default Subscribe;