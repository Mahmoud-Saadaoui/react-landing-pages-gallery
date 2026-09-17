import {
  FaDesktop,
  FaFacebook,
  FaFax,
  FaGooglePlus,
  FaHome,
  FaMobile,
  FaTwitter,
} from "react-icons/fa";
import work01 from "./images/work_01.webp";
import work02 from "./images/work_02.webp";
import work03 from "./images/work_03.webp";
import work04 from "./images/work_04.webp";
import work05 from "./images/work_05.webp";
import work06 from "./images/work_06.webp";
import client from "./images/client.webp";
import kevin from "./images/kevin.webp";
import harv from "./images/harv.webp";

export const features = [
  { icon: FaFax, title: "Print Design" },
  { icon: FaDesktop, title: "Web Design" },
  { icon: FaMobile, title: "App Design" },
  { icon: FaHome, title: "Logo Design" },
];

export const works = [...[work01, work02, work03, work04, work05, work06], ...[work01, work02, work03]];

export const clients = [
  { img: client, name: "John Smith" },
  { img: client, name: "Osama Mohamed" },
  { img: client, name: "Hassan Zohdi" },
  { img: client, name: "Ali Hamdy" },
];

export const team = [
  { img: kevin, name: "Kevin Ward" },
  { img: harv, name: "Harvey Rube" },
  { img: kevin, name: "Kevin Ward" },
  { img: harv, name: "Harvey Rube" },
];

export const projectText =
  "Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo";

export const testimonialText =
  "These guys are incredible! I get my project in 10 days and it was awesome! Very good service! Highly recommended!";

export const teamText =
  "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident";

export const socialIcons = [
  { label: "Facebook", Icon: FaFacebook },
  { label: "Twitter", Icon: FaTwitter },
  { label: "Google Plus", Icon: FaGooglePlus },
];