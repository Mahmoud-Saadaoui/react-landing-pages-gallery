import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { socialLinks, widgets } from "./data";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) setError("هذا الحقل إلزامي");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setError("رجاء إدخال عنوان بريد إلكتروني صحيح");
    else {
      setError("");
      setSent(true);
    }
  };

  return (
    <footer id="footer" className="overflow-hidden bg-[#232323] text-right">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:max-w-full md:flex-[1_1_0%]">
            <div className="widget">
              <div className="title relative mb-[35px] border-b-2 border-[#272727]">
                <h4 className="mb-0 text-[24px] text-[#f4f8fb] leading-[80px]">{widgets.about}</h4>
                <span className="absolute bottom-[-2px] right-0 inline-block h-[2px] w-[90px] bg-[#ef473a]" />
              </div>
              <div className="content">
                <p className="mb-0 text-[18px] leading-[40px] text-[#757474]">{widgets.aboutText}</p>
                <ul className="mt-[95px] flex list-none p-0">
                  {socialLinks.map((Icon, i) => (
                    <li className="mr-2" key={i}>
                      <a
                        href="#"
                        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#353638] text-center leading-[50px] text-white transition-colors hover:bg-[#ef473a] max-[990px]:h-10 max-[990px]:w-10 max-[990px]:leading-10"
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full px-[15px] md:max-w-full md:flex-[1_1_0%]">
            <div className="widget">
              <div className="title relative mb-[35px] border-b-2 border-[#272727]">
                <h4 className="mb-0 text-[24px] text-[#f4f8fb] leading-[80px]">{widgets.tweets}</h4>
                <span className="absolute bottom-[-2px] right-0 inline-block h-[2px] w-[90px] bg-[#ef473a]" />
              </div>
              <div className="content">
                <ul className="list-none p-0">
                  {Array.from({ length: 3 }, (_, i) => (
                    <li key={i} className="relative mb-[20px] border-b-2 border-[#2a2929] pb-[20px] pr-[5px] text-[15px] leading-[24px] text-[#757474] indent-[20px] last:mb-0 last:border-b-0">
                      <FaTwitter
                        aria-hidden="true"
                        className="absolute right-[-15px] top-[5px] text-[15px] leading-[1em] text-[#ef473a]"
                      />
                      {widgets.aboutText}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full px-[15px] md:max-w-full md:flex-[1_1_0%]">
            <div className="widget">
              <div className="title relative mb-[35px] border-b-2 border-[#272727]">
                <h4 className="mb-0 text-[24px] text-[#f4f8fb] leading-[80px]">{widgets.newsletter}</h4>
                <span className="absolute bottom-[-2px] right-0 inline-block h-[2px] w-[90px] bg-[#ef473a]" />
              </div>
              <div className="content">
                <form action="#" method="post" name="myForm" id="emailForm" onSubmit={submit} noValidate>
                  <div className="form-group">
                    <input
                      type="email"
                      className="mb-[15px] block w-full rounded-none border border-transparent bg-[#2c2b2b] px-3 py-[.375rem] text-[14px] leading-[25px] text-[#c6c6c6] placeholder:text-[#c6c6c6]"
                      placeholder="البريد الالكترونى"
                      required
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <span className="text-red-600">{error}</span>}
                    <button
                      className="inline-block rounded-none border border-transparent bg-[#ef473a] px-3 py-[.375rem] text-[14px] leading-[25px] text-white"
                      type="submit"
                      name="submit"
                      value="Submit"
                    >
                      أضفني للقائمة البريدية
                    </button>
                  </div>
                </form>
                {sent && <p style={{ color: "#ef473a" }}>تم الاشتراك بنجاح</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#262626]">
          <p className="mb-0 text-center text-[15px] leading-[70px] text-[#565656]">
            جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;