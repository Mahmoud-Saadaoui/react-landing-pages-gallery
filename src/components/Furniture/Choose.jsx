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

export const Choose = () => (
  <section className="section__container choose__container" id="choose">
    <img className="choose__bg" src={dotBg} alt="bg" />
    <div className="choose__content">
      <h2 className="section__header">Why Choose Us</h2>
      <p className="section__subheader">
        Experience Unmatched Creativity and Expertise in Interior Design.
        Discover Why We&apos;re the Right Choice for Your Dream Space
      </p>
      <div className="choose__grid">
        {chooseCards.map((card) => {
          const Icon = ICONS[card.icon];
          return (
            <div className="choose__card" key={card.title}>
              <span>
                <Icon />
              </span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
    <div className="choose__image">
      <img src={chooseImg} alt="choose" />
    </div>
  </section>
);