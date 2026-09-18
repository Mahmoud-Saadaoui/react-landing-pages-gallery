import { contactInfo, footerSocials, serviceText } from "./data";

const Footer = () => (
  <footer>
    <div className="top-footer bg-[#171717] py-[75px] text-right">
      <div className="mx-auto w-full px-[15px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:max-w-full md:grow md:basis-0">
            <h3 className="relative mb-[30px] text-[18px] leading-[45px] text-[#85ecff] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-[35px] after:bg-[#5c5c5c] after:content-['']">
              عن الشركة
            </h3>
            <p className="mb-[50px] text-[15px] leading-[22px] text-[#919191]">{serviceText}</p>
            <ul className="m-0 flex list-none p-0">
              {footerSocials.map(({ Icon, cls }) => (
                <li className="mr-[5px]" key={cls}>
                  <a href="" className={`group inline-block ${cls}`}>
                    <span className="flex h-[35px] w-[35px] items-center justify-center rounded-[2px] bg-[#333] text-center text-[#acacac] transition-all duration-500 group-hover:bg-[#16aeca]">
                      <Icon aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-[15px] md:max-w-full md:grow md:basis-0">
            <h3 className="relative mb-[30px] text-[18px] leading-[45px] text-[#85ecff] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-[35px] after:bg-[#5c5c5c] after:content-['']">
              الاتصال بالشركة
            </h3>
            <ul className="m-0 list-none p-0">
              {contactInfo.map(({ Icon, text }) => (
                <li key={text} className="mb-[35px] text-[18px] text-[#676767] last:mb-0">
                  <span className="mr-[20px] inline-flex h-[35px] w-[35px] items-center justify-center rounded-[2px] bg-[#282828] text-center text-[#acacac]">
                    <Icon aria-hidden="true" />
                  </span>{" "}
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright bg-[#111] text-center">
      <p className="mb-0 text-[15px] leading-[78px] text-[#919191]">جميع الحقوق محفوظة</p>
    </div>
  </footer>
);

export default Footer;