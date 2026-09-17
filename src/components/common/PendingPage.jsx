import { useTranslation } from "react-i18next";

const PendingPage = ({ page }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{page.title}</h1>
        <p className="text-gray-500">{t("gallery.pendingMessage")}</p>
      </div>
    </div>
  );
};

export default PendingPage;