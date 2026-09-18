const inputField =
  "my-[0.5rem] w-full border-[0.2rem] border-solid border-[#e41c6f] p-[0.5rem] text-[1.5rem] text-[#555]";

const Section4 = () => (
  <section
    className="flex h-[70vh] w-full flex-col items-center justify-evenly bg-[#333] max-[1200px]:h-[80vh]"
    id="section-4"
  >
    <h1 className="mb-[5rem] border-b-[0.3rem] border-solid border-b-white text-[5rem] uppercase tracking-[0.5rem] text-white [text-shadow:0.2rem_0.2rem_0.5rem_#555]">
      Contact Me
    </h1>
    <form
      className="flex w-[50rem] flex-col items-center justify-center max-[600px]:w-[40rem]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Name" className={`bg-[#eef] ${inputField}`} />
      <input type="email" placeholder="Email" className={`bg-[#eef] ${inputField}`} />
      <textarea
        placeholder="Message"
        className={`h-[10rem] max-h-[15rem] max-w-full bg-[#eef] ${inputField}`}
      />
      <input
        type="submit"
        value="Submit"
        className={`cursor-pointer bg-[#e41c6f] uppercase tracking-[1rem] text-white ${inputField}`}
      />
    </form>
  </section>
);

export default Section4;