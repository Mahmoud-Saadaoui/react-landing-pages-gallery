import { features, lorem } from "./data";
import tablet1 from "./images/feature/tablet-1.webp";
import tablet2 from "./images/feature/tablet-2.webp";
import tablet3 from "./images/feature/tablet-3.webp";

const imgs = [tablet1, tablet2, tablet3];

export default function Features() {
  return (
    <section className="features bg-white py-[25px] text-right">
      <div className="title relative mb-5 text-center after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[150px] after:-translate-x-1/2 after:bg-[#7233a2] after:content-['']">
        <h3 className="text-[36px] leading-[120px] text-[#555]">مميزات المنتج</h3>
      </div>
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        {features.map((f, i) => {
          const rev = i % 2 === 1;
          return (
            <div
              className={`feature border-b-[3px] border-[#eeeeee] py-[70px] text-right last:border-b-0 ${
                rev ? "text-left max-md:text-right" : ""
              }`}
              key={i}
            >
              <div
                className={`media flex max-md:flex-col max-md:items-center ${
                  rev ? "max-md:flex-col-reverse" : ""
                }`}
              >
                {rev ? (
                  <>
                    <div className="media-body mt-[50px] flex-1">
                      <h5
                        className={`border-l-2 border-r-0 border-solid border-[#7233a2] px-5 text-[36px] font-bold text-[#7233a2] max-md:border-l-0 max-md:border-r-2 mb-[50px] ${
                          f.extra ? "mt-0" : ""
                        }`}
                      >
                        {f.title}
                      </h5>
                      <p className={`text-[18px] leading-[32px] text-[#555] ${f.extra ? "mb-2" : ""}`}>
                        {lorem}
                      </p>
                    </div>
                    <img src={imgs[i]} alt="Generic placeholder image" className="mx-[4rem] max-[900px]:mx-[2rem]" />
                  </>
                ) : (
                  <>
                    <img src={imgs[i]} alt="Generic placeholder image" className="mx-[4rem] max-[900px]:mx-[2rem]" />
                    <div className="media-body mt-[50px] flex-1">
                      <h5
                        className={`border-r-2 border-solid border-[#7233a2] px-5 text-[36px] font-bold text-[#7233a2] mb-[50px] ${
                          f.extra ? "mt-0" : ""
                        }`}
                      >
                        {f.title}
                      </h5>
                      <p className={`text-[18px] leading-[32px] text-[#555] ${f.extra ? "mb-2" : ""}`}>
                        {lorem}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}