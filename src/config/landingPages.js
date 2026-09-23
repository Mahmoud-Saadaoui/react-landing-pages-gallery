import { lazy } from "react";

const LeonPage = lazy(() => import("../pages/LeonPage"));
const PlansPage = lazy(() => import("../pages/PlansPage"));
const ClassicCarsPage = lazy(() => import("../pages/ClassicCarsPage"));
const TestimonialGridPage = lazy(() => import("../pages/TestimonialGridPage"));
const TheRoadPage = lazy(() => import("../pages/TheRoadPage"));
const WineHousePage = lazy(() => import("../pages/WineHousePage"));
const KasperPage = lazy(() => import("../pages/KasperPage"));
const NikePage = lazy(() => import("../pages/NikePage"));
const FurniturePage = lazy(() => import("../pages/FurniturePage"));
const BookmarkPage = lazy(() => import("../pages/BookmarkPage"));
const ClipboardPage = lazy(() => import("../pages/ClipboardPage"));
const LoopstudiosPage = lazy(() => import("../pages/LoopstudiosPage"));
const FyloPage = lazy(() => import("../pages/FyloPage"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const ComingSoonPage = lazy(() => import("../pages/ComingSoonPage"));
const ArchitectPage = lazy(() => import("../pages/ArchitectPage"));
const ApplePage = lazy(() => import("../pages/ApplePage"));
const SpecialDesignPage = lazy(() => import("../pages/SpecialDesignPage"));
const ClassicPage = lazy(() => import("../pages/ClassicPage"));
const AgencyPage = lazy(() => import("../pages/AgencyPage"));
const MobilePage = lazy(() => import("../pages/MobilePage"));
const PortfolioRtlPage = lazy(() => import("../pages/PortfolioRtlPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

export const CATEGORIES = [
  "ecommerce",
  "corporate",
  "portfolio",
  "app-saas",
  "creative",
  "dashboard",
];

const landingPages = [
  { slug: "leon", title: "Leon", category: "corporate", screenshot: "/screenshots/Leon.webp", status: "done", scope: "Leon", component: LeonPage },
  { slug: "kasper", title: "Kasper", category: "corporate", screenshot: "/screenshots/Kasper.webp", status: "done", scope: "Kasper", component: KasperPage },
  { slug: "architect-website", title: "Architect Website", category: "corporate", screenshot: "/screenshots/Architect-Website.webp", status: "done", scope: "Architect", component: ArchitectPage },
  { slug: "the-road", title: "The Road", category: "corporate", screenshot: "/screenshots/The-Road.webp", status: "done", scope: "TheRoad", component: TheRoadPage },
  { slug: "agency", title: "صفحة هبوط شركة", category: "corporate", screenshot: "/screenshots/agency-website.webp", rtl: true, lang: "ar", status: "done", scope: "Agency", component: AgencyPage },
  { slug: "apple-ecommerce", title: "Apple E-commerce", category: "ecommerce", screenshot: "/screenshots/Apple.webp", status: "done", scope: "Apple", component: ApplePage },
  { slug: "boutique-nike", title: "Boutique Nike", category: "ecommerce", screenshot: "/screenshots/Web-Design-Mastery-Nike.webp", status: "done", scope: "Nike", component: NikePage },
  { slug: "fourniture-house", title: "Fourniture House", category: "ecommerce", screenshot: "/screenshots/My-Furniture.webp", status: "done", scope: "Furniture", component: FurniturePage },
  { slug: "product", title: "Product", category: "ecommerce", screenshot: "/screenshots/product.webp", rtl: true, lang: "ar", status: "done", scope: "Product", component: ProductPage },
  { slug: "bookmark", title: "Bookmark", category: "app-saas", screenshot: "/screenshots/Bookmark-Website.webp", status: "done", scope: "Bookmark", component: BookmarkPage },
  { slug: "clipboard", title: "Clipboard", category: "app-saas", screenshot: "/screenshots/Clipboard-Website.webp", status: "done", scope: "Clipboard", component: ClipboardPage },
  { slug: "fylo", title: "Fylo", category: "app-saas", screenshot: "/screenshots/Fylo-Website.webp", status: "done", scope: "Fylo", component: FyloPage },
  { slug: "loopstudios", title: "Loopstudios", category: "app-saas", screenshot: "/screenshots/loopstudios.webp", status: "done", scope: "Loopstudios", component: LoopstudiosPage },
  { slug: "mobile", title: "Mobile", category: "app-saas", screenshot: "/screenshots/mobile.webp", rtl: true, lang: "ar", status: "done", scope: "Mobile", component: MobilePage },
  { slug: "portfolio", title: "Portfolio", category: "portfolio", screenshot: "/screenshots/portfolio.webp", rtl: true, lang: "ar", status: "done", scope: "PortfolioRtl", component: PortfolioRtlPage },
  { slug: "personal-portfolio", title: "Personal Portfolio", category: "portfolio", screenshot: "/screenshots/personal-portfolio.webp", status: "done", scope: "Portfolio", component: PortfolioPage },
  { slug: "classic-cars", title: "Classic Cars", category: "creative", screenshot: "/screenshots/Classic-Cars.webp", status: "done", scope: "ClassicCars", component: ClassicCarsPage },
  { slug: "classic-website", title: "Classic Website", category: "creative", screenshot: "/screenshots/Classic-Website.webp", status: "done", scope: "Classic", component: ClassicPage },
  { slug: "special-design", title: "Special Design", category: "creative", screenshot: "/screenshots/Special-Design.webp", status: "done", scope: "SpecialDesign", component: SpecialDesignPage },
  { slug: "fruity-cocktail-house", title: "Fruity Cocktail House", category: "creative", screenshot: "/screenshots/Fruity-Cocktail-House.webp", status: "done", scope: "WineHouse", component: WineHousePage },
  { slug: "plans", title: "Plans", category: "creative", screenshot: "/screenshots/Plans.webp", status: "done", scope: "Plans", component: PlansPage },
  { slug: "coming-soon", title: "Coming Soon", category: "creative", screenshot: "/screenshots/coming-soon.webp", rtl: true, lang: "ar", status: "done", scope: "ComingSoon", component: ComingSoonPage },
  { slug: "testimonial-grid", title: "Testimonial Grid", category: "creative", screenshot: "/screenshots/Testimonial-Grid.webp", status: "done", scope: "TestimonialGrid", component: TestimonialGridPage },
  { slug: "dashboard", title: "Dashboard", category: "dashboard", screenshot: "/screenshots/Dashboard.webp", status: "done", scope: "Dashboard", component: DashboardPage },
];

export const getLandingPage = (slug) => landingPages.find((p) => p.slug === slug);

export default landingPages;