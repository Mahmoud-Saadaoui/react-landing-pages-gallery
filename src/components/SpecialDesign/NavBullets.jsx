import { sections } from "./data";

const NavBullets = ({ visible, onNavigate }) => (
  <div
    className="fixed right-0 top-1/2 z-[1000] w-10 -translate-y-1/2"
    style={{ display: visible ? "block" : "none" }}
  >
    {sections.map(({ bullet, selector }) => (
      <div
        className="group relative mx-auto my-5 h-5 w-5 cursor-pointer rounded-full border-[3px] border-[var(--main-color)]"
        data-section={selector}
        key={selector}
        onClick={() => onNavigate(selector)}
      >
        <div className="pointer-events-none absolute right-8 -top-[10px] hidden w-[120px] cursor-default bg-[var(--main-color)] px-[10px] py-2 text-center text-white group-hover:block">
          {bullet}
          <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 border-[10px] border-transparent border-l-[var(--main-color)]" />
        </div>
      </div>
    ))}
  </div>
);

export default NavBullets;