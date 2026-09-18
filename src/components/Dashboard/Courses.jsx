import { FaRegUser, FaDollarSign } from "react-icons/fa6";
import { coursesData } from "./data";
import PageTitle from "./PageTitle";

const Courses = () => (
  <>
    <PageTitle>Courses</PageTitle>
    <div className="m-[20px] grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-md:mx-[10px] max-md:gap-[10px] max-md:[grid-template-columns:minmax(200px,1fr)]">
      {coursesData.map((c, i) => (
        <div key={`${c.title}-${i}`} className="relative overflow-hidden rounded-[6px] bg-white">
          <img className="w-full" src={c.cover} alt="" />
          <img className="absolute left-[20px] top-[20px] h-[64px] w-[64px] rounded-full border-2 border-white" src={c.instructor} alt="" />
          <div className="p-[20px]">
            <h4 className="mt-0 mb-0 text-[1em] font-bold">{c.title}</h4>
            <p className="mt-[15px] mb-0 text-[14px] leading-[1.6] text-[#888]">{c.desc}</p>
          </div>
          <div className="relative flex items-center justify-between border-t border-[#eee] p-[15px] text-[13px]">
            <span className="absolute left-1/2 top-[-13px] -translate-x-1/2 rounded-[6px] bg-[#0075ff] px-[10px] py-[4px] text-[13px] text-white">
              Course Info
            </span>
            <span className="text-[#888]">
              <FaRegUser aria-hidden /> {c.users}
            </span>
            <span className="text-[#888]">
              <FaDollarSign aria-hidden /> {c.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Courses;