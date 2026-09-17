import icon from "./images/icon.png";
import slogn from "./images/slogn.png";
import send1 from "./images/icons/send1.png";
import send from "./images/icons/send.png";
import prush from "./images/icons/prush.png";
import phone from "./images/icons/phone.png";
import photo from "./images/icons/photo.png";
import fork from "./images/icons/fork.png";
import mail from "./images/icons/mail.png";
import personPlus from "./images/icons/person-plus.png";

export { icon, slogn, send1, send };

export const heading = {
  title: "أنتظروا إنطلاق التطبيق قريباً",
  description:
    "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع",
};

export const countdownLabels = ["يوم", "ساعة", "دقيقة", "ثانية"];

export const notifyText = "هل تريد ارسال إشعار فور الانطلاق؟";

export const features = [
  { icon: prush, title: "تصميم انيق وعصري", reverse: false },
  { icon: phone, title: "اللعبة متوفرة بوضع الشاشة الممتلئ", reverse: true },
  { icon: photo, title: "يوجد صور لتوضيح تفاصيل اللعبة", reverse: false },
  { icon: fork, title: "يمكنك مشاركة اللعبة كمجموعة", reverse: true },
  { icon: mail, title: "يمكنك ارسال الهدايا لأصدقائك عبر اللعبة", reverse: false },
  { icon: personPlus, title: "أضافة اصدقاء جدد لاستخدام اللعبة", reverse: true },
].map((feature) => ({
  ...feature,
  description:
    "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع",
}));

export const footerNotifyText =
  "قم بإضافة بريدك الالكتروني ليصلك إشعار فور الإنطلاق";

export const socials = [
  { name: "facebook", href: "#" },
  { name: "twitter", href: "#" },
  { name: "linkedin", href: "#" },
  { name: "instagram", href: "#" },
];

export const contactEmail = "info@domain.com";