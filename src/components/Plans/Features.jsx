import { features } from "./data";

const Features = () => (
  <div className="features py-[30px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <h2 className="text-center text-[50px] text-[#555]">Our Features</h2>
      {features.map(({ title, text }) => (
        <div
          className="float-left mb-[30px] pr-5 text-[#555] md:w-1/2 lg:w-1/3 max-md:text-center"
          key={title}
        >
          <h2 className="mx-0 mb-2 mt-[10px] text-[50px]">{title}</h2>
          <p className="m-0 leading-[1.6]">{text}</p>
        </div>
      ))}
      <div className="clear-both"></div>
    </div>
  </div>
);

export default Features;
