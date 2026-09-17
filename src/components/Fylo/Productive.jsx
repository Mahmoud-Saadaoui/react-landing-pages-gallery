import { productive } from "./data";

const Productive = () => (
  <section id="productive" className="bg-white dark:bg-darkBlue">
    <div className="container mx-auto flex flex-col items-center px-6 pt-24 pb-32 md:flex-row md:space-x-16">
      <div className="md:w-1/2">
        <img src={productive.image} alt="" className="mb-10" loading="lazy" />
      </div>
      <div className="flex flex-col items-start md:w-1/2">
        <div className="flex flex-col space-y-5">
          <h4 className="max-w-md text-xl font-bold md:text-4xl">
            {productive.title}
          </h4>
          {productive.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-md md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-4 block">
          <a href="#" className="border-accentCyan text-accentCyan border-b">
            {productive.linkText}
            <img src={productive.arrow} alt="" className="inline pb-2" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Productive;