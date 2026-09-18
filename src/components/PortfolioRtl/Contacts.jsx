import { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaEnvelope,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { contactList, contactSocials, lorem, testimonials } from "./data";
import bg3 from "./images/bg3.webp";
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
      <div className="title mb-[27px] text-center">
        <h3 className="text-[30px] leading-[50px] text-white">آراء العملاء</h3>
      </div>
      <div className="slider mx-auto mb-[80px] w-[65%] max-[767px]:w-[95%]">
        <div id="testimonials-slider" className="carousel relative min-h-[250px] text-[#b1b1b1]">
          <ol className="absolute bottom-[12px] left-0 right-0 z-[15] m-0 flex list-none justify-center p-0">
            {testimonials.map((t, i) => (
              <li
                key={i}
                data-slide-to={i}
                className={`mx-[3px] h-[15px] w-[15px] max-w-[15px] cursor-pointer flex-[0_1_auto] rounded-full border border-[#0575e6] bg-white text-indent-[-999px] ${
                  i === index ? "active bg-[#0575e6]" : ""
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </ol>
          <div className="carousel-inner relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`carousel-item relative min-h-[350px] w-full max-[990px]:min-h-[390px] ${i === index ? "block" : "hidden"}`}
              >
                <div className="carousel-caption absolute bottom-[20px] left-0 right-0 w-full bg-white px-[70px] pb-[35px] pt-[80px] text-center max-[767px]:px-[30px] max-[767px]:pt-[60px] max-[767px]:pb-[20px]">
                  <img
                    className="absolute right-1/2 top-0 z-10 translate-x-[50%] -translate-y-1/2 rounded-full"
                    alt="person"
                    src={slides[i]}
                  />
                  <h3 className="mb-[15px] text-[18px] text-[#555555]">
                    {t.name}
                    <span className="text-[15px] text-[#9c9c9c]">- {t.role}</span>
                  </h3>
                  <p className="mb-[25px] text-[15px] leading-[22px] text-[#b1b1b1]">{lorem}</p>
                  <ul className="m-0 flex list-none items-center justify-center p-0 pb-[15px] pr-0">
                    {t.socials.map((Icon, j) => (
                      <li className="mr-[5px]" key={j}>
                        <a href="#" className="text-[24px] text-[#b2d8fe]">
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
            className="carousel-control-prev absolute left-0 top-1/2 z-10 flex -translate-x-[50%] -translate-y-1/2 no-underline"
            href="#testimonials-slider"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + testimonials.length - 1) % testimonials.length);
            }}
          >
            <FaAngleLeft className="rounded-full bg-[#0575e6] p-[10px_20px] text-[28px] text-white" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next absolute right-0 top-1/2 z-10 flex translate-x-[50%] -translate-y-1/2 no-underline"
            href="#testimonials-slider"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + 1) % testimonials.length);
            }}
          >
            <FaAngleRight className="rounded-full bg-[#0575e6] p-[10px_20px] text-[28px] text-white" aria-hidden="true" />
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

  const field = (err) =>
    `block w-full rounded-[3px] border-2 bg-white text-[18px] leading-[35px] text-[#c2c2c2] outline-none pr-[45px] transition-colors max-[990px]:text-[14px] placeholder:text-[#c2c2c2] ${
      err ? "border-red-600" : "border-[#f1f1f1]"
    }`;

  return (
    <form className="cmxform -mx-[15px] flex flex-wrap" id="commentForm" onSubmit={onSubmit} noValidate>
      <div className="form-group relative mb-4 w-full px-[15px] sm:max-w-[50%] sm:flex-[0_0_50%]">
        <FaUser className="icon absolute right-[30px] top-[8px] z-[2] text-[18px] leading-[25px] text-[#0575e6] pointer-events-none" aria-hidden="true" />
        <input
          type="text"
          id="cname"
          name="name"
          autoComplete="name"
          className={field(errors.name)}
          placeholder="الاسم"
        />
        {errors.name && <label className="error text-red-600">{errors.name}</label>}
      </div>
      <div className="form-group relative mb-4 w-full px-[15px] sm:max-w-[50%] sm:flex-[0_0_50%]">
        <FaEnvelope className="icon absolute right-[30px] top-[8px] z-[2] text-[18px] leading-[25px] text-[#0575e6] pointer-events-none" aria-hidden="true" />
        <input
          type="email"
          id="cemail"
          name="email"
          autoComplete="email"
          className={field(errors.email)}
          placeholder="البريد الالكترونى"
        />
        {errors.email && <label className="error text-red-600">{errors.email}</label>}
      </div>
      <div className="form-group relative mb-4 w-full px-[15px] sm:max-w-full sm:flex-[0_0_100%]">
        <textarea
          autoComplete="off"
          className={`${field(errors.comment)} max-h-[220px] min-h-[220px]`}
          id="ccomment"
          name="comment"
          placeholder="الرسالة"
        />
        {errors.comment && <label className="error text-red-600">{errors.comment}</label>}
      </div>
      <button
        type="submit"
        name="submit"
        className="submit Form-Submit mr-[15px] cursor-pointer rounded-[3px] border-2 border-[#0575e6] bg-white p-[10px_70px] text-[24px] leading-[25px] text-[#0575e6]"
        value="Submit"
      >
        ارسال
      </button>
      {sent && <p className="sent mx-[15px] mt-[15px] text-[#0575e6]">تم إرسال رسالتك بنجاح</p>}
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info bg-white p-[50px]" id="contact-info">
      <div className="title mb-[35px] text-center">
        <h3 className="text-[30px] leading-[50px] text-[#0575e6]">تواصل معي</h3>
      </div>
      <div className="-mx-[15px] flex flex-wrap">
        <div className="w-full px-[15px] md:max-w-[66.666667%] md:flex-[0_0_66.666667%]">
          <div className="form">
            <CommentForm />
          </div>
        </div>
        <div className="w-full px-[15px] md:max-w-[33.333333%] md:flex-[0_0_33.333333%]">
          <ul className="contact-us list-none p-0">
            {contactList.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] leading-[30px] text-[#0575e6] lg:flex-row min-[768px]:max-[990px]:flex-col min-[768px]:max-[990px]:items-center min-[768px]:max-[990px]:text-center min-[768px]:max-[990px]:break-words"
              >
                <c.Icon aria-hidden="true" />
                {c.text}
              </li>
            ))}
          </ul>
          <hr className="border-t border-[#f1f1f1] mx-0 my-4" />
          <ul className="social m-0 flex list-none p-0">
            {contactSocials.map((s, i) => (
              <li className="mr-[9px]" key={i}>
                <a
                  href="#"
                  className={`flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#9bc8f5] text-center leading-[50px] text-white transition-colors duration-300 hover:bg-[#0575e6] max-[990px]:h-10 max-[990px]:w-10 max-[990px]:leading-10`}
                >
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
    <section
      className="contacts bg-cover bg-center text-right"
      id="contacts"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="bg-black/60 pt-[100px] pb-[0px]">
        <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <Testimonials />
          <ContactInfo />
          <div className="copyright text-center">
            <p className="mb-0 text-[18px] leading-[77px] text-[#ececec]">جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </section>
  );
}