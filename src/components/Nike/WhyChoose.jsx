import { RiAddLine } from "react-icons/ri";
import { whyImg, whyParagraphs, btnArrow } from "./data";

export const WhyChoose = () => (
  <section className="mx-auto max-w-[1200px] px-[16px] py-[80px] grid gap-[32px] min-[769px]:grid-cols-2 min-[769px]:items-center">
    <div>
      <img
        src={whyImg}
        alt="why image"
        loading="lazy"
        className="w-full max-w-[450px] mx-auto"
      />
    </div>
    <div>
      <h2 className="mb-[16px] text-[40px] font-bold text-[#333333]">
        Why Choose
        <br />
        <span className="text-[48px] text-[#fc6601]">Nike</span>
      </h2>
      {whyParagraphs.map((paragraph) => (
        <p className="mb-[32px] text-[#767368]" key={paragraph.slice(0, 24)}>
          {paragraph}
        </p>
      ))}
      <button className={btnArrow}>
        <span>
          <RiAddLine />
        </span>{" "}
        Explore More
      </button>
    </div>
  </section>
);