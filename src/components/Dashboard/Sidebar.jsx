import { NavLink } from "react-router-dom";
import { sidebarNav } from "./data";

const Sidebar = () => (
  <div className="sidebar bg-white p-20 p-relative">
    <h3 className="p-relative txt-c mt-0">Mahmoud</h3>
    <ul>
      {sidebarNav.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            end={item.end}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
          >
            <i className={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;