import { services, serviceText } from "./data";
import house from "./images/house.png";

const PLACEMENTS = [
  "[grid-column:4/7] [grid-row:1/3] max-[1400px]:[grid-column:3/7]",
  "[grid-column:3/6] [grid-row:3/5] max-[1400px]:[grid-column:2/6]",
  "[grid-column:4/7] [grid-row:5/-1] max-[1400px]:[grid-column:3/7]",
  "[grid-column:11/14] [grid-row:1/3] max-[1400px]:[grid-column:11/15]",
  "[grid-column:12/15] [grid-row:3/5] max-[1400px]:[grid-column:12/16]",
  "[grid-column:11/14] [grid-row:5/-1] max-[1400px]:[grid-column:11/15]",
];

const AboutUs = () => (
  <section className="about-us w-full bg-[#f5f5f5] pb-[15rem]">
    <div className="section-header flex flex-col items-center pb-[10rem] pt-[7rem]">
      <h1 className="section-heading mb-[6rem] text-[5rem] font-light text-[#4b4b4b]">
        About Us
      </h1>
      <div className="underline h-[0.3rem] w-[12rem] bg-[#c29525]" />
    </div>
    <div className="services grid h-full w-full [grid-row-gap:4rem] [grid-template-columns:repeat(16,1fr)] [grid-template-rows:repeat(6,6rem)] max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center">
      {services.map(({ title, Icon }, index) => (
        <div
          className={`service mb-[2rem] w-full ${PLACEMENTS[index]} max-[1000px]:mb-[6rem] max-[1000px]:w-[40rem] max-[500px]:w-[30rem]`}
          key={title}
        >
          <div className="service-header mb-[1rem] flex items-center">
            <Icon className="mr-[2rem] text-[4rem] text-[#4b4b4b]" />
            <h3 className="mb-[2rem] text-[2.6rem] font-normal leading-[2.6rem]">
              {title}
            </h3>
          </div>
          <p className="service-text text-justify text-[1.6rem]">{serviceText}</p>
        </div>
      ))}
      <div className="about-us-img-wrapper w-full [grid-column:7/11] [grid-row:2/6] max-[1500px]:[grid-row:3/-1] max-[1000px]:w-[40rem]">
        <img src={house} alt="" className="w-full object-cover opacity-80" />
      </div>
    </div>
  </section>
);

export default AboutUs;