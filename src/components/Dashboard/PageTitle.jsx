const PageTitle = ({ children }) => (
  <h1 className="relative mx-[20px] my-[20px] mb-[40px] text-[2em] font-bold">
    {children}
    <span aria-hidden className="absolute -bottom-[10px] left-0 h-[3px] w-[120px] bg-white" />
    <span aria-hidden className="absolute -bottom-[10px] left-0 h-[3px] w-[40px] bg-black" />
  </h1>
);

export default PageTitle;