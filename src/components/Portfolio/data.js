import personImg from "./images/john-smith.jpg";
import project1 from "./images/project-1.jpg";
import project2 from "./images/project-2.jpg";
import project3 from "./images/project-3.jpg";
import project4 from "./images/project-4.jpg";
import project5 from "./images/project-5.jpg";
import project6 from "./images/project-6.jpg";
import project7 from "./images/project-7.jpg";
import project8 from "./images/project-8.jpg";
import project9 from "./images/project-9.jpg";

export const person = { image: personImg, name: "John Smith" };

export const navLinks = [
  { label: "Home", href: "#section-1" },
  { label: "About", href: "#section-2" },
  { label: "Portfolio", href: "#section-3" },
  { label: "Contact", href: "#section-4" },
];

export const skills = [
  { name: "HTML", percent: 97 },
  { name: "CSS", percent: 89 },
  { name: "JavaScript", percent: 85 },
  { name: "SASS", percent: 87 },
  { name: "ReactJS", percent: 80 },
  { name: "NodeJS", percent: 70 },
  { name: "MongoDB", percent: 50 },
];

export const services = [
  { icon: "lightbulb", heading: "Creative" },
  { icon: "cut", heading: "Problem Solving" },
  { icon: "tachometer", heading: "Fast" },
  { icon: "rocket", heading: "Dynamic" },
];

export const projects = [
  { name: "architect website", technologies: "HTML / CSS / JS", image: project1, link: "https://www.youtube.com/watch?v=3J-EFMzz94g" },
  { name: "Budget App", technologies: "ReactJS", image: project2, link: "https://www.youtube.com/watch?v=fDffQYs2WB0" },
  { name: "wine house", technologies: "HTML / CSS / JS", image: project3, link: "https://www.youtube.com/watch?v=jtmuopTpzGE" },
  { name: "task manager", technologies: "ReactJS", image: project4, link: "https://www.youtube.com/watch?v=fqup-BL3VjI" },
  { name: "The Road", technologies: "HTML / CSS / JS", image: project5, link: "https://www.youtube.com/watch?v=qmyN7lYY_xo" },
  { name: "food recipe app", technologies: "ReactJS", image: project6, link: "https://www.youtube.com/watch?v=d1vT4kkTCaw" },
  { name: "slideshow", technologies: "HTML / CSS / JS", image: project7, link: "https://www.youtube.com/watch?v=1qhSSp2q7n4" },
  { name: "Hamburger menu", technologies: "HTML / CSS / JS", image: project8, link: "https://www.youtube.com/watch?v=9Q7wy8r3i8w" },
  { name: "CSS grid menu", technologies: "HTML / CSS / JS", image: project9, link: "" },
];