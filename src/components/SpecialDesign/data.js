import img1 from "./imgs/01.jpg";
import img2 from "./imgs/02.jpg";
import img3 from "./imgs/03.jpg";
import img4 from "./imgs/04.jpg";
import img5 from "./imgs/05.jpg";
import img6 from "./imgs/06.webp";
import img7 from "./imgs/07.jpg";
import img8 from "./imgs/08.jpg";
import img9 from "./imgs/09.jpg";
import img10 from "./imgs/10.jpg";
import aboutUs from "./imgs/about-us.jpg";

import programming from "./imgs/programming.svg";
import advertising from "./imgs/advertising.svg";
import hosting from "./imgs/hosting-icon.svg";
import mobileApp from "./imgs/mobile-app.svg";
import graphicDesign from "./imgs/graphic-design.svg";
import webDesign from "./imgs/web-design.svg";

export const sections = [
  { label: "About", bullet: "About Us", selector: ".about-us" },
  { label: "Skills", bullet: "Our Skills", selector: ".skills" },
  { label: "Gallery", bullet: "Our Gallery", selector: ".gallery" },
  { label: "Timeline", bullet: "Timeline", selector: ".timeline" },
  { label: "Features", bullet: "Features", selector: ".features" },
  { label: "Testimonials", bullet: "Testimonials", selector: ".testimonials" },
];

export const colors = ["#FF9800", "#E91E63", "#009688", "#03A9F4", "#4CAF50"];

export const skills = [
  { name: "HTML", progress: "80%" },
  { name: "CSS", progress: "70%" },
  { name: "JavaScript", progress: "90%" },
  { name: "Python", progress: "80%" },
  { name: "PHP", progress: "90%" },
  { name: "MySQL", progress: "70%" },
];

export const gallery = [
  { src: img1, alt: "Image One" },
  { src: img2, alt: "Image Two" },
  { src: img3, alt: "Image Three" },
  { src: img4, alt: "Image Four" },
  { src: img5, alt: "Image Five" },
  { src: img6, alt: "" },
  { src: img7, alt: "" },
  { src: img8, alt: "" },
  { src: img9, alt: "" },
  { src: img10, alt: "" },
];

export const landingBgs = [img1, img2, img3, img4, img5];

export const features = [
  { img: programming, title: "Development", text: "We are professional marketeers, we will do anything you imagine in no time." },
  { img: advertising, title: "Marketing", text: "We are professional marketeers, we will do anything you imagine in no time." },
  { img: hosting, title: "Hosting", text: "We are professional marketeers, we will do anything you imagine in no time." },
  { img: mobileApp, title: "Mobile Develope", text: "We are professional marketeers, we will do anything you imagine in no time." },
  { img: graphicDesign, title: "Cloud and Servers", text: "We are professional marketeers, we will do anything you imagine in no time." },
  { img: webDesign, title: "Seo", text: "We are professional marketeers, we will do anything you imagine in no time." },
];

export const timeline = [
  {
    year: "2018",
    entries: [
      { side: "left", heading: "Testing Heading", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex molestiae illo nisi quaerat veniam beatae aliquid eligendi. Aliquid tenetur quas ex, sequi porro nam commodi placeat maxime nobis quam?" },
      { side: "right", heading: "Testing Heading", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex molestiae illo nisi quaerat veniam beatae aliquid eligendi. Aliquid tenetur quas ex, sequi porro nam commodi placeat maxime nobis quam?" },
    ],
  },
  {
    year: "2016",
    entries: [
      { side: "left", heading: "Testing Heading", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex molestiae illo nisi quaerat veniam beatae aliquid eligendi. Aliquid tenetur quas ex, sequi porro nam commodi placeat maxime nobis quam?" },
      { side: "left", heading: "Testing Heading", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex molestiae illo nisi quaerat veniam beatae aliquid eligendi. Aliquid tenetur quas ex, sequi porro nam commodi placeat maxime nobis quam?" },
    ],
  },
];

export const testimonials = [
  {
    img: "https://placehold.it/80/DDD",
    name: "Ahmed Mosaad",
    position: "CEO At Company",
    text: "Iam very happy with the product its amazing and i recieve it very fast and the price was amazing.",
  },
  {
    img: "https://placehold.it/80/EEE",
    name: "Mohamed Ibrahim",
    position: "CEO At Company",
    text: "Iam very happy with the product its amazing and i recieve it very fast and the price was amazing.",
  },
  {
    img: "https://placehold.it/80/AAA",
    name: "Sherief Ashraf",
    position: "CEO At Company",
    text: "Iam very happy with the product its amazing and i recieve it very fast and the price was amazing.",
  },
];

export const aboutImg = aboutUs;