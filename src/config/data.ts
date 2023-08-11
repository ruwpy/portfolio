import { IProject, IService } from "../types";

export const projects: IProject[] = [
  {
    id: 1,
    name: "astrellum",
    image:
      "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80  ",
    description:
      "application designed to search for collaborators for your project with no effort. add your project, specify the skills required for it and wait for responses",
    whatBuilt: "design, development",
    link: "https://fuwy.vercel.app",
    isDeployed: false,
  },
  {
    id: 2,
    name: "null-auth",
    image: "https://s3.timeweb.com/2e7781a6-recipeer/nullauthpreview.jpg",
    description:
      "null-auth is a secure offline-first 2fa desktop application. import your 2fa qr codes from any application or directly from google authenticator",
    whatBuilt: "fullstack development",
    isDeployed: true,
    link: "https://github.com/ruwpy/null-auth",
  },
  {
    id: 3,
    name: "recipeer",
    image:
      "https://images.unsplash.com/photo-1615817198611-3a444017a48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    description:
      "unleash your inner chef. discover, create, and share recipes. connect with a vibrant community of food enthusiasts. explore flavors, exchange cooking tips, and elevate your culinary skills.",
    whatBuilt: "design, fullstack development",
    isDeployed: true,
    link: "https://recipeer.vercel.app",
  },
];

export const services: IService[] = [
  {
    id: 1,
    title: `feasibility assessment`,
    desc: "a structured evaluation of a design from a technical perspective to ensure its feasibility and effectiveness, including assessment report and related effort and resources estimate.",
  },
  {
    id: 2,
    title: "creative concept & prototyping",
    desc: "applying technical and creative skills, I envision and develop innovative solutions to help clients model, prototype and refine their product or service ideas before launch.",
  },
  {
    id: 3,
    title: "frontend development",
    desc: "I provide bespoke development services as a solo-dev or lead front-end resource in projects of any size with special attention to interaction and motion.",
  },
  {
    id: 4,
    title: "backend development",
    desc: "based on project requirements, size and stage I can provide back-end and infrastructure support as well as getting the right resources to team up with.",
  },
];

export const frontendTechnologies: string[] = [
  "html",
  "css/sass",
  "javascript",
  "typescript",
  "react",
  "next.js",
  "tailwindcss",
  "framer motion",
];
export const backendTechnologies: string[] = [
  "node",
  "rust",
  "express.js",
  "postgres",
  "mongodb",
];
