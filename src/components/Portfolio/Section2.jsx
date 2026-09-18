import { FaRegLightbulb, FaCut, FaTachometerAlt, FaRocket } from "react-icons/fa";
import { skills, services } from "./data";

const icons = {
  lightbulb: FaRegLightbulb,
  cut: FaCut,
  tachometer: FaTachometerAlt,
  rocket: FaRocket,
};

const heading =
  "mb-[15rem] border-b-[0.3rem] border-solid border-b-[#333] text-[5rem] uppercase tracking-[0.5rem] text-[#333] [text-shadow:0.2rem_0.2rem_0.5rem_#555]";

const Section2 = ({ progressRef, animated }) => (
  <section
    className="flex w-full flex-col items-center bg-white pt-[15rem] pb-[10rem] max-[600px]:p-[10rem]"
    id="section-2"
  >
    <h1
      className={`${heading} max-[600px]:mb-[10rem] max-[450px]:text-center`}
    >
      About Me
    </h1>

    <div ref={progressRef} className="mb-[10rem]">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="relative my-[1.5rem] h-[3rem] w-[60rem] rounded-[0.3rem] bg-[#ccc] shadow-[0.2rem_0.2rem_1rem_#555] max-[800px]:w-[50rem] max-[600px]:w-[45rem] max-[450px]:w-[40rem]"
        >
          <p className="absolute left-[1rem] text-[1.5rem] text-white">
            {skill.name}
            <span className="mx-[0.5rem] text-[1.8rem] font-bold">
              {animated ? skill.percent : ""}
            </span>
            %
          </p>
          <div
            className="h-full rounded-[0.3rem] bg-[#e41c6f] transition-[width] delay-500 duration-500 ease-in-out"
            style={{ width: animated ? `${skill.percent}%` : 0 }}
          />
        </div>
      ))}
    </div>

    <div className="flex h-[30vh] w-full items-center justify-evenly max-[1200px]:h-auto max-[1200px]:flex-wrap">
      {services.map((service) => {
        const Icon = icons[service.icon];
        return (
          <div
            key={service.heading}
            className="text-center first:self-start last:self-start max-[1200px]:my-[3rem] max-[1200px]:mx-[2rem]"
          >
            <i className="mb-[2rem] block text-[10rem] text-[#888] [text-shadow:0.1rem_0.1rem_0.5rem_#555]">
              <Icon />
            </i>
            <h2 className="-skew-x-[10deg] w-[25rem] bg-[#777] text-[2rem] text-white tracking-[0.3rem] shadow-[0.2rem_0.2rem_0.5rem_#555]">
              {service.heading}
            </h2>
          </div>
        );
      })}
    </div>
  </section>
);

export default Section2;