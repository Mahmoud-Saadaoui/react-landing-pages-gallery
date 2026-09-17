const Subscribe = () => (
  <div className="subscribe">
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <i className="far fa-envelope fa-lg"></i>
        <input
          type="email"
          name="mail"
          placeholder="Your Email"
          autoComplete="email"
        />
        <input type="submit" value="Subscribe" />
      </form>
      <p>
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
        blan dit aliquet elit, eget tincidunt.
      </p>
    </div>
  </div>
);

export default Subscribe;