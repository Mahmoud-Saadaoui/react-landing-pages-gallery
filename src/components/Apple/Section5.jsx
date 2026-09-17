import airpods1 from "./images/AirPods/airpods-1.png";
import airpods2 from "./images/AirPods/airpods-2.png";

const Section5 = () => (
  <section className="section-5 center" id="section-5">
    <div className="airpods">
      <h1 className="section-5-heading">AirPods</h1>
      <img src={airpods1} className="airpods-img-1" alt="" />
      <img src={airpods2} className="airpods-img-2" alt="" />
      <div className="airpods-buttons">
        <button type="button" className="airpods-btn">Learn More</button>
        <button type="button" className="airpods-btn">Buy</button>
      </div>
    </div>
  </section>
);

export default Section5;