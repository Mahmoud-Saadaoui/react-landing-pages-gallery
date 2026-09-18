import { features } from "./data";

const container = "relative mx-auto w-[1200px] max-w-full";

const Features = () => (
  <div className="features overflow-hidden py-[80px] text-center" data-section="features">
    <div className={container}>
      {features.map(({ icon: Icon, title }) => (
        <div className="float-left mr-[4%] w-[22%] last:mr-0" key={title}>
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#CCC] text-[#f7600e] leading-[120px] transition-all duration-500 ease-in-out hover:border-[#f7600e] hover:bg-[#f7600e] hover:text-white">
            <Icon className="text-[3em]" />
          </div>
          <h3 className="font-normal uppercase text-[#505050]">{title}</h3>
          <p className="leading-[2] text-[#888]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
