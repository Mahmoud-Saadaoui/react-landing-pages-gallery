import { useEffect, useRef } from "react";
import { footerText, footerLinks } from "./data";

export const Footer = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const onSubmit = (e) => e.preventDefault();
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return (
    <footer className="bg-[#2f2f2f]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-center gap-20 border-b border-white px-4 py-20 max-[900px]:grid-cols-1 max-[900px]:text-center">
        <div>
          <h4 className="mb-4 text-[2rem] font-semibold leading-[2.5rem] text-white">
            SUBSCRIBE TO GET THE LATEST NEWS ABOUT US
          </h4>
          <p className="text-white">{footerText}</p>
        </div>
        <div>
          <form
            action="/"
            ref={formRef}
            className="mx-auto flex w-full max-w-[600px] items-center gap-4 rounded-[10px] bg-white p-[5px]"
          >
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full border-none px-4 text-base outline-none"
            />
            <button className="cursor-pointer rounded-[5px] border-none bg-[#2f2f2f] px-6 py-4 text-[1.2rem] text-white outline-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-8 px-4 py-16 max-[600px]:flex-col">
        <div>
          <h4>
            <a href="#" className="text-2xl font-semibold text-white">
              MyFurniture
            </a>
          </h4>
          <p className="mt-[5px] text-[0.8rem] text-white">
            Copyright © 2023 Web Design Mastery. All rights reserved.
          </p>
        </div>
        <ul className="flex list-none items-center gap-8">
          {footerLinks.map((label) => (
            <li key={label}>
              <a href="#" className="font-medium whitespace-nowrap text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};