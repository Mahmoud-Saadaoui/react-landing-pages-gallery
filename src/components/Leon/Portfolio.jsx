import { portfolioItems } from "./data";

const Portfolio = () => (
  <div className="bg-[#f6f6f6] py-[60px]" id="portfolio">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="m-0 text-center text-[100px] font-extrabold leading-none tracking-[-3px] text-[#ebeced] max-[767px]:text-[60px]">
        Portfolio
      </h2>
      <p className="-mt-[30px] text-center text-[20px] text-[#797979] max-[767px]:-mt-[20px]">
        If you do it right, it will last forever.
      </p>
      <div className="mt-[80px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[30px]">
        {portfolioItems.map(({ image }, index) => (
          <div className="bg-white" key={index}>
            <img src={image} className="max-w-full" alt="" loading="lazy" />
            <div className="p-[20px]">
              <h3 className="m-0">Project Here</h3>
              <p className="mb-0 text-[#777] leading-[1.6]">
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