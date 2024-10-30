import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Fullstack Laravel Website Developer",
    company_name: "PT JARI Teknologi Informasi",
    icon: web,
    // icon: CONTOH -> starbucks,
    iconBg: "#FFFFFF",
    date: "March 2020 - April 2021",
    points: [
      "Collaborated with the UI/UX team to enhance user interfaces and improve application responsiveness.",
      "Developed and maintained web applications using Laravel for both internal and external company needs.",
      "Optimized application performance through caching and MySQL database management.",
      "Contributed to front-end feature development using Bootstrap and Vue.js, and integrated back-end with REST API.",
    ],
  },
  {
    title: "Web Developer & Designer",
    company_name: "Freelance",
    iconBg: "#FFFFFF",
    date: "Remote | Mar 2022 - Present",
    points: [
      "Developed various client websites using Laravel, React.js and Three.js.",
      "Created responsive web applications with attractive and functional user interfaces.",
      "Optimized application performance by implementing lazy loading techniques and efficiently managing API calls.",
      "Communicated directly with clients to ensure solutions met their business needs.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Company Profile of PT.JARI Teknologi Informasi",
    description:
      "A company profile website designed to introduce PT. JARI Teknologi Informasi to potential clients and business partners. Built using Laravel, MongoDB, and Tailwind CSS, this site provides a comprehensive view of the company's services, portfolio, and profile with a modern and responsive layout.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "E-Commerce Fashion Shop",
    description:
      "An e-commerce platform designed for a fashion store, offering features like product catalog, shopping cart management, and online payment integration. This application is built using Laravel, SCSS for dynamic styling, and a REST API that enables seamless service communication for a smooth shopping experience.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "Pulus (Website Pengepul Sampah)",
    description:
      "An innovative platform that connects waste collectors with communities who wish to recycle or sell their waste. Built with a combination of React and Laravel, and supported by Supabase as the backend, this website aims to promote sustainability by providing a user-friendly interface for both users and collectors.",
    tags: [
      {
        name: "React + Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
