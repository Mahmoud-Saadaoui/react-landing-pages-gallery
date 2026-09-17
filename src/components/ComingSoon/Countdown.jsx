import { useCountdown } from "../../hooks/useCountdown";
import { countdownLabels } from "./data";

const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const toArabicDigits = (value) =>
  String(value).replace(/\d/g, (digit) => ARABIC_DIGITS[digit]);

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  const values = [days, hours, minutes, seconds];

  return (
    <div className="is-countdown countdown-rtl countdown-show4">
      <div className="countdown-row countdown-show4">
        {values.map((value, index) => (
          <div className="countdown-section" key={countdownLabels[index]}>
            <span className="countdown-amount">
              {toArabicDigits(value)}
            </span>
            <span className="countdown-period">{countdownLabels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;