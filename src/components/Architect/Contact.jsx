const Contact = () => (
  <section className="contact">
    <div className="contact-wrapper">
      <div className="contact-left" />
      <div className="contact-right">
        <h1 className="contact-heading">Contact</h1>
        <form>
          <div className="input-group">
            <input type="text" className="field" name="fullName" />
            <label className="input-label">Full Name</label>
          </div>
          <div className="input-group">
            <input type="email" className="field" name="email" />
            <label className="input-label">Email</label>
          </div>
          <div className="input-group">
            <textarea className="field" name="message" />
            <label className="message">Message</label>
          </div>
          <input type="submit" className="submit-btn" value="Submit" />
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
