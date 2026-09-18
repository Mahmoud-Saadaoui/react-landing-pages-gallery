import { navLinks } from "./data";
import logo from "./images/logo.png";

const Header = () => (
  <div className="p-[20px]">
    <div className="mx-auto flex w-full items-center justify-between px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <img className="w-[60px]" src={logo} alt="Leon" />
      <div className="group relative">
        <span className="flex w-[30px] flex-wrap justify-end">
          <span className="mb-[5px] h-[2px] w-full bg-[#333]" />
          <span className="mb-[5px] h-[2px] w-[60%] bg-[#333] transition-all duration-[0.5s] group-hover:w-full" />
          <span className="mb-[5px] h-[2px] w-full bg-[#333]" />
        </span>
        <ul className="absolute right-0 top-[calc(100%+15px)] z-[1] m-0 hidden min-w-[200px] list-none bg-[#f6f6f6] p-0 group-hover:block">
          <li className="absolute right-[5px] top-[-20px]">
            <span className="block border-[10px] border-transparent border-b-[#f6f6f6]" />
          </li>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="group/li border-b border-[#ddd] last:border-b-0"
            >
              <a
                href={link.href}
                className="block p-[15px] text-[#333] no-underline transition-all duration-[0.5s] group-hover/li:pl-[25px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;