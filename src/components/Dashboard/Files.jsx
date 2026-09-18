import { FaAnglesUp, FaDownload } from "react-icons/fa6";
import { filesData } from "./data";
import PageTitle from "./PageTitle";

const STATS_COLOR = {
  blue: { bg: "rgb(0 117 255 / 20%)", text: "#0075ff" },
  green: { bg: "rgb(34 197 94 / 20%)", text: "#22c55e" },
  red: { bg: "rgb(244 67 54 / 20%)", text: "#f44336" },
  orange: { bg: "rgb(245 158 11 / 20%)", text: "#f59e0b" },
};

const Files = () => (
  <>
    <PageTitle>Files</PageTitle>
    <div className="m-[20px] flex flex-row-reverse items-start gap-[20px] max-md:mx-[10px] max-md:flex-col">
      <div className="min-w-[260px] rounded-[10px] bg-white p-[20px] max-md:w-full">
        <h2 className="mt-0 mb-[15px] text-[1.5em] font-bold max-md:text-center">Files Statistics</h2>
        {filesData.stats.map((s) => {
          const c = STATS_COLOR[s.color];
          return (
            <div key={s.name} className="mb-[15px] flex items-center rounded-[6px] border border-[#eee] p-[10px] text-[13px]">
              <i className="mr-[10px] flex h-[40px] w-[40px] shrink-0 items-center justify-center" style={{ backgroundColor: c.bg }}>
                <s.icon aria-hidden className="text-[18px]" style={{ color: c.text }} />
              </i>
              <div className="flex-grow">
                <span>{s.name}</span>
                <span className="mt-[5px] block text-[#888]">{s.count}</span>
              </div>
              <div className="ml-auto text-[#888]">{s.size}</div>
            </div>
          );
        })}
        <a
          href="#"
          className="group mx-auto mt-[15px] block w-fit rounded-[6px] bg-[#0075ff] px-[15px] py-[10px] text-[13px] text-white transition-colors duration-300 hover:bg-[#0d69d5]"
        >
          <FaAnglesUp aria-hidden className="mr-[10px] inline group-hover:animate-go-up" />
          Upload
        </a>
      </div>
      <div className="grid flex-1 gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] max-md:w-full">
        {filesData.files.map(([img, name, author, date, size], i) => (
          <div key={`${name}-${i}`} className="relative rounded-[10px] bg-white p-[10px]">
            <FaDownload aria-hidden className="absolute right-[10px] top-[10px] text-[#888]" />
            <div className="text-center">
              <img className="mx-auto mt-[15px] mb-[15px] h-[64px] w-[64px] transition-transform duration-300 hover:rotate-5" src={img} alt="" />
            </div>
            <div className="mb-[10px] text-center text-[14px]">{name}</div>
            <p className="mt-0 mb-0 text-[13px] text-[#888]">{author}</p>
            <div className="mt-[10px] flex items-center justify-between border-t border-[#eee] pt-[10px] text-[13px] text-[#888]">
              <span>{date}</span>
              <span>{size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Files;