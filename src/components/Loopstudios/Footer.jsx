import { logo, navLinks, socialIcons } from "./data";

const Footer = () => (
  <footer className="bg-black">
    <div className="mx-auto max-w-6xl py-10">
      <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
          <div className="h-8">
            <img src={logo} alt="" className="w-44 md:ml-3" />
          </div>
          <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
            {navLinks.map((link) => (
              <div key={link} className="group h-10">
                <a href="#">{link}</a>
                <div className="border-blue-50 mx-2 group-hover:border-b" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
          <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end">
            {socialIcons.map((icon) => (
              <div key={icon} className="group h-8">
                <a href="#">
                  <img src={icon} alt="" className="h-6" loading="lazy" />
                </a>
              </div>
            ))}
          </div>
          <div className="font-bold">&copy; 2022 Loopstudios. All Rights Reserved</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;