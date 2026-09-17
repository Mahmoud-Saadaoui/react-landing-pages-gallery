import mobile from "./images/mobile.png";
import { designFeatures } from "./data";

const Design = () => (
  <div className="design">
    <div className="image">
      <img src={mobile} alt="Mobile" loading="lazy" />
    </div>
    <div className="text">
      <h2>Our Design Comes With...</h2>
      <ul>
        {designFeatures.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Design;