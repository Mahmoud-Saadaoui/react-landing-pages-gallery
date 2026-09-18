import { footerLinks } from "./data";

const Footer = () => (
  <footer className="bg-[#555] pb-[2rem] pt-[4rem]">
    <div className="flex justify-center max-[800px]:flex-col max-[800px]:items-center">
      {footerLinks.map((label) => (
        <a
          key={label}
          href="#"
          className="mx-[2rem] bg-[#555] px-[3rem] py-[0.3rem] text-[2rem] tracking-[0.3rem] text-white [transition:all_0.2s] hover:rotate-[-10deg] hover:shadow-[0_2rem_3rem_#000] max-[1000px]:mx-[1rem] max-[1000px]:px-[2rem] max-[800px]:my-[1rem]"
        >
          {label}
        </a>
      ))}
    </div>
    <p className="mt-[5rem] text-center text-[1.5rem] tracking-[0.2rem] text-[#eee]">
      Copyright &copy; CodeAndCreate All Rights Reserved
    </p>
  </footer>
);

export default Footer;