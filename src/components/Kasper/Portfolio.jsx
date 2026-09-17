import MainHeading from "./MainHeading";
import { shuffle, portfolioImages } from "./data";

const Portfolio = () => (
  <div className="portfolio">
    <div className="container">
      <MainHeading title="Portfolio" />
      <ul className="shuffle">
        {shuffle.map((item, index) => (
          <li key={item} className={index === 0 ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="imgs-container">
      {portfolioImages.map((image) => (
        <div className="box" key={image}>
          <img src={image} alt="" loading="lazy" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className="more">
      More
    </a>
  </div>
);

export default Portfolio;