import iphones1 from "./images/iPhones/iphones-1-img.webp";
import iphones2 from "./images/iPhones/iphones-2-img.webp";

const Section2 = () => (
  <section className="section-2" id="section-2">
    <h1 className="section-2-heading">iPhone 12</h1>
    <div className="iphones">
      <img src={iphones1} className="iphone-img-1" alt="" />
      <img src={iphones2} className="iphone-img-2" alt="" />
    </div>
    <div className="iphone-btns">
      <a href="#" className="iphone-btn center" onClick={(e) => e.preventDefault()}>
        <span>Learn More</span>
      </a>
      <a href="#" className="iphone-btn center" onClick={(e) => e.preventDefault()}>
        <span>Shop</span>
      </a>
    </div>
  </section>
);

export default Section2;