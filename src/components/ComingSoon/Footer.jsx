import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { socials, footerNotifyText, contactEmail } from "./data";
import SubscribeForm from "./SubscribeForm";

const socialIcons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

const Footer = () => (
  <footer>
    <div className="top-footer text-center">
      <div className="overlay">
        <h3>{footerNotifyText}</h3>
        <SubscribeForm variant="footer" />
      </div>
    </div>

    <div className="contact text-center">
      <div className="overlay">
        <h3>تابعنا على القنوات الاجتماعية</h3>
        <ul className="list-inline">
          {socials.map((social) => {
            const Icon = socialIcons[social.name];
            return (
              <li className="list-inline-item" key={social.name}>
                <a href={social.href} className={social.name}>
                  <i>
                    <Icon />
                  </i>
                </a>
              </li>
            );
          })}
        </ul>
        <hr />
        <p>
          <a href={`mailto:${contactEmail}?Subject=Hello`} target="_top">
            <i>
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