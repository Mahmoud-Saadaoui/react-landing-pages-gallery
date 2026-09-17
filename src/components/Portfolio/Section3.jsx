import { projects } from "./data";

const Section3 = () => (
  <section className="section-3" id="section-3">
    <h1 className="section-heading section-3-heading">My Projects</h1>
    <div className="projects-wrapper center">
      {projects.map((project) => (
        <div key={project.name} className="project">
          <div className="project-text">
            <h2 className="project-name">{project.name}</h2>
            <h4 className="project-technologies">{project.technologies}</h4>
          </div>
          <img src={project.image} className="project-img" alt="" loading="lazy" />
          <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
            Go to Video
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Section3;