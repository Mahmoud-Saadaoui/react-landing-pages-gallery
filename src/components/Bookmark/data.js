import logo from "./images/logo-bookmark.svg";
import logoFooter from "./images/logo-bookmark-footer.svg";
import hero from "./images/illustration-hero.svg";
import tab1 from "./images/illustration-features-tab-1.svg";
import tab2 from "./images/illustration-features-tab-2.svg";
import tab3 from "./images/illustration-features-tab-3.svg";
import chrome from "./images/logo-chrome.svg";
import firefox from "./images/logo-firefox.svg";
import opera from "./images/logo-opera.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";

export const logos = { logo, logoFooter };

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Download", href: "#download" },
  { label: "FAQ", href: "#faq" },
  { label: "Login", href: "#", accent: true },
];

export const heroImage = hero;

export const features = {
  title: "Features",
  description:
    "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
};

export const tabs = [
  {
    id: "panel-1",
    label: "Simple Bookmarking",
    image: tab1,
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: "panel-2",
    label: "Speedy Searching",
    image: tab2,
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: "panel-3",
    label: "Easy Sharing",
    image: tab3,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
  },
];

export const download = {
  title: "Download the extension",
  description:
    "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
};

export const browsers = [
  { name: "Add to Chrome", version: "Minimum Version 62", logo: chrome },
  { name: "Add to Firefox", version: "Minimum Version 55", logo: firefox },
  { name: "Add to Opera", version: "Minimum Version 46", logo: opera },
];

export const faq = {
  title: "Frequently Asked Questions",
  description:
    "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
  items: [
    { question: "What is Bookmark?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
    { question: "How can I request a new browser?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
    { question: "Is ther a mobile app?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
    { question: "What about other Chromium browsers", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
  ],
};

export const socials = [facebook, twitter];