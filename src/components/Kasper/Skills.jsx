import { testimonials, progs } from "./data";

const Skills = () => (
  <div className="py-[100px]">
    <div className="mx-auto flex flex-wrap justify-between px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <div className="testimonials lg:basis-[45%]">
        <h3 className="mb-[30px] text-center font-normal uppercase">Testimonials</h3>
        <p className="mb-[60px] text-center leading-[2] text-[#777]">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
        {testimonials.map((item, index) => (
          <div
            className="content mb-[30px] flex items-center max-[767px]:flex-col max-[767px]:text-center"
            key={index}
          >
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="mr-[50px] w-[100px] rounded-full max-[767px]:mx-auto max-[767px]:mb-[20px]"
            />
            <div className="text border-b border-[#ccc] leading-[1.8]">
              {item.text}
              <p className="mb-[10px] text-right text-[14px] text-[#777]">
                {item.name}
              </p>
            </div>
          </div>
        ))}
        <ul className="mb-[50px] mt-[50px] flex justify-center">
          <li className="mr-[10px] h-[14px] w-[14px] rounded-full border border-[#aaa]"></li>
          <li className="mr-[10px] h-[14px] w-[14px] rounded-full border border-[#aaa] bg-[#19c8fa]"></li>
          <li className="mr-[10px] h-[14px] w-[14px] rounded-full border border-[#aaa]"></li>
        </ul>
      </div>
      <div className="skills lg:basis-[45%]">
        <h3 className="mb-[30px] text-center font-normal uppercase">Skills</h3>
        <p className="mb-[60px] text-center leading-[2] text-[#777]">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
        {progs.map((prog) => (
          <div className="mb-[40px]" key={prog.name}>
            <h4 className="mb-[15px] font-normal uppercase">{prog.name}</h4>
            <div className="h-[30px] bg-[#dedadc]">
              <span
                className="relative block h-full bg-[#19c8fa] before:absolute before:-top-[40px] before:-right-[18px] before:w-[40px] before:rounded before:bg-black before:py-[4px] before:text-center before:text-white before:content-[attr(data-progress)] after:absolute after:-top-[15px] after:-right-2 after:border-8 after:border-solid after:border-transparent after:border-t-[#000] after:content-['']"
                style={{ width: `${prog.value}%` }}
                data-progress={`${prog.value}%`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;