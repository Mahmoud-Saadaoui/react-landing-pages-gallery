import { portfolioItems } from "./data";

const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <div className="container">
      <h2 className="special-heading">Portfolio</h2>
      <p>If you do it right, it will last forever.</p>
      <div className="portfolio-content">
        {portfolioItems.map(({ image }, index) => (
          <div className="card" key={index}>
            <img src={image} alt="" loading="lazy" />
            <div className="info">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;