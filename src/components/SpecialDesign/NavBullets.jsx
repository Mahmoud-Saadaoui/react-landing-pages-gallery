import { sections } from "./data";

const NavBullets = ({ visible, onNavigate }) => (
  <div className="nav-bullets" style={{ display: visible ? "block" : "none" }}>
    {sections.map(({ bullet, selector }) => (
      <div
        className="bullet"
        data-section={selector}
        key={selector}
        onClick={() => onNavigate(selector)}
      >
        <div className="tooltip">{bullet}</div>
      </div>
    ))}
  </div>
);

export default NavBullets;