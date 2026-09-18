import { NavLink } from "react-router-dom";
import { sidebarNav } from "./data";

const Sidebar = () => (
  <div className="w-[250px] shrink-0 bg-white p-[20px] shadow-[0_0_10px_#ddd] max-md:w-[58px] max-md:p-[10px]">
    <h3 className="relative mb-[50px] mt-0 text-center text-[1.17em] font-bold max-md:mb-[15px] max-md:text-[13px]">
      Mahmoud
      <span aria-hidden className="absolute -bottom-[20px] left-1/2 h-[2px] w-[80px] -translate-x-1/2 bg-black max-md:hidden" />
      <span aria-hidden className="absolute -bottom-[29px] left-1/2 h-[12px] w-[12px] -translate-x-1/2 rounded-full border-4 border-white bg-black max-md:hidden" />
    </h3>
    <ul className="m-0 list-none p-0">
      {sidebarNav.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `mb-[5px] flex items-center rounded-[6px] p-[10px] text-[14px] text-black transition-colors duration-300 hover:bg-[#f6f6f6] ${
                isActive ? "bg-[#f6f6f6]" : ""
              }`
            }
          >
            <item.icon aria-hidden className="shrink-0 text-[16px]" />
            <span className="ml-[10px] text-[14px] max-md:hidden">{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;