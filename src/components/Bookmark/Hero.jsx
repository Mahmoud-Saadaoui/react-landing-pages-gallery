import { heroImage } from "./data";

const Hero = () => (
  <section id="hero">
    <div className="container mx-auto flex flex-col-reverse p-6 lg:flex-row lg:mb-0">
      <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
        <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="mx-auto max-w-md text-center text-lg text-gray-400 lg:mx-0 lg:mt-0 lg:text-left lg:text-2xl">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex w-full items-center justify-center space-x-4 lg:justify-start">
          <a
            href="#"
            className="rounded border-2 border-softBlue bg-softBlue p-4 text-sm font-semibold text-white shadow-md md:text-base hover:bg-white hover:text-softBlue"
          >
            Get It On Chrome
          </a>
          <a
            href="#"
            className="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md md:text-base hover:bg-white hover:text-gray-600"
          >
            Get It On Firefox
          </a>
        </div>
      </div>

      <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
        <div className="bg-hero"></div>
        <img
          src={heroImage}
          alt=""
          className="relative z-10 overflow-x-visible lg:top-24 xl:top-0"
        />
      </div>
    </div>
  </section>
);

export default Hero;