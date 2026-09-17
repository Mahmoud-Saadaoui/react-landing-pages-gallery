import { FaApple } from "react-icons/fa";
import { appIcon, bannerText, heading, playButton } from "./data";
import phone from "./images/mobile-1.webp";

const Banner = () => (
  <section className="banner" id="banner">
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-7 col-md-7 order-md-7">
            <div className="app-icon wow animate__animated" data-wow="fadeInUp">
              <img src={appIcon} alt="app-icon" />
            </div>
            <div className="banner-text">
              <h1 className="wow animate__animated" data-wow="fadeInDown">
                {heading}
              </h1>
              <p className="wow animate__animated" data-wow="fadeInDown">
                {bannerText}
              </p>
              <button type="button" className="btn btn-lg text-right wow animate__animated" data-wow="flipInY">
                <img src={playButton} alt="" />
                <p className="mr-3 mb-0">
                  حمل التطبيق من
                  <br />
                  <span className="font-weight-bold">متجر جوجل</span>
                </p>
              </button>
              <button type="button" className="btn btn-lg text-right wow animate__animated" data-wow="flipInY">
                <FaApple aria-hidden="true" style={{ fontSize: 50 }} />
                <p className="mr-3 mb-0">
                  حمل التطبيق من
                  <br />
                  <span className="font-weight-bold">متجر أبل</span>
                </p>
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 order-lg-1 col-md-5 order-md-1">
            <div className="images wow animate__animated" data-wow="fadeInUp">
              <img src={phone} alt="app-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;