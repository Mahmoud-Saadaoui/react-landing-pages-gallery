import { contactInfo, footerSocials, serviceText } from "./data";

const Footer = () => (
  <footer>
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h3>عن الشركة</h3>
            <p>{serviceText}</p>
            <ul className="social list-inline">
              {footerSocials.map(({ Icon, cls }) => (
                <li className="list-inline-item" key={cls}>
                  <a href="" className={cls}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md">
            <h3>الاتصال بالشركة</h3>
            <ul className="contact-us list-unstyled">
              {contactInfo.map(({ Icon, text }) => (
                <li key={text}>
                  <Icon aria-hidden="true" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright text-center">
      <p>جميع الحقوق محفوظة</p>
    </div>
  </footer>
);

export default Footer;