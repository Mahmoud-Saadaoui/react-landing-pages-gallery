import { useCountdown } from "../../hooks/useCountdown";
import { countdownLabels } from "./data";

const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const toArabicDigits = (value) =>
  String(value).replace(/\d/g, (digit) => ARABIC_DIGITS[digit]);

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  const values = [days, hours, minutes, seconds];

  return (
    <div className="border border-[#ccc] bg-[#eee]">
      <div className="clear-both w-full px-[2px] text-center">
        {values.map((value, index) => (
          <div
            className="float-left mx-[20px] inline-block w-[24.5%] text-center text-[75%]"
            key={countdownLabels[index]}
          >
            <span className="block text-[60px] font-bold text-[#ffce00] max-[768px]:text-[40px]">
              {toArabicDigits(value)}
            </span>
            <span className="block text-[30px] font-bold text-white max-[768px]:text-[20px]">
              {countdownLabels[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;