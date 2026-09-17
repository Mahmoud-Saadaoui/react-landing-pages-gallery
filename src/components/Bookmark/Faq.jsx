import { useState } from "react";
import { faq } from "./data";

const Arrow = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="12"
    className={`transition duration-500 ease ${open ? "-rotate-180 text-softRed" : ""}`}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      d="M1 1l8 8 8-8"
    />
  </svg>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            {faq.title}
          </h2>
          <p className="mx-auto max-w-lg px-6 text-center text-graishBlue">
            {faq.description}
          </p>
        </div>
      </section>

      <section id="faq-accordion">
        <div className="container mx-auto mb-32 px-6">
          <div className="mx-auto m-8 max-w-2xl overflow-hidden">
            {faq.items.map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.question} className="border-b py-1">
                  <div
                    className="flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <h3 className="transition duration-500 hover:text-red-500">
                      {item.question}
                    </h3>
                    <Arrow open={open} />
                  </div>
                  <div
                    className={`overflow-hidden transition duration-500 ease ${
                      open ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <p className="py-2 text-justify text-gray-400">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;