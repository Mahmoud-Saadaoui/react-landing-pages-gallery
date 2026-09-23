import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./common/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="relative border-b border-[#A3E635]/20 bg-[#052E16]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/home-page-bg.jpeg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081B08]/90 via-[#052E16]/85 to-[#052E16]/90" />
      <div className="relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-[#D9F99D] transition-colors hover:text-[#A3E635]"
        >
          {t("brand.name")}
        </Link>
        <nav className="flex items-center gap-2">
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
