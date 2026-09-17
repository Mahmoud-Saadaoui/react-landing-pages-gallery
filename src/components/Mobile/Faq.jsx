import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faqAnswer, faqQuestions } from "./data";

const Acc = ({ group, question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card">
      <div className="card-header" role="tab">
        <h5 className="mb-0">
          <a
            type="button"
            className={open ? "" : "collapsed"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {question}
            {open ? <FaAngleUp aria-hidden="true" /> : <FaAngleDown aria-hidden="true" />}
          </a>
        </h5>
      </div>
      {open && (
        <div className="collapse show" data-parent={`#${group}`}>
          <div className="card-block">{answer}</div>
        </div>
      )}
    </div>
  );
};

const Faq = () => (
  <section className="faq" id="faq">
    <div className="overlay">
      <div className="container">
        <div className="title text-center">
          <h3>الأسئلة الأكثر شيوعاً عن التطبيق</h3>
        </div>
        <div className="row">
          <div className="col-md">
            <div id="accordion1">
              {faqQuestions.map((q, i) => (
                <Acc key={`a-${q}`} group="accordion1" question={q} answer={faqAnswer} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
          <div className="col-md">
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