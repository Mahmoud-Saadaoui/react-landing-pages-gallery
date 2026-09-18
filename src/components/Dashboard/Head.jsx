import { FaMagnifyingGlass, FaRegBell } from "react-icons/fa6";
import { images } from "./images";

const Head = () => (
  <div className="flex items-center justify-between bg-white p-[15px]">
    <div className="relative">
      <FaMagnifyingGlass
        aria-hidden
        className="pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2 text-[14px] text-[#888]"
      />
      <input
        className="ml-[5px] w-[160px] rounded-[10px] border border-[#ccc] py-[5px] pr-[5px] pl-[30px] outline-none transition-[width] duration-300 focus:w-[200px] focus:placeholder:opacity-0"
        type="search"
        name="search"
        placeholder="Type A Keyword"
      />
    </div>
    <div className="flex items-center">
      <span className="relative">
        <FaRegBell aria-hidden className="text-[1.33333em]" />
        <span aria-hidden className="absolute -right-[5px] -top-[5px] h-[10px] w-[10px] rounded-full bg-[#f44336]" />
      </span>
      <img src={images.avatar} alt="" className="ml-[15px] h-[32px] w-[32px]" />
    </div>
  </div>
);

export default Head;