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
        <div className="card" key={i}>
          <div className="card-header">
            <h5>
              <a onClick={() => toggle(i)}>
                {item.q}
                {open === i ? <OpenIcon /> : <ClosedIcon />}
              </a>
            </h5>
          </div>
          <div className={`collapse${open === i ? " show" : ""}`}>
            <div className="card-block">{lorem}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="faq">
      <div className="title text-center">
        <h3>الأسئلة الأكثر شيوعاً</h3>
      </div>
      <div className="container">
        <div className="row">
          {faqGroups.map((group, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <Accordion items={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}