import { testimonials } from "./data";

const Testimonials = () => (
  <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
    <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
      <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-x-12 md:space-y-0">
        <img
          src={testimonials.quotes}
          alt=""
          className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
        />

        {testimonials.items.map((item) => (
          <div
            key={item.name}
            className="bg-gray-100 dark:bg-darkBlue3 flex flex-col space-y-6 rounded-lg p-10 md:w-1/3"
          >
            <p className="text-sm leading-5 md:text-lg">{item.text}</p>
            <div className="flex space-x-4">
              <img
                src={item.avatar}
                alt=""
                className="h-10 w-10 rounded-full"
                loading="lazy"
              />
              <div>
                <h5 className="text-sm font-semibold">{item.name}</h5>
                <p className="text-xs font-extralight">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;