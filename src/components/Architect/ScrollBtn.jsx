import { FaArrowUp } from "react-icons/fa";

const ScrollBtn = () => (
  <a
    href="#"
    className="scroll-btn fixed bottom-[5rem] right-[5rem] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[0.3rem] bg-[#e2b646] text-[2rem] text-white shadow-[0_0.1rem_0.6rem_rgba(0,0,0,0.2)]"
    aria-label="Back to top"
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <FaArrowUp />
  </a>
);

export default ScrollBtn;