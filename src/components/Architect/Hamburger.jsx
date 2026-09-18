const Hamburger = ({ open, onToggle }) => (
  <div
    className="hamburger-menu group/menu fixed right-[5rem] top-[5rem] z-[200] flex h-[3rem] w-[3rem] cursor-pointer flex-col justify-evenly transition-[right] duration-700 [.group\/change.change_&]:right-[33rem] max-[500px]:[.group\/change.change_&]:right-[38rem]"
    onClick={onToggle}
    role="button"
    tabIndex={0}
    aria-label="Toggle menu"
    aria-expanded={open}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onToggle();
    }}
  >
    <div className="line-1 h-[0.2rem] w-full bg-white shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.2)] [.group\/change.change_&]:bg-[rgba(0,0,0,0.8)] [.group\/change.change_&]:[transform:rotate(45deg)_translate(0.3rem,0.8rem)]" />
    <div className="line-2 h-[0.2rem] w-full bg-white shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.2)] [.group\/change.change_&]:invisible [.group\/change.change_&]:bg-[rgba(0,0,0,0.8)] [.group\/change.change_&]:opacity-0" />
    <div className="line-3 h-[0.2rem] w-full bg-white shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.2)] [.group\/change.change_&]:bg-[rgba(0,0,0,0.8)] [.group\/change.change_&]:[transform:rotate(-45deg)_translate(0.3rem,-0.8rem)]" />
    <span className="absolute left-[5rem] flex h-[4rem] w-[10rem] items-center justify-center bg-[#e2b646] text-[1.6rem] tracking-[0.1rem] text-white opacity-0 transition-all duration-200 invisible [.group\/change.change_&]:group-hover/menu:opacity-100 [.group\/change.change_&]:group-hover/menu:visible">
      Close
      <span className="absolute left-[-2rem] top-1/2 -translate-y-1/2 border-[1rem] border-l-transparent border-r-[#e2b646] border-y-transparent" />
    </span>
  </div>
);

export default Hamburger;