import { testimonials } from "./data";

const Testimonials = () => (
  <div className="testimonials relative py-20">
    <span className="absolute left-0 top-0 h-full w-1/2 bg-[var(--main-color)]" />
    <span className="absolute right-0 top-0 h-full w-1/2 bg-[#333]" />
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="relative z-[2] mb-[30px] text-left text-[30px] font-bold text-white max-[767px]:text-center">
        Testimonials
      </h2>
      {testimonials.map(({ img, name, position, text }) => (
        <div
          className="relative z-[2] float-left mr-[1%] w-[calc(98%/3)] bg-white p-[20px] last:mr-0 max-[767px]:float-none max-[767px]:mb-[10px] max-[767px]:w-full"
          key={name}
        >
          <p className="mb-[20px] text-[15px] italic leading-[1.5] text-[#707070]">
            {text}
          </p>
          <div className="person-info overflow-hidden max-[991px]:overflow-visible max-[991px]:text-center">
            <img
              src={img}
              alt=""
              className="float-left mr-[20px] rounded-full max-[991px]:float-none max-[991px]:mr-0"
            />
            <h4 className="mb-[10px] mt-[14px] font-bold">{name}</h4>
            <p className="text-[#707070]">{position}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="clear-both" />
  </div>
);

export default Testimonials;