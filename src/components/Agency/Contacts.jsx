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
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-md">
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
          <div className="col-md">
            <div className="info">
              <h3>عنوان الشركة</h3>
              <ul className="list-unstyled">
                {addresses.map((a) => (
                  <li key={a}>
                    <FaMapMarkerAlt aria-hidden="true" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form text-center">
              <h3>تواصل معنا</h3>
              <form className="cmxform row" id="commentForm" onSubmit={submit} noValidate>
                <div className="form-group col-sm-6">
                  <input
                    type="text"
                    id="cname"
                    name="name"
                    className={`form-control${errors.name ? " error" : ""}`}
                    placeholder="الاسم"
                    required
                    value={values.name}
                    onChange={set("name")}
                  />
                  {errors.name && <label className="error">{errors.name}</label>}
                </div>
                <div className="form-group col-sm-6">
                  <input
                    type="email"
                    id="cemail"
                    name="email"
                    className={`form-control${errors.email ? " error" : ""}`}
                    placeholder="البريد الالكترونى"
                    required
                    value={values.email}
                    onChange={set("email")}
                  />
                  {errors.email && <label className="error">{errors.email}</label>}
                </div>
                <div className="form-group col-sm-12">
                  <textarea
                    className={`form-control${errors.comment ? " error" : ""}`}
                    id="ccomment"
                    name="comment"
                    placeholder="الرسالة"
                    required
                    value={values.comment}
                    onChange={set("comment")}
                  />
                  {errors.comment && <label className="error">{errors.comment}</label>}
                </div>
                <button type="submit" name="submit" className="submit Form-Submit" value="Submit">
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