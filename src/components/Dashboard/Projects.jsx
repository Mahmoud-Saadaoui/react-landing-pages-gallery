import { projectsData } from "./data";

const Projects = () => (
  <>
    <h1 className="p-relative">Projects</h1>
    <div className="projects-page d-grid m-20 gap-20">
      {projectsData.map((p) => (
        <div className="project bg-white p-20 rad-6 p-relative" key={p.name}>
          <span className="date fs-13 c-grey">{p.date}</span>
          <h4 className="m-0">{p.name}</h4>
          <p className="c-grey mt-10 mb-10 fs-14">{p.desc}</p>
          <div className="team">
            {p.team.map((t, i) => (
              <a href="#" key={i}>
                <img src={t} alt="" />
              </a>
            ))}
          </div>
          <div className="do d-flex">
            {p.do.map((d) => (
              <span className="fs-13 rad-6 bg-eee" key={d}>
                {d}
              </span>
            ))}
          </div>
          <div className="info between-flex">
            <div className="prog bg-eee">
              <span className={p.progClass} style={{ width: p.width }} />
            </div>
            <div className="fs-14 c-grey">
              <i className="fa-solid fa-dollar-sign" /> {p.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Projects;