import { aboutImg } from "./data";

const AboutUs = () => (
  <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
    <div className="about-us flex py-[50px] max-[767px]:block max-[767px]:text-center">
      <div className="flex-1 p-[30px] max-[767px]:p-0">
        <h2 className="mb-[10px] text-[30px] font-bold text-[var(--main-color)]">
          About Us
        </h2>
        <p className="leading-[1.8] text-[#767676]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsum, tenetur dolores esse magni ratione distinctio! Quod iusto neque
          fuga, maxime quos nostrum quibusdam dicta deserunt blanditiis non
          voluptate id?
        </p>
      </div>
      <div className="flex-1 text-center">
        <img src={aboutImg} alt="" className="w-[250px]" />
      </div>
    </div>
  </div>
);

export default AboutUs;