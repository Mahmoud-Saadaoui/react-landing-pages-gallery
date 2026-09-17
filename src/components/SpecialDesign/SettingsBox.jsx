import { FaCog } from "react-icons/fa";
import { colors } from "./data";

const SettingsBox = ({
  open,
  onToggleOpen,
  color,
  onColor,
  bgEnabled,
  onBg,
  bulletsVisible,
  onBullets,
  onReset,
}) => (
  <div className={`settings-box${open ? " open" : ""}`}>
    <div className="toggle-settings" onClick={onToggleOpen}>
      <FaCog className={`fa-gear${open ? " fa-spin" : ""}`} />
    </div>
    <div className="settings-container">
      <div className="option-box">
        <h4>Colors</h4>
        <ul className="colors-list">
          {colors.map((c) => (
            <li
              key={c}
              className={color === c ? "active" : ""}
              data-color={c}
              style={{ backgroundColor: c }}
              onClick={() => onColor(c)}
            />
          ))}
        </ul>
      </div>
      <div className="option-box">
        <h4>Random Backgrounds</h4>
        <div className="random-backgrounds">
          <span
            className={`yes${bgEnabled ? " active" : ""}`}
            data-background="yes"
            onClick={() => onBg(true)}
          >
            Yes
          </span>
          <span
            className={`no${bgEnabled ? "" : " active"}`}
            data-background="no"
            onClick={() => onBg(false)}
          >
            No
          </span>
        </div>
      </div>
      <div className="option-box">
        <h4>Show Bullets</h4>
        <div className="bullets-option">
          <span
            className={`yes${bulletsVisible ? " active" : ""}`}
            data-display="show"
            onClick={() => onBullets(true)}
          >
            Yes
          </span>
          <span
            className={`no${bulletsVisible ? "" : " active"}`}
            data-display="hide"
            onClick={() => onBullets(false)}
          >
            No
          </span>
        </div>
      </div>
      <button className="reset-options" onClick={onReset}>
        Reset Options
      </button>
    </div>
  </div>
);

export default SettingsBox;