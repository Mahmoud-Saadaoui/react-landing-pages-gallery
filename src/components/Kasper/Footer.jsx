import logo from "./images/logo.png";
import subscribeBg from "./images/subscribe.jpg";
import { socialIcons } from "./data";

const Footer = () => (
  <div
    className="relative bg-cover py-[50px] text-center text-white before:absolute before:inset-0 before:bg-[rgba(0,0,0,.7)]"
    style={{ backgroundImage: `url(${subscribeBg})` }}
  >
    <div
      data-reveal
      className="relative mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]"
    >
      <img src={logo} alt="Logo" className="mb-[20px]" />
      <p className="mx-auto my-[20px] w-fit border-b border-white p-[20px] text-[22px] uppercase">
        We Are Social
      </p>
      <div className="social-icons">
        {socialIcons.map((Icon, index) => (
          <Icon key={index} aria-hidden="true" className="px-[15px] py-[10px]" />
        ))}
      </div>
      <p className="copyright mt-[60px]">
        &copy; 2021 <span className="font-bold text-[#19c8fa]">Kasper</span> All
        Right Reserved
      </p>
    </div>
  </div>
);

export default Footer;