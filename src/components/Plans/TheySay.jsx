import { avatarImage, testimonials } from "./data";

const TheySay = () => (
  <div className="they-say py-[50px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <h2 className="mb-[30px] mt-0 text-center text-[50px] text-[#555]">What They Say About Us</h2>
      {testimonials.map(({ name, text }, i) => {
        const first = i === 0;
        const last = i === testimonials.length - 1;
        return (
          <div
            className={`float-left mb-[25px] rounded-[10px] border border-[#ddd] bg-[#eee] p-5 ${
              first ? "md:w-full lg:ml-[10%] lg:w-[80%]" : `md:w-[49%] ${last ? "md:ml-[2%]" : ""}`
            }`}
            key={name}
          >
            <div
              className={`float-left mr-5 w-[120px] ${
                first ? "max-md:float-none max-md:mx-auto" : "max-lg:float-none max-lg:mx-auto"
              }`}
            >
              <img
                className="w-full rounded-full border border-[#ccc] bg-white p-[3px]"
                src={avatarImage}
                alt=""
                loading="lazy"
              />
            </div>
            <h3
              className={`mx-0 mb-[10px] mt-[5px] float-left ${
                first ? "max-md:float-none max-md:text-center" : "max-lg:float-none max-lg:text-center"
              }`}
            >
              {name}
            </h3>
            <p
              className={`m-0 float-left w-[calc(100%-140px)] leading-[1.7] ${
                first ? "max-md:float-none max-md:w-full" : "max-lg:float-none max-lg:w-full"
              }`}
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
    <div className="clear-both"></div>
  </div>
);

export default TheySay;