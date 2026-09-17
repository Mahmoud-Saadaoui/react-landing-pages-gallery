import car1 from "./images/car-1.jpg";
import car2 from "./images/car-2.jpg";
import car3 from "./images/car-3.jpg";
import gallery1 from "./images/gallery-car-1.jpg";
import gallery2 from "./images/gallery-car-2.jpg";
import gallery3 from "./images/gallery-car-3.jpg";
import gallery4 from "./images/gallery-car-4.jpg";
import gallery5 from "./images/gallery-car-5.jpg";
import gallery6 from "./images/gallery-car-6.jpg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Popular Cars", href: "#popular-cars" },
  { label: "Video Gallery", href: "#video-gallery" },
  { label: "Image Gallery", href: "#image-gallery" },
  { label: "Contact", href: "#contact" },
];

export const cars = [
  { name: "Car Name", price: "$ 200,000", image: car1 },
  { name: "Car Name", price: "$ 100,000", image: car2 },
  { name: "Car Name", price: "$ 150,000", image: car3 },
];

export const videos = Array.from(
  { length: 6 },
  (_, i) => `/videos/car-video-${i + 1}.mp4`
);

export const galleries = [
  [gallery1, gallery2, gallery3],
  [gallery4, gallery5, gallery6],
];