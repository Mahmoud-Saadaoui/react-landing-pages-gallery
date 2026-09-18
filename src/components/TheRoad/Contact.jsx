import contactBg from "./images/contact-us-bg.jpg";

const Contact = () => (
  <section
    className="bg-cover bg-center bg-no-repeat pb-[20rem] pt-[15rem] text-center [animation:contact-bg_35s_infinite]"
    style={{ backgroundImage: `url(${contactBg})` }}
  >
    <h1 className="mb-[8rem] text-[7rem] font-bold uppercase tracking-[0.5rem] text-white [text-shadow:0_1rem_2rem_#000] max-[650px]:text-[6rem]">
      Contact Us
    </h1>
    <form
      className="mx-auto flex h-[50rem] w-[70rem] flex-col items-center justify-center rounded-[0.5rem] bg-[rgba(255,255,255,0.95)] p-[5rem] shadow-[0_1rem_3rem_#000] max-[800px]:w-[90%] max-[650px]:h-[40rem] max-[650px]:p-[2rem]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative my-[1rem] flex w-full flex-col">
        <label
          htmlFor="road-name"
          className="absolute left-[1rem] top-[1rem] text-[1.2rem] font-semibold uppercase tracking-[0.1rem] text-[#555]"
        >
          Full Name *
        </label>
        <input
          id="road-name"
          type="text"
          className="rounded-[0.5rem] border-[0.1rem] border-[#eee] bg-[#eee] pb-[1rem] pl-[1rem] pr-[1rem] pt-[3rem] text-[1.4rem] tracking-[0.1rem] text-[#777] [transition:border_0.3s] focus:border-[#ccc]"
          placeholder="Enter Your Name"
          autoComplete="name"
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="relative my-[1rem] flex w-[48.5%] flex-col">
          <label
            htmlFor="road-email"
            className="absolute left-[1rem] top-[1rem] text-[1.2rem] font-semibold uppercase tracking-[0.1rem] text-[#555]"
          >
            Email *
          </label>
          <input
            id="road-email"
            type="email"
            className="rounded-[0.5rem] border-[0.1rem] border-[#eee] bg-[#eee] pb-[1rem] pl-[1rem] pr-[1rem] pt-[3rem] text-[1.4rem] tracking-[0.1rem] text-[#777] [transition:border_0.3s] focus:border-[#ccc]"
            placeholder="Enter Your Email"
            autoComplete="email"
          />
        </div>
        <div className="relative my-[1rem] flex w-[48.5%] flex-col">
          <label
            htmlFor="road-phone"
            className="absolute left-[1rem] top-[1rem] text-[1.2rem] font-semibold uppercase tracking-[0.1rem] text-[#555]"
          >
            Phone
          </label>
          <input
            id="road-phone"
            type="text"
            className="rounded-[0.5rem] border-[0.1rem] border-[#eee] bg-[#eee] pb-[1rem] pl-[1rem] pr-[1rem] pt-[3rem] text-[1.4rem] tracking-[0.1rem] text-[#777] [transition:border_0.3s] focus:border-[#ccc]"
            placeholder="Enter Phone Number"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="relative my-[1rem] flex w-full flex-col">
        <label
          htmlFor="road-message"
          className="absolute left-[1rem] top-[1rem] text-[1.2rem] font-semibold uppercase tracking-[0.1rem] text-[#555]"
        >
          Message
        </label>
        <textarea
          id="road-message"
          className="max-h-[15rem] max-w-full rounded-[0.5rem] border-[0.1rem] border-[#eee] bg-[#eee] pb-[1rem] pl-[1rem] pr-[1rem] pt-[3rem] text-[1.4rem] tracking-[0.1rem] text-[#777] [transition:border_0.3s] focus:border-[#ccc]"
          placeholder="Your Message Here..."
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="mt-[1rem] w-full cursor-pointer rounded-[0.5rem] border-none bg-[#777] p-[1rem] text-[1.6rem] tracking-[0.1rem] text-white [transition:background-color_0.4s] hover:bg-[#555]"
      />
    </form>
  </section>
);

export default Contact;