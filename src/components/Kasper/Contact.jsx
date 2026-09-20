import MainHeading from "./MainHeading";

const Contact = () => (
  <div className="py-[100px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <MainHeading title="Contact Us" />
      <div
        data-reveal
        className="flex justify-between max-[767px]:flex-col"
      >
        <form onSubmit={(e) => e.preventDefault()} className="basis-[70%]">
          <input
            className="main-input mb-[30px] block w-full border border-[#ccc] p-[20px] focus:outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
          />
          <input
            className="main-input mb-[30px] block w-full border border-[#ccc] p-[20px] focus:outline-none"
            type="email"
            name="mail"
            placeholder="Your Email"
            autoComplete="email"
          />
          <textarea
            className="main-input mb-[30px] block h-[200px] w-full border border-[#ccc] p-[20px] focus:outline-none"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="ml-auto flex cursor-pointer border-0 bg-[#19c8fa] px-[20px] py-[20px] uppercase text-white focus:outline-none"
          />
        </form>
        <div className="info basis-[25%] max-[767px]:order-first max-[767px]:text-center">
          <h4 className="mb-[30px] text-[18px] font-medium uppercase">
            Get In Touch
          </h4>
          <span className="phone mb-[10px] block text-[#777]">+00 123.456.789</span>
          <span className="phone mb-[10px] block text-[#777]">+00 123.456.789</span>
          <h4 className="mb-[30px] mt-[90px] text-[18px] font-medium uppercase max-[767px]:mt-[30px]">
            Where We Are
          </h4>
          <address className="leading-[2] text-[#777] max-[767px]:mb-[40px]">
            Awesome Address 17
            <br />
            New York, NYC
            <br />
            123-4567-890
            <br />
            USA
          </address>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;