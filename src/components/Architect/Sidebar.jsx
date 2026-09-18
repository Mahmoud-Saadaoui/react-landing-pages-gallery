import { menuItems, socials } from "./data";

const Sidebar = ({ onNavigate }) => (
  <section className="sidebar fixed right-[-40rem] top-0 z-[100] h-screen w-[40rem] bg-white transition-[right] duration-500 [.group\/change.change_&]:right-0 max-[500px]:w-full max-[500px]:right-[-100%]">
    <ul className="menu absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
      {menuItems.map(({ label }) => (
        <li className="menu-item text-center" key={label}>
          <a
            href="#"
            className="menu-link group relative text-[4rem] text-[#555] max-[1400px]:text-[3rem]"
            onClick={onNavigate}
          >
            {label}
            <span className="absolute left-0 top-0 w-0 overflow-hidden whitespace-nowrap text-[#c29525] transition-[width] duration-300 ease-in-out group-hover:w-full">
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
    <div className="social-media absolute bottom-[3rem] flex w-full justify-center">
      {socials.map(({ label, Icon }) => (
        <a
          href="#"
          key={label}
          aria-label={label}
          className="mx-[3rem] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#777] text-[2.2rem] text-white transition-colors duration-300 hover:bg-[#c29525]"
        >
          <Icon />
        </a>
      ))}
    </div>
  </section>
);

export default Sidebar;