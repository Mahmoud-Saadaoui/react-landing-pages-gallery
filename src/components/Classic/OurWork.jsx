import { useState } from "react";
import { works, projectText } from "./data";

const OurWork = () => {
  const [shown, setShown] = useState(false);

  return (
    <div className="our-work text-center">
      <div className="container">
        <h2 className="upper">
          Our <span className="main-color">Work</span>
        </h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          <br />
          laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <div className="items-box">
          {works.map((img, i) => (
            <div
              className={`item${i >= 6 ? (shown ? " shown" : " hidden") : ""}`}
              key={`${img}-${i}`}
            >
              <img src={img} alt="" />
              <div className="over text-center">
                <h4 className="upper">Abazoo Website</h4>
                <p>
                  {projectText} <br /> laboris nisi ut aliquip ex ea commodo
                </p>
                <button className="upper">Show Project</button>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more upper" type="button" onClick={() => setShown(true)}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurWork;