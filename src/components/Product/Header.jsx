import { lorem } from "./data";
import logo from "./images/logo.png";
import slider from "./images/slider-1.webp";
import label from "./images/label.png";
import bg from "./images/bg.jpg";
import bgVideo from "./video/bg.mp4";

export default function Header() {
  return (
    <header className="relative max-[900px]:overflow-x-hidden">
      <video autoPlay muted loop poster={bg} className="fixed -z-10 min-h-full min-w-full">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="overlay bg-white/70">
        <nav className="navbar mb-[26px] flex items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="شعار المنتج" />
          </a>
        </nav>
        <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="row -mx-[15px] flex flex-wrap">
            <div className="col-md-7 w-full px-[15px] md:flex-none md:w-[58.3333%]">
              <div className="header-text mt-28">
                <h3 className="mb-10 text-[36px] leading-[46px]">تابلت - 9.7 إنش, 16 جيجابايت الجيل الرابع اللون أسود</h3>
                <p className="mb-[50px] text-[18px] leading-[32px] text-[#5d5d5d]">{lorem}</p>
                <div className="buttons max-[900px]:mb-[50px]">
                  <button
                    type="button"
                    className="btn ml-[15px] rounded-none bg-[#7233a2] px-[25px] py-2 text-[18px] leading-[32px] text-white"
                  >
                    شراء المنتج الآن
                  </button>
                  <button
                    type="button"
                    className="btn rounded-none bg-transparent px-[25px] py-2 text-[18px] leading-[32px] text-[#7936b2] transition-all duration-500 hover:bg-[#7233a2] hover:text-white"
                  >
                    مميزات المنتج
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 w-full px-[15px] md:flex-none md:w-[41.6667%]">
              <div className="product-img relative mb-[30px]">
                <img
                  src={slider}
                  alt="product img"
                  className="max-[900px]:w-[120%] max-[768px]:w-full"
                />
                <img
                  src={label}
                  alt="product label"
                  className="label absolute -right-[50px] -top-[50px] max-[768px]:left-0 max-[768px]:right-0 max-[768px]:mx-auto max-[768px]:top-[-30px] max-[500px]:mx-auto max-[500px]:top-[-20px] max-[500px]:w-[120px]"
                />
                <p className="absolute right-0 top-[-30px] text-center text-[24px] text-white max-[768px]:left-0 max-[768px]:right-0 max-[768px]:mx-auto max-[768px]:top-[-4px] max-[500px]:text-[18px]">
                  2,000
                  <span className="block">ريال</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}