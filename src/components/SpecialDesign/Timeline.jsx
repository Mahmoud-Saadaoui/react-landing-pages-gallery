import { timeline } from "./data";

const Timeline = () => (
  <div className="timeline bg-[#EEE] py-[50px]">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="relative overflow-hidden">
        <span className="absolute left-1/2 top-0 -ml-[1px] h-full w-[2px] bg-[var(--main-color)]" />
        {timeline.map(({ year, entries }) => (
          <div key={year}>
            <div className="relative z-[2] mx-auto my-[20px] w-[50px] rounded-[4px] bg-[var(--main-color)] px-[5px] py-[2px] text-center font-bold text-white">
              {year}
            </div>
            {entries.map(({ side, heading, text }, i) => (
              <div key={`${year}-${i}`}>
                <div
                  className={`relative mb-[40px] w-[calc(50%-25px)] max-[767px]:mb-[20px] max-[767px]:w-full ${
                    side === "left" ? "float-left" : "float-right"
                  }`}
                >
                  <span
                    className={`absolute top-[20px] h-[14px] w-[14px] rounded-full border-[3px] border-[var(--main-color)] bg-white max-[767px]:hidden ${
                      side === "left" ? "right-[-35px]" : "left-[-35px]"
                    }`}
                  />
                  <div className="relative bg-white p-[20px]">
                    <span
                      className={`absolute top-[20px] border-[10px] border-transparent max-[767px]:hidden ${
                        side === "left"
                          ? "right-[-20px] border-l-white"
                          : "left-[-20px] border-r-white"
                      }`}
                    />
                    <h3 className="mb-[10px] font-bold text-[var(--main-color)]">
                      {heading}
                    </h3>
                    <p className="leading-[1.6] text-[#666]">{text}</p>
                  </div>
                </div>
                <div className="clear-both" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;