import intro from "./images/illustration-intro.png";
import stayProductive from "./images/illustration-stay-productive.png";
import quotes from "./images/bg-quotes.png";
import arrow from "./images/icon-arrow.svg";
import accessAnywhere from "./images/icon-access-anywhere.svg";
import security from "./images/icon-security.svg";
import collaboration from "./images/icon-collaboration.svg";
import anyFile from "./images/icon-any-file.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import profile1 from "./images/profile-1.jpg";
import profile2 from "./images/profile-2.jpg";
import profile3 from "./images/profile-3.jpg";

export const hero = {
  intro,
  title: "All your files in one secure location, assessible anywhere.",
  description:
    "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
};

export const features = [
  {
    icon: accessAnywhere,
    title: "Access your file from anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: security,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: collaboration,
    title: "Access your file from anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: anyFile,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
];

export const productive = {
  image: stayProductive,
  title: "Stay productive, wherever you are",
  paragraphs: [
    "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
    "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  ],
  linkText: "See how Flyo works",
  arrow,
};

export const testimonials = {
  quotes,
  items: [
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Satish Patel",
      role: "Founder & CEO. Huddle",
      avatar: profile1,
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      role: "Founder & CEO. Huddle 2",
      avatar: profile2,
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Eva Boyd",
      role: "Founder & CEO. Huddle 3",
      avatar: profile3,
    },
  ],
};

export const footerMenus = [
  ["About", "Jobs", "Press", "Blog"],
  ["Contact Us", "Terms", "Privacy"],
];

export const footerContact = [
  { icon: phone, text: "+1-543-123-4567" },
  { icon: email, text: "example@fylo.com" },
];

export const footerSocials = [facebook, twitter, instagram];