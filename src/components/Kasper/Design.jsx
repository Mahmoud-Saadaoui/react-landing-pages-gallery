import { FaDesktop } from "react-icons/fa";
import mobile from "./images/mobile.png";
import designBg from "./images/design-features.jpg";
import { designFeatures } from "./data";

const Design = () => (
  <div
    className="relative flex h-[600px] items-center overflow-hidden bg-cover py-[100px] before:absolute before:inset-0 before:bg-[rgba(0,0,0,.6)]"
    style={{ backgroundImage: `url(${designBg})` }}
  >
    <div className="relative z-[2] flex-1 text-center max-[767px]:hidden">
      <img
        src={mobile}
        alt="Mobile"
        loading="lazy"
        className="relative -bottom-[150px]"
      />
    </div>
    <div className="relative z-[2] flex-1 bg-[rgba(15,116,143,.7)] p-[50px] text-white">
      <h2 className="mb-[40px] font-normal uppercase">Our Design Comes With...</h2>
      <ul>
        {designFeatures.map((feature) => (
          <li className="py-[15px]" key={feature}>
            <FaDesktop
              aria-hidden="true"
              className="relative top-[1px] mr-[20px] inline-block"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Design;