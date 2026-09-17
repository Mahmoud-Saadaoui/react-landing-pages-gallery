import { aboutImg } from "./data";

const AboutUs = () => (
  <div className="container">
    <div className="about-us">
      <div className="info-box">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsum, tenetur dolores esse magni ratione distinctio! Quod iusto neque
          fuga, maxime quos nostrum quibusdam dicta deserunt blanditiis non
          voluptate id?
        </p>
      </div>
      <div className="image-box">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  </div>
);

export default AboutUs;