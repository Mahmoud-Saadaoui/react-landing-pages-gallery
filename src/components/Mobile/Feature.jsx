import { featuresLeft, featuresRight, optionText } from "./data";
import mobile from "./images/mobile-2.webp";

const Media = ({ Icon, title, side }) => (
  <div className="media">
    {side === "left" ? (
      <>
        <div className="media-body">
          <h5 className="mt-0">{title}</h5>
          <p className="mb-2">{optionText}</p>
        </div>
        <Icon className="fa-2x d-flex align-self-start mr-3" aria-hidden="true" />
      </>
    ) : (
      <>
        <Icon className="fa-2x d-flex align-self-start ml-3" aria-hidden="true" />
        <div className="media-body">
          <h5 className="mt-0">{title}</h5>
          <p className="mb-2">{optionText}</p>
        </div>
      </>
    )}
  </div>
);

const Feature = () => (
  <section className="feature" id="feature">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md">
          <div className="features text-left">
            {featuresLeft.map((f) => (
              <Media key={f.title} {...f} side="left" />
            ))}
          </div>
        </div>
        <div className="col-md order-md-4">
          <div className="features">
            {featuresRight.map((f) => (
              <Media key={f.title} {...f} side="right" />
            ))}
          </div>
        </div>
        <div className="col-md order-md-1">
          <div className="mobile-img">
            <img src={mobile} alt="mobile-app" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Feature;