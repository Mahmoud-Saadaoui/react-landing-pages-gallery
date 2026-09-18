import contactBg from "./imgs/contact.png";

const Contact = () => (
  <div
    className="relative min-h-[600px] bg-cover py-20"
    style={{ backgroundImage: `url(${contactBg})` }}
  >
    <div className="absolute left-0 top-0 h-full w-full bg-white/60" />
    <div className="relative z-[2] mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="mb-[60px] text-center text-[30px] font-bold text-[var(--main-color)]">
        Contact Us
      </h2>
      <form className="mx-auto max-w-[800px] overflow-hidden" action="">
        <div className="float-left w-[49%] max-[767px]:float-none max-[767px]:w-full">
          <input
            className="mb-[15px] block h-10 w-full border border-[#CCC] bg-[rgba(218,218,218,0.19)] p-[10px] transition-opacity duration-300 focus:[outline:1px_solid_var(--main-color)] focus:placeholder:opacity-0"
            type="text"
            placeholder="Your Name"
            name="username"
          />
          <input
            className="mb-[15px] block h-10 w-full border border-[#CCC] bg-[rgba(218,218,218,0.19)] p-[10px] transition-opacity duration-300 focus:[outline:1px_solid_var(--main-color)] focus:placeholder:opacity-0"
            type="text"
            placeholder="Your Phone"
            name="phone"
          />
          <input
            className="mb-[15px] block h-10 w-full border border-[#CCC] bg-[rgba(218,218,218,0.19)] p-[10px] transition-opacity duration-300 focus:[outline:1px_solid_var(--main-color)] focus:placeholder:opacity-0"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <input
            className="mb-[15px] block h-10 w-full border border-[#CCC] bg-[rgba(218,218,218,0.19)] p-[10px] transition-opacity duration-300 focus:[outline:1px_solid_var(--main-color)] focus:placeholder:opacity-0"
            type="text"
            placeholder="Subject"
            name="subject"
          />
        </div>
        <div className="float-right w-[49%] max-[767px]:float-none max-[767px]:w-full">
          <textarea
            className="mb-[15px] block h-[150px] w-full border border-[#CCC] bg-[rgba(218,218,218,0.19)] p-[10px] transition-opacity duration-300 focus:[outline:1px_solid_var(--main-color)] focus:placeholder:opacity-0"
            name="message"
            placeholder="Your Message"
          />
          <input
            className="w-full cursor-pointer bg-[var(--main-color)] p-[10px] text-white"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  </div>
);

export default Contact;