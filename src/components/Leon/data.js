import {
  FaGem,
  FaGlobeAsia,
  FaMagic,
  FaPalette,
  FaPencilRuler,
  FaSketch,
  FaVectorSquare,
} from "react-icons/fa";
import portfolio1 from "./images/portfolio-1.jpg";
import portfolio2 from "./images/portfolio-2.jpg";
import portfolio3 from "./images/portfolio-3.jpg";

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const features = [
  {
    icon: FaMagic,
    title: "Tell Us Your Idea",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
  },
  {
    icon: FaGem,
    title: "We Will Do All The Work",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
  },
  {
    icon: FaGlobeAsia,
    title: "Your Product is Worldwide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
  },
];

export const servicesItems = [
  {
    icon: FaPalette,
    title: "Graphic Design",
    text: "Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.",
  },
  {
    icon: FaSketch,
    title: "UI & UX",
    text: "Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.",
  },
  {
    icon: FaVectorSquare,
    title: "Web Design",
    text: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
  },
  {
    icon: FaPencilRuler,
    title: "Web Development",
    text: "Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.",
  },
];

export const portfolioItems = [
  { image: portfolio1 },
  { image: portfolio2 },
  { image: portfolio3 },
];