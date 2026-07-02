import {
  mobile,
  backend,
  creator,
  web,
  portfolio1,
  portfolio2,
  portfolio3,
  meta,
  logoMurat,
} from "../assets";

// Devicons
import ReactOriginalIcon from "react-devicons/react/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import Html5OriginalIcon from "react-devicons/html5/original";
import Css3OriginalIcon from "react-devicons/css3/original";
import TailwindcssOriginalIcon from "react-devicons/tailwindcss/original";
import BootstrapOriginalIcon from "react-devicons/bootstrap/original";
import WordpressOriginalIcon from "react-devicons/wordpress/original";
import GraphqlPlainIcon from "react-devicons/graphql/plain";
import FirebasePlainIcon from "react-devicons/firebase/plain";
import GitOriginalIcon from "react-devicons/git/original";
import GithubOriginalIcon from "react-devicons/github/original";
import PostgresqlOriginalIcon from "react-devicons/postgresql/original";
import AngularOriginalIcon from "react-devicons/angular/original";

// Lucide
import { Layers, Plug, Shield, Database, Triangle } from "lucide-react";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
  { id: "technologies", title: "Technologies" },
  { id: "experiences", title: "Experiences" },
  { id: "projects", title: "Projects" },
];

const services = [
  { title: "webDeveloper", icon: web },
  { title: "reactDeveloper", icon: creator },
  { title: "frontendDeveloper", icon: backend },
  { title: "fullstackWebDeveloper", icon: mobile },
];

const technologies = [
  // Devicons — isDevicon: true → originale Farben, size-Prop
  { name: "HTML 5",       iconComponent: Html5OriginalIcon,       isDevicon: true },
  { name: "CSS 3",        iconComponent: Css3OriginalIcon,        isDevicon: true },
  { name: "JavaScript",   iconComponent: JavascriptOriginalIcon,  isDevicon: true },
  { name: "TypeScript",   iconComponent: TypescriptOriginalIcon,  isDevicon: true },
  { name: "React",        iconComponent: ReactOriginalIcon,       isDevicon: true },
  { name: "Tailwind CSS", iconComponent: TailwindcssOriginalIcon, isDevicon: true },
  { name: "Bootstrap",    iconComponent: BootstrapOriginalIcon,   isDevicon: true },
  { name: "WordPress",    iconComponent: WordpressOriginalIcon,   isDevicon: true },
  { name: "GraphQL",      iconComponent: GraphqlPlainIcon,        isDevicon: true },
  { name: "PostgreSQL",   iconComponent: PostgresqlOriginalIcon,  isDevicon: true },
  { name: "Firebase",     iconComponent: FirebasePlainIcon,       isDevicon: true },
  { name: "Git",          iconComponent: GitOriginalIcon,         isDevicon: true },
  { name: "GitHub",       iconComponent: GithubOriginalIcon,      isDevicon: true },
  { name: "Angular",      iconComponent: AngularOriginalIcon,     isDevicon: true },

  // Lucide Icons — violett getönt, scale-Prop
  { name: "ACF",         iconComponent: Layers,   scale: 1.25 },
  { name: "Headless CMS",iconComponent: Layers,   scale: 1.25 },
  { name: "REST API",    iconComponent: Plug,     scale: 1.2  },
  { name: "Auth.js",     iconComponent: Shield,   scale: 1.2  },
  { name: "NeonDB",      iconComponent: Database, scale: 1.15 },
  { name: "Vercel",      iconComponent: Triangle, scale: 1.2  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Wir Lieben Aktien GmbH",
    icon: logoMurat,
    iconBg: "#E6DEDD",
    date: "December 2024 - April 2026",
    points: [
      "Developed and maintained production web applications using React, TypeScript, and WordPress as a headless CMS.",
      "Configured and connected ACF while integrating GraphQL and REST APIs for structured content delivery.",
      "Implemented authentication with Auth.js as well as role-based access control for protected content.",
      "Contributed to a subscription-based platform, including user migration workflows from WordPress to NeonDB/PostgreSQL.",
      "Handled deployment and technical maintenance of web applications using Vercel and Postgres-based databases.",
      "Modernized technical legacy systems, including a WordPress environment with numerous outdated plugins.",
      "Collaborated in a team environment using GitHub, branching, pull requests, and shared feature development.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-employed",
    icon: logoMurat,
    iconBg: "#383E56",
    date: "April 2024 - November 2024",
    points: [
      "Built and maintained custom websites for companies and individual clients based on specific project requirements.",
      "Developed responsive user interfaces for desktop, tablet, and mobile devices.",
      "Provided technical support, ongoing improvements, and feature adjustments for existing web projects.",
      "Integrated external services and API-based functionality, including Firebase-based solutions.",
      "Worked directly with clients to understand requirements and deliver tailored web solutions.",
      "Used Git and GitHub for version control and project organization.",
    ],
  },
  {
    title: "Frontend Developer Training",
    company_name: "Developer Akademie",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "November 2022 - April 2024",
    points: [
      "Built practical web applications using Angular, TypeScript, JavaScript, HTML, and CSS as part of an intensive frontend training program.",
      "Developed responsive and interactive interfaces based on project requirements and modern frontend principles.",
      "Worked with Git and agile workflows while completing both individual and team-based projects.",
      "Created a multi-user task management application to strengthen frontend architecture and state handling skills.",
      "Built a browser-based game in vanilla JavaScript using object-oriented programming concepts.",
      "Developed a team chat application with Angular and Firebase inspired by real-world communication tools.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Murat helped us building our own Shopify website. He is very professional and always available to help. We are very happy with the result.",
    name: "Sara Lee",
    designation: "CEO",
    company: "SMARTBANDZ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "JOIN",
    description:
      "Task management application developed using HTML, CSS, and JavaScript. It allows users to create, manage, and track tasks with a focus on simplicity and usability.",
    tags: [
      { name: "html",       color: "blue-text-gradient" },
      { name: "css",        color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
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
      { name: "html",       color: "blue-text-gradient" },
      { name: "css",        color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/MYaglioglu/elpolloloco",
    live_demo: "https://murat-yaglioglu.developerakademie.net/polloloco/index.html",
  },
  {
    name: "DaBubble",
    description:
      "A chat and community platform developed using Angular and Firebase, inspired by real-world team communication tools.",
    tags: [
      { name: "angular",    color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "firebase",   color: "pink-text-gradient" },
    ],
    image: portfolio3,
    source_code_link: "https://github.com/Hellsticks96/da_bubble",
    live_demo: "http://dabubble.muratyaglioglu.de",
  },
  {
    name: "Portfolio 2.0",
    description:
      "An alternative version of my portfolio website built with React and Tailwind CSS to explore modern frontend structure and design.",
    tags: [
      { name: "react",   color: "blue-text-gradient" },
      { name: "tailwind",color: "green-text-gradient" },
    ],
    image: portfolio3,
    source_code_link: "https://github.com/MYaglioglu/portfolio2.0",
    live_demo: "http://dabubble.muratyaglioglu.de",
  },
];

export { services, technologies, experiences, testimonials, projects };
