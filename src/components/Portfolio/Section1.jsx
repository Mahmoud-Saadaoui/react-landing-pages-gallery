import { person } from "./data";

const Section1 = () => (
  <section className="section-1 center" id="section-1">
    <h1 className="section-1-heading">Web Developer</h1>
    <img src={person.image} alt={person.name} className="person-img" />
    <h3 className="person-name">{person.name}</h3>
    <a href="#section-3" className="section-1-btn">
      Projects
    </a>
  </section>
);

export default Section1;