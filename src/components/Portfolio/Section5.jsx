import {
  FaGithubSquare,
  FaYoutube,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const socials = [FaGithubSquare, FaYoutube, FaFacebookSquare, FaInstagramSquare];

const Section5 = () => (
  <footer className="flex h-[30vh] w-full flex-col items-center justify-center bg-[#222]">
    <div className="mb-[5rem]">
      {socials.map((Icon, index) => (
        <a
          key={index}
          href="#none"
          className="mx-[2rem] inline-block rounded-[0.5rem] bg-[#e41c6f] p-[0.7rem]"
        >
          <i className="block text-[3rem] text-white">
            <Icon />
          </i>
        </a>
      ))}
    </div>
    <p className="text-center text-[2rem] font-light tracking-[0.2rem] text-[#aaa] max-[600px]:w-[70%]">
      Copyright &copy; CodeAndCreate. All Rights Reserved
    </p>
  </footer>
);

export default Section5;