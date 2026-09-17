import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { loremShort, otherProducts } from "./data";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

const MESSAGES = {
  required: "يرجى إدخال هذا الحقل.",
  email: "يرجى إدخال بريد إلكتروني صحيح.",
};

function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = (values) => {
    const err = {};
    if (!values.name || !values.name.trim()) err.name = MESSAGES.required;
    if (!values.email) err.email = MESSAGES.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) err.email = MESSAGES.email;
    if (!values.comment || !values.comment.trim()) err.comment = MESSAGES.required;
    return err;
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
    <form id="commentForm" onSubmit={onSubmit} noValidate>
      <div className="form-group">
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
      <div className="form-group">
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
      <div className="form-group">
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
        <FaAngleDoubleLeft aria-hidden="true" />
      </button>
      {sent && <p className="sent">تم إرسال رسالتك بنجاح</p>}
    </form>
  );
}

export default function Contact() {
  const imgs = [img1, img2];
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="contact-us">
              <div className="title">
                <h4>تواصل معنا</h4>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-md">
            <div className="other-products">
              <div className="title">
                <h4>المنتجات الأكثر مشاهدة</h4>
              </div>
              {otherProducts.map((p, i) => (
                <div className="media" key={i}>
                  <img src={imgs[i]} alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>{p.title}</h5>
                    <p>{loremShort}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}