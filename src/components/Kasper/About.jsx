import MainHeading from "./MainHeading";
import about from "./images/about.png";

const About = () => (
  <div className="overflow-hidden pt-[100px] text-center">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <MainHeading title="About Us" />
      <img
        src={about}
        alt=""
        loading="lazy"
        className="relative -bottom-[120px] -mt-[120px] max-w-full max-[767px]:-bottom-[60px] max-[767px]:-mt-[60px]"
      />
    </div>
  </div>
);

export default About;