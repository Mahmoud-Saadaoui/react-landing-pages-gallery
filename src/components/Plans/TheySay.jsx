import { avatarImage, testimonials } from "./data";

const TheySay = () => (
  <div className="they-say">
    <div className="container">
      <h2 className="h1 text-center">What They Say About Us</h2>
      {testimonials.map(({ name, text }) => (
        <div className="person-say float-left" key={name}>
          <div className="avatar float-left">
            <img className="responsive-image img-circle img-thumbnail" src={avatarImage} alt="" loading="lazy" />
          </div>
          <h3 className="float-left">{name}</h3>
          <p className="float-left">{text}</p>
        </div>
      ))}
    </div>
    <div className="clearfix"></div>
  </div>
);

export default TheySay;