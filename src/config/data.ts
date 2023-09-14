import { IProject, IService } from "../types";

export const projects: IProject[] = [
  {
    id: 1,
    name: "streamwdgts",
    description:
      "service that helps streamers enhance their stream by creating custom widgets. service has its own code editor that brings better developer experience",
    whatBuilt: "development, design",
    isDeployed: false,
  },
  {
    id: 2,
    name: "uling",
    description:
      "uling is a chrome translator extension designed for easy and quick access on any webpage. the translator uses DeepL© api under the hood ",
    whatBuilt: "fullstack development",
    isDeployed: false,
  },
  {
    id: 3,
    name: "null-auth",
    image: "https://s3.timeweb.com/2e7781a6-recipeer/nullauthpreview.jpg",
    description:
      "null-auth is a secure offline-first 2fa desktop application. import your 2fa qr codes from any application or directly from google authenticator",
    whatBuilt: "fullstack development",
    isDeployed: true,
    link: "https://github.com/ruwpy/null-auth",
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
