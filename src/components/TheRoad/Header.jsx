import airBalloon from "./images/air-balloon.webp";

const letters = "theroad".split("");

const Header = () => (
  <header className="header center">
    <div className="header-text">
      <h1 className="heading">Around the world</h1>
      <p className="header-paragraph">
        "Traveling - it leaves you speechless, then turns you into a
        storyteller"
      </p>
    </div>
    <img
      src={airBalloon}
      alt="Header Image"
      className="header-image"
    />
    <div className="logo">
      <h1>
        {letters.map((letter, index) => (
          <span key={index} className="center">
            {letter}
          </span>
        ))}
      </h1>
    </div>
  </header>
);

export default Header;