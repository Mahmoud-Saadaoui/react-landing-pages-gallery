import { download, browsers } from "./data";
import dots from "./images/bg-dots.svg";

const container =
  "mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]";

const Download = () => (
  <section id="download">
    <div className={`${container} px-6`}>
      <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
        {download.title}
      </h2>
      <p className="mx-auto max-w-lg text-center text-[#9194a1]">
        {download.description}
      </p>
    </div>

    <div id="download-boxes" className="py-32">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
        {browsers.map((browser, index) => (
          <div
            key={browser.name}
            className={`w-full md:w-1/3${index === 1 ? " md:mt-8" : ""}${
              index === 2 ? " md:mt-16" : ""
            }`}
          >
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg">
              <div className="flex justify-center">
                <img
                  src={browser.logo}
                  alt=""
                  loading="lazy"
                  className="h-24 w-24"
                />
              </div>
              <h5 className="pt-6 text-xl font-bold">{browser.name}</h5>
              <p className="text-gray-400">{browser.version}</p>
              <div
                className="bg-repeat-x px-6 pt-6 capitalize"
                style={{ backgroundImage: `url(${dots})` }}
              >
                <a
                  href="#"
                  className="block w-full rounded-lg border-2 border-[#5368df] bg-[#5368df] py-3 text-white duration-200 hover:bg-white hover:text-[#5368df]"
                >
                  Add &amp; Install Extension
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Download;