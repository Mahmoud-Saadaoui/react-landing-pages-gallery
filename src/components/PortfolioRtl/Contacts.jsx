import { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaEnvelope,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { contactList, contactSocials, lorem, testimonials } from "./data";
import slider1 from "./images/slider/1.jpg";
import slider2 from "./images/slider/2.jpg";
import slider3 from "./images/slider/3.jpg";
import slider4 from "./images/slider/4.jpg";

const slides = [slider1, slider2, slider3, slider4];

const MESSAGES = {
  required: "يرجى إدخال هذا الحقل.",
  email: "يرجى إدخال بريد إلكتروني صحيح.",
};

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="testimonials" id="testimonials">
      <div className="title text-center">
        <h3>آراء العملاء</h3>
      </div>
      <div className="slider">
        <div id="testimonials-slider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {testimonials.map((t, i) => (
              <li
                key={i}
                data-slide-to={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </ol>
          <div className="carousel-inner">
            {testimonials.map((t, i) => (
              <div key={i} className={`carousel-item${i === index ? " active" : ""}`}>
                <div className="carousel-caption">
                  <img className="d-block rounded-circle" alt="person" src={slides[i]} />
                  <h3>
                    {t.name}
                    <span>- {t.role}</span>
                  </h3>
                  <p>{lorem}</p>
                  <ul className="list-inline">
                    {t.socials.map((Icon, j) => (
                      <li className="list-inline-item" key={j}>
                        <a href="">
                          <Icon aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonials-slider"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + testimonials.length - 1) % testimonials.length);
            }}
          >
            <FaAngleLeft className="fa-2x" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next"
            href="#testimonials-slider"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + 1) % testimonials.length);
            }}
          >
            <FaAngleRight className="fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

function CommentForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = (values) => {
    const e = {};
    if (!values.name || values.name.trim().length < 2) e.name = MESSAGES.required;
    if (!values.email) e.email = MESSAGES.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = MESSAGES.email;
    if (!values.comment || !values.comment.trim()) e.comment = MESSAGES.required;
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    const err = validate(values);
    setErrors(err);
    setSent(false);
    if (Object.keys(err).length === 0) setSent(true);
  };

  return (
    <form className="cmxform row" id="commentForm" onSubmit={onSubmit} noValidate>
      <div className="form-group col-sm-6">
        <FaUser className="icon" aria-hidden="true" />
        <input
          type="text"
          id="cname"
          name="name"
          autoComplete="name"
          className={`form-control${errors.name ? " is-invalid" : ""}`}
          placeholder="الاسم"
        />
        {errors.name && <label className="error">{errors.name}</label>}
      </div>
      <div className="form-group col-sm-6">
        <FaEnvelope className="icon" aria-hidden="true" />
        <input
          type="email"
          id="cemail"
          name="email"
          autoComplete="email"
          className={`form-control${errors.email ? " is-invalid" : ""}`}
          placeholder="البريد الالكترونى"
        />
        {errors.email && <label className="error">{errors.email}</label>}
      </div>
      <div className="form-group col-sm-12">
        <textarea
          autoComplete="off"
          className={`form-control${errors.comment ? " is-invalid" : ""}`}
          id="ccomment"
          name="comment"
          placeholder="الرسالة"
        />
        {errors.comment && <label className="error">{errors.comment}</label>}
      </div>
      <button type="submit" name="submit" className="submit Form-Submit" value="Submit">
        ارسال
      </button>
      {sent && <p className="sent">تم إرسال رسالتك بنجاح</p>}
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info" id="contact-info">
      <div className="title text-center">
        <h3>تواصل معي</h3>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="form">
            <CommentForm />
          </div>
        </div>
        <div className="col-md-4">
          <ul className="contact-us list-unstyled">
            {contactList.map((c, i) => (
              <li key={i}>
                <c.Icon aria-hidden="true" />
                {c.text}
              </li>
            ))}
          </ul>
          <hr />
          <ul className="social list-inline">
            {contactSocials.map((s, i) => (
              <li className="list-inline-item" key={i}>
                <a href="" className={s.cls}>
                  <s.Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="overlay">
        <div className="container">
          <Testimonials />
          <ContactInfo />
          <div className="copyright text-center">
            <p>جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </section>
  );
}