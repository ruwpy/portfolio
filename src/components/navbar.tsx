import { useState } from "react";
import { animations } from "../config/animations";
import { AnimatePresence, motion as m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Icons } from "./icons";
import { useMouseStore } from "../store/mouseStore";
import { AnimateText } from "./animateText";
import { useEffect } from "react";

export const Navbar = () => {
  const [navHovered, setNavHovered] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { setOverButton } = useMouseStore();
  const location = useLocation();
  let pageTitle: string = "";

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  if (location.pathname === "/") {
    pageTitle = "home";
  } else if (location.pathname === "/about") {
    pageTitle = "about";
  }
  // else if (location.pathname === "/projects") {
  //   pageTitle = "projects";
  // }

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="text-darkGrey flex">
        <div className="flex flex-col">
          <div className="bg-white px-[20px] py-[5px] items-center flex justify-between w-[210px] md:w-[300px] xl:w-[350px]">
            <Link to="/">
              <span className="text-[24px]">ruwpy</span>
            </Link>
            <m.span
              onMouseEnter={() => {
                setOverButton(true);
                setNavHovered(true);
              }}
              onMouseLeave={() => {
                setOverButton(false);
                setNavHovered(false);
              }}
              animate={navHovered ? "hover" : "initial"}
              onClick={() => setNavOpen((prev) => !prev)}
              className="relative flex h-full items-center px-[6px] cursor-pointer"
            >
              <span className="flex flex-col w-[20px] overflow-hidden gap-[4px]">
                <m.span
                  variants={animations.burger}
                  custom={1}
                  className="flex gap-[25px]"
                >
                  <span className="inline-block flex-shrink-0 w-[20px] h-[1px] bg-black"></span>
                  <span className="inline-block flex-shrink-0 w-[20px] h-[1px] bg-black"></span>
                </m.span>
                <m.span
                  variants={animations.burger}
                  custom={2}
                  className="flex gap-[25px]"
                >
                  <span className="inline-block flex-shrink-0 w-[20px] h-[1px] bg-black"></span>
                  <span className="inline-block flex-shrink-0 w-[20px] h-[1px] bg-black"></span>
                </m.span>
                <m.span
                  variants={animations.burger}
                  custom={3}
                  className="flex gap-[25px]"
                >
                  <span className="inline-block flex-shrink-0 w-[15px] h-[1px] bg-black"></span>
                  <span className="inline-block flex-shrink-0 w-[15px] h-[1px] bg-black"></span>
                </m.span>
              </span>
            </m.span>
          </div>
          <m.div
            variants={animations.nav}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            animate={navOpen ? "animate" : "initial"}
            className="bg-white  px-[20px] overflow-hidden flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              {navOpen && (
                <>
                  <ul className="flex flex-col text-[20px] gap-[5px] mt-[30px]">
                    <li className="inline-block list-none">
                      <Link to="/">
                        <AnimateText
                          whileHover={{
                            x: 5,
                            transition: { type: "tween", duration: 0.2 },
                          }}
                          exit="initial"
                          delayNum={3}
                          htmlTag="span"
                        >
                          home
                        </AnimateText>
                      </Link>
                    </li>
                    <li className="inline-block list-none">
                      <Link to="/about">
                        <AnimateText
                          whileHover={{
                            x: 5,
                            transition: { type: "tween", duration: 0.2 },
                          }}
                          exit="initial"
                          delayNum={9}
                          htmlTag="span"
                        >
                          about
                        </AnimateText>
                      </Link>
                    </li>
                  </ul>

                  <div className="flex gap-[10px] mb-[10px]">
                    <Link to="https://github.com/ruwpy" target="_blank">
                      <Icons.github />
                    </Link>
                    <Link to="mailto:ruwpy.who@gmail.com">
                      <Icons.mail />
                    </Link>
                  </div>
                </>
              )}
            </AnimatePresence>
          </m.div>
        </div>
        <AnimatePresence mode="wait">
          <m.span
            key={pageTitle}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={animations.pageTitle}
            className="text-white h-fit text-[20px] flex-grow text-center md:flex-grow-0 md:ml-[35px] mt-[9px]"
          >
            {pageTitle}
          </m.span>
        </AnimatePresence>
      </div>
    </header>
  );
};
