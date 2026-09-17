import { useState } from "react";
import { infoTabs } from "./data";

const Information = () => {
  const [active, setActive] = useState(infoTabs[0].key);
  const activeTab = infoTabs.find((tab) => tab.key === active);

  return (
    <div className="information">
      <div className="container">
        <h2 className="h1 text-center">Product Information</h2>
        <ul className="classic-list info-list">
          {infoTabs.map((tab) => (
            <li
              key={tab.key}
              className={tab.key === active ? "selected" : undefined}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="info-content">
          <div className={activeTab.key}>{activeTab.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Information;