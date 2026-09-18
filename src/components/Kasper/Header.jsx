import { FaBars, FaSearch } from "react-icons/fa";
import logo from "./images/logo.png";
import { navLinks } from "./data";

const Header = () => (
  <header className="absolute left-0 top-0 z-[2] w-full">
    <div className="relative mx-auto flex min-h-[97px] items-center justify-between px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px] after:absolute after:bottom-0 after:left-[15px] after:h-px after:w-[calc(100%_-_30px)] after:bg-[#a2a2a2] after:content-['']">
      <a href="#" className="logo">
        <img src={logo} alt="Logo" className="h-[40px]" />
      </a>
      <nav className="flex flex-1 items-center justify-end">
        <FaBars
          aria-hidden="true"
          className="peer text-[22px] text-white md:hidden"
        />
        <ul className="hidden max-[767px]:absolute max-[767px]:left-0 max-[767px]:top-full max-[767px]:w-full max-[767px]:flex-col max-[767px]:bg-[rgba(0,0,0,.5)] max-[767px]:peer-hover:flex md:flex md:flex-row">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className={`relative z-[2] block px-[10px] py-[40px] text-[14px] text-white no-underline transition-colors duration-300 hover:border-b hover:border-[#19c8fa] hover:text-[#19c8fa] max-[767px]:px-[15px] max-[767px]:py-[15px] ${
                  link.active ? "border-b border-[#19c8fa] text-[#19c8fa]" : ""
                }`}
                href="#"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative ml-[30px] h-[30px] w-[40px] border-l border-white">
          <FaSearch
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[20px] text-white"
          />
        </div>
      </nav>
    </div>
  </header>
);

export default Header;