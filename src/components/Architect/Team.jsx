import { useRef } from "react";
import { team, teamText } from "./data";
import { useTilt } from "../../hooks/useTilt";

const TeamCard = ({ name, role, img }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div className="card group relative h-[45rem] w-[37rem] rounded-[0.5rem] shadow-[0_1rem_4rem_rgba(0,0,0,0.4)] max-[1500px]:w-[34rem] max-[1300px]:mb-[8rem]" ref={cardRef}>
      <div className="card-img-wrapper h-full w-full overflow-hidden rounded-[0.5rem] bg-[#262626]">
        <img
          src={img}
          alt={role}
          className="h-full w-full rounded-[0.5rem] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-50"
        />
      </div>
      <div className="card-info absolute bottom-0 p-[2rem] opacity-0 transition-all duration-300 [text-shadow:0_0.2rem_0.5rem_rgba(0,0,0,0.4)] invisible group-hover:bottom-[2rem] group-hover:opacity-100 group-hover:visible">
        <h2 className="text-[2.5rem] font-light leading-[2.5rem] text-[#eee]">{name}</h2>
        <h3 className="mb-[1rem] text-[2rem] font-medium text-[#a52a2a]">{role}</h3>
        <p className="mb-[2rem] w-[80%] text-[1.4rem] font-light leading-[1.6rem] text-[#eee]">
          {teamText}
        </p>
        <button className="h-[3rem] w-[10rem] rounded-[0.3rem] border-none bg-[#c29525] text-[1.4rem] leading-[1.5rem] text-[#eee] shadow-[0_0.1rem_0.8rem_rgba(0,0,0,0.4)]">
          Read More
        </button>
      </div>
    </div>
  );
};

const Team = () => (
  <section className="team flex flex-col items-center justify-center px-[5rem] pb-[20rem] max-[1300px]:pb-[5rem]">
    <div className="section-header flex flex-col items-center pb-[10rem] pt-[7rem]">
      <h1 className="section-heading mb-[6rem] text-[5rem] font-light text-[#4b4b4b]">
        Our Team
      </h1>
      <div className="underline h-[0.3rem] w-[12rem] bg-[#c29525]" />
    </div>
    <div className="cards-wrapper mt-[8rem] flex w-full justify-evenly max-[1300px]:mt-[4rem] max-[1300px]:flex-col max-[1300px]:items-center">
      {team.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  </section>
);

export default Team;