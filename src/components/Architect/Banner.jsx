import bg from "./images/bg.jpg";

const Banner = () => (
  <header className="header">
    <div className="img-wrapper">
      <img src={bg} alt="" />
    </div>
    <div className="banner">
      <h1>Architecture &amp; Interior Design</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Discover now</button>
    </div>
  </header>
);

export default Banner;
