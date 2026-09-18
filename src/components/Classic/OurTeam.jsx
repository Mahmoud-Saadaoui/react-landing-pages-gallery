import { socialIcons, team, teamText } from "./data";

const container = "relative mx-auto w-[1200px] max-w-full";

const socialColors = {
  Facebook: "group-hover:bg-[#3b5998]",
  Twitter: "group-hover:bg-[#55acee]",
  "Google Plus": "group-hover:bg-[#dc4e41]",
};

const OurTeam = () => (
  <div className="our-team py-[50px] text-center" data-section="team">
    <div className={container}>
      <h2 className="mb-0 text-[35px] uppercase">
        Our <span className="text-[#f7600e]">Team</span>
      </h2>
      <p className="mb-[40px] mt-[10px] text-[20px] leading-[2] text-[#666]">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        <br />
        laboris nisi ut aliquip ex ea commodo consequat
      </p>
      <div className="the-team overflow-hidden">
        {team.map(({ img, name }, i) => (
          <div className="group float-left ml-[1%] w-[24%] text-[#888] hover:text-[#555]" key={`${name}-${i}`}>
            <img className="h-[290px] w-[265px] grayscale group-hover:grayscale-0" src={img} alt="" />
            <h3 className="uppercase">{name}</h3>
            <div className="social-icons">
              {socialIcons.map(({ label, Icon }) => (
                <Icon
                  key={label}
                  className={`h-[30px] w-[30px] rounded-full bg-[#9da1a5] text-[1.33333333em] leading-[30px] text-white ${socialColors[label]}`}
                />
              ))}
            </div>
            <p className="text-[15px]">{teamText}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurTeam;
