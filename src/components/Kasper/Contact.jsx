import MainHeading from "./MainHeading";

const Contact = () => (
  <div className="contact">
    <div className="container">
      <MainHeading title="Contact Us" />
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="main-input"
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
          />
          <input
            className="main-input"
            type="email"
            name="mail"
            placeholder="Your Email"
            autoComplete="email"
          />
          <textarea
            className="main-input"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
        <div className="info">
          <h4>Get In Touch</h4>
          <span className="phone">+00 123.456.789</span>
          <span className="phone">+00 123.456.789</span>
          <h4>Where We Are</h4>
          <address>
            Awesome Address 17
            <br />
            New York, NYC
            <br />
            123-4567-890
            <br />
            USA
          </address>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;