import MainHeading from "./MainHeading";
import { shuffle, portfolioImages } from "./data";

const Portfolio = () => (
  <div className="py-[100px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <MainHeading title="Portfolio" />
      <ul className="flex justify-center">
        {shuffle.map((item, index) => (
          <li
            key={item}
            className={`p-[10px] ${index === 0 ? "bg-[#19c8fa] text-white" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-[60px] flex flex-wrap">
      {portfolioImages.map((image) => (
        <div
          className="group relative overflow-hidden md:basis-1/2 min-[1199px]:basis-[25%]"
          key={image}
        >
          <img
            src={image}
            alt=""
            loading="lazy"
            className="max-w-full transition-transform duration-300 group-hover:rotate-[3deg] group-hover:scale-110"
          />
          <div className="absolute -bottom-full left-0 w-full bg-white p-[20px] transition-all duration-300 group-hover:bottom-0">
            <h4 className="mb-[10px] font-normal">Awesome Image</h4>
            <p className="text-[#19c8fa]">Photography</p>
          </div>
        </div>
      ))}
    </div>
    <a
      href="#"
      className="mx-auto my-[30px] block w-fit bg-[#19c8fa] px-[20px] py-[15px] text-white uppercase no-underline"
    >
      More
    </a>
  </div>
);

export default Portfolio;