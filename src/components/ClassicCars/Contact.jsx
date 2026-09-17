import Section from "./Section";

const Contact = ({ open, onClose }) => (
  <Section
    id="contact"
    className="section-5 target"
    open={open}
    onClose={onClose}
  >
    <h1 className="section-heading">Contact Us</h1>
    <form
      className="contact-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="form-input"
        placeholder="Your Full Name"
        name="name"
        autoComplete="name"
      />
      <input
        type="email"
        className="form-input"
        placeholder="Your Email"
        name="email"
        autoComplete="email"
      />
      <textarea
        className="form-input"
        placeholder="Enter Message"
        name="message"
      />
      <input className="form-btn" type="submit" value="Submit" />
    </form>
    <p className="copyright">
      Copyright &copy; CodeAndCreate All Rights Reserved
    </p>
  </Section>
);

export default Contact;