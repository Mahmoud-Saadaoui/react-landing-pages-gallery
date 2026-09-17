const Section4 = () => (
  <section className="section-4" id="section-4">
    <h1 className="section-heading section-4-heading">Contact Me</h1>
    <form className="contact-form center" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <input type="submit" value="Submit" className="contact-form-btn" />
    </form>
  </section>
);

export default Section4;