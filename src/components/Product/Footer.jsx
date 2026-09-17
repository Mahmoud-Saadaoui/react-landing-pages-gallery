import { footerSocials } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ul className="list-inline">
              {footerSocials.map((s, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#" className={s.cls}>
                    <s.Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm">
            <div className="copyright">
              <p>جميع الحقوق محفوظة</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}