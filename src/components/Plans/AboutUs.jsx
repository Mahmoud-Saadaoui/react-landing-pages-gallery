import { aboutParagraph } from "./data";

const AboutUs = () => (
  <div className="about-us bg-[#ececec] py-[30px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <h2 className="text-center text-[50px] text-[#848484]">About Us</h2>
      <p className="text-[22px] leading-[1.8] text-[#848484] max-md:text-center max-md:text-[20px]">
        {aboutParagraph}
      </p>
    </div>
  </div>
);

export default AboutUs;
