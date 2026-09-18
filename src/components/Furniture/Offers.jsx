import { offersTop, offersBottom, offerTitle, offerSubtitle } from "./data";

const sectionHeader = "mb-4 text-[2.5rem] font-bold text-[#18181b]";
const sectionSubheader = "text-[#71717a]";
const btnClass =
  "cursor-pointer rounded-full bg-[#2f2f2f] px-8 py-3 text-base text-white transition-colors duration-300 hover:bg-[#18181b]";
const imgClass = "w-full rounded-[10px] shadow-[5px_5px_20px_rgba(0,0,0,0.2)]";
const gridBase =
  "grid grid-cols-4 gap-8 max-[1200px]:grid-cols-3 max-[1200px]:gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:px-4";

export const Offers = () => (
  <section
    className="grid gap-y-8 py-20 [grid-template-columns:minmax(0,1fr)_minmax(0,1200px)_minmax(0,1fr)] max-[1200px]:gap-y-4"
    id="offer"
  >
    <div className={`${gridBase} [grid-column:1/3]`}>
      {offersTop.map((image, i) => (
        <img
          key={image}
          src={image}
          alt="offer"
          loading="lazy"
          className={`${imgClass} ${i === 0 ? "max-[1200px]:hidden" : ""} ${
            i === 1 ? "max-[900px]:hidden" : ""
          }`}
        />
      ))}
      <div className="pr-4">
        <h2 className={sectionHeader}>{offerTitle}</h2>
        <p className={`${sectionSubheader} mb-8`}>{offerSubtitle}</p>
        <button className={btnClass}>Explore Now</button>
      </div>
    </div>
    <div className={`${gridBase} [grid-column:2/4]`}>
      {offersBottom.map((image, i) => (
        <img
          key={image}
          src={image}
          alt="offer"
          loading="lazy"
          className={`${imgClass} ${i === 0 ? "max-[1200px]:hidden" : ""} ${
            i === 3 ? "max-[900px]:hidden" : ""
          }`}
        />
      ))}
    </div>
  </section>
);