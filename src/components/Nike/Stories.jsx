import { RiArrowLeftSLine, RiArrowRightSLine, RiAddLine } from "react-icons/ri";
import { storyIntro, stories, btnNoArrow, arrowClass } from "./data";

export const Stories = () => (
  <section className="mx-auto max-w-[1200px] px-[16px] pt-[80px] pb-0 mb-[240px] grid gap-x-[32px] gap-y-[128px] min-[481px]:grid-cols-2 min-[769px]:grid-cols-3 min-[1025px]:grid-cols-4">
    <div>
      <h2 className="mb-[16px] text-[40px] font-bold text-[#333333]">
        Nike
        <br />
        <span className="text-[48px] text-[#fc6601]">Stories</span>
      </h2>
      <p className="mb-[32px] text-[#767368]">{storyIntro}</p>
      <div className="flex items-center gap-[16px]">
        <span className={arrowClass}>
          <RiArrowLeftSLine />
        </span>
        <span className={arrowClass}>
          <RiArrowRightSLine />
        </span>
      </div>
    </div>
    {stories.map((story, index) => (
      <div
        className={`relative isolate ${
          index === stories.length - 1 ? "min-[769px]:hidden min-[1025px]:block" : ""
        }`}
        key={story.text.slice(0, 24)}
      >
        <img src={story.image} alt="story" loading="lazy" className="w-full rounded-[5px]" />
        <div className="absolute top-1/2 left-[16px] w-full p-[16px] rounded-[5px] bg-white shadow-[5px_5px_20px_rgba(0,0,0,0.2)] z-[1] [transform:translateY(calc(-50%_+_192px))]">
          <p className="mb-[16px] text-[#767368]">{story.text}</p>
          <button className={btnNoArrow}>
            <span>
              <RiAddLine />
            </span>{" "}
            Explore More
          </button>
        </div>
      </div>
    ))}
  </section>
);