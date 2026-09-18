import airBalloon from "./images/air-balloon.webp";
import headerBg from "./images/header-bg.jpg";

const letters = "theroad".split("");

const Header = () => (
  <header
    className="relative flex h-[calc(100vh-7rem)] w-full items-center justify-center bg-cover bg-center bg-no-repeat [perspective:100rem] max-[650px]:h-[100vh]"
    style={{
      backgroundImage: `linear-gradient(rgba(18, 113, 255, 0.5), rgba(18, 113, 255, 0.3)), url(${headerBg})`,
    }}
  >
    <div className="max-[1000px]:absolute max-[1000px]:left-1/2 max-[1000px]:top-1/2 max-[1000px]:z-10 max-[1000px]:-translate-x-1/2 max-[1000px]:-translate-y-1/2 text-center uppercase tracking-[0.1rem] [text-shadow:0_0.3rem_0.5rem_#555]">
      <h1 className="text-[8rem] text-white max-[1000px]:text-[6rem]">
        Around the world
      </h1>
      <p className="mx-auto max-w-[70rem] text-[3rem] font-medium text-[#eee] max-[1000px]:text-[2.5rem] max-[800px]:hidden">
        "Traveling - it leaves you speechless, then turns you into a
        storyteller"
      </p>
    </div>
    <img
      src={airBalloon}
      alt="Header Image"
      className="w-[35%] [animation:image-float_150s_infinite]"
    />
    <div className="absolute right-[4rem] top-[4rem]">
      <h1 className="flex">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-white text-[2rem] font-black uppercase text-[#2b81e4] [animation:drop-letters_5s_infinite]"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  </header>
);

export default Header;