import { navLinks, logos, socials } from "./data";

const container =
  "mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]";

const Footer = () => (
  <footer className="bg-[#252b46] py-16">
    <div className={`${container} flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0`}>
      <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light text-[#9194a1] md:flex-row md:space-x-14 md:space-y-0">
        <img src={logos.logoFooter} alt="" className="mb-1" />
        {navLinks.slice(0, 3).map((link) => (
          <a key={link.label} href={link.href} className="uppercase hover:text-[#fa5757]">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex space-x-10">
        {socials.map((icon) => (
          <a key={icon} href="#">
            <img
              src={icon}
              alt=""
              className="h-6 hover:[filter:invert(53%)_sepia(38%)_saturate(3303%)_hue-rotate(326deg)_brightness(101%)_contrast(96%)]"
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;