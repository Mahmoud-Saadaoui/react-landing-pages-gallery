import forest from "./images/forest.jpg";
import river from "./images/river.jpg";
import sea from "./images/sea.jpg";
import story1 from "./images/story-img-1.jpg";
import story2 from "./images/story-img-2.jpg";

export const navLinks = ["Home", "Tours", "About Us", "Offer", "Contact"];

export const navColors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

export const tours = [
  {
    name: "The wild forest",
    image: forest,
    items: [
      "7 days tour",
      "Up to 20 people",
      "4 tour guides",
      "Sleep in private tents",
      "Difficulty: medium",
    ],
    price: "$399",
  },
  {
    name: "Along the river",
    image: river,
    items: [
      "9 days tour",
      "Up to 30 people",
      "7 tour guides",
      "Sleep in private tents",
      "Difficulty: hard",
    ],
    price: "$499",
  },
  {
    name: "The island beach",
    image: sea,
    items: [
      "5 days tour",
      "Up to 40 people",
      "8 tour guides",
      "Sleep in hotel",
      "Difficulty: easy",
    ],
    price: "$599",
  },
];

export const stories = [
  {
    image: story1,
    heading: "These were the best days of this year",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas, repudiandae veritatis nam mollitia cumque distinctio, quia aperiam aliquid at consequuntur libero quisquam facilis laborum inventore repellat perspiciatis vel fugiat molestias recusandae eum necessitatibus quo possimus aspernatur? Nobis, architecto eaque.",
  },
  {
    image: story2,
    heading: "I enjoyed this great tour",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas, repudiandae veritatis nam mollitia cumque distinctio, quia aperiam aliquid at consequuntur libero quisquam facilis laborum inventore repellat perspiciatis vel fugiat molestias recusandae eum necessitatibus quo possimus aspernatur? Nobis, architecto eaque.",
  },
];

export const footerLinks = navLinks;