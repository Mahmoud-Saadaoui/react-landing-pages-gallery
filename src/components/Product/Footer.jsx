import { footerSocials } from "./data";

export default function Footer() {
  return (
    <footer className="footer bg-[#1d1d1d] text-right leading-[80px]">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="row -mx-[15px] flex flex-wrap">
          <div className="col-sm grow basis-0 px-[15px] max-w-full max-md:basis-auto">
            <ul className="list-inline flex flex-wrap max-md:justify-center max-md:pt-5">
              {footerSocials.map((s, i) => (
                <li className="list-inline-item ml-[10px]" key={i}>
                  <a
                    href="#"
                    className={`${s.cls} flex h-10 w-10 items-center justify-center rounded-full bg-[#718292] text-[#1d1d1d] hover:bg-[#1479ec]`}
                  >
                    <s.Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm grow basis-0 px-[15px] max-w-full max-md:basis-auto">
            <div className="copyright">
              <p className="mb-0 text-left text-[15px] text-[#919191] max-md:mb-0 max-md:text-center">
                جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}