import { useState } from "react";
import { FaThLarge } from "react-icons/fa";
import { galleryFilters } from "./data";
import img1 from "./images/gallery/1.jpg";
import img2 from "./images/gallery/2.jpg";
import img3 from "./images/gallery/3.jpg";
import img4 from "./images/gallery/4.jpg";
import img5 from "./images/gallery/5.jpg";
import img6 from "./images/gallery/6.jpg";

const items = [
  { type: "item-type-1", src: img1 },
  { type: "item-type-3", src: img2 },
  { type: "item-type-2", src: img3 },
  { type: "item-type-2", src: img4 },
  { type: "item-type-1", src: img5 },
  { type: "item-type-3", src: img6 },
];

export default function Gallery() {
  const [active, setActive] = useState("item-type-all");

  return (
    <section className="gallery pb-[90px] pt-[75px]" id="gallery">
      <div className="title mb-[35px] text-center">
        <h2 className="text-[30px] leading-[50px] text-[#0575e6]">
          <span className="block">
            <FaThLarge aria-hidden="true" />
          </span>
          الأعمال السابقة
        </h2>
      </div>
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="work-gallery text-center">
          {galleryFilters.map((f) => (
            <input
              key={f.id}
              id={f.id}
              name="radio-set-1"
              type="radio"
              className="hidden"
              checked={active === f.id}
              onChange={() => setActive(f.id)}
            />
          ))}
          {galleryFilters.map((f) => (
            <label
              key={f.id}
              htmlFor={f.id}
              className={`mb-[40px] inline-block cursor-pointer border-2 bg-white px-[30px] py-[10px] text-[18px] leading-[35px] transition-all duration-500 mx-[7px] mt-0 ${
                active === f.id
                  ? "border-[#0575e6] bg-[#0575e6] text-white"
                  : "border-[#e4eeee] text-[#8f9899] hover:border-[#0575e6] hover:bg-[#0575e6] hover:text-white"
              }`}
            >
              {f.label}
            </label>
          ))}

          <div className="-mx-[15px] flex flex-wrap items-center justify-center">
            {items.map((it, i) => {
              const all = active === "item-type-all";
              const shown = !all && active === it.type;
              return (
                <div
                  key={i}
                  className={`item w-full px-[15px] transition-all duration-[600ms] sm:max-w-[50%] sm:flex-[0_0_50%] md:max-w-[33.333333%] md:flex-[0_0_33.333333%] ${
                    it.type
                  } ${all ? "opacity-100 scale-100" : shown ? "opacity-100 scale-[1.08]" : "opacity-50 scale-[0.8]"}`}
                >
                  <img src={it.src} alt="gallery img" className="mb-[25px] block w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}