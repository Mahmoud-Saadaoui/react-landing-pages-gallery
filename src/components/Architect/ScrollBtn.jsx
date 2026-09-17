import { FaArrowUp } from "react-icons/fa";

const ScrollBtn = () => (
  <a
    href="#"
    className="scroll-btn"
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
