import aboutImage from "./images/about.jpg";

const About = () => (
  <div className="pt-[60px] pb-[120px]" id="about">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="m-0 text-center text-[100px] font-extrabold leading-none tracking-[-3px] text-[#ebeced] max-[767px]:text-[60px]">
        About
      </h2>
      <p className="-mt-[30px] text-center text-[20px] text-[#797979] max-[767px]:-mt-[20px]">
        Less is more work
      </p>
      <div className="mt-[100px] flex flex-wrap justify-between max-[991px]:flex-col max-[991px]:text-center">
        <div className="relative h-[375px] w-[250px] max-[991px]:mx-auto max-[991px]:mb-[60px]">
          <div className="absolute top-[-40px] left-[-20px] -z-[1] h-[calc(100%+80px)] w-[100px] bg-[#ebeced] max-[991px]:hidden" />
          <div className="absolute top-[-40px] right-[-150px] -z-[1] h-[300px] w-[120px] border-b-[80px] border-l-[80px] border-[#10cab7] max-[991px]:hidden" />
          <img src={aboutImage} className="max-w-full" alt="" loading="lazy" />
        </div>
        <div className="basis-[calc(100%-500px)]">
          <p className="mb-[50px] font-bold leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo
            neque voluptate tempora velit cum non, fuga vitae architecto
            delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
            iusto laudantium!
          </p>
          <hr className="inline-block w-[50%] border-[#10cab7]" />
          <p className="text-[#777] leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
            officiis dolorum hic voluptate quaerat minima, similique inventore
            esse, alias, sed quo officia?
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;