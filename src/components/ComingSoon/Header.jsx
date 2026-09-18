import { icon, slogn, heading, notifyText } from "./data";
import headerBg from "./images/header-bg.jpg";
import Countdown from "./Countdown";
import SubscribeForm from "./SubscribeForm";

const Header = () => (
  <header
    className="bg-cover bg-center text-center"
    style={{ backgroundImage: `url(${headerBg})` }}
  >
    <div className="brand my-[50px] inline-block animate-bounce-in border-b-[5px] border-[#454545] px-[10px] py-[20px]">
      <div className="logo">
        <img src={icon} alt="شعار التطبيق" />
      </div>
      <div className="slogn">
        <img src={slogn} alt="شعار التطبيق" />
      </div>
    </div>

    <div className="animate-fade-in-up">
      <h1 className="text-[60px] font-bold leading-[75px] text-white max-[768px]:text-[40px]">
        {heading.title}
      </h1>
      <p className="mx-auto w-[40%] text-[18px] leading-[25px] text-[#acacac]">
        {heading.description}
      </p>
    </div>

    <div className="mx-auto my-[60px] w-[60%] animate-fade-in-down p-[30px] max-[768px]:w-[80%]">
      <Countdown />
    </div>

    <div className="animate-zoom-in">
      <p className="text-[18px] text-white">{notifyText}</p>
      <SubscribeForm variant="header" />
    </div>
  </header>
);

export default Header;