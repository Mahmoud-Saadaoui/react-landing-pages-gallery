import { useState } from "react";
import { socialLinks, widgets } from "./data";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) setError("هذا الحقل إلزامي");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setError("رجاء إدخال عنوان بريد إلكتروني صحيح");
    else {
      setError("");
      setSent(true);
    }
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-md">
              <div className="widget">
                <div className="title">
                  <h4>{widgets.about}</h4>
                </div>
                <div className="content">
                  <p>{widgets.aboutText}</p>
                  <ul className="social-links list-inline">
                    {socialLinks.map((Icon, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          <Icon aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="widget">
                <div className="title">
                  <h4>{widgets.tweets}</h4>
                </div>
                <div className="content">
                  <ul className="twittes list-unstyled">
                    {Array.from({ length: 3 }, (_, i) => (
                      <li key={i}>{widgets.aboutText}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="widget">
                <div className="title">
                  <h4>{widgets.newsletter}</h4>
                </div>
                <div className="content">
                  <form action="#" method="post" name="myForm" id="emailForm" onSubmit={submit} noValidate>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="البريد الالكترونى"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error && <span className="error">{error}</span>}
                      <button className="btn Form-Submit" type="submit" name="submit" value="Submit">
                        أضفني للقائمة البريدية
                      </button>
                    </div>
                  </form>
                  {sent && <p style={{ color: "#ef473a" }}>تم الاشتراك بنجاح</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text-center">جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;