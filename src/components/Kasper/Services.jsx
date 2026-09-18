import MainHeading from "./MainHeading";
import { services } from "./data";

const Services = () => (
  <div className="py-[100px]">
    <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <MainHeading title="Services" />
      <div className="md:grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] md:gap-x-[40px] md:gap-y-[60px]">
        {services.map((srv, index) => (
          <div
            className="flex max-[767px]:mb-[40px] max-[767px]:flex-col max-[767px]:text-center"
            key={index}
          >
            <srv.icon
              aria-hidden="true"
              className="mr-[50px] text-[3em] max-[767px]:mb-[30px] max-[767px]:mr-0"
            />
            <div className="text">
              <h3 className="mb-[30px] text-[#19c8fa]">{srv.title}</h3>
              <p className="leading-[2] text-[#777]">{srv.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;