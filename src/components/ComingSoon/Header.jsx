import { icon, slogn, heading, notifyText } from "./data";
import Countdown from "./Countdown";
import SubscribeForm from "./SubscribeForm";

const Header = () => (
  <header className="text-center">
    <div className="brand wow animate__animated animate__bounceIn">
      <div className="logo">
        <img src={icon} alt="شعار التطبيق" />
      </div>
      <div className="slogn">
        <img src={slogn} alt="شعار التطبيق" />
      </div>
    </div>

    <div className="page-heading wow animate__animated animate__fadeInUp">
      <h1>{heading.title}</h1>
      <p>{heading.description}</p>
    </div>

    <div className="counter wow animate__animated animate__fadeInDown">
      <Countdown />
    </div>

    <div className="send-notification wow animate__animated animate__zoomIn">
      <p>{notifyText}</p>
      <SubscribeForm variant="header" />
    </div>
  </header>
);

export default Header;