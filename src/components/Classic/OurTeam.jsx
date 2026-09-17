import { socialIcons, team, teamText } from "./data";

const OurTeam = () => (
  <div className="our-team text-center">
    <div className="container">
      <h2 className="upper">
        Our <span className="main-color">Team</span>
      </h2>
      <p className="main">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        <br />
        laboris nisi ut aliquip ex ea commodo consequat
      </p>
      <div className="the-team">
        {team.map(({ img, name }, i) => (
          <div className="person" key={`${name}-${i}`}>
            <img src={img} alt="" />
            <h3 className="upper">{name}</h3>
            <div className="social-icons">
              {socialIcons.map(({ label, Icon }) => (
                <Icon key={label} className={`fa-${label.toLowerCase().replace(/ /g, "-")} fa-lg`} />
              ))}
            </div>
            <p>{teamText}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurTeam;