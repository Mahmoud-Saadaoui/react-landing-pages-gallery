import daniel from "./images/image-daniel.jpg";
import jonathan from "./images/image-jonathan.jpg";
import jeanette from "./images/image-jeanette.jpg";
import patrick from "./images/image-patrick.jpg";
import kira from "./images/image-kira.jpg";
import quotation from "./images/bg-pattern-quotation.svg";

const kiraBase = {
  name: "Kira Whittle",
  role: "Verified Graduate",
  image: kira,
  headline: "Such a life-changing experience. Highly recommended!",
  detail: `"Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"`,
};

const cards = [
  {
    id: "daniel",
    name: "Daniel Clifford",
    role: "Verified Graduate",
    image: daniel,
    boxClass: "relative p-10 rounded-xl bg-purple-700 md:col-span-2",
    headline: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    headlineClass: "relative z-10",
    detail: `"I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero repudiandae, quasi atque officiis eum consectetur odio amet dolorem deleniti repellat expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo totam sequi omnis deserunt? Sit nam molestiae excepturi, perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis exercitationem tempora!"`,
    detailClass: "mt-6 opacity-50 line-clamp-6",
    quotation: true,
  },
  {
    id: "jonathan",
    name: "Jonathan Walters",
    role: "Verified Graduate",
    image: jonathan,
    boxClass: "p-10 rounded-xl bg-gray-600",
    headline: "The team was very supportive and kept me motivated",
    headlineClass: "",
    detail: `"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam veritatis natus illum ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem necessitatibus facere nihil deleniti assumenda vel velit neque quia, nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem consequuntur praesentium a est eum velit quos maiores ipsum facere tempora!"`,
    detailClass: "mt-6 opacity-50 line-clamp-5",
  },
  {
    ...kiraBase,
    id: "kira-desktop",
    boxClass: "hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2",
    headlineClass: "",
    detailClass: "mt-6 opacity-50",
  },
  {
    id: "jeanette",
    name: "Jeanette Harmon",
    role: "Verified Graduate",
    image: jeanette,
    boxClass: "p-10 rounded-xl text-gray-900 bg-white",
    headline: "An overall wonderful and rewarding experience",
    headlineClass: "",
    detail: `"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."`,
    detailClass: "mt-6 opacity-50",
  },
  {
    id: "patrick",
    name: "Patrick Abrams",
    role: "Verified Graduate",
    image: patrick,
    boxClass: "p-10 rounded-xl bg-gray-900 md:col-span-2",
    headline: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    headlineClass: "",
    detail: `"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."`,
    detailClass: "mt-6 opacity-50",
  },
  {
    ...kiraBase,
    id: "kira-mobile",
    boxClass: "p-10 rounded-xl text-gray-900 bg-white md:hidden",
    headlineClass: "",
    detailClass: "mt-6 opacity-50",
  },
];

export { quotation };

export default cards;