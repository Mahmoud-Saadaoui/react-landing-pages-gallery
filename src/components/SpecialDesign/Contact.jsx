const Contact = () => (
  <div className="contact">
    <div className="overlay" />
    <div className="container">
      <h2>Contact Us</h2>
      <form action="">
        <div className="left">
          <input type="text" placeholder="Your Name" name="username" />
          <input type="text" placeholder="Your Phone" name="phone" />
          <input type="email" placeholder="Your Email" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
        </div>
        <div className="right">
          <textarea name="message" placeholder="Your Message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  </div>
);

export default Contact;