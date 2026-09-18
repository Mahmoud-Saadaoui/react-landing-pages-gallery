import { heroImage } from "./data";

const container =
  "mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]";

const Hero = () => (
  <section id="hero">
    <div className={`${container} flex flex-col-reverse p-6 min-[1020px]:mb-0 min-[1020px]:flex-row`}>
      <div className="flex flex-col space-y-10 min-[1020px]:mt-16 min-[1020px]:w-1/2">
        <h1 className="text-center text-3xl font-semibold min-[1020px]:text-left min-[1020px]:text-6xl">
          A Simple Bookmark Manager
        </h1>
        <p className="mx-auto max-w-md text-center text-lg text-gray-400 min-[1020px]:mx-0 min-[1020px]:mt-0 min-[1020px]:text-left min-[1020px]:text-2xl">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex w-full items-center justify-center space-x-4 min-[1020px]:justify-start">
          <a
            href="#"
            className="rounded border-2 border-[#5368df] bg-[#5368df] p-4 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-[#5368df] md:text-base"
          >
            Get It On Chrome
          </a>
          <a
            href="#"
            className="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md hover:bg-white hover:text-gray-600 md:text-base"
          >
            Get It On Firefox
          </a>
        </div>
      </div>

      <div className="relative mx-auto min-[1020px]:mb-0 min-[1020px]:mx-0 min-[1020px]:w-1/2">
        <div className="hidden h-[300px] w-[2000px] rounded-l-full bg-[#5368df] min-[1020px]:absolute min-[1020px]:left-[30%] min-[1020px]:top-[208px]"></div>
        <img
          src={heroImage}
          alt=""
          className="relative z-10 overflow-x-visible min-[1020px]:top-24 min-[1440px]:top-0"
        />
      </div>
    </div>
  </section>
);

export default Hero;