import { useState } from "react";
import { send1, send } from "./data";

const isValidEmail = (value) => {
  const atpos = value.indexOf("@");
  const dotpos = value.lastIndexOf(".");
  return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length);
};

const dangerAlertCls =
  "absolute left-0 right-0 top-[110%] mb-4 rounded-[0.25rem] border border-[#f5c6cb] bg-[#f8d7da] px-[1.25rem] py-[0.75rem] text-[#721c24]";
const successAlertCls =
  "absolute left-0 right-0 top-[110%] mb-4 rounded-[0.25rem] border border-[#c3e6cb] bg-[#d4edda] px-[1.25rem] py-[0.75rem] text-[#155724]";

const SubscribeForm = ({ variant }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const isHeader = variant === "header";

  const validate = () => setStatus(isValidEmail(email) ? "success" : "danger");

  const inputCls = `block h-auto min-w-0 w-full flex-1 rounded-none border-2 px-[0.75rem] py-[0.375rem] text-[18px] leading-[1.5] shadow-none focus:shadow-none ${
    isHeader
      ? "border-[#e6e6e6] text-[#e6e6e6] hover:border-[#e6e6e6] focus:border-[#e6e6e6]"
      : "border-white text-[#c7c7c7] hover:border-white focus:border-white"
  }`;
  const btnCls = `cursor-pointer rounded-none border border-transparent px-6 py-2 text-[#212529] leading-[1.5] shadow-none hover:border-transparent focus:border-transparent focus:shadow-none ${
    isHeader ? "bg-[#ffce00]" : "bg-[#393939]"
  }`;

  return (
    <form
      action="#"
      method="post"
      name={isHeader ? "myForm" : "myForm2"}
      className={isHeader ? "animate-zoom-in" : undefined}
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
    >
      <div className="mb-4">
        <div
          className={`relative mx-auto w-[30%] max-[768px]:w-[60%] ${
            isHeader ? "translate-y-[30%]" : ""
          }`}
        >
          <input
            type="email"
            placeholder="بريدك الالكترونى"
            name={isHeader ? "email" : "email2"}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validate}
            required
            className={inputCls}
          />
          <span className="flex">
            <button className={`${btnCls} Form-Submit`} type="submit" name="submit">
              <img src={isHeader ? send1 : send} alt="send" />
            </button>
          </span>

          <div
            className={dangerAlertCls}
            style={{ display: status === "danger" ? "block" : "none" }}
          >
            <strong>عذراً! </strong> لقد قمت بإدخال بريد الكتروني خاطئ.
          </div>

          <div
            className={successAlertCls}
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