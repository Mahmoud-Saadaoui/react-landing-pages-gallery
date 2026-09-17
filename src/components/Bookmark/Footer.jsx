import { navLinks, logos, socials } from "./data";

const Footer = () => (
  <footer className="bg-veryDarkBlue py-16">
    <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
      <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light text-grayishBlue md:flex-row md:space-x-14 md:space-y-0">
        <img src={logos.logoFooter} alt="" className="mb-1" />
        {navLinks.slice(0, 3).map((link) => (
          <a key={link.label} href={link.href} className="uppercase hover:text-softRed">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex space-x-10">
        {socials.map((icon) => (
          <a key={icon} href="#">
            <img src={icon} alt="" className="ficon h-6" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;