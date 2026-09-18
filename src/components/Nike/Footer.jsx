import { logo, footerColumns } from "./data";
import { Socials } from "./Socials";

export const Footer = () => (
  <>
    <footer className="mx-auto max-w-[1200px] px-[16px] py-[80px] grid gap-[32px] min-[481px]:grid-cols-2 min-[769px]:grid-cols-3">
      <div className="min-[481px]:col-span-2 min-[769px]:col-auto">
        <a href="#">
          <img src={logo} alt="logo" loading="lazy" className="w-full max-w-[80px] mb-[16px]" />
        </a>
        <Socials className="flex items-center gap-[16px]" />
      </div>
      {footerColumns.map((column) => (
        <div key={column.title}>
          <h4 className="mb-[16px] text-[19.2px] font-semibold text-[#333333]">{column.title}</h4>
          <p className="text-[#767368]">{column.text}</p>
        </div>
      ))}
    </footer>
    <div className="p-[16px] text-[12.8px] text-[#767368] text-center">
      Copyright © 2023 Web Design Mastery. All rights reserved.
    </div>
  </>
);