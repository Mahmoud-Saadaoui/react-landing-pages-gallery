import {
  FaEnvelope,
  FaFacebook,
  FaGithubSquare,
  FaGooglePlus,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";

export const headSocials = [
  { Icon: FaGithubSquare, url: "" },
  { Icon: FaLinkedin, url: "" },
  { Icon: FaTwitterSquare, url: "" },
  { Icon: FaFacebook, url: "" },
];

export const timeline = [
  { date: "مارس 2010", title: "ماجستير في الهندسة" },
  { date: "مارس 2011", title: "كورس برمجة المواقع" },
  { date: "مارس 2012", title: "كورس الهكر الأخلاقي" },
  { date: "مارس 2015", title: "مطور ويب مستقل" },
];

export const lorem =
  "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.";

export const skills = [
  { name: "HTML", value: 0.75 },
  { name: "CSS", value: 0.5 },
  { name: "Bootstrap", value: 0.5 },
  { name: "Javascript", value: 0.3 },
  { name: "PHP", value: 0.75 },
  { name: "MySql", value: 0.5 },
];

export const galleryFilters = [
  { id: "item-type-all", label: "الكل", cls: "label-type-all", type: null },
  { id: "item-type-1", label: "تصميم", cls: "label-type-1", type: "item-type-1" },
  { id: "item-type-2", label: "برمجة مواقع", cls: "label-type-2", type: "item-type-2" },
  { id: "item-type-3", label: "تصميم تطبيقات الموبايل", cls: "label-type-3", type: "item-type-3" },
];

export const testimonials = [
  { name: "محمد هاني", role: "مصمم ويب بشركة جوجل", socials: [FaLinkedin, FaGithubSquare] },
  { name: "نهي احمد", role: "مصمم ويب بشركة جوجل", socials: [FaLinkedin, FaTwitterSquare] },
  { name: "جورج يوسف", role: "مصمم ويب بشركة جوجل", socials: [FaGithubSquare, FaLinkedin, FaTwitterSquare] },
  { name: "لارا محسن", role: "مصمم ويب بشركة جوجل", socials: [FaGithubSquare, FaLinkedin, FaFacebook] },
];

export const contactList = [
  { Icon: FaEnvelope, text: "Example@example.com" },
  { Icon: FaPhone, text: "012 3456 7890" },
];

export const contactSocials = [
  { Icon: FaGooglePlus, cls: "google" },
  { Icon: FaTwitter, cls: "twitter" },
  { Icon: FaFacebook, cls: "facebook" },
];