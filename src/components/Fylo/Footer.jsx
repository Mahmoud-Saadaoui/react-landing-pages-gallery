import { footerMenus, footerContact, footerSocials } from "./data";

const Footer = () => (
  <footer className="bg-darkBlue2 text-white">
    <div className="container mx-auto px-5 pt-12 pb-10">
      <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
        <div className="mt-10 space-y-6">
          {footerContact.map((item) => (
            <div key={item.text} className="flex items-center space-x-3">
              <div className="w-6">
                <img src={item.icon} alt="" className="scale-10" loading="lazy" />
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
                  className="bg-darkBlue ficon rounded-full p-2"
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