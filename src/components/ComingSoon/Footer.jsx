import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import footerBg from "./images/footer-bg.jpg";
import { socials, footerNotifyText, contactEmail } from "./data";
import SubscribeForm from "./SubscribeForm";

const socialIcons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

const socialHover = {
  facebook: "hover:bg-[#3b5999]",
  twitter: "hover:bg-[#55acee]",
  linkedin: "hover:bg-[#0077B5]",
  instagram: "hover:bg-[#e4405f]",
};

const Footer = () => (
  <footer
    className="bg-cover bg-center"
    style={{ backgroundImage: `url(${footerBg})` }}
  >
    <div className="top-footer text-center">
      <div className="bg-[rgba(255,204,0,0.7)] py-[60px]">
        <h3 className="mx-auto mb-[30px] w-[80%] text-[30px]">
          {footerNotifyText}
        </h3>
        <SubscribeForm variant="footer" />
      </div>
    </div>

    <div className="contact text-center">
      <div className="bg-[rgba(28,28,28,0.7)] pb-[10px] pt-[60px] text-white">
        <h3 className="mx-auto mb-[30px] text-[30px]">
          تابعنا على القنوات الاجتماعية
        </h3>
        <ul className="flex list-none flex-wrap justify-center p-0">
          {socials.map((social) => {
            const Icon = socialIcons[social.name];
            return (
              <li className="mx-[5px] mb-[10px]" key={social.name}>
                <a
                  href={social.href}
                  className={`flex h-[70px] w-[70px] items-center justify-center bg-[rgba(255,255,255,0.14)] text-[1.2em] text-white transition-all duration-300 ${socialHover[social.name]}`}
                >
                  <i>
                    <Icon />
                  </i>
                </a>
              </li>
            );
          })}
        </ul>
        <hr className="mt-[50px] w-[25%] border-t-white/10" />
        <p>
          <a
            href={`mailto:${contactEmail}?Subject=Hello`}
            target="_top"
            className="text-[#b4b4b4] no-underline hover:no-underline focus:no-underline"
          >
            <i className="ml-[5px] text-[#ffce00]">
              <FaRegEnvelope />
            </i>{" "}
            {contactEmail}
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;