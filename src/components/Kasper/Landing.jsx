const Landing = () => (
  <div className="landing">
    <div className="overlay"></div>
    <div className="text">
      <div className="content">
        <h2>
          Hello World!
          <br />
          We Are Kasper We Make Art.
        </h2>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </div>
    </div>
    <i className="fas fa-angle-left change-background fa-2x"></i>
    <i className="fas fa-angle-right change-background fa-2x"></i>
    <ul className="bullets">
      <li></li>
      <li className="active"></li>
      <li></li>
    </ul>
  </div>
);

export default Landing;