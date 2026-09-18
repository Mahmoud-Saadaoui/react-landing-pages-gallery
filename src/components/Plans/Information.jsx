import { useState } from "react";
import { infoTabs } from "./data";

const Information = () => {
  const [active, setActive] = useState(infoTabs[0].key);
  const activeTab = infoTabs.find((tab) => tab.key === active);

  return (
    <div className="information bg-[#ececec] py-[30px] text-[18px]">
      <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <h2 className="text-center text-[50px] text-[#848484]">Product Information</h2>
        <ul className="m-0 list-none p-0 text-center">
          {infoTabs.map((tab) => (
            <li
              key={tab.key}
              className={`inline-block cursor-pointer bg-[#ddd] px-4 py-[15px] text-[22px] max-md:block ${
                tab.key === active ? "bg-white text-[#22a9bd]" : ""
              }`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="mb-[30px]">
          <div className="bg-white p-5 leading-[2]">{activeTab.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Information;