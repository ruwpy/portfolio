import { useState } from "react";
import { IProject } from "../types";
import { useMouseStore } from "../store/mouseStore";
import { AnimateText } from "./animateText";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons } from "./icons";

export const ProjectOnLanding = ({ project }: { project: IProject }) => {
  const { description, link, image, isDeployed, name, whatBuilt, id } = project;
  const [projectHovered, setProjectHovered] = useState(false);
  const isEven = id % 2 === 0;
  const { setOverButton } = useMouseStore();

  return (
    <div key={id} className="border-t border-white/20 py-[30px]">
      <div
        className={`max-w-[400px] md:max-w-none flex flex-col md:flex-row mx-auto ${
          isEven ? "md:justify-between" : "md:gap-[50px]"
        }`}
      >
        <div
          onMouseOver={() => {
            setOverButton(true);
            setProjectHovered(true);
          }}
          onMouseLeave={() => {
            setOverButton(false);
            setProjectHovered(false);
          }}
          className={`aspect-[4/5] relative w-full cursor-pointer overflow-hidden md:max-w-[350px] ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
        >
          <Link to={isDeployed ? link! : ""} target={isDeployed ? "_blank" : ""}>
            {image ? (
              <m.img
                animate={{
                  scale: projectHovered ? 1.15 : 1,
                  transition: { stiffness: 500, ease: [0.07, 0.19, 0, 0.99] },
                }}
                className="bg-white h-full object-cover origin-center w-full"
                src={image}
                alt="project image"
              />
            ) : (
              <div className="bg-[#282828] h-full w-full flex justify-center items-center">
                <Icons.noImage className="opacity-50 w-[55px] h-[55px]" />
              </div>
            )}
          </Link>
          {!isDeployed && (
            <div>
              <div className="bg-yellow-300 text-darkGrey py-[2px] absolute bottom-[80px] left-[-10px] rotate-[6deg] whitespace-nowrap">
                not deployed yet - not deployed yet - not deployed yet - not deployed yet
              </div>
              <div className="bg-yellow-300 text-darkGrey py-[2px] absolute bottom-[20px] left-[-50px] rotate-[-2deg] whitespace-nowrap">
                not deployed yet - not deployed yet - not deployed yet - not deployed yet
              </div>
            </div>
          )}
        </div>
        <div className={`mt-[20px] ${isEven ? "md:order-1" : "md:order-2"}`}>
          <span className="flex flex-col">
            <Link to={isDeployed ? link! : ""} target={isDeployed ? "_blank" : ""}>
              <span
                onMouseOver={() => {
                  setOverButton(true);
                  setProjectHovered(true);
                }}
                onMouseLeave={() => {
                  setOverButton(false);
                  setProjectHovered(false);
                }}
                className="text-[36px] leading-[36px] cursor-pointer font-semibold"
              >
                {name}
              </span>
            </Link>
            <span className="text-[16px] text-white/30">{whatBuilt}</span>
          </span>
          <AnimateText
            htmlTag="p"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-[40px] leading-[18px] max-w-[300px] gap-x-[4px]"
          >
            {description}
          </AnimateText>
        </div>
      </div>
    </div>
  );
};
