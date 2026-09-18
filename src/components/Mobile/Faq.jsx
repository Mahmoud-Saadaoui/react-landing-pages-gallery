import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faqAnswer, faqQuestions } from "./data";
import bg2 from "./images/bg-2.webp";

const Acc = ({ group, question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-[25px] rounded-none border-0 bg-white/20">
      <div className="rounded-none border-b-0 bg-transparent" role="tab">
        <h5 className="mb-0">
          <a
            type="button"
            className={`block cursor-pointer no-underline text-[18px] text-white ${
              open ? "" : "collapsed"
            }`}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block">{question}</span>
            <span className="absolute top-[2px] left-[5px]">
              {open ? <FaAngleUp aria-hidden="true" /> : <FaAngleDown aria-hidden="true" />}
            </span>
          </a>
        </h5>
      </div>
      {open && (
        <div className="collapse show" data-parent={`#${group}`}>
          <div className="px-5 pb-5 text-[15px] leading-[20px] text-[#c9c9c9]">{answer}</div>
        </div>
      )}
    </div>
  );
};

const Faq = () => (
  <section
    className="faq bg-cover bg-center bg-fixed text-right"
    id="faq"
    style={{ backgroundImage: `url(${bg2})` }}
  >
    <div className="bg-black/70 py-[70px] pb-[80px]">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="mb-[60px] text-center">
          <h3 className="mb-0 text-[30px] text-white">الأسئلة الأكثر شيوعاً عن التطبيق</h3>
        </div>
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:max-w-full md:flex-[1_1_0%]">
            <div id="accordion1">
              {faqQuestions.map((q, i) => (
                <Acc key={`a-${q}`} group="accordion1" question={q} answer={faqAnswer} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
          <div className="w-full px-[15px] md:max-w-full md:flex-[1_1_0%]">
            <div id="accordion2">
              {faqQuestions.map((q, i) => (
                <Acc key={`b-${q}`} group="accordion2" question={q} answer={faqAnswer} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Faq;