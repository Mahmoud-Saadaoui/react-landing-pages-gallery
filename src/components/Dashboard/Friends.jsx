import {
  FaPhone,
  FaRegEnvelope,
  FaRegFaceSmile,
  FaCodeCommit,
  FaRegNewspaper,
} from "react-icons/fa6";
import { friendsData } from "./data";
import PageTitle from "./PageTitle";

const Friends = () => (
  <>
    <PageTitle>Friends</PageTitle>
    <div className="m-[20px] grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-md:mx-[10px] max-md:gap-[10px] max-md:[grid-template-columns:minmax(200px,1fr)]">
      {friendsData.map((f) => (
        <div key={f.name} className="relative rounded-[6px] bg-white p-[20px]">
          <div className="absolute left-[10px] top-[10px] flex gap-[4px]">
            <i className="flex h-[33px] w-[33px] cursor-pointer items-center justify-center rounded-full bg-[#eee] text-[13px] text-[#666] transition-colors duration-300 hover:bg-[#0075ff] hover:text-white">
              <FaPhone aria-hidden />
            </i>
            <i className="flex h-[33px] w-[33px] cursor-pointer items-center justify-center rounded-full bg-[#eee] text-[13px] text-[#666] transition-colors duration-300 hover:bg-[#0075ff] hover:text-white">
              <FaRegEnvelope aria-hidden />
            </i>
          </div>
          <div className="text-center">
            <img className="mx-auto mt-[10px] mb-[10px] block h-[100px] w-[100px] rounded-full" src={f.img} alt="" />
            <h4 className="mt-0 mb-0 text-[1em] font-bold">{f.name}</h4>
            <p className="mt-[5px] mb-0 text-[13px] text-[#888]">{f.job}</p>
          </div>
          <div className="relative my-[15px] border-y border-[#eee] py-[15px] text-[14px]">
            <div className="mb-[10px]">
              <FaRegFaceSmile aria-hidden /> <span>{f.friends} Friend</span>
            </div>
            <div className="mb-[10px]">
              <FaCodeCommit aria-hidden /> <span>{f.projects} Projects</span>
            </div>
            <div>
              <FaRegNewspaper aria-hidden /> <span>{f.articles} Articles</span>
            </div>
            {f.vip && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[40px] font-bold text-[#f59e0b] opacity-20">
                VIP
              </span>
            )}
          </div>
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-[#888]">Joined {f.joined}</span>
            <div>
              <a className="rounded-[6px] bg-[#0075ff] px-[10px] py-[4px] text-white" href="#">
                Profile
              </a>
              <a className="rounded-[6px] bg-[#f44336] px-[10px] py-[4px] text-white" href="#">
                Remove
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Friends;