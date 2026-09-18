import { services, serviceText } from "./data";

const Services = () => (
  <section className="services py-20" id="services">
    <div className="title mb-[50px] text-center">
      <h2 className="text-[40px] leading-[60px]">خدمات الشركة</h2>
    </div>
    <div className="mx-auto w-full px-[15px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="-mx-[15px] flex flex-wrap">
        {services.map(({ img, title }) => (
          <div className="group w-full px-[15px] md:max-w-full md:grow md:basis-0" key={title}>
            <div className="mb-5 h-[250px] w-full bg-white transition-all duration-1000 group-hover:h-[350px] max-[980px]:h-[290px]">
              <div className="text-center">
                <img src={img} alt="Card image cap" className="mx-auto mt-10 w-[140px]" />
              </div>
              <div className="p-5 text-center">
                <h4 className="text-[24px] leading-[35px] text-[#070c0c]">{title}</h4>
                <p className="text-[15px] leading-5 text-[#919191] opacity-0 transition-all duration-1000 group-hover:opacity-100">
                  {serviceText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;