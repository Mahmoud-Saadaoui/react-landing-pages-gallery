import { servicesItems } from "./data";
import servicesImage from "./images/services.jpg";

const ServiceItem = ({ icon: Icon, title, text, style }) => (
  <div
    data-reveal
    style={style}
    className="mb-[40px] flex max-[767px]:flex-col max-[767px]:text-center"
  >
    <Icon size={32} className="shrink-0 basis-[60px] text-[#10cab7]" />
    <div className="flex-1">
      <h3 className="mt-0 mb-[20px]">{title}</h3>
      <p className="font-light text-[#444] leading-[1.6]">{text}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="py-[60px]" id="services">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div data-reveal>
        <h2 className="m-0 text-center text-[100px] font-extrabold leading-none tracking-[-3px] text-[#ebeced] max-[767px]:text-[60px]">
          Services
        </h2>
        <p className="-mt-[30px] text-center text-[20px] text-[#797979] max-[767px]:-mt-[20px]">
          Don&apos;t be busy, be productive
        </p>
      </div>
      <div className="mt-[100px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[30px]">
        <div>
          {servicesItems.slice(0, 2).map((item, index) => (
            <ServiceItem
              key={item.title}
              style={{ transitionDelay: `${index * 100}ms` }}
              {...item}
            />
          ))}
        </div>
        <div>
          {servicesItems.slice(2).map((item, index) => (
            <ServiceItem
              key={item.title}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              {...item}
            />
          ))}
        </div>
        <div>
          <div
            data-reveal
            style={{ transitionDelay: "400ms" }}
            className="relative text-center max-[1199px]:hidden"
          >
            <div className="absolute right-0 top-[-50px] -z-[1] h-[calc(100%+100px)] w-[100px] bg-[#2c4755]" />
            <img
              src={servicesImage}
              className="w-[260px]"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services;