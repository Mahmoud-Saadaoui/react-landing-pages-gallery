import landing from "./images/landing.jpg";

const Hero = () => (
  <div
    className="relative h-[calc(100vh-64px)] bg-cover"
    style={{ backgroundImage: `url(${landing})` }}
  >
    <div className="absolute left-1/2 top-1/2 w-[320px] max-w-full -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="m-0 text-[50px] font-bold text-[#10cab7]">Hello There</h1>
      <p className="text-[19px] leading-[1.8]">
        We are Leon - Super Creative &amp; Minimal Agency Web Template
      </p>
    </div>
  </div>
);

export default Hero;