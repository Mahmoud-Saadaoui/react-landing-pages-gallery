import homeIcon from "./images/Icons/home-icon.png";
import iphoneIcon from "./images/Icons/iphone-icon.png";
import macbookIcon from "./images/Icons/macbook-icon.png";
import watchIcon from "./images/Icons/watch-icon.png";
import airpodsIcon from "./images/Icons/airpods-icon.png";

const bandMap = import.meta.glob("./images/watches/watch-band-*.jpg", {
  eager: true,
  import: "default",
});

const caseMap = import.meta.glob("./images/watches/watch-case-*.png", {
  eager: true,
  import: "default",
});

const slideMap = import.meta.glob("./images/slideshow/section-1-bg-*.jpg", {
  eager: true,
  import: "default",
});

const byNumber = (a, b) => {
  const num = (s) => parseInt(s.match(/(\d+)/)?.[1] ?? "0", 10);
  return num(a[0]) - num(b[0]);
};

export const watchBands = Object.entries(bandMap)
  .sort(byNumber)
  .map(([, url]) => url);

export const watchCases = Object.entries(caseMap)
  .sort(byNumber)
  .map(([, url]) => url);

export const slideshowBgs = Object.entries(slideMap)
  .sort(byNumber)
  .map(([, url]) => url);

export const navLinks = [
  { label: "iPhone 12", href: "#section-2" },
  { label: "MacBook Air", href: "#section-3" },
  { label: "Watch", href: "#section-4" },
  { label: "AirPods", href: "#section-5" },
];

export const footerIcons = [
  { href: "#section-1", img: homeIcon, label: "Home" },
  { href: "#section-2", img: iphoneIcon, label: "iPhone" },
  { href: "#section-3", img: macbookIcon, label: "MacBook" },
  { href: "#section-4", img: watchIcon, label: "Watch" },
  { href: "#section-5", img: airpodsIcon, label: "AirPods" },
];