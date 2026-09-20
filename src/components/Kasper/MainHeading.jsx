const MainHeading = ({ title, text }) => (
  <div data-reveal className="text-center">
    <h2 className="relative mb-[70px] text-[40px] font-normal uppercase before:absolute before:bottom-[-30px] before:left-1/2 before:h-[2px] before:w-[120px] before:-translate-x-1/2 before:bg-[#333] before:content-[''] after:absolute after:bottom-[-38px] after:left-1/2 after:h-[14px] after:w-[14px] after:-translate-x-1/2 after:rounded-full after:border-2 after:border-[#333] after:bg-white after:content-['']">
      {title}
    </h2>
    <p className="mx-auto mb-[100px] w-[550px] max-w-full leading-[2] text-[#777]">
      {text ??
        "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."}
    </p>
  </div>
);

export default MainHeading;