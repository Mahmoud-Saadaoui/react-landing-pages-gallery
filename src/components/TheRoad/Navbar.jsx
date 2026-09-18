import navbarBg from "./images/navbar-bg.jpg";
import { navLinks, navColors } from "./data";

const Navbar = ({ open, onOpen, onClose }) => (
  <>
    <div
      className="fixed left-[6.5rem] top-[6.5rem] z-[200] flex h-[5.5rem] w-[5.5rem] cursor-pointer flex-col items-center justify-center rounded-full bg-white max-[650px]:left-[2.5rem] max-[650px]:top-[2.5rem]"
      onClick={onOpen}
    >
      <div className="my-[0.3rem] h-[0.2rem] w-[3.5rem] bg-[#777]"></div>
      <div className="my-[0.3rem] h-[0.2rem] w-[3.5rem] bg-[#777]"></div>
      <div className="my-[0.3rem] h-[0.2rem] w-[3.5rem] bg-[#777]"></div>
    </div>
    <div
      className={`fixed bottom-[-100%] left-0 z-[300] h-[100vh] w-[100vw] bg-[rgba(255,255,255,0.7)] p-[3.5rem_5.5rem_3.5rem_3.5rem] opacity-0 [transition:bottom_0.5s,opacity_0.2s] max-[650px]:p-0${
        open
          ? " bottom-0 opacity-100 [transition:bottom_0.5s,opacity_0.2s_0.25s]"
          : ""
      }`}
    >
      <nav
        className="relative h-full w-full overflow-y-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${navbarBg})`,
        }}
      >
        <div
          className="absolute right-[3rem] top-[2.5rem] z-[300] flex h-[5.5rem] w-[5.5rem] cursor-pointer flex-col items-center justify-center rounded-full bg-white max-[650px]:right-[4rem]"
          onClick={onClose}
        >
          <div className="absolute h-[0.2rem] w-[3.5rem] rotate-[40deg] bg-[#777]"></div>
          <div className="absolute h-[0.2rem] w-[3.5rem] rotate-[-40deg] bg-[#777]"></div>
        </div>
        <div className="flex h-full max-[1000px]:flex-col">
          {navLinks.map((label, index) => (
            <a
              key={label}
              href="#"
              className={`relative top-[-100%] flex w-full items-center justify-center text-[3rem] font-bold uppercase text-white opacity-80 hover:text-[#2b81e4] hover:opacity-100 [transition:all_0.3s] max-[1000px]:grow${
                open ? " top-0" : ""
              }`}
              style={{
                backgroundColor: navColors[index],
                transition: open
                  ? `top 1s ${0.4 + index * 0.2}s, opacity 0.3s, color 0.3s`
                  : undefined,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  </>
);

export default Navbar;