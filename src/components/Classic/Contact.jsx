import { socialIcons } from "./data";

const Contact = () => (
  <div className="contact text-center">
    <div className="overlay">
      <div className="container">
        <h2 className="upper">
          Say <span className="main-color">Hello</span>
        </h2>
        <p className="main">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          <br />
          laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <form>
          <input type="email" name="mail" placeholder="Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea placeholder="Message" />
          <div className="info">
            <button className="upper" type="submit">
              Hire Us
            </button>
            <span className="form-icons">
              {socialIcons.map(({ label, Icon }) => (
                <Icon key={label} className={`fa-${label.toLowerCase().replace(/ /g, "-")} fa-lg`} />
              ))}
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;