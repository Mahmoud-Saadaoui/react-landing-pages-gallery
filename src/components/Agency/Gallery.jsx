import { useState } from "react";
import { FaSearchPlus, FaTags } from "react-icons/fa";
import { gallery, galleryTitle, tags } from "./data";

const Group = ({ items, offset, onPick }) => (
  <div className="col-md row no-gutters flex flex-wrap md:max-w-full md:grow md:basis-0">
    {items.map(({ small }, i) => (
      <div className="col-sm w-full sm:grow sm:basis-0 sm:max-w-full" key={`${offset}-${i}`}>
        <a
          href={`#image-${offset + i + 1}`}
          className="group relative inline-block w-full cursor-pointer overflow-hidden"
          onClick={(e) => {
            e.preventDefault();
            onPick(offset + i);
          }}
        >
          <img
            src={small}
            alt="gallery img"
            className="block w-full transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 z-[9] flex items-center justify-center bg-[#16aeca]/0 transition-colors duration-500 group-hover:bg-[#0b3b46]/40">
            <span className="flex h-[56px] w-[56px] scale-50 items-center justify-center rounded-full bg-white text-[#16aeca] opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <FaSearchPlus className="text-[1.4em]" aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
    ))}
  </div>
);

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="title mb-[50px] text-center">
        <h2 className="text-[40px] leading-[60px]">أعمال الشركة</h2>
      </div>
      <div className="work-gallery">
        <div className="row no-gutters flex flex-wrap">
          <Group items={gallery.slice(0, 2)} offset={0} onPick={setActive} />
          <Group items={gallery.slice(2, 4)} offset={2} onPick={setActive} />
        </div>
        <div className="row no-gutters flex flex-wrap">
          <Group items={gallery.slice(4, 6)} offset={4} onPick={setActive} />
          <Group items={gallery.slice(6, 8)} offset={6} onPick={setActive} />
        </div>
      </div>
      {active !== null && (
        <div
          className="fixed right-0 top-0 z-30 h-screen w-[102%] overflow-hidden bg-black/90 p-[5%_10%] text-right"
          style={{ opacity: 1, marginTop: 0 }}
        >
          <div className="-mx-[15px] flex flex-wrap">
            <div className="w-full px-[15px] sm:flex-[0_0_50%] sm:max-w-[50%]">
              <img src={gallery[active].large} alt="gallery img" className="w-full max-[575px]:w-[50%]" />
            </div>
            <div className="gallery-text mt-10 w-full px-[15px] sm:flex-[0_0_50%] sm:max-w-[50%]">
              <h3 className="mb-[30px] text-[36px] leading-[52px] text-[#16aeca] max-[767px]:mb-[10px] max-[767px]:text-[18px] max-[767px]:leading-[36px]">
                {galleryTitle}
              </h3>
              <ul className="mb-5 list-none border-b border-[#efefef] pb-5 pr-0 max-[767px]:hidden">
                <li className="inline-block">
                  <FaTags aria-hidden="true" />
                </li>
                {tags.map((t) => (
                  <li className="inline-block" key={t}>
                    <a className="text-[#555] no-underline" href="">
                      {t},
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mb-[50px] text-[24px] leading-[33px] text-[#919191] max-[767px]:mb-[30px] max-[767px]:text-[14px] max-[767px]:leading-[28px]">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
                للنص أو شكل توضع الفقرات
              </p>
              <a
                href="#"
                className="inline-block rounded-[25px] bg-[#16aeca] px-[30px] text-[20px] leading-[50px] text-white no-underline transition-colors hover:bg-[#dae413] hover:text-[#555] max-[767px]:text-[14px] max-[767px]:leading-[40px]"
              >
                زيارة المشروع
              </a>
            </div>
            <a
              href="#gallery"
              className="absolute left-[10%] top-[4%] text-[30px] font-bold text-[#16aeca] no-underline"
              onClick={(e) => {
                e.preventDefault();
                setActive(null);
              }}
            >
              X
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;