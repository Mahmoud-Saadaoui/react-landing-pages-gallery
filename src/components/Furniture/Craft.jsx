import { RiAddLine } from "react-icons/ri";
import { craftItems } from "./data";

const sectionHeader = "mb-4 text-[2.5rem] font-bold text-[#18181b]";
const sectionSubheader = "text-[#71717a]";
const btnClass =
  "cursor-pointer rounded-full bg-[#2f2f2f] px-8 py-3 text-base text-white transition-colors duration-300 hover:bg-[#18181b]";

export const Craft = () => (
  <section
    className="mx-auto grid w-full max-w-[1200px] grid-cols-4 items-center gap-8 px-4 py-20 max-[1200px]:gap-4 max-[900px]:grid-cols-2"
    id="craft"
  >
    <div>
      <h2 className={sectionHeader}>Crafted with excellent material</h2>
      <p className={`${sectionSubheader} mb-8`}>Elevate Your Space with Quality and Style</p>
      <button className={btnClass}>Explore</button>
    </div>
    {craftItems.map((item) => (
      <div className="group relative isolate" key={item.name}>
        <span className="absolute bottom-0 left-0 -z-10 h-[50%] w-full rounded-[15px] bg-[#ebf1f1] transition-all duration-300 group-hover:h-[80%]" />
        <div className="pb-8 text-center transition-transform duration-300 group-hover:-translate-y-8">
          <img
            src={item.image}
            alt="craft"
            loading="lazy"
            className="mx-auto mb-4 w-full max-w-[250px]"
          />
          <p className="text-base font-medium text-[#18181b]">{item.name}</p>
          <h4 className="text-[1.2rem] font-semibold text-[#18181b]">{item.price}</h4>
        </div>
        <a
          href="#"
          className="absolute bottom-[10px] left-1/2 z-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#2f2f2f] px-[7px] text-[1.75rem] text-white opacity-0 shadow-[5px_5px_20px_rgba(0,0,0,0.2)] transition-opacity duration-300 group-hover:opacity-100"
        >
          <RiAddLine />
        </a>
      </div>
    ))}
  </section>
);