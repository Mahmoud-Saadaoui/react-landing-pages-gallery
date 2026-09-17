import { options, optionText } from "./data";
import mobile from "./images/mobile-3.webp";

const Option = () => (
  <section className="option" id="option">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 order-lg-5 col-md-7 order-md-5">
          <div className="options">
            {options.map(({ icon, title }) => (
              <div className="media" key={title}>
                <img className="d-flex align-self-start ml-3" src={icon} alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0">{title}</h5>
                  <p className="mb-2">{optionText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-5 order-lg-1 col-md-5 order-md-1">
          <div className="images">
            <img src={mobile} alt="app-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Option;