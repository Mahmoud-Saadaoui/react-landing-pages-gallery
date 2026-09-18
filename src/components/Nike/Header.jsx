import { useEffect, useRef } from "react";
import { RiSearchLine, RiShoppingBagLine, RiAddLine } from "react-icons/ri";
import { logo, heroDescription, btnArrow } from "./data";
import headerImg from "./assets/header.jpg";
import { Socials } from "./Socials";

export const Header = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const onSubmit = (e) => e.preventDefault();
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return (
    <header className="mx-auto max-w-[1200px] px-[16px] relative isolate grid gap-[32px] min-[769px]:grid-cols-2">
      <nav className="absolute w-full p-[16px] flex items-center justify-between gap-[32px] bg-white z-[1] min-[769px]:bg-transparent">
        <div className="w-full flex items-center justify-between min-[769px]:w-1/2">
          <div className="max-w-[80px]">
            <a href="#">
              <img src={logo} alt="logo" className="w-full" />
            </a>
          </div>
          <form action="/" ref={formRef} className="hidden items-center gap-[10px] min-[481px]:flex">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="p-[8px] text-[16px] outline-none bg-transparent [border:0_0_1px_0_solid_#333333]"
            />
            <button
              type="submit"
              className="text-[24px] text-[#767368] bg-transparent outline-none border-none cursor-pointer"
            >
              <RiSearchLine />
            </button>
          </form>
        </div>
        <div>
          <span className="text-[24px] text-[#767368] cursor-pointer">
            <RiShoppingBagLine />
          </span>
        </div>
      </nav>
      <div className="pt-[160px] pb-[128px]">
        <h1 className="mb-[16px] text-[80px] font-bold text-[#333333]">
          Expl<span className="text-[#fc6601]">o</span>re New Things
        </h1>
        <p className="mb-[32px] text-[#767368]">{heroDescription}</p>
        <button className={btnArrow}>
          <span>
            <RiAddLine />
          </span>{" "}
          Explore More
        </button>
      </div>
      <div
        className="relative mx-[48px]"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Socials className="absolute right-[-48px] bottom-0 hidden flex-col justify-center gap-[8px] min-[769px]:flex" />
      </div>
    </header>
  );
};