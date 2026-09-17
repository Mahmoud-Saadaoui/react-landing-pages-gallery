import work01 from "./images/01.png";
import work02 from "./images/02.jpg";
import work03 from "./images/03.jpg";
import work04 from "./images/04.jpg";
import work05 from "./images/05.jpg";
import work06 from "./images/06.jpg";
import work07 from "./images/07.jpg";
import work08 from "./images/08.jpg";
import avatar from "./images/avatar.jpg";

export const headerPlans = ["Free Plan Contain 10GB", "$10 Plan Contain 50GB"];

export const features = [
  {
    title: "Fast",
    text: "This is Fast Feature This is Fast Feature This is Fast Feature This is Fast Feature This is Fast Feature",
  },
  {
    title: "Secure",
    text: "This is Secure Feature This is Secure Feature This is Secure Feature This is Secure Feature This is Secure Feature",
  },
  {
    title: "Cheap",
    text: "This is Cheap Feature This is Cheap Feature This is Cheap Feature This is Cheap Feature This is Cheap Feature",
  },
];

export const aboutParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const works = [work01, work02, work03, work04, work05, work06, work07, work08];

export const pricingPlans = [
  {
    name: "Plus",
    modifier: "plus",
    price: "$10",
    features: [
      "Disk Space: 50GB",
      "Bandwidth: 100GB",
      "FTP Accounts: 5",
      "Databases: 10",
      "Free Domain",
    ],
  },
  {
    name: "Premium",
    modifier: "premium",
    price: "$20",
    features: [
      "Disk Space: 80GB",
      "Bandwidth: 200GB",
      "FTP Accounts: 15",
      "Databases: 20",
      "Free Domain",
    ],
  },
  {
    name: "Ultimate",
    modifier: "ultimate",
    price: "$30",
    features: [
      "Disk Space: 120GB",
      "Bandwidth: 500GB",
      "FTP Accounts: 25",
      "Databases: 25",
      "Free Domain",
    ],
  },
];

export const testimonials = [
  {
    name: "Ahmed",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Mohamed",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Sayed",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export const avatarImage = avatar;

const infoParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const infoTabs = [
  { key: "about", label: "About", text: `About ${infoParagraph}` },
  { key: "history", label: "History", text: `History ${infoParagraph}` },
  { key: "spec", label: "Specification", text: `Spec ${infoParagraph}` },
  { key: "tech", label: "Technical", text: `Tech ${infoParagraph}` },
  { key: "review", label: "Review", text: `Review ${infoParagraph}` },
];