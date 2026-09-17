import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowLeft } from "react-icons/fi";

const BackToGallery = () => {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="fixed top-4 start-4 z-[9999] inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium text-gray-800 shadow-lg border border-gray-200 hover:bg-white transition-colors"
    >
      <FiArrowLeft size={16} />
      {t("gallery.back")}
    </Link>
  );
};

export default BackToGallery;