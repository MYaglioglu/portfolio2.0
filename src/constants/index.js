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
  threejs,
  portfolio1,
  portfolio2,
  portfolio3,
  meta,
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
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer (Angular, JavaScript)",
    company_name: "Developer Academy",
    icon: meta,
    iconBg: "#383E56",
    date: "November 2022 - April 2024",
    points: [
      "Developed web applications using Angular, TypeScript, and JavaScript as part of practical projects.",
      "Created prototypes and mock-ups based on user requirements and implemented them into functional applications.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Gained experience with version control and teamwork using Git and agile methodologies (SCRUM, Kanban).",
      "Conducted unit and integration tests to ensure software quality.",
    ],
  },
  {
    title: "Personal Projects (Frontend Web Development)",
    company_name: "Self-employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Developed a task management web app for multiple users using Angular and Firebase.",
      "Built a chat messenger app, similar to Slack, to improve team communication.",
      "Programmed a browser-based game using object-oriented programming in Vanilla JavaScript to deepen advanced coding concepts.",
      "Regularly refactored code to adhere to Clean Code principles and SOLID design patterns.",
      "Applied UI/UX design principles to enhance user experience.",
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
    name: "JOIN",
    description:
      "Task management application developed using HTML, CSS, and JavaScript. It allows users to create, manage, and track tasks with a focus on simplicity and usability.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio1,
    source_code_link: "https://github.com/MYaglioglu/join",
    live_demo: "https://gruppe-639.developerakademie.net/join/index.html",
  },
  {
    name: "EL POLLO LOCO",
    description:
      "Browser-based game where the player controls a character to fight enemies and collect coins. Built with HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/MYaglioglu/elpolloloco",
    live_demo: "https://murat-yaglioglu.developerakademie.net/polloloco/index.html",
  },
  {
    name: "DaBubble (Work in Progress)",
    description:
      "A social networking platform developed using Angular and Firebase. It is designed to connect users through bubbles of interest and community.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3,
    source_code_link: "https://github.com/Hellsticks96/da_bubble",
    live_demo: "http://dabubble.muratyaglioglu.de",
  },
  {
    name: "Portfolio 2.0",
    description:
      "A second alternative version of my portfolio website. It is built with React, Tailwind CSS, and three.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3,
    source_code_link: "https://github.com/Hellsticks96/da_bubble",
    live_demo: "http://dabubble.muratyaglioglu.de",
  },
];


export { services, technologies, experiences, testimonials, projects };
