export const sectionHeading =
  "text-center text-[10rem] font-bold tracking-[1rem] text-white [text-shadow:0.3rem_0.3rem_0.5rem_#555] max-[1500px]:text-[7rem] max-[750px]:text-[5.5rem] max-[600px]:text-[4.5rem]";

const Section = ({ id, className, open, onClose, style, children }) => (
  <div className="w-full [perspective:50rem]" onClick={onClose}>
    <section
      id={id}
      style={style}
      className={`relative mb-[3rem] h-screen w-full origin-left bg-[#efefef] py-[5rem] shadow-[0.5rem_0.5rem_1rem_#aaa] transition-[left,transform] duration-500 ${
        open
          ? "left-[15vw] [transform:rotateY(10deg)] max-[1500px]:left-[20vw] max-[1500px]:[transform:rotateY(15deg)] max-[1000px]:left-[25vw] max-[1000px]:[transform:rotateY(20deg)] max-[750px]:left-[30vw] max-[750px]:[transform:rotateY(25deg)] max-[600px]:left-0 max-[600px]:[transform:rotateY(0deg)]"
          : "left-0"
      } ${className}`}
    >
      {children}
    </section>
  </div>
);

export default Section;