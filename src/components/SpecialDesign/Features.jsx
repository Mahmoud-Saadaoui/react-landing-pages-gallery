import { features } from "./data";

const Features = () => (
  <div className="features py-20">
    <h2 className="mb-[60px] text-center text-[30px] font-bold text-[var(--main-color)]">
      Our Features
    </h2>
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      {features.map(({ img, title, text }) => (
        <div
          className="float-left mb-[40px] w-1/3 text-center max-[991px]:w-1/2 max-[575px]:w-full"
          key={title}
        >
          <img src={img} alt="" className="w-[96px]" />
          <h4 className="relative mb-[40px] mt-[15px] text-[22px] font-bold">
            {title}
            <span className="absolute bottom-[-22px] left-1/2 -ml-5 h-1 w-10 bg-[var(--main-color)]" />
          </h4>
          <p className="mx-auto w-4/5 leading-[1.7] text-[#706f6f]">{text}</p>
        </div>
      ))}
      <div className="clear-both" />
    </div>
  </div>
);

export default Features;