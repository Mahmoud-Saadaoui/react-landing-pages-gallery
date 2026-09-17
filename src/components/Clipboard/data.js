import logo from "./images/logo.svg";
import computer from "./images/image-computer.png";
import devices from "./images/image-devices.png";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import instagram from "./images/icon-instagram.svg";
import blacklist from "./images/icon-blacklist.svg";
import text from "./images/icon-text.svg";
import preview from "./images/icon-preview.svg";
import google from "./images/logo-google.png";
import ibm from "./images/logo-ibm.png";
import microsoft from "./images/logo-microsoft.png";
import hp from "./images/logo-hp.png";
import vectorGraphics from "./images/logo-vector-graphics.png";

export { logo };

export const hero = {
  title: "A history of everything you copy",
  description:
    "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
};

export const snippets = {
  title: "Keep track of your snippets",
  description:
    "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
};

export const features = {
  computer,
  items: [
    { title: "Quick Search", description: "Easily search your snippets by content, category, web address, application, and more." },
    { title: "iCloud Sync", description: "Instantly saves and syncs snippets across all your devices." },
    { title: "Completely History", description: "Retrieve any snippets from the first moment you started using the app." },
  ],
};

export const access = {
  title: "Access Clipboard Anywhere",
  description: "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
  devices,
};

export const supercharge = {
  title: "Supercharge your workflow",
  description: "We've got the tools to boost your productivity.",
  items: [
    { title: "Create Blacklists", description: "Easily search your snippets by content, category, web address, application, and more.", icon: blacklist },
    { title: "Plain Text Snippets", description: "Remove unwanted formatting from copied text for a consistent look.", icon: text },
    { title: "Sneak Preview", description: "Quick preview of all snippets on your Clipboard for easy access.", icon: preview },
  ],
};

export const references = [google, ibm, microsoft, hp, vectorGraphics];

export const bottom = {
  title: "Clipboard for iOS and MacOS",
  description:
    "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.",
};

export const footerMenus = [
  ["FAQs", "Contact Us"],
  ["Privacy Policy", "Press Kit"],
  ["Install Guide"],
];

export const socialIcons = [facebook, twitter, instagram];