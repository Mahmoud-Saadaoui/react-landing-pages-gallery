import { headerPlans } from "./data";
import headerBg from "./images/header.jpg";

const Header = () => (
  <div
    className="header relative min-h-[500px] bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${headerBg})` }}
  >
    <div className="overlay absolute inset-0 bg-[#00a8ff]/50 text-white">
      <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <h1 className="mt-[100px] text-[60px] max-md:mt-10 max-md:text-[50px] max-[420px]:mt-5">
          Choose Your Plan
        </h1>
        {headerPlans.map((plan) => (
          <div
            className="float-left mx-[1%] w-[48%] border-4 border-white px-5 py-5 text-[24px] max-md:float-none max-md:mx-auto max-md:mb-5 max-md:w-full max-md:text-[22px]"
            key={plan}
          >
            {plan}
          </div>
        ))}
        <div className="clear-both"></div>
        <div className="mx-[1%] mt-[30px] border-4 border-white px-5 py-5 text-[24px] max-md:hidden">
          Order Now and Get Another Plan For Free
        </div>
      </div>
    </div>
  </div>
);

export default Header;
