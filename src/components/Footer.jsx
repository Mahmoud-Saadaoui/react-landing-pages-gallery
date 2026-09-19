import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#A3E635]/20 bg-[#052E16]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 text-sm text-[#BBF7D0]">
        <p>{t("footer.copyright", { year })}</p>
        <p>{t("footer.slogan")}</p>
      </div>
    </footer>
  );
};

export default Footer;
