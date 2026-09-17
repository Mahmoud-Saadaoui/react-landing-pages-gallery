import { FaGraduationCap } from "react-icons/fa";
import { lorem, timeline } from "./data";

export default function Licence() {
  return (
    <section className="licence" id="licence">
      <div className="title text-center">
        <h2>
          <FaGraduationCap aria-hidden="true" />
          الشهادات و المؤهلات
        </h2>
      </div>
      <div className="container">
        <ul className="timeline list-unstyled">
          {timeline.map((t, i) => (
            <li key={i}>
              <div className="time-box">
                <h4>
                  <span className="date">{t.date}</span>
                  {t.title}
                </h4>
                <p>{lorem}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}