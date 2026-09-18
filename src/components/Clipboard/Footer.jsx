import { logo, footerMenus, socialIcons } from "./data";

const Footer = () => (
  <footer className="bg-gray-50">
    <div className="mx-auto max-w-6xl px-10 text-center">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <img src={logo} alt="" className="scale-50" />

        <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-[hsl(201_11%_66%)] md:mb-0 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-4 text-center md:ml-24 md:flex-row md:space-x-24 md:space-y-0 md:text-left">
            {footerMenus.map((menu, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 text-center md:text-left"
              >
                {menu.map((link) => (
                  <div key={link}>
                    <a href="#" className="hover:text-[hsl(171_66%_44%)]">
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
                <img
                  src={icon}
                  alt=""
                  className="duration-200 hover:[filter:invert(53%)_sepia(68%)_saturate(434%)_hue-rotate(121deg)_brightness(101%)_contrast(94%)]"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;