import { images } from "./images";

export const sidebarNav = [
  { label: "Dashboard", path: "/landing-pages/dashboard", icon: "fa-regular fa-chart-bar fa-fw", end: true },
  { label: "Settings", path: "/landing-pages/dashboard/settings", icon: "fa-solid fa-gear fa-fw" },
  { label: "Profile", path: "/landing-pages/dashboard/profile", icon: "fa-regular fa-user fa-fw" },
  { label: "Projects", path: "/landing-pages/dashboard/projects", icon: "fa-solid fa-diagram-project fa-fw" },
  { label: "Courses", path: "/landing-pages/dashboard/courses", icon: "fa-solid fa-graduation-cap fa-fw" },
  { label: "Friends", path: "/landing-pages/dashboard/friends", icon: "fa-regular fa-circle-user fa-fw" },
  { label: "Files", path: "/landing-pages/dashboard/files", icon: "fa-regular fa-file fa-fw" },
  { label: "Plans", path: "/landing-pages/dashboard/plans", icon: "fa-regular fa-credit-card fa-fw" },
];

export const homeData = {
  welcome: {
    title: "Welcome",
    subtitle: "Elzero",
    introImg: images.welcomePng,
    avatar: images.avatar,
    stats: [
      { label: "Osama Elzero", sub: "Developer" },
      { label: "80", sub: "Projects" },
      { label: "$8500", sub: "Earned" },
    ],
  },
  targets: [
    { icon: "fa-solid fa-dollar-sign", color: "blue", name: "Money", value: "$20.000", percent: "80%" },
    { icon: "fa-solid fa-code", color: "orange", name: "Projects", value: "24", percent: "55%" },
    { icon: "fa-solid fa-user", color: "green", name: "Team", value: "12", percent: "75%" },
  ],
  tickets: [
    { icon: "fa-regular fa-rectangle-list", color: "c-orange", value: "2500", label: "Total" },
    { icon: "fa-solid fa-spinner", color: "c-blue", value: "500", label: "Pending" },
    { icon: "fa-regular fa-circle-check", color: "c-green", value: "1900", label: "Closed" },
    { icon: "fa-regular fa-rectangle-xmark", color: "c-red", value: "100", label: "Deleted" },
  ],
  news: [
    { img: images.news01, title: "Created SASS Section", desc: "New SASS Examples & Tutorials", label: "3 Days Ago" },
    { img: images.news02, title: "Changed The Design", desc: "A Brand New Website Design", label: "5 Days Ago" },
    { img: images.news03, title: "Team Increased", desc: "3 Developers Joined The Team", label: "7 Days Ago" },
    { img: images.news04, title: "Added Payment Gateway", desc: "Many New Payment Gateways Added", label: "9 Days Ago" },
  ],
  tasks: [
    { title: "Record One New Video", desc: "Record Python Create Exe Project", done: false },
    { title: "Write Article", desc: "Write Low Level vs High Level Languages", done: false },
    { title: "Finish Project", desc: "Publish Academy Programming Project", done: false },
    { title: "Attend The Meeting", desc: "Attend The Project Business Analysis Meeting", done: true },
    { title: "Finish Lesson", desc: "Finish Teaching Flex Box", done: false },
  ],
  searchItems: [
    { keyword: "Programming", count: 220 },
    { keyword: "JavaScript", count: 180 },
    { keyword: "PHP", count: 160 },
    { keyword: "Code", count: 145 },
    { keyword: "Design", count: 110 },
    { keyword: "Logic", count: 95 },
  ],
  uploads: [
    { img: images.pdfSvg, name: "my-file.pdf", author: "Elzero", size: "2.9mb" },
    { img: images.aviSvg, name: "My-Video-File.avi", author: "Admin", size: "4.9mb" },
    { img: images.psdSvg, name: "My-Psd-File.pdf", author: "Osama", size: "4.5mb" },
    { img: images.zipSvg, name: "My-Zip-File.pdf", author: "User", size: "8.9mb" },
    { img: images.dllSvg, name: "My-DLL-File.pdf", author: "Admin", size: "4.9mb" },
    { img: images.epsSvg, name: "My-Eps-File.pdf", author: "Designer", size: "8.9mb" },
  ],
  lastProject: [
    { label: "Got The Project", state: "done" },
    { label: "Started The Project", state: "done" },
    { label: "The Project About To Finish", state: "done" },
    { label: "Test The Project", state: "current" },
    { label: "Finish The Project & Get Money", state: "" },
  ],
  reminders: [
    { color: "blue", title: "Check My Tasks List", date: "28/09/2022 - 12:00am" },
    { color: "green", title: "Check My Projects", date: "26/10/2022 - 12:00am" },
    { color: "orange", title: "Call All My Clients", date: "05/11/2022 - 12:00am" },
    { color: "red", title: "Finish The Development Workshop", date: "20/12/2022 - 12:00am" },
  ],
  post: {
    name: "Osama Elzero",
    time: "About 3 Hours Ago",
    content:
      "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    likes: "1.8K",
    comments: "500",
  },
  social: [
    { klass: "twitter", icon: "fa-brands fa-twitter", text: "90K Followers", action: "Follow" },
    { klass: "facebook", icon: "fa-brands fa-facebook-f", text: "2M Like", action: "Like" },
    { klass: "youtube", icon: "fa-brands fa-youtube", text: "1M Subs", action: "Subscribe" },
    { klass: "linkedin", icon: "fa-brands fa-linkedin", text: "70K Followers", action: "Follow" },
  ],
  projectsTable: [
    { name: "Ministry Wikipedia", date: "10 May 2022", client: "Ministry", price: "$5300", team: [images.team01, images.team02, images.team03, images.team05], status: "Pending", statusClass: "bg-orange" },
    { name: "Elzero Shop", date: "12 Oct 2021", client: "Elzero Company", price: "$1500", team: [images.team01, images.team02, images.team05], status: "In Progress", statusClass: "bg-blue" },
    { name: "Bouba App", date: "05 Sep 2021", client: "Bouba", price: "$800", team: [images.team02, images.team03], status: "Completed", statusClass: "bg-green" },
    { name: "Mahmoud Website", date: "22 May 2021", client: "Mahmoud", price: "$600", team: [images.team01, images.team02], status: "Completed", statusClass: "bg-green" },
    { name: "Sayed Website", date: "24 May 2021", client: "Sayed", price: "$300", team: [images.team01, images.team03], status: "Rejected", statusClass: "bg-red" },
    { name: "Arena Application", date: "01 Mar 2021", client: "Arena Company", price: "$2600", team: [images.team01, images.team02, images.team03, images.team04], status: "Completed", statusClass: "bg-green" },
  ],
};

export const profileData = {
  name: "Osama Elzero",
  level: "Level 20",
  levelWidth: "70%",
  rating: [1, 2, 3, 4, 5],
  ratingText: "550 Rating",
  infoBoxes: [
    {
      title: "General Information",
      rows: [
        ["Full Name", "Osama Mohamed"],
        ["Gender:", "Male"],
        ["Country:", "Egypt"],
      ],
      toggle: { checked: true },
    },
    {
      title: "Personal Information",
      rows: [
        ["Email:", "o@nn.sa"],
        ["Phone:", "019123456789"],
        ["Date Of Birth:", "25/10/1982"],
      ],
      toggle: { checked: false },
    },
    {
      title: "Job Information",
      rows: [
        ["Title:", "Full Stack Developer"],
        ["Programming Language:", "Python"],
        ["Years Of Experience:", "15+"],
      ],
      toggle: { checked: true },
    },
    {
      title: "Billing Information",
      rows: [
        ["Payment Method:", "Paypal"],
        ["Email:", "email@website.com"],
        ["Subscription:", "Monthly"],
      ],
      toggle: { checked: false },
    },
  ],
  skills: [
    ["HTML", "Pugjs", "HAML"],
    ["CSS", "SASS", "Stylus"],
    ["JavaScript", "TypeScript"],
    ["Vuejs", "Reactjs"],
    ["Jest", "Jasmine"],
    ["PHP", "Laravel"],
    ["Python", "Django"],
  ],
  activities: [
    { img: images.activity01, title: "Store", desc: "Bought The Mastering Python Course", time: "18:10", when: "Yesterday" },
    { img: images.activity02, title: "Academy", desc: "Got The PHP Certificate", time: "16:05", when: "Yesterday" },
    { img: images.activity03, title: "Badges", desc: "Unlocked The 10 Skills Badge", time: "18:05", when: "Yesterday" },
    { img: images.activity01, title: "Store", desc: "Bought The Typescript Course", time: "12:05", when: "Yesterday" },
  ],
};

export const projectsData = [
  { date: "15/10/2021", name: "Elzero Dashboard", desc: "Elzero Dashboard Project Design And Programming And Hosting", team: [images.team01, images.team02, images.team03, images.team04, images.team05], do: ["Programming", "Design", "Hosting", "Marketing"], progClass: "bg-red", width: "50%", price: "2500" },
  { date: "15/6/2022", name: "Academy Portal", desc: "Academy Portal Project Design And Programming", team: [images.team01, images.team02, images.team03], do: ["Programming", "Design"], progClass: "bg-green", width: "80%", price: "1800" },
  { date: "15/6/2022", name: "Chatting Application", desc: "Chatting Application Project Design", team: [images.team01, images.team02, images.team03], do: ["Design"], progClass: "bg-blue", width: "100%", price: "950" },
  { date: "15/6/2022", name: "Ahmed Dashboard", desc: "Ahmed Dashboard Project Design And Programming And Hosting", team: [images.team01, images.team02, images.team03, images.team04], do: ["Programming", "Design", "Hosting", "Marketing"], progClass: "bg-green", width: "60%", price: "1700" },
  { date: "15/6/2022", name: "Ahmed Portal", desc: "Ahmed Portal Project Design And Programming", team: [images.team01, images.team02, images.team03], do: ["Programming", "Design"], progClass: "bg-green", width: "70%", price: "850" },
  { date: "15/6/2022", name: "Mohamed Application", desc: "Mohamed Application Project Design", team: [images.team01, images.team02, images.team03], do: ["Design"], progClass: "bg-red", width: "40%", price: "950" },
  { date: "15/6/2022", name: "Mohamed Dashboard", desc: "Mohamed Dashboard Project Design And Programming And Hosting", team: [images.team01, images.team02, images.team03, images.team04], do: ["Programming", "Design", "Hosting", "Marketing"], progClass: "bg-green", width: "65%", price: "1950" },
  { date: "15/6/2022", name: "Mohamed Portal", desc: "Mohamed Portal Project Design And Programming", team: [images.team01, images.team02, images.team03], do: ["Programming", "Design"], progClass: "bg-green", width: "60%", price: "1650" },
  { date: "15/6/2022", name: "Ahmed Application", desc: "Ahmed Application Project Design", team: [images.team01, images.team02, images.team03], do: ["Design"], progClass: "bg-green", width: "90%", price: "950" },
];

export const coursesData = [
  { cover: images.course01, instructor: images.team01, title: "Mastering Web Design", desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture", users: "950", price: "165" },
  { cover: images.course02, instructor: images.team02, title: "Data Structure And Algorithms", desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering", users: "1150", price: "210" },
  { cover: images.course03, instructor: images.team01, title: "Responsive Web Design", desc: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints", users: "650", price: "90" },
  { cover: images.course04, instructor: images.team03, title: "Mastering Python", desc: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life", users: "950", price: "250" },
  { cover: images.course05, instructor: images.team03, title: "PHP Examples", desc: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases", users: "850", price: "150" },
  { cover: images.course02, instructor: images.team02, title: "Data Structure And Algorithms", desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering", users: "1150", price: "210" },
  { cover: images.course03, instructor: images.team01, title: "Responsive Web Design", desc: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints", users: "650", price: "90" },
  { cover: images.course01, instructor: images.team01, title: "Mastering Web Design", desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Archticture", users: "850", price: "145" },
  { cover: images.course05, instructor: images.team03, title: "PHP Examples", desc: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases", users: "850", price: "150" },
  { cover: images.course04, instructor: images.team03, title: "Mastering Python", desc: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life", users: "950", price: "250" },
];

const friendCard = (img, name, job, friends, projects, articles, joined, vip) => ({
  img,
  name,
  job,
  friends,
  projects,
  articles,
  joined,
  vip,
});

export const friendsData = [
  friendCard(images.friend01, "Ahmed Nasser", "JavaScript Developer", "99", "15", "25", "02/10/2021", true),
  friendCard(images.friend02, "Omar Fathy", "Cloud Developer", "30", "11", "12", "02/08/2020", false),
  friendCard(images.friend03, "Omar Ahmed", "Mobile Developer", "80", "20", "18", "02/06/2020", false),
  friendCard(images.friend04, "Shady Nabil", "Back-End Developer", "70", "30", "18", "28/06/2020", false),
  friendCard(images.friend05, "Mohamed Ibrahim", "Algorithm Developer", "80", "30", "18", "28/08/2020", false),
  friendCard(images.friend04, "Amr Hendawy", "Back-End Developer", "70", "30", "18", "28/06/2020", false),
  friendCard(images.friend02, "Mahmoud Adel", "Cloud Developer", "30", "11", "12", "02/08/2020", false),
  friendCard(images.friend05, "Ahmed Abuzaid", "Content Creator", "80", "30", "18", "28/08/2020", true),
  friendCard(images.friend01, "Gareeb Elshiekh", "JavaScript Developer", "90", "15", "25", "02/10/2020", true),
  friendCard(images.friend03, "Hamza", "Front-End Developer", "80", "20", "18", "02/06/2020", false),
];

export const filesData = {
  stats: [
    { icon: "fa-regular fa-file-pdf", color: "blue", name: "PDF Files", count: "130", size: "6.5GB" },
    { icon: "fa-regular fa-images", color: "green", name: "Images", count: "115 Files", size: "3.5GB" },
    { icon: "fa-regular fa-file-word", color: "red", name: "Word Files", count: "110 Files", size: "3.2GB" },
    { icon: "fa-solid fa-file-csv", color: "orange", name: "CSV Files", count: "99 Files", size: "2.9GB" },
  ],
  files: [
    [images.pdfSvg, "my-file.pdf", "Elzero", "20/06/2020", "5.5MB"],
    [images.aviSvg, "my-file.avi", "Admin", "16/5/2021", "12.5MB"],
    [images.epsSvg, "my-file.eps", "Uploader", "16/5/2021", "2.7MB"],
    [images.psdSvg, "my-file.psd", "Osama", "16/5/2021", "15.1MB"],
    [images.dllSvg, "my-file.dll", "Coder", "16/5/2021", "2.2MB"],
    [images.pngSvg, "my-file.png", "Designer", "16/5/2021", "1.1MB"],
    [images.dllSvg, "my-file.dll", "Coder", "16/5/2021", "2.2MB"],
    [images.pngSvg, "my-file.png", "Designer", "16/5/2021", "1.1MB"],
    [images.psdSvg, "my-file.psd", "Osama", "16/5/2021", "15.1MB"],
    [images.pdfSvg, "my-file.pdf", "Elzero", "16/5/2021", "5.5MB"],
    [images.aviSvg, "my-file.avi", "Admin", "16/5/2021", "12.5MB"],
    [images.epsSvg, "my-file.eps", "Uploader", "16/5/2021", "2.7MB"],
    [images.pdfSvg, "my-file.pdf", "Elzero", "16/5/2021", "5.5MB"],
    [images.aviSvg, "my-file.avi", "Admin", "16/5/2021", "12.5MB"],
    [images.epsSvg, "my-file.eps", "Uploader", "16/5/2021", "2.7MB"],
    [images.psdSvg, "my-file.psd", "Osama", "16/5/2021", "15.1MB"],
    [images.dllSvg, "my-file.dll", "Coder", "16/5/2021", "2.2MB"],
    [images.pngSvg, "my-file.png", "Designer", "16/5/2021", "1.1MB"],
    [images.dllSvg, "my-file.dll", "Coder", "16/5/2021", "2.2MB"],
    [images.pngSvg, "my-file.png", "Designer", "16/5/2021", "1.1MB"],
    [images.psdSvg, "my-file.psd", "Osama", "16/5/2021", "15.1MB"],
    [images.pdfSvg, "my-file.pdf", "Elzero", "16/5/2021", "5.5MB"],
    [images.aviSvg, "my-file.avi", "Admin", "16/5/2021", "12.5MB"],
    [images.epsSvg, "my-file.eps", "Uploader", "16/5/2021", "2.7MB"],
  ],
};

export const plansData = [
  {
    color: "green",
    name: "Free",
    price: "0.00",
    features: [
      { yes: true, label: "Access All Text Lessons" },
      { yes: true, label: "Access All Videos Lessons" },
      { yes: true, label: "Appear On Leaderboard" },
      { yes: false, label: "Browse Content Without Ads" },
      { yes: false, label: "Access All Assignments" },
      { yes: false, label: "Get Daily Prizes" },
      { yes: false, label: "Earn Certificate" },
      { yes: false, label: "1 GB Space For Hosting Files" },
      { yes: false, label: "Access Badge System" },
    ],
    current: false,
  },
  {
    color: "blue",
    name: "Basic",
    price: "7.99",
    features: [
      { yes: true, label: "Access All Text Lessons" },
      { yes: true, label: "Access All Videos Lessons" },
      { yes: true, label: "Appear On Leaderboard" },
      { yes: true, label: "Browse Content Without Ads" },
      { yes: true, label: "Access All Assignments" },
      { yes: true, label: "Get Daily Prizes" },
      { yes: true, label: "Earn Certificate" },
      { yes: false, label: "1 GB Space For Hosting Files" },
      { yes: false, label: "Access Badge System" },
    ],
    current: false,
  },
  {
    color: "orange",
    name: "Premium",
    price: "19.99",
    features: [
      { yes: true, label: "Access All Text Lessons" },
      { yes: true, label: "Access All Videos Lessons" },
      { yes: true, label: "Appear On Leaderboard" },
      { yes: true, label: "Browse Content Without Ads" },
      { yes: true, label: "Access All Assignments" },
      { yes: true, label: "Get Daily Prizes" },
      { yes: true, label: "Earn Certificate" },
      { yes: true, label: "1 GB Space For Hosting Files" },
      { yes: true, label: "Access Badge System" },
    ],
    current: true,
  },
];