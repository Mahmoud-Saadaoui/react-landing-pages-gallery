const CtaButtons = () => (
  <div className="flex w-full flex-col justify-center space-y-6 text-xl text-white md:flex-row md:space-x-6 md:space-y-0">
    <a
      href="#"
      className="rounded-full bg-[hsl(171_66%_44%)] p-4 px-8 shadow-lg duration-200 hover:opacity-80"
    >
      Download for iOS
    </a>
    <a
      href="#"
      className="rounded-full bg-[hsl(233_100%_69%)] p-4 px-8 shadow-lg duration-200 hover:opacity-80"
    >
      Download for Mac
    </a>
  </div>
);

export default CtaButtons;