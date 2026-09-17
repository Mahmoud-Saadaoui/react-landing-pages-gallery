import { socials } from "./data";

export const Socials = ({ className }) => (
  <div className={className}>
    {socials.map(({ icon: Icon, label }) => (
      <a key={label} href="#">
        <Icon />
      </a>
    ))}
  </div>
);