export const navLinks = [
  { id: "header", label: "عني" },
  { id: "licence", label: "الشهادات والمؤهلات" },
  { id: "statistics", label: "المهارات" },
  { id: "gallery", label: "أعمالي" },
  { id: "testimonials", label: "آراء العملاء" },
  { id: "contact-info", label: "تواصل معي" },
];

export default function smoothScroll(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 90,
    behavior: "smooth",
  });
}