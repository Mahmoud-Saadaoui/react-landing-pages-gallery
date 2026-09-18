import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { dotBg, modern1, modern2, modern3, modernParagraph, modernPoints } from "./data";

const sectionHeader = "mb-4 text-[2.5rem] font-bold text-[#18181b]";
const sectionSubheader = "text-[#71717a]";
const btnClass =
  "cursor-pointer rounded-full bg-[#2f2f2f] px-8 py-3 text-base text-white transition-colors duration-300 hover:bg-[#18181b]";
const imgClass = "absolute w-full rounded-[10px] shadow-[5px_5px_20px_rgba(0,0,0,0.2)]";

export const Modern = () => (
  <section
    className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-8 px-4 py-20 max-[900px]:grid-cols-1 max-[900px]:gap-16"
    id="modern"
  >
    <div className="relative mx-auto h-full min-h-[470px] w-full max-w-[600px]">
      <img
        src={dotBg}
        alt="bg"
        loading="lazy"
        className="absolute -top-16 right-0 w-full max-w-[200px] opacity-50"
      />
      <img src={modern1} alt="modern" loading="lazy" className={`${imgClass} max-w-[375px]`} />
      <img src={modern2} alt="modern" loading="lazy" className={`${imgClass} right-0 max-w-[175px]`} />
      <img src={modern3} alt="modern" loading="lazy" className={`${imgClass} -bottom-8 right-0 max-w-[250px]`} />
    </div>
    <div>
      <h2 className={sectionHeader}>We help you design modern interior design</h2>
      <p className={sectionSubheader}>{modernParagraph}</p>
      <div className="my-8 grid grid-cols-2 gap-8">
        {modernPoints.map((point) => (
          <div className="flex gap-4" key={point.slice(0, 24)}>
            <span className="text-[0.8rem] font-extrabold text-[#18181b]">
              <RiCheckboxBlankCircleLine />
            </span>
            <p className="text-[#71717a]">{point}</p>
          </div>
        ))}
      </div>
      <button className={btnClass}>Explore</button>
    </div>
  </section>
);