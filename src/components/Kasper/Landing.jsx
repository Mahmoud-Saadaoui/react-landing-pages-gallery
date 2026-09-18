import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import landing from "./images/landing.jpg";

const Landing = () => (
  <div
    className="relative min-h-screen bg-cover bg-[#1f2021]"
    style={{ backgroundImage: `url(${landing})` }}
  >
    <div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,.6)]"></div>
    <div className="absolute left-0 top-1/2 flex w-1/2 -translate-y-1/2 justify-end bg-[rgba(15,116,143,.7)] p-[50px] text-white max-[767px]:w-full">
      <div className="max-w-[500px] max-[767px]:max-w-full">
        <h2 className="mb-[20px] text-[32px] font-normal leading-[1.5]">
          Hello World!
          <br />
          We Are Kasper We Make Art.
        </h2>
        <p className="text-[14px] leading-[2]">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </div>
    </div>
    <FaAngleLeft
      aria-hidden="true"
      className="absolute left-[30px] top-1/2 -translate-y-1/2 text-[2em] text-[#ddd] max-[767px]:hidden"
    />
    <FaAngleRight
      aria-hidden="true"
      className="absolute right-[30px] top-1/2 -translate-y-1/2 text-[2em] text-[#ddd] max-[767px]:hidden"
    />
    <ul className="absolute bottom-[30px] left-1/2 flex -translate-x-1/2">
      <li className="mr-[10px] h-[20px] w-[20px] rounded-full border border-white"></li>
      <li className="mr-[10px] h-[20px] w-[20px] rounded-full border border-white bg-[#19c8fa]"></li>
      <li className="mr-[10px] h-[20px] w-[20px] rounded-full border border-white"></li>
    </ul>
  </div>
);

export default Landing;