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
  <div
    className={`fixed top-0 z-[1000] min-h-screen w-[200px] border border-[#EEE] bg-white transition-all duration-300${
      open ? " left-0" : " left-[-200px]"
    }`}
  >
    <div
      className="absolute right-[-30px] top-[100px] cursor-pointer bg-white text-center"
      onClick={onToggleOpen}
    >
      <FaCog
        className={`w-[30px] py-2${open ? " animate-spin [animation-duration:2s]" : ""}`}
      />
    </div>
    <div>
      <div className="m-[10px] bg-[#EEE] p-[10px] text-center">
        <h4 className="m-0 text-[14px] text-[#666]">Colors</h4>
        <ul className="m-[10px_0_0] list-none p-0 text-center">
          {colors.map((c) => (
            <li
              key={c}
              className={`inline-block h-6 w-6 cursor-pointer rounded-full border-[3px]${
                color === c ? " border-white" : " border-[#EEE]"
              }`}
              data-color={c}
              style={{ backgroundColor: c }}
              onClick={() => onColor(c)}
            />
          ))}
        </ul>
      </div>
      <div className="m-[10px] bg-[#EEE] p-[10px] text-center">
        <h4 className="m-0 text-[14px] text-[#666]">Random Backgrounds</h4>
        <div>
          <span
            className={`mt-[10px] inline-block w-[50px] cursor-pointer rounded-[4px] bg-[var(--main-color)] px-[10px] py-[4px] text-[12px] font-bold text-white${
              bgEnabled ? " opacity-100" : " opacity-50"
            }`}
            data-background="yes"
            onClick={() => onBg(true)}
          >
            Yes
          </span>
          <span
            className={`mt-[10px] inline-block w-[50px] cursor-pointer rounded-[4px] bg-[var(--main-color)] px-[10px] py-[4px] text-[12px] font-bold text-white${
              bgEnabled ? " opacity-50" : " opacity-100"
            }`}
            data-background="no"
            onClick={() => onBg(false)}
          >
            No
          </span>
        </div>
      </div>
      <div className="m-[10px] bg-[#EEE] p-[10px] text-center">
        <h4 className="m-0 text-[14px] text-[#666]">Show Bullets</h4>
        <div>
          <span
            className={`mt-[10px] inline-block w-[50px] cursor-pointer rounded-[4px] bg-[var(--main-color)] px-[10px] py-[4px] text-[12px] font-bold text-white${
              bulletsVisible ? " opacity-100" : " opacity-50"
            }`}
            data-display="show"
            onClick={() => onBullets(true)}
          >
            Yes
          </span>
          <span
            className={`mt-[10px] inline-block w-[50px] cursor-pointer rounded-[4px] bg-[var(--main-color)] px-[10px] py-[4px] text-[12px] font-bold text-white${
              bulletsVisible ? " opacity-50" : " opacity-100"
            }`}
            data-display="hide"
            onClick={() => onBullets(false)}
          >
            No
          </span>
        </div>
      </div>
      <button
        className="mx-auto my-[10px] block w-[178px] cursor-pointer rounded-[4px] bg-[#F44336] p-[10px] font-bold text-white"
        onClick={onReset}
      >
        Reset Options
      </button>
    </div>
  </div>
);

export default SettingsBox;