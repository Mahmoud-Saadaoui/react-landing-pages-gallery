import { footerIcons } from "./data";

const Section6 = () => (
  <section className="relative flex h-[40vh] w-full items-center justify-center">
    <div className="flex flex-wrap items-center justify-center max-[700px]:gap-0 gap-[4rem]">
      {footerIcons.map(({ href, img, label }) => (
        <a href={href} className="mx-[5rem] max-[700px]:mx-[2rem]" key={label}>
          <img src={img} className="w-[10rem] max-[550px]:w-[8rem] max-[450px]:w-[6rem]" alt={label} />
        </a>
      ))}
    </div>
    <p className="absolute bottom-[5rem] text-[1.5rem] tracking-[0.1rem]">
      Copyright &copy; CodeAndCreate All Rights Reserved
    </p>
  </section>
);

export default Section6;