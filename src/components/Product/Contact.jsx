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
      <div className="mb-[6px]">
        <input
          type="text"
          id="cname"
          name="name"
          autoComplete="name"
          className={`block w-full rounded-[3px] border-none bg-[#242424] px-3 py-1.5 text-[18px] leading-[35px] text-[#aeadad]${
            errors.name ? " border border-red-600" : ""
          }`}
          placeholder="الاسم"
        />
        {errors.name && <label className="text-[red]">{errors.name}</label>}
      </div>
      <div className="mb-[6px]">
        <input
          type="email"
          id="cemail"
          name="email"
          autoComplete="email"
          className={`block w-full rounded-[3px] border-none bg-[#242424] px-3 py-1.5 text-[18px] leading-[35px] text-[#aeadad]${
            errors.email ? " border border-red-600" : ""
          }`}
          placeholder="البريد الالكترونى"
        />
        {errors.email && <label className="text-[red]">{errors.email}</label>}
      </div>
      <div className="mb-[6px]">
        <textarea
          autoComplete="off"
          className={`block w-full rounded-[3px] border-none bg-[#242424] px-3 py-1.5 text-[18px] leading-[35px] text-[#aeadad]${
            errors.comment ? " border border-red-600" : ""
          }`}
          id="ccomment"
          name="comment"
          placeholder="الرسالة"
        />
        {errors.comment && <label className="text-[red]">{errors.comment}</label>}
      </div>
      <button type="submit" name="submit" className="submit Form-Submit border-0 bg-[#7233a2] px-6 py-[7px] text-[18px] text-white">
        ارسال
        <FaAngleDoubleLeft aria-hidden="true" />
      </button>
      {sent && <p className="sent mt-[10px] text-[#a044ff]">تم إرسال رسالتك بنجاح</p>}
    </form>
  );
}

export default function Contact() {
  const imgs = [img1, img2];
  return (
    <section className="contact bg-[#131313] pt-[60px] pb-10 text-right">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="row -mx-[15px] flex flex-wrap">
          <div className="col-md grow basis-0 px-[15px]">
            <div className="contact-us">
              <div className="title">
                <h4 className="text-[18px] leading-[50px] text-[#758594]">تواصل معنا</h4>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-md grow basis-0 px-[15px]">
            <div className="other-products">
              <div className="title">
                <h4 className="text-[18px] leading-[50px] text-[#758594]">المنتجات الأكثر مشاهدة</h4>
              </div>
              {otherProducts.map((p, i) => (
                <div className="media mb-[25px] flex items-start" key={i}>
                  <img src={imgs[i]} alt="Generic placeholder image" className="ml-5" />
                  <div className="media-body flex-1">
                    <h5 className="mb-[15px] text-[18px] text-[#aeadad]">{p.title}</h5>
                    <p className="text-[15px] leading-5 text-[#737373]">{loremShort}</p>
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