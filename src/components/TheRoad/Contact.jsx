const Contact = () => (
  <section className="contact">
    <h1 className="contact-heading">Contact Us</h1>
    <form className="contact-form center" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <label htmlFor="road-name">Full Name *</label>
        <input
          id="road-name"
          type="text"
          className="contact-input"
          placeholder="Enter Your Name"
          autoComplete="name"
        />
      </div>
      <div className="input-groups">
        <div className="input-group">
          <label htmlFor="road-email">Email *</label>
          <input
            id="road-email"
            type="email"
            className="contact-input"
            placeholder="Enter Your Email"
            autoComplete="email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="road-phone">Phone</label>
          <input
            id="road-phone"
            type="text"
            className="contact-input"
            placeholder="Enter Phone Number"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="road-message">Message</label>
        <textarea
          id="road-message"
          className="form-textarea"
          placeholder="Your Message Here..."
        />
      </div>
      <input type="submit" value="Submit" className="form-btn" />
    </form>
  </section>
);

export default Contact;