const Menu = ({ open, onClick }) => (
  <div
    className={`fixed top-[2rem] z-10 flex h-[4rem] w-[4rem] cursor-pointer flex-col items-center justify-center transition-all duration-500 ${
      open
        ? "left-[15vw] [transform:rotate(45deg)] max-[1500px]:left-[20vw] max-[1000px]:left-[25vw] max-[750px]:left-[30vw] max-[600px]:left-[40vw]"
        : "left-[2rem]"
    }`}
    onClick={onClick}
  >
    <div
      className={`my-[0.3rem] h-[0.2rem] w-full bg-white shadow-[0.1rem_0.1rem_0.3rem_#222] transition-transform duration-500 ${
        open ? "[transform:rotate(270deg)_translateX(-0.4rem)]" : ""
      }`}
    ></div>
    <div
      className={`my-[0.3rem] h-[0.2rem] w-full bg-white shadow-[0.1rem_0.1rem_0.3rem_#222] transition-transform duration-500 ${
        open ? "[transform:rotate(360deg)_translateY(-0.4rem)]" : ""
      }`}
    ></div>
  </div>
);

export default Menu;