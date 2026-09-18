import { FaDownload } from "react-icons/fa";
import bg from "./images/bg.webp";
import { headSocials, lorem } from "./data";
import profile from "./images/profile.jpg";
import cv from "./files/cv.pdf";

export default function Header() {
  return (
    <header
      id="header"
      className="min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="MainCard translate-y-[20%] bg-[rgba(5,117,230,0.8)] px-[10%] py-[3%] text-center text-white">
          <img className="rounded-full border-[5px] border-[#72ace7] align-middle" src={profile} alt="personal-img" />
          <h1 className="mb-[20px] text-[36px] leading-[50px] text-[#f9f9f9]">
            علاء محمود
            <span className="text-[24px]">- مطور واجهة الاستخدام</span>
          </h1>
          <ul className="mb-[40px] flex list-none items-center justify-center p-0">
            {headSocials.map((s, i) => (
              <li className="mr-[10px]" key={i}>
                <a href={s.url} className="text-[24px] text-[#021b79]">
                  <s.Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mb-[15px] text-[15px] font-bold leading-[30px]">
            مطور واجهة الأستخدام مقيم بالقاهرة أعمل بتصميم وتتطوير منذ خمس سنوات
            <br />-----
          </h2>
          <p className="mb-[40px] text-[15px] leading-[30px] text-[#89c4ff]">{lorem}</p>
          <a
            href={cv}
            download="السيرة الذاتية"
            className="inline-block text-[18px] leading-[32px] text-white"
          >
            <FaDownload aria-hidden="true" className="ml-2" />
            تحميل السيرة الذاتية
          </a>
        </div>
      </div>
    </header>
  );
}