import {
  RiTruckLine,
  RiShoppingBag3Line,
  RiCustomerService2Line,
  RiLoopRightLine,
} from "react-icons/ri";
import { dotBg, chooseImg, chooseCards } from "./data";

const ICONS = {
  truck: RiTruckLine,
  bag: RiShoppingBag3Line,
  support: RiCustomerService2Line,
  returns: RiLoopRightLine,
};

const sectionHeader = "mb-4 text-[2.5rem] font-bold text-[#18181b]";
const sectionSubheader = "text-[#71717a]";

export const Choose = () => (
  <section
    className="relative mx-auto grid w-full max-w-[1200px] grid-cols-2 items-center gap-8 px-4 py-20 max-[900px]:grid-cols-1"
    id="choose"
  >
    <img
      className="absolute top-4 left-1/2 -z-10 w-full max-w-[300px] -translate-x-12 opacity-40 max-[900px]:left-0 max-[900px]:translate-x-0"
      src={dotBg}
      alt="bg"
    />
    <div>
      <h2 className={sectionHeader}>Why Choose Us</h2>
      <p className={sectionSubheader}>
        Experience Unmatched Creativity and Expertise in Interior Design.
        Discover Why We&apos;re the Right Choice for Your Dream Space
      </p>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8">
        {chooseCards.map((card) => {
          const Icon = ICONS[card.icon];
          return (
            <div key={card.title}>
              <span className="mb-2 inline-block rounded-full bg-[#cad8d8] p-[5px_10px] text-[1.25rem]">
                <Icon />
              </span>
              <h4 className="mb-4 text-base font-semibold text-[#18181b]">{card.title}</h4>
              <p className="text-[#71717a]">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
    <div className="max-[900px]:[grid-area:1/1/2/2]">
      <img
        className="mx-auto w-full max-w-[500px] rounded-[10px] shadow-[5px_5px_20px_rgba(0,0,0,0.2)]"
        src={chooseImg}
        alt="choose"
      />
    </div>
  </section>
);