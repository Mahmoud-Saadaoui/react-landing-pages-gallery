import { images } from "./images";
import { profileData } from "./data";

const Profile = () => {
  const { name, level, levelWidth, rating, ratingText, infoBoxes, skills, activities } = profileData;

  return (
    <>
      <h1 className="p-relative">Profile</h1>
      <div className="profile-page m-20">
        <div className="overview bg-white rad-10 d-flex align-center">
          <div className="avatar-box txt-c p-20">
            <img className="rad-half mb-10" src={images.avatar} alt="" />
            <h3 className="m-0">{name}</h3>
            <p className="c-grey mt-10">{level}</p>
            <div className="level rad-6 bg-eee p-relative">
              <span style={{ width: levelWidth }} />
            </div>
            <div className="rating mt-10 mb-10">
              {rating.map((r) => (
                <i className="fa-solid fa-star c-orange fs-13" key={r} />
              ))}
            </div>
            <p className="c-grey m-0 fs-13">{ratingText}</p>
          </div>
          <div className="info-box w-full txt-c-mobile">
            {infoBoxes.map((box) => (
              <div className="box p-20 d-flex align-center" key={box.title}>
                <h4 className="c-grey fs-15 m-0 w-full">{box.title}</h4>
                {box.rows.map(([label, value]) => (
                  <div className="fs-14" key={label}>
                    <span className="c-grey">{label}</span> {value}
                  </div>
                ))}
                <div className="fs-14">
                  <label>
                    <input className="toggle-checkbox" type="checkbox" defaultChecked={box.toggle.checked} />
                    <div className="toggle-switch" />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other-data d-flex gap-20">
          <div className="skills-card p-20 bg-white rad-10 mt-20">
            <h2 className="mt-0 mb-10">My Skills</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
            <ul className="m-0 txt-c-mobile">
              {skills.map((row) => (
                <li key={row.join()}>
                  {row.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <div className="activities p-20 bg-white rad-10 mt-20">
            <h2 className="mt-0 mb-10">Latest Activities</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Latest Activities Done By The User</p>
            {activities.map((a) => (
              <div className="activity d-flex align-center txt-c-mobile" key={a.title}>
                <img src={a.img} alt="" />
                <div className="info">
                  <span className="d-block mb-10">{a.title}</span>
                  <span className="c-grey">{a.desc}</span>
                </div>
                <div className="date">
                  <span className="d-block mb-10">{a.time}</span>
                  <span className="c-grey">{a.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;