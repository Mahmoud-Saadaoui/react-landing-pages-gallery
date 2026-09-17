const Subscribe = () => (
  <div className="subscribe">
    <div className="overlay">
      <div className="container">
        <form>
          <input type="email" name="mail" placeholder="Enter Your email adress for newsletter" />
          <button className="upper" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Subscribe;