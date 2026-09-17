import {
  FaEnvelope,
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaMapMarker,
  FaPinterest,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import feature1 from "./images/feature-1.png";
import feature2 from "./images/feature-2.png";
import feature3 from "./images/feature-3.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import { larges, smalls } from "./gallery";
import logo from "./images/logo.png";

export const navLinks = [
  { label: "خدمات الشركة", target: "services" },
  { label: "المشاريع السابقة", target: "gallery" },
  { label: "احصائيات الشركة", target: "statistics" },
  { label: "تواصل معنا", target: "contacts" },
];

export const slides = [
  {
    text: "وكالتنا متخصصة فى برمجة وتصميم المواقع الألكترونية وتطبيقات الموبايل",
    link: { label: "تصفح أعمالنا", target: "gallery" },
  },
  {
    text: "مرحبا بك في موقع وكالتنا الرسمي لا تتردد في التواصل معنا واخبارنا رأيك",
    link: { label: "تواصل معنا", target: "contacts" },
  },
];

export const services = [
  { img: feature1, title: "تصميم المواقع والتطبيقات" },
  { img: feature2, title: "برمجة المواقع الالكترونية" },
  { img: feature3, title: "إنتاج ومونتاج الفيديو" },
];

export const serviceText =
  "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات";

export const galleryTitle = "تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب";

export const gallery = larges.map((large, i) => ({ small: smalls[i], large, title: galleryTitle }));

export const tags = ["After Effect", "Video Editing", "Photoshop"];

export const stats = [
  { icon: icon1, from: 150, to: 250, speed: 3000, label: "موقع إلكترونى" },
  { icon: icon2, from: 1, to: 100, speed: 3000, label: "تطبيق موبايل" },
  { icon: icon3, from: 6000, to: 10000, speed: 10000, label: "مستخدم" },
  { icon: icon4, from: 0, to: 30, speed: 3000, label: "فيديو مونتاج" },
];

export const addresses = [
  "الولايات المتحدة الامريكية ولاية سانفرانسيسكو ميدان الاوبرا",
  "الامارات العربية المتحدة في منطقة بن راشد",
];

export const footerSocials = [
  { Icon: FaFacebook, cls: "facebook" },
  { Icon: FaPinterest, cls: "pinterest" },
  { Icon: FaGooglePlus, cls: "google" },
  { Icon: FaTwitter, cls: "twitter" },
  { Icon: FaLinkedin, cls: "linkedin" },
];

export const contactInfo = [
  { Icon: FaMapMarker, text: "الامارات العربية المتحدة في منطقة بن راشد" },
  { Icon: FaPhone, text: "012 3456 7890" },
  { Icon: FaEnvelope, text: "email@domain.com" },
];

export const brand = logo;