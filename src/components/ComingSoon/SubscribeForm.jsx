import { useState } from "react";
import { send1, send } from "./data";

const isValidEmail = (value) => {
  const atpos = value.indexOf("@");
  const dotpos = value.lastIndexOf(".");
  return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length);
};

const SubscribeForm = ({ variant }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const isHeader = variant === "header";

  const validate = () => setStatus(isValidEmail(email) ? "success" : "danger");

  return (
    <form
      action="#"
      method="post"
      name={isHeader ? "myForm" : "myForm2"}
      className={isHeader ? "wow animate__animated animate__zoomIn" : undefined}
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
    >
      <div className="form-group">
        <div className="input-group input-group-lg">
          <input
            type="email"
            className="form-control"
            placeholder="بريدك الالكترونى"
            name={isHeader ? "email" : "email2"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validate}
            required
          />
          <span className="input-group-btn">
            <button className="btn Form-Submit" type="submit" name="submit">
              <img src={isHeader ? send1 : send} alt="send" />
            </button>
          </span>

          <div
            className="alert alert-danger"
            style={{ display: status === "danger" ? "block" : "none" }}
          >
            <strong>عذراً! </strong> لقد قمت بإدخال بريد الكتروني خاطئ.
          </div>

          <div
            className="alert alert-success"
            style={{ display: status === "success" ? "block" : "none" }}
          >
            <strong>تهانينا، </strong> لقد تم ادخال بريدك الالكتروني بنجاح.
          </div>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;