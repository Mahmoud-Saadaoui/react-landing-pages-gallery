import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getLandingPage } from "../config/landingPages";
import BackToGallery from "../components/common/BackToGallery";
import PendingPage from "../components/common/PendingPage";

const LandingLayout = () => {
  const { slug } = useParams();
  const page = getLandingPage(slug);

  useEffect(() => {
    if (!page) return undefined;

    const prevDir = document.documentElement.dir;
    const prevLang = document.documentElement.lang;

    document.documentElement.dir = page.rtl ? "rtl" : "ltr";
    document.documentElement.lang = page.lang ?? "en";

    if (page.rtl) {
      document.documentElement.setAttribute("dir", "rtl");
    }

    return () => {
      document.documentElement.dir = prevDir;
      document.documentElement.lang = prevLang;
    };
  }, [page]);

  if (!page) return <Navigate to="/" replace />;

  const Component = page.component ?? PendingPage;

  return (
    <>
      <BackToGallery />
      <div dir={page.rtl ? "rtl" : "ltr"}>
        <Component page={page} />
      </div>
    </>
  );
};

export default LandingLayout;