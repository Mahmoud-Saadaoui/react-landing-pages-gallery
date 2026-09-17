import { FaDownload } from "react-icons/fa";
import { headSocials, lorem } from "./data";
import profile from "./images/profile.jpg";
import cv from "./files/cv.pdf";

export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="MainCard text-center">
          <img className="rounded-circle" src={profile} alt="personal-img" />
          <h1>
            علاء محمود
            <span>- مطور واجهة الاستخدام</span>
          </h1>
          <ul className="list-inline">
            {headSocials.map((s, i) => (
              <li className="list-inline-item" key={i}>
                <a href={s.url}>
                  <s.Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <h2>
            مطور واجهة الأستخدام مقيم بالقاهرة أعمل بتصميم وتتطوير منذ خمس سنوات
            <br />-----
          </h2>
          <p>{lorem}</p>
          <a href={cv} download="السيرة الذاتية">
            <FaDownload aria-hidden="true" />
            تحميل السيرة الذاتية
          </a>
        </div>
      </div>
    </header>
  );
}