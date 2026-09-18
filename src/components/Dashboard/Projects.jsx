import { FaDollarSign } from "react-icons/fa6";
import { projectsData } from "./data";
import PageTitle from "./PageTitle";

const PROG = {
  "bg-red": "#f44336",
  "bg-green": "#22c55e",
  "bg-blue": "#0075ff",
};

const Projects = () => (
  <>
    <PageTitle>Projects</PageTitle>
    <div className="m-[20px] grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(500px,1fr))] max-md:mx-[10px] max-md:gap-[10px] max-md:[grid-template-columns:minmax(200px,1fr)]">
      {projectsData.map((p) => (
        <div key={p.name} className="relative rounded-[6px] bg-white p-[20px]">
          <span className="absolute right-[10px] top-[10px] text-[13px] text-[#888]">{p.date}</span>
          <h4 className="mt-0 mb-0 text-[1em] font-normal">{p.name}</h4>
          <p className="mt-[10px] mb-[10px] text-[14px] text-[#888]">{p.desc}</p>
          <div className="relative my-[15px] min-h-[80px]">
            {p.team.map((t, i) => (
              <a href="#" key={i} className="absolute bottom-0 z-[1] hover:z-[1000]" style={{ left: i * 25 }}>
                <img className="h-[40px] w-[40px] rounded-full border-2 border-white" src={t} alt="" />
              </a>
            ))}
          </div>
          <div className="flex justify-end border-t border-[#eee] pt-[15px] max-md:flex-col">
            {p.do.map((d) => (
              <span key={d} className="ml-[5px] w-fit rounded-[6px] bg-[#eee] px-[8px] py-[3px] text-[13px] max-md:mb-[15px] max-md:last:mb-0">
                {d}
              </span>
            ))}
          </div>
          <div className="mt-[15px] flex items-center justify-between border-t border-[#eee] pt-[15px] max-md:flex-col">
            <div className="relative h-[8px] w-[260px] rounded-[6px] bg-[#eee] max-md:mb-[15px]">
              <span className="absolute left-0 top-0 h-full rounded-[6px]" style={{ width: p.width, backgroundColor: PROG[p.progClass] }} />
            </div>
            <div className="text-[14px] text-[#888]">
              <FaDollarSign aria-hidden /> {p.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Projects;