import { works } from "./data";

const OurWorks = () => (
  <div className="our-works">
    {works.map((image) => (
      <div className="image float-left" key={image}>
        <img className="responsive-image" src={image} alt="" loading="lazy" />
      </div>
    ))}
    <div className="clearfix"></div>
  </div>
);

export default OurWorks;