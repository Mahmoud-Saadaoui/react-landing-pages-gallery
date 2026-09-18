import contactBg from "./images/contact-bg.jpg";

const FIELD_WIDTH =
  "w-[45rem] max-[1000px]:w-[55rem] max-[700px]:w-[35rem]";

const Contact = () => (
  <section className="contact flex h-screen w-full items-center justify-center bg-[#272727]">
    <div className="contact-wrapper flex h-[75rem] w-[60%] shadow-[0_3rem_7rem_rgba(0,0,0,0.5)] max-[1500px]:h-[65rem] max-[1500px]:w-[80%] max-[1300px]:h-[55rem] max-[1300px]:w-[90%]">
      <div
        className="contact-left w-[35%] bg-cover bg-center bg-no-repeat max-[1000px]:w-0"
        style={{
          backgroundImage: `linear-gradient(rgba(15,15,15,0.6), rgba(22,22,22,0.9)), url(${contactBg})`,
        }}
      />
      <div className="contact-right w-[65%] bg-[#eee] p-[3rem_10rem_10rem] max-[1000px]:w-full">
        <h1 className="contact-heading mb-[5rem] text-center text-[6rem] font-light text-[#272727] max-[1300px]:mb-[2rem]">
          Contact
        </h1>
        <form className="flex w-full flex-col items-center">
          <div className="input-group relative">
            <input
              type="text"
              className={`field peer ${FIELD_WIDTH} my-[3rem] h-[4rem] border-b-[0.2rem] border-dashed border-[#636363] bg-transparent p-[1rem_1rem_1rem_0] text-[1.6rem] text-[#4b4b4b] focus:border-solid max-[1300px]:my-[2rem]`}
              name="fullName"
            />
            <label className="input-label absolute bottom-[3rem] left-0 text-[1.8rem] uppercase text-[#4b4b4b] transition-all duration-300 pointer-events-none peer-focus:-translate-y-[3rem] peer-focus:text-[1.2rem]">
              Full Name
            </label>
          </div>
          <div className="input-group relative">
            <input
              type="email"
              className={`field peer ${FIELD_WIDTH} my-[3rem] h-[4rem] border-b-[0.2rem] border-dashed border-[#636363] bg-transparent p-[1rem_1rem_1rem_0] text-[1.6rem] text-[#4b4b4b] focus:border-solid max-[1300px]:my-[2rem]`}
              name="email"
            />
            <label className="input-label absolute bottom-[3rem] left-0 text-[1.8rem] uppercase text-[#4b4b4b] transition-all duration-300 pointer-events-none peer-focus:-translate-y-[3rem] peer-focus:text-[1.2rem]">
              Email
            </label>
          </div>
          <div className="input-group relative">
            <textarea
              className={`field peer ${FIELD_WIDTH} my-[3rem] max-h-[7rem] max-w-[45rem] border-b-[0.2rem] border-dashed border-[#636363] bg-transparent p-[1rem_1rem_1rem_0] text-[1.6rem] text-[#4b4b4b] focus:border-solid max-[1300px]:my-[2rem] max-[1000px]:max-w-[55rem] max-[700px]:max-w-[35rem]`}
              name="message"
            />
            <label className="message absolute bottom-[6rem] left-0 text-[1.8rem] uppercase text-[#4b4b4b] transition-all duration-300 pointer-events-none peer-focus:-translate-y-[3rem] peer-focus:text-[1.2rem]">
              Message
            </label>
          </div>
          <input
            type="submit"
            className={`submit-btn mt-[2rem] h-[5rem] w-[45rem] cursor-pointer border-none bg-[#c29525] text-[2rem] font-light uppercase tracking-[0.2rem] text-white [box-shadow:0_0.1rem_0.3rem_rgba(0,0,0,0.3)] [text-shadow:0_0.1rem_0.3rem_rgba(0,0,0,0.5)] max-[1000px]:w-[55rem] max-[700px]:w-[35rem]`}
            value="Submit"
          />
        </form>
      </div>
    </div>
  </section>
);

export default Contact;