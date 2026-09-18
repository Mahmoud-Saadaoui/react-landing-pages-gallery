import logo from "./images/logo.png";
import { navLinks } from "./data";

const line = "h-[0.3rem] w-full bg-[#d50000] transition-transform duration-500";

const WineNavbar = ({ open, onToggle }) => (
  <div className="fixed top-[1rem] z-[100] flex w-full items-center justify-evenly max-[1000px]:justify-start max-[1000px]:pl-[2rem]">
    <a href="#" className="logo-link">
      <img src={logo} alt="Logo" className="h-[6rem]" />
    </a>

    <a
      href="#"
      className="hidden max-[1000px]:absolute max-[1000px]:top-[1rem] max-[1000px]:right-[2rem] max-[1000px]:flex max-[1000px]:h-[2.5rem] max-[1000px]:w-[4rem] max-[1000px]:flex-col max-[1000px]:justify-between"
      onClick={onToggle}
    >
      <div className={`${line}${open ? " [transform:rotate(40deg)_translate(0.5rem,1rem)]" : ""}`}></div>
      <div className={`${line}${open ? " [transform:translate(-0.2rem,2rem)]" : ""}`}></div>
      <div className={`${line}${open ? " [transform:rotate(-40deg)_translate(0.5rem,-1rem)]" : ""}`}></div>
    </a>

    <nav
      className={`flex justify-center max-[1000px]:absolute max-[1000px]:top-[5rem] max-[1000px]:right-[-21rem] max-[1000px]:h-[calc(100vh-5rem)] max-[1000px]:flex-col max-[1000px]:justify-start max-[1000px]:bg-[#333] max-[1000px]:p-[2rem] max-[1000px]:rounded-tl-[0.5rem] max-[1000px]:transition-[right] max-[1000px]:duration-500 max-[500px]:top-[6.5rem]${
        open ? " max-[1000px]:right-0" : ""
      }`}
    >
      {navLinks.map((label) => (
        <a
          key={label}
          href="#"
          className="group relative mx-[3rem] w-[15rem] overflow-hidden border-[0.1rem] border-solid border-[#fff] py-[0.2rem] text-center text-[1.5rem] uppercase tracking-[0.1rem] text-[#fff] max-[1200px]:mx-[1.5rem] max-[1000px]:m-[1rem]"
        >
          {label}
          <span className="absolute top-0 left-[-20%] h-[5rem] w-[150%] origin-bottom-left opacity-80 transition-[left] duration-300 group-hover:left-[110%] [transform:rotate(-40deg)_translateX(-4rem)] bg-[#d50000]" />
        </a>
      ))}
    </nav>
  </div>
);

export default WineNavbar;