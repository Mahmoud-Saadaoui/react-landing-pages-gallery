import { useRef } from "react";
import { team, teamText } from "./data";
import { useTilt } from "../../hooks/useTilt";

const TeamCard = ({ name, role, img }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div className="card-img-wrapper">
        <img src={img} alt={role} />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{teamText}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

const Team = () => (
  <section className="team">
    <div className="section-header">
      <h1 className="section-heading">Our Team</h1>
      <div className="underline" />
    </div>
    <div className="cards-wrapper">
      {team.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  </section>
);

export default Team;
