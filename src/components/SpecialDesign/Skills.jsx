import { skills } from "./data";

const Skills = ({ shown }) => (
  <div className="skills bg-[#EEE] py-[50px]">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="mb-[50px] text-center text-[30px] font-bold text-[var(--main-color)]">
        Our Skills
      </h2>
      {skills.map(({ name, progress }) => (
        <div className="mb-[15px] flex bg-white p-[15px] max-[767px]:block" key={name}>
          <div className="w-[140px] text-center font-bold leading-[30px] max-[767px]:mb-[15px] max-[767px]:w-full">
            {name}
          </div>
          <div className="relative h-[30px] w-full overflow-hidden rounded-[6px] bg-[#f6f6f6]">
            <span
              className="absolute left-0 top-0 h-full bg-[var(--main-color)] transition-all duration-500"
              style={{ width: shown ? progress : "0" }}
              data-progress={progress}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;