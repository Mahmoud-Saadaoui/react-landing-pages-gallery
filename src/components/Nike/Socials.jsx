import { socials } from "./data";

export const Socials = ({ className }) => (
  <div
    className={`${className} [&_a]:text-[24px] [&_a]:text-[#767368] [&_a]:transition-all [&_a]:duration-300 [&_a:hover]:text-[#fc6601]`}
  >
    {socials.map(({ icon: Icon, label }) => (
      <a key={label} href="#">
        <Icon />
      </a>
    ))}
  </div>
);