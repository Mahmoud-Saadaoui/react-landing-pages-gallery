import { menuItems, socials } from "./data";

const Sidebar = ({ onNavigate }) => (
  <section className="sidebar">
    <ul className="menu">
      {menuItems.map(({ label }) => (
        <li className="menu-item" key={label}>
          <a
            href="#"
            className="menu-link"
            data-content={label}
            onClick={onNavigate}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
    <div className="social-media">
      {socials.map(({ label, Icon }) => (
        <a href="#" key={label} aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  </section>
);

export default Sidebar;
