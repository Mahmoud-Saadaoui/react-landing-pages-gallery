import { logo, footerMenus, socialIcons } from "./data";

const Footer = () => (
  <footer className="bg-gray-50">
    <div className="section-container">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <img src={logo} alt="" className="scale-50" />

        <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
            {footerMenus.map((menu, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 text-center md:text-left"
              >
                {menu.map((link) => (
                  <div key={link}>
                    <a href="#" className="hover:text-strongCyan">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex w-32 justify-between py-1">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#">
                <img src={icon} alt="" className="ficon duration-200" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;