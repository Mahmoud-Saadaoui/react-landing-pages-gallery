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
  { slug: "leon", title: "Leon", category: "corporate", screenshot: "/screenshots/Leon.webp", status: "done", component: LeonPage },
  { slug: "kasper", title: "Kasper", category: "corporate", screenshot: "/screenshots/Kasper.webp", status: "done", component: KasperPage },
  { slug: "architect-website", title: "Architect Website", category: "corporate", screenshot: "/screenshots/Architect-Website.webp", status: "done", component: ArchitectPage },
  { slug: "the-road", title: "The Road", category: "corporate", screenshot: "/screenshots/The-Road.webp", status: "done", component: TheRoadPage },
  { slug: "agency", title: "صفحة هبوط شركة", category: "corporate", screenshot: "/screenshots/agency-website.webp", rtl: true, lang: "ar", status: "done", component: AgencyPage },
  { slug: "apple-ecommerce", title: "Apple E-commerce", category: "ecommerce", screenshot: "/screenshots/Apple.webp", status: "done", component: ApplePage },
  { slug: "boutique-nike", title: "Boutique Nike", category: "ecommerce", screenshot: "/screenshots/Web-Design-Mastery-Nike.webp", status: "done", component: NikePage },
  { slug: "fourniture-house", title: "Fourniture House", category: "ecommerce", screenshot: "/screenshots/My-Furniture.webp", status: "done", component: FurniturePage },
  { slug: "product", title: "Product", category: "ecommerce", screenshot: "/screenshots/product.webp", rtl: true, lang: "ar", status: "done", component: ProductPage },
  { slug: "bookmark", title: "Bookmark", category: "app-saas", screenshot: "/screenshots/Bookmark-Website.webp", status: "done", component: BookmarkPage },
  { slug: "clipboard", title: "Clipboard", category: "app-saas", screenshot: "/screenshots/Clipboard-Website.webp", status: "done", component: ClipboardPage },
  { slug: "fylo", title: "Fylo", category: "app-saas", screenshot: "/screenshots/Fylo-Website.webp", status: "done", component: FyloPage },
  { slug: "loopstudios", title: "Loopstudios", category: "app-saas", screenshot: "/screenshots/loopstudios.webp", status: "done", component: LoopstudiosPage },
  { slug: "mobile", title: "Mobile", category: "app-saas", screenshot: "/screenshots/mobile.webp", rtl: true, lang: "ar", status: "done", component: MobilePage },
  { slug: "portfolio", title: "Portfolio", category: "portfolio", screenshot: "/screenshots/portfolio.webp", rtl: true, lang: "ar", status: "done", component: PortfolioRtlPage },
  { slug: "personal-portfolio", title: "Personal Portfolio", category: "portfolio", screenshot: "/screenshots/personal-portfolio.webp", status: "done", component: PortfolioPage },
  { slug: "classic-cars", title: "Classic Cars", category: "creative", screenshot: "/screenshots/Classic-Cars.webp", status: "done", component: ClassicCarsPage },
  { slug: "classic-website", title: "Classic Website", category: "creative", screenshot: "/screenshots/Classic-Website.webp", status: "done", component: ClassicPage },
  { slug: "special-design", title: "Special Design", category: "creative", screenshot: "/screenshots/Special-Design.webp", status: "done", component: SpecialDesignPage },
  { slug: "final-files", title: "Final Files", category: "creative", status: "done", component: WineHousePage },
  { slug: "plans", title: "Plans", category: "creative", screenshot: "/screenshots/Plans.webp", status: "done", component: PlansPage },
  { slug: "coming-soon", title: "Coming Soon", category: "creative", screenshot: "/screenshots/coming-soon.webp", status: "done", component: ComingSoonPage },
  { slug: "testimonial-grid", title: "Testimonial Grid", category: "creative", screenshot: "/screenshots/Testimonial-Grid.webp", status: "done", component: TestimonialGridPage },
  { slug: "dashboard", title: "Dashboard", category: "dashboard", screenshot: "/screenshots/Dashboard.webp", status: "done", component: DashboardPage },
];

export const getLandingPage = (slug) => landingPages.find((p) => p.slug === slug);

export default landingPages;