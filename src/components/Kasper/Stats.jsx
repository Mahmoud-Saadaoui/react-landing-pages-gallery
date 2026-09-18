import statsBg from "./images/stats.webp";
import { stats } from "./data";

const Stats = () => (
  <div
    className="relative bg-cover py-[100px] text-center before:absolute before:inset-0 before:bg-[rgba(0,0,0,.7)]"
    style={{ backgroundImage: `url(${statsBg})` }}
  >
    <div className="relative mx-auto flex flex-wrap px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      {stats.map((item) => (
        <div
          className="bg-[rgba(15,116,143,.7)] p-[50px] text-white max-[767px]:basis-full md:basis-1/2 lg:basis-1/4"
          key={item.label}
        >
          <span className="mx-auto mb-[30px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black">
            <item.icon aria-hidden="true" className="text-[16px]" />
          </span>
          <div className="mb-[20px] text-[50px] font-bold">{item.number}</div>
          <p className="text-[14px]">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;