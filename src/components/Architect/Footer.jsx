import { socials } from "./data";

const Footer = () => (
  <footer className="footer flex h-[15rem] w-full items-center justify-center bg-[#17181b] max-[500px]:h-[18rem]">
    <div className="footer-content flex w-[60%] justify-between max-[1500px]:w-[80%] max-[1000px]:w-[50%] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:text-center">
      <p className="copyright text-[1.6rem] text-[#a7a7a7] max-[1000px]:order-1 max-[1000px]:mt-[3rem]">
        Copyright &copy; 2020, CodeAndCreate - All Rights Reserved
      </p>
      <div className="social-list">
        {socials.map(({ label, Icon }) => (
          <a
            href="#"
            key={label}
            aria-label={label}
            className="mx-[2rem] text-[2rem] text-[#a7a7a7]"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;