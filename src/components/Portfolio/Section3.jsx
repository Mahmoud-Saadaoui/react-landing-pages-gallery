import { projects } from "./data";

const heading =
  "mb-[15rem] border-b-[0.3rem] border-solid border-b-[#333] text-[5rem] uppercase tracking-[0.5rem] text-[#333] [text-shadow:0.2rem_0.2rem_0.5rem_#555]";

const Section3 = () => (
  <section
    className="flex w-full flex-col items-center bg-[#eef] py-[10rem]"
    id="section-3"
  >
    <h1 className={heading}>My Projects</h1>
    <div className="flex w-[80%] flex-wrap items-center justify-center">
      {projects.map((project) => (
        <div
          key={project.name}
          className="group relative m-[1rem] flex flex-col items-center justify-center overflow-hidden bg-white shadow-[0.3rem_0.3rem_0.5rem_#777] transition-shadow duration-500 hover:shadow-[1rem_1rem_1rem_#777]"
        >
          <div className="absolute top-[-10rem] z-10 text-center tracking-[0.1rem] transition-[top] duration-300 group-hover:top-[5rem] group-hover:delay-300">
            <h2 className="text-[3rem] font-bold capitalize text-[#333]">
              {project.name}
            </h2>
            <h4 className="text-[1.8rem] text-[#e41c6f]">
              {project.technologies}
            </h4>
          </div>
          <img
            src={project.image}
            className="w-[40rem] transition-opacity duration-300 group-hover:opacity-20 max-[600px]:w-full"
            alt=""
            loading="lazy"
          />
          <a
            href={project.link}
            className="absolute bottom-[-5rem] border-[0.3rem] border-solid border-[#e41c6f] bg-white px-[1rem] text-[2rem] font-medium tracking-[0.1rem] text-[#333] transition-[bottom] duration-300 group-hover:bottom-[5rem] group-hover:delay-300"
            target="_blank"
            rel="noreferrer"
          >
            Go to Video
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Section3;