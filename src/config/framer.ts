import { Variants } from "framer-motion";

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

const navAnimation: Variants = {
  initial: { height: "0px" },
  animate: { height: "250px" },
};

export const animations = {
  burger: burgerAnimation,
  nav: navAnimation,
};
