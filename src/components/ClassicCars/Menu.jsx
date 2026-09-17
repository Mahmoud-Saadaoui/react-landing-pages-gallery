const Menu = ({ open, onClick }) => (
  <div
    className={`menu target center${open ? " change" : ""}`}
    onClick={onClick}
  >
    <div className="menu-line menu-line-1"></div>
    <div className="menu-line menu-line-2"></div>
  </div>
);

export default Menu;