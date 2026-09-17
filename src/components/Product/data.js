import {
  FaFacebook,
  FaGooglePlus,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export const lorem =
  "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام";

export const loremShort = "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء";

export const features = [
  { title: "بطارية تدوم لأكثر من يومين" },
  { title: "ثنائي الشريحة" },
  { title: "أدمجت مع التطبيقات الممتعة اللعب", extra: true },
];

const basePlan = ["شاشة لمس", "الدقة الافقية 1536 Pixel", "يحتوي على كاميرا 5 ميجا", "شرائح Appel A7"];

export const plans = [
  { name: "جولد", price: 1500, features: [...basePlan, "اللون جولد"] },
  { name: "سليفر", price: 1800, features: [...basePlan, "اللون سليفر"] },
  { name: "أبيض", price: 1900, popular: true, features: [...basePlan, "اللون أبيض", "العمق 7.5 ملم"] },
  { name: "أسود", price: 1800, features: [...basePlan, "اللون أسود"] },
];

export const faqGroups = [
  [
    { q: "كم تبلغ قيمة رسوم عرض السلع؟" },
    { q: "هل متاح باستراجاع المنتج؟" },
    { q: "كيفية حساب مصاريف الشحن؟" },
  ],
  [
    { q: "هل متاح باستراجاع المنتج؟" },
    { q: "كيفية حساب مصاريف الشحن؟" },
    { q: "كم تبلغ قيمة رسوم عرض السلع؟" },
  ],
  [
    { q: "هل متاح باستراجاع المنتج؟" },
    { q: "كم تبلغ قيمة رسوم عرض السلع؟" },
    { q: "كيفية حساب مصاريف الشحن؟" },
  ],
];

export const otherProducts = [
  { title: "شفرة متعددة الأغراض" },
  { title: "باور بانك 3000 أمبير" },
];

export const footerSocials = [
  { Icon: FaFacebook, cls: "facebook" },
  { Icon: FaPinterestP, cls: "pinterest" },
  { Icon: FaGooglePlus, cls: "google-plus" },
  { Icon: FaTwitter, cls: "twitter" },
];