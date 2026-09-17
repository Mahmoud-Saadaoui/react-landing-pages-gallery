import { testimonials, progs } from "./data";

const Skills = () => (
  <div className="our-skills">
    <div className="container">
      <div className="testimonials">
        <h3>Testimonials</h3>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
        {testimonials.map((item, index) => (
          <div className="content" key={index}>
            <img src={item.image} alt="" loading="lazy" />
            <div className="text">
              {item.text}
              <p>{item.name}</p>
            </div>
          </div>
        ))}
        <ul className="bullets">
          <li></li>
          <li className="active"></li>
          <li></li>
        </ul>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
        {progs.map((prog) => (
          <div className="prog-holder" key={prog.name}>
            <h4>{prog.name}</h4>
            <div className="prog">
              <span
                style={{ width: `${prog.value}%` }}
                data-progress={`${prog.value}%`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;