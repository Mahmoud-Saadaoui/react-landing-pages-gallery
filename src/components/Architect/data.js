import {
  FaFacebookF,
  FaInstagram,
  FaPaintBrush,
  FaPaintRoller,
  FaPencilAlt,
  FaPenNib,
  FaRegBuilding,
  FaRulerCombined,
  FaTwitter,
} from "react-icons/fa";
import person1 from "./images/person-1.jpg";
import person2 from "./images/person-2.jpg";
import person3 from "./images/person-3.jpg";

export const menuItems = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Team" },
  { label: "Pricing" },
  { label: "Contact" },
];

export const socials = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Instagram", Icon: FaInstagram },
  { label: "Twitter", Icon: FaTwitter },
];

export const services = [
  { title: "Interior", Icon: FaPenNib },
  { title: "Exterior", Icon: FaPaintRoller },
  { title: "Design", Icon: FaPencilAlt },
  { title: "Decoration", Icon: FaPaintBrush },
  { title: "Planning", Icon: FaRulerCombined },
  { title: "Execution", Icon: FaRegBuilding },
];

export const team = [
  { name: "John Smith", role: "CEO", img: person1 },
  { name: "Ann Brown", role: "Designer", img: person2 },
  { name: "Mary Doe", role: "Architect", img: person3 },
];

export const serviceText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!";

export const teamText =
  '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"';
