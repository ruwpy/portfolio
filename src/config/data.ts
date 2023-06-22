import { IProject, IService } from "../types";

export const projects: IProject[] = [
  {
    id: 1,
    name: "orin",
    image:
      "https://images.unsplash.com/photo-1587614382231-d1590f0039e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    description:
      "streamlined messaging for effortless connection. Instant chat, sleek interface, and a seamless user experience. stay connected, expand your network, and communicate with ease.",
    whatBuilt: "design, fullstack development",
    isDeployed: false,
  },
  {
    id: 2,
    name: "fuwy",
    image:
      "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80  ",
    description:
      "streamlined messaging for effortless connection. Instant chat, sleek interface, and a seamless user experience. stay connected, expand your network, and communicate with ease.",
    whatBuilt: "design, development",
    isDeployed: true,
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
