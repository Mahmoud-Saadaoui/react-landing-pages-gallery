const DOTS = [
  "top-[6.3rem] left-[6.3rem]",
  "top-[6.8rem] left-[5.6rem]",
  "top-[7.1rem] left-[4.8rem]",
  "top-[7.2rem] left-[4rem]",
  "top-[7.1rem] left-[3.2rem]",
  "top-[6.8rem] left-[2.4rem]",
  "top-[6.3rem] left-[1.7rem]",
  "top-[5.6rem] left-[1.2rem]",
];

const Spinner = () => (
  <div className="spinner-container absolute left-0 top-0 z-[300] flex h-screen w-full items-center justify-center bg-[#262626] transition-all duration-1000 [.group\/display.display_&]:invisible [.group\/display.display_&]:opacity-0">
    <div className="circles relative h-[8rem] w-[8rem] invisible opacity-0 [animation:displayCircles_4s]">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="relative [animation:circles_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] [transform-origin:4rem_4rem]"
          style={{ animationDelay: `${-0.036 * (i + 1)}s` }}
        >
          <span
            className={`absolute -ml-[0.4rem] -mt-[0.4rem] h-[0.7rem] w-[0.7rem] rounded-full bg-[#c29525] ${DOTS[i]}`}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Spinner;