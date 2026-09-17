import {
  FaGithubSquare,
  FaYoutube,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const socials = [FaGithubSquare, FaYoutube, FaFacebookSquare, FaInstagramSquare];

const Section5 = () => (
  <footer className="section-5 center">
    <div className="social-media">
      {socials.map((Icon, index) => (
        <a key={index} href="#none" className="social-media-link">
          <i>
            <Icon />
          </i>
        </a>
      ))}
    </div>
    <p className="copyright">
      Copyright &copy; CodeAndCreate. All Rights Reserved
    </p>
  </footer>
);

export default Section5;