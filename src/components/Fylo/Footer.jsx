import { footerMenus, footerContact, footerSocials } from "./data";

const Footer = () => (
  <footer className="bg-[hsl(216_53%_9%)] text-white">
    <div className="mx-auto w-full px-5 pt-12 pb-10 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
        <div className="mt-10 space-y-6">
          {footerContact.map((item) => (
            <div key={item.text} className="flex items-center space-x-3">
              <div className="w-6">
                <img src={item.icon} alt="" loading="lazy" />
              </div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
          {footerMenus.map((menu, index) => (
            <div key={index} className="flex flex-col space-y-3">
              {menu.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 pb-10">
          {footerSocials.map((icon) => (
            <div key={icon}>
              <a href="#">
                <img
                  src={icon}
                  alt=""
                  className="bg-[hsl(217_28%_15%)] rounded-full p-2 hover:[filter:invert(80%)_sepia(37%)_saturate(7048%)_hue-rotate(132deg)_brightness(105%)_contrast(104%)]"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;