import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowLeft } from "react-icons/fi";

const BackToGallery = () => {
  const { t } = useTranslation();

  return (
    <>
      <style>{`@keyframes back-gallery-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(4px); } }`}</style>
      <Link
        to="/"
        className="group fixed bottom-[16px] end-[16px] z-[999] flex items-center rounded-full border border-gray-200 bg-white/90 text-gray-800 shadow-lg backdrop-blur transition-all duration-500 hover:gap-[8px] hover:px-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={t("gallery.back")}
      >
        <span
          aria-hidden="true"
          className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full text-[#16aeca] [animation:back-gallery-bob_2.6s_ease-in-out_infinite] group-hover:animate-none group-focus-within:animate-none"
        >
          <FiArrowLeft size={20} className="rtl:-scale-x-100" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-[220px] group-hover:opacity-100 group-focus-within:max-w-[220px] group-focus-within:opacity-100">
          <span className="whitespace-nowrap text-[14px] font-medium">{t("gallery.back")}</span>
        </span>
      </Link>
    </>
  );
};

export default BackToGallery;