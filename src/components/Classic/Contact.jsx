import { socialIcons } from "./data";
import cityBg from "./images/city.webp";

const container = "relative mx-auto w-[1200px] max-w-full";

const socialColors = {
  Facebook: "bg-[#3b5998]",
  Twitter: "bg-[#55acee]",
  "Google Plus": "bg-[#dc4e41]",
};

const Contact = () => (
  <div className="contact bg-cover text-center" style={{ backgroundImage: `url(${cityBg})` }}>
    <div className="overlay h-full w-full bg-[rgba(49,55,61,.9)] py-[50px] text-white">
      <div className={container}>
        <h2 className="text-[35px] uppercase">
          Say <span className="text-[#f7600e]">Hello</span>
        </h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          <br />
          laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <form className="mx-auto my-[50px] w-[700px] max-w-full overflow-hidden text-center">
          <input
            className="float-right h-[40px] w-[48%] rounded-[10px] border border-[#CCC] px-[10px] leading-[40px] placeholder:text-[14px]"
            type="email"
            name="mail"
            placeholder="Your Email"
          />
          <input
            className="float-left h-[40px] w-[48%] rounded-[10px] border border-[#CCC] px-[10px] leading-[40px] placeholder:text-[14px]"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="mt-[20px] h-[140px] w-full rounded-[10px] border border-[#CCC] p-[10px] placeholder:text-[14px]"
            placeholder="Message"
          />
          <div className="mt-[10px] overflow-hidden">
            <button
              className="float-left w-[200px] rounded-[10px] border-none bg-[#f7600e] p-[10px] text-[14px] uppercase text-white"
              type="submit"
            >
              Hire Us
            </button>
            <span className="form-icons float-right">
              {socialIcons.map(({ label, Icon }) => (
                <Icon
                  key={label}
                  className={`h-[40px] w-[40px] rounded-full text-[1.33333333em] leading-[40px] text-white ${socialColors[label]}`}
                />
              ))}
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
