import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "./components/common/Loading";
import LandingLayout from "./layouts/LandingLayout";
import MainLayout from "./layouts/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = t("brand.name");
  }, [pathname, i18n.language, t]);

  return (
    <Suspense fallback={<Loading fullScreen />}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route path="/landing-pages/:slug/*" element={<LandingLayout />} />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;