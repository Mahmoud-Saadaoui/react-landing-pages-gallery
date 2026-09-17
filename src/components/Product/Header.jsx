import { lorem } from "./data";
import logo from "./images/logo.png";
import slider from "./images/slider-1.webp";
import label from "./images/label.png";
import bg from "./images/bg.jpg";
import bgVideo from "./video/bg.mp4";

export default function Header() {
  return (
    <header className="header">
      <video autoPlay muted loop poster={bg}>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="overlay">
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="شعار المنتج" />
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="header-text">
                <h3>تابلت - 9.7 إنش, 16 جيجابايت الجيل الرابع اللون أسود</h3>
                <p>{lorem}</p>
                <div className="buttons">
                  <button type="button" className="btn">
                    شراء المنتج الآن
                  </button>
                  <button type="button" className="btn">
                    مميزات المنتج
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="product-img">
                <img src={slider} alt="product img" />
                <img src={label} alt="product label" className="label" />
                <p>
                  2,000
                  <span>ريال</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}