const Toggle = ({ defaultChecked, small }) => (
  <label className="relative inline-flex cursor-pointer">
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="peer sr-only"
    />
    <div
      className={`relative rounded-full bg-[#ccc] transition-colors duration-300 peer-checked:bg-[#0075ff] [&>i>span:first-child]:opacity-100 [&>i>span:last-child]:opacity-0 peer-checked:[&>i>span:first-child]:opacity-0 peer-checked:[&>i>span:last-child]:opacity-100 ${
        small
          ? "h-[20px] w-[78px] peer-checked:[&>i]:left-[62px]"
          : "h-[32px] w-[78px] peer-checked:[&>i]:left-[50px]"
      }`}
    >
      <i
        className={`absolute left-[4px] top-[4px] flex items-center justify-center rounded-full bg-white transition-all duration-300 ${
          small ? "h-[12px] w-[12px]" : "h-[24px] w-[24px]"
        }`}
      >
        <span className={`absolute flex items-center justify-center text-[#aaa] ${small ? "text-[8px]" : "text-[14px]"}`}>
          &times;
        </span>
        <span className={`absolute flex items-center justify-center text-[#0075ff] ${small ? "text-[8px]" : "text-[14px]"}`}>
          &#10003;
        </span>
      </i>
    </div>
  </label>
);

export default Toggle;