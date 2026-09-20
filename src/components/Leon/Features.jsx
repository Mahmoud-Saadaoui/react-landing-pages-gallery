import { features } from "./data";

const Features = () => (
  <div className="bg-[#f6f6f6] py-[60px]">
    <div className="mx-auto grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[20px] px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      {features.map(({ icon: Icon, title, text }, index) => (
        <div
          data-reveal
          style={{ transitionDelay: `${index * 100}ms` }}
          className="p-[20px] text-center"
          key={title}
        >
          <Icon size={48} className="text-[#10cab7]" />
          <h3 className="my-[30px] font-extrabold">{title}</h3>
          <p className="text-[17px] leading-[1.8] text-[#777]">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;