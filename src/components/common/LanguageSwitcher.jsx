import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "عربي" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCode = i18n.resolvedLanguage?.slice(0, 2) ?? "en";

  const current =
    LANGUAGES.find((lng) => lng.code === activeCode) ?? LANGUAGES[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="px-3 py-2 rounded border border-[#A3E635]/40 bg-[#052E16]/70 text-sm text-[#D9F99D] hover:border-[#A3E635]/70 hover:bg-[#0B3D24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.label}
      </button>
      {open && (
        <ul
          className="absolute top-full start-0 z-20 mt-1 w-full overflow-hidden rounded-lg border border-[#A3E635]/30 bg-[#052E16] shadow-lg"
          role="listbox"
        >
          {LANGUAGES.map((lng) => (
            <li key={lng.code}>
              <button
                type="button"
                onClick={() => changeLanguage(lng.code)}
                className={`w-full px-3 py-2 text-start text-sm hover:bg-[#0B3D24] ${
                  lng.code === activeCode
                    ? "text-[#A3E635] font-semibold"
                    : "text-[#D9F99D]"
                }`}
                role="option"
                aria-selected={lng.code === activeCode}
              >
                {lng.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
