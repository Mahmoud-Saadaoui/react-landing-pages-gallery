import { features } from "./data";

const containerCls =
  "mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]";

const Features = () => (
  <section className="features relative py-[100px] text-right">
    <div className={containerCls}>
      <h2 className="mb-[50px] text-[45px] text-[#555]">مميزات اللعبة</h2>
      <div className="-mx-[15px] flex flex-wrap">
        {features.map((feature) => (
          <div
            className="w-full px-[15px] sm:max-w-[50%] sm:flex-[0_0_50%] sm:text-right [&:nth-child(even)]:text-left"
            key={feature.title}
          >
            <div className="relative mb-[20px] flex max-h-[190px] items-start border-4 border-[#fafafa] px-[10px] py-[40px]">
              {!feature.reverse && <img src={feature.icon} alt="feature icon" />}
              <div className="flex-1">
                <h5 className="text-[24px] text-[#555]">{feature.title}</h5>
                <p className="text-[15px] leading-[25px] text-[#9c9c9c]">
                  {feature.description}
                </p>
              </div>
              {feature.reverse && <img src={feature.icon} alt="feature icon" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;