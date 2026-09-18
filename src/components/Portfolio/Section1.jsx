import { person } from "./data";
import bg from "./images/bg.jpg";

const Section1 = () => (
  <section
    className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
    id="section-1"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url(" +
        bg +
        ")",
    }}
  >
    <h1 className="-skew-x-[10deg] border-b-[0.3rem] border-solid border-b-white bg-[#e41c6f] px-[3rem] mb-[5rem] text-[6rem] font-bold uppercase tracking-[1rem] text-white [text-shadow:0.2rem_0.2rem_1rem_#555] max-[800px]:text-[4rem] max-[600px]:text-[3rem] max-[450px]:text-[2.5rem]">
      Web Developer
    </h1>
    <img
      src={person.image}
      alt={person.name}
      className="h-[25rem] w-[25rem] rounded-full border-[0.7rem] border-dotted border-[#e41c6f] bg-white/70 object-cover p-[0.5rem] opacity-90"
    />
    <h3 className="-skew-x-[10deg] my-[5rem] bg-[#e41c6f] px-[3rem] py-[0.5rem] text-[2rem] text-white tracking-[0.3rem]">
      {person.name}
    </h3>
    <a
      href="#section-3"
      className="border-[0.3rem] border-solid border-[#333] bg-white px-[1rem] py-[0.5rem] text-[1.7rem] font-bold uppercase tracking-[0.3rem] text-[#333]"
    >
      Projects
    </a>
  </section>
);

export default Section1;