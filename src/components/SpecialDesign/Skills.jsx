import { skills } from "./data";

const Skills = ({ shown }) => (
  <div className="skills">
    <div className="container">
      <h2>Our Skills</h2>
      {skills.map(({ name, progress }) => (
        <div className="skill-box" key={name}>
          <div className="skill-name">{name}</div>
          <div className="skill-progress">
            <span style={{ width: shown ? progress : "0" }} data-progress={progress} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;