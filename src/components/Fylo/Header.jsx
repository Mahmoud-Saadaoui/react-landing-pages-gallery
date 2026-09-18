import logoLight from "./images/logo-light-mode.svg";
import logoDark from "./images/logo-dark-mode.svg";

const Header = ({ dark, onToggle }) => (
  <header className="mx-auto mt-10 h-40 w-full px-6 text-center md:h-20 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
    <div
      className="mx-auto h-20 w-48 bg-no-repeat md:absolute top-10 left-10 md:mx-0"
      style={{ backgroundImage: `url(${dark ? logoDark : logoLight})` }}
    />

    <div className="flex items-center justify-center space-x-4 md:absolute top-12 right-10 md:space-x-10">
      <a href="#features" className="hover:text-[hsl(176_68%_64%)]">
        Features
      </a>
      <a href="#testimonials" className="hover:text-[hsl(176_68%_64%)]">
        Testimonials
      </a>

      <button
        type="button"
        onClick={onToggle}
        className="rounded-lg p-2 text-sm text-[#6b7280] hover:bg-[#f3f4f6] focus:outline-none focus:ring-4 focus:ring-[#e5e7eb] [.dark_&]:text-[#9ca3af] [.dark_&:hover]:bg-[#374151] [.dark_&:focus]:ring-[#374151]"
      >
        <svg
          className={`h-5 w-5${dark ? " hidden" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <svg
          className={`h-5 w-5${dark ? "" : " hidden"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;