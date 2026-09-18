import Section, { sectionHeading } from "./Section";
import bg5 from "./images/bg-section5.jpg";

const Contact = ({ open, onClose }) => (
  <Section
    id="contact"
    className="mb-0 flex flex-col items-center justify-around bg-cover bg-center max-[1500px]:h-auto"
    open={open}
    onClose={onClose}
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${bg5})`,
    }}
  >
    <h1 className={`${sectionHeading} mb-[10rem]`}>Contact Us</h1>
    <form
      className="flex h-[45rem] w-[60rem] flex-col justify-center border-[2rem] border-[rgba(255,255,255,0.8)] bg-[rgba(255,255,255,0.2)] p-[5rem] max-[1500px]:h-[40rem] max-[1500px]:w-[55rem] max-[1500px]:p-[2rem] max-[600px]:w-[40rem] max-[600px]:border-[1rem]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="my-[2rem] h-[4rem] w-full flex-shrink-0 border-[0.1rem] border-white bg-transparent p-[0.5rem] text-[1.5rem] tracking-[0.1rem] text-white transition-colors duration-500 focus:bg-[rgba(255,255,255,0.5)]"
        placeholder="Your Full Name"
        name="name"
        autoComplete="name"
      />
      <input
        type="email"
        className="my-[2rem] h-[4rem] w-full flex-shrink-0 border-[0.1rem] border-white bg-transparent p-[0.5rem] text-[1.5rem] tracking-[0.1rem] text-white transition-colors duration-500 focus:bg-[rgba(255,255,255,0.5)]"
        placeholder="Your Email"
        name="email"
        autoComplete="email"
      />
      <textarea
        className="my-[2rem] h-[4rem] max-w-full min-h-[8rem] w-full flex-shrink-0 border-[0.1rem] border-white bg-transparent p-[0.5rem] text-[1.5rem] tracking-[0.1rem] text-white transition-colors duration-500 focus:bg-[rgba(255,255,255,0.5)]"
        placeholder="Enter Message"
        name="message"
      />
      <input
        className="my-[2rem] h-[4rem] w-full flex-shrink-0 cursor-pointer border-[0.1rem] border-white bg-[rgba(255,255,255,0.8)] p-[0.5rem] text-[1.5rem] font-semibold tracking-[0.3rem] text-[#444]"
        type="submit"
        value="Submit"
      />
    </form>
    <p className="text-center text-[2rem] font-light text-white max-[1500px]:mt-[5rem] max-[400px]:w-4/5">
      Copyright &copy; CodeAndCreate All Rights Reserved
    </p>
  </Section>
);

export default Contact;