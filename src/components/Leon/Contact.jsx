import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => (
  <div className="contact" id="contact">
    <div className="container">
      <h2 className="special-heading">Contact</h2>
      <p>We are born to create</p>
      <div className="info">
        <p className="label">Feel free to drop us a line at:</p>
        <a href="mailto:leonagency@mail.com?subject=Contact" className="link">
          leonagency@mail.com
        </a>
        <div className="social">
          Find Us On Social Networks
          <FaYoutube />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;