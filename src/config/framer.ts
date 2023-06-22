import { Variants, color } from "framer-motion";

const burgerAnimation: Variants = {
  initial: (custom) => ({
    x: "-45px",
    transition: { delay: custom * -0.03, type: "tween", duration: 0.3 },
  }),
  hover: (custom) => ({
    x: 0,
    transition: { delay: custom * 0.03, type: "tween", duration: 0.3 },
  }),
};

const textAnimation: Variants = {
  initial: { y: "200%", rotate: 10 },
  animate: (custom) => ({
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.04,
      stiffness: 500,
      ease: [0.07, 0.19, 0, 0.99],
    },
  }),
};

const navAnimation: Variants = {
  initial: { height: "0px" },
  animate: { height: "250px" },
};

const serviceBgAnimation: Variants = {
  initial: {
    top: "600px",
  },
  animate: {
    top: "1px",
  },
};

const serviceTitleAnimation: Variants = {
  initial: { color: "rgb(23 23 23)" },
  animate: { color: "rgb(255 255 255)", transition: { duration: 0.1 } },
};

const serviceDescAnimation: Variants = {
  initial: { color: "rgb(0 0 0 / 0.5)" },
  animate: { color: "rgb(255 255 255 / 0.5)", transition: { duration: 0.1 } },
};

export const animations = {
  burger: burgerAnimation,
  nav: navAnimation,
  text: textAnimation,
  serviceBg: serviceBgAnimation,
  serviceDesc: serviceDescAnimation,
  serviceTitle: serviceTitleAnimation,
};
