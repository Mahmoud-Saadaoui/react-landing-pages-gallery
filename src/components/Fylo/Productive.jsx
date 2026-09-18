import { productive } from "./data";

const Productive = () => (
  <section id="productive" className="bg-white [.dark_&]:bg-[hsl(217_28%_15%)]">
    <div className="mx-auto flex w-full flex-col items-center px-6 pt-24 pb-32 sm:max-w-[540px] md:max-w-[720px] md:flex-row md:space-x-16 lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="md:w-1/2">
        <img src={productive.image} alt="" className="mb-10" loading="lazy" />
      </div>
      <div className="flex flex-col items-start md:w-1/2">
        <div className="flex flex-col space-y-5">
          <h4 className="max-w-md text-xl font-bold md:text-4xl">
            {productive.title}
          </h4>
          {productive.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-4 block">
          <a
            href="#"
            className="border-b border-[hsl(176_68%_64%)] text-[hsl(176_68%_64%)]"
          >
            {productive.linkText}
            <img src={productive.arrow} alt="" className="inline pb-2" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Productive;