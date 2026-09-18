import { works } from "./data";

const OurWorks = () => (
  <div className="our-works">
    {works.map((image) => (
      <div className="float-left w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={image}>
        <img className="w-full" src={image} alt="" loading="lazy" />
      </div>
    ))}
    <div className="clear-both"></div>
  </div>
);

export default OurWorks;
