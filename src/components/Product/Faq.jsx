import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faqGroups, lorem } from "./data";

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  const OpenIcon = () => <FaAngleUp aria-hidden="true" />;
  const ClosedIcon = () => <FaAngleDown aria-hidden="true" />;
  return (
    <div>
      {items.map((item, i) => (
        <div className="card mb-[15px] flex flex-col rounded-none border border-[#ebebeb]" key={i}>
          <div className="card-header border-b-0 bg-transparent">
            <h5>
              <a
                onClick={() => toggle(i)}
                className="relative block cursor-pointer text-[18px] font-bold text-[#555] no-underline hover:no-underline"
              >
                {item.q}
                <span className="absolute left-[5px] top-[2px]">
                  {open === i ? <OpenIcon /> : <ClosedIcon />}
                </span>
              </a>
            </h5>
          </div>
          <div className={open === i ? "block" : "hidden"}>
            <div className="card-block px-5 pb-5 text-[15px] leading-[24px] text-[#b3b3b3]">{lorem}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="faq bg-white py-[55px] text-right">
      <div className="title mb-[50px] text-center">
        <h3 className="text-[30px] text-[#555]">الأسئلة الأكثر شيوعاً</h3>
      </div>
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="row -mx-[15px] flex flex-wrap">
          {faqGroups.map((group, i) => (
            <div className="col-lg-4 col-md-6 w-full px-[15px] md:flex-none md:w-1/2 lg:w-1/3" key={i}>
              <Accordion items={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}