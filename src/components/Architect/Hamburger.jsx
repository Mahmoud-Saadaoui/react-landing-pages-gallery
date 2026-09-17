const Hamburger = ({ open, onToggle }) => (
  <div
    className="hamburger-menu"
    onClick={onToggle}
    role="button"
    tabIndex={0}
    aria-label="Toggle menu"
    aria-expanded={open}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onToggle();
    }}
  >
    <div className="line line-1" />
    <div className="line line-2" />
    <div className="line line-3" />
    <span>Close</span>
  </div>
);

export default Hamburger;
