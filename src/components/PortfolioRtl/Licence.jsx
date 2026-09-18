import { FaGraduationCap } from "react-icons/fa";
import { lorem, timeline } from "./data";

export default function Licence() {
  return (
    <section className="licence bg-[#f6fbff] pb-[80px] pt-[220px] text-right" id="licence">
      <div className="title relative pb-[43px] text-center before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-[100px] before:-translate-x-1/2 before:bg-[#196dd1] before:content-['']">
        <h2 className="text-[30px] leading-[50px] text-[#196dd1]">
          <span className="block">
            <FaGraduationCap aria-hidden="true" />
          </span>
          الشهادات و المؤهلات
        </h2>
      </div>
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <ul className="timeline list-none pt-[45px] before:absolute before:bottom-0 before:right-1/2 before:top-0 before:h-[75%] before:w-[2px] before:bg-[#196dd1] before:mr-[-1px] before:content-[''] relative">
          {timeline.map((t, i) => {
            const even = i % 2 === 1;
            return (
              <li
                key={i}
                className={`relative ${even ? "[direction:ltr] text-left" : ""} ${
                  i > 0 ? "-mt-[50px] max-[767px]:mt-[20px]" : ""
                } before:absolute before:top-[9%] before:z-[1] before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#196dd1] before:mr-[-5px] before:content-[''] ${
                  even ? "before:right-1/2" : "before:right-1/2"
                }`}
              >
                <div className="time-box relative max-w-[48%] border-2 border-[#f4f3f3] bg-white p-[20px_25px] max-[767px]:max-w-full">
                  <div
                    className={`pointer-events-none absolute top-[5%] h-[20px] w-[20px] rotate-45 bg-white max-[767px]:hidden ${
                      even
                        ? "right-[-10px] border-r-2 border-t-2 border-[#f4f3f3]"
                        : "left-[-10px] border-b-2 border-l-2 border-[#f4f3f3]"
                    }`}
                  />
                  <h4
                    className={`text-[18px] leading-[30px] text-[#555555] ${
                      even ? "[direction:ltr]" : ""
                    }`}
                  >
                    <span
                      className={`bg-[#0575e6] px-[5px] text-white ${
                        even ? "float-left ml-0 mr-[25px]" : "ml-[25px]"
                      }`}
                    >
                      {t.date}
                    </span>
                    <span className={even ? "[direction:ltr]" : ""}>{t.title}</span>
                  </h4>
                  <p className="mb-0 text-[15px] leading-[22px] text-[#b1b1b1]">{lorem}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}