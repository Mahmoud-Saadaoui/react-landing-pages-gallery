import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { addresses } from "./data";
import { validateContact } from "./utils";

const Contacts = () => {
  const [values, setValues] = useState({ name: "", email: "", comment: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section className="contacts bg-white pt-[100px] text-right" id="contacts">
      <div className="mx-auto w-full px-[15px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:max-w-full md:grow md:basis-0">
            <div className="map">
              <iframe
                title="company map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.169232290924!2d55.272684514594665!3d25.19751478389605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4281e7878fd9%3A0x6e934c3edc4f07da!2sBurj+Khalifa+-+1+Sheikh+Mohammed+bin+Rashid+Blvd+-+Dubai+-+United+Arab+Emirates!5e0!3m2!1sen!2str!4v1513672333611"
                width="500"
                height="200"
                frameBorder="0"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
              />
            </div>
          </div>
          <div className="w-full px-[15px] md:max-w-full md:grow md:basis-0">
            <div className="info">
              <h3 className="text-[24px] font-bold leading-[50px] text-[#181c1c]">عنوان الشركة</h3>
              <ul className="m-0 list-none p-0">
                {addresses.map((a) => (
                  <li key={a} className="mb-[15px] text-[18px] leading-[25px] text-[#16aeca]">
                    <FaMapMarkerAlt className="ml-[6px] inline-block" aria-hidden="true" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:max-w-full md:flex-[0_0_100%]">
            <div className="form text-center">
              <h3 className="my-[50px] mx-auto mb-5 text-[24px] font-bold leading-[50px] text-[#181c1c]">
                تواصل معنا
              </h3>
              <form
                className="mx-auto mb-[50px] flex w-3/5 flex-wrap max-[767px]:w-full"
                id="commentForm"
                onSubmit={submit}
                noValidate
              >
                <div className="mb-4 w-full px-[15px] sm:flex-[0_0_50%] sm:max-w-[50%]">
                  <input
                    type="text"
                    id="cname"
                    name="name"
                    className={`block w-full rounded-[3px] border-2 border-[#eee] bg-[#f7f7f7] text-[15px] leading-[25px] text-[#5c5c5c]${
                      errors.name ? " error" : ""
                    }`}
                    placeholder="الاسم"
                    required
                    value={values.name}
                    onChange={set("name")}
                  />
                  {errors.name && <label className="error block text-[#ff0000]">{errors.name}</label>}
                </div>
                <div className="mb-4 w-full px-[15px] sm:flex-[0_0_50%] sm:max-w-[50%]">
                  <input
                    type="email"
                    id="cemail"
                    name="email"
                    className={`block w-full rounded-[3px] border-2 border-[#eee] bg-[#f7f7f7] text-[15px] leading-[25px] text-[#5c5c5c]${
                      errors.email ? " error" : ""
                    }`}
                    placeholder="البريد الالكترونى"
                    required
                    value={values.email}
                    onChange={set("email")}
                  />
                  {errors.email && <label className="error block text-[#ff0000]">{errors.email}</label>}
                </div>
                <div className="mb-4 w-full px-[15px] sm:flex-[0_0_100%] sm:max-w-full">
                  <textarea
                    className={`block w-full rounded-[3px] border-2 border-[#eee] bg-[#f7f7f7] text-[15px] leading-[25px] text-[#5c5c5c]${
                      errors.comment ? " error" : ""
                    }`}
                    id="ccomment"
                    name="comment"
                    placeholder="الرسالة"
                    required
                    value={values.comment}
                    onChange={set("comment")}
                  />
                  {errors.comment && <label className="error block text-[#ff0000]">{errors.comment}</label>}
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="mr-[15px] rounded-[3px] border-0 bg-[#16aeca] px-[25px] py-[10px] text-[15px] leading-[25px] text-white"
                  value="Submit"
                >
                  ارسال
                </button>
              </form>
              {sent && <p style={{ color: "#16aeca" }}>تم إرسال رسالتك بنجاح</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;