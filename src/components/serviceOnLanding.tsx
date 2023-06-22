import { IService } from "../types";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { animations } from "../config/framer";
import { useMouseStore } from "../store/mouseStore";

export const ServiceOnLanding = ({ service }: { service: IService }) => {
  const { desc, id, title } = service;
  const [serviceHovered, setServiceHovered] = useState(false);
  const { setOverButton } = useMouseStore();

  return (
    <div
      onMouseOver={() => setOverButton(true)}
      onMouseLeave={() => setOverButton(false)}
      className="relative cursor-pointer"
    >
      <m.div
        animate={serviceHovered ? "animate" : "initial"}
        exit="initial"
        variants={animations.serviceTitle}
        onMouseOver={() => setServiceHovered(true)}
        onMouseLeave={() => setServiceHovered(false)}
        key={id}
        className="flex flex-col md:flex-row xl:flex-col xl:items-start xl:h-[380px] md:items-center md:justify-between xl:justify-start p-[20px] md:px-[50px] lg:px-0 xl:p-[20px] xl:pt-[60px] gap-[20px] border-t border-l border-b border-black/20"
      >
        <span className="font-semibold text-[24px] xl:text-[36px] leading-[24px] xl:leading-[36px] z-[5]">
          {title}
        </span>
        <m.p
          animate={serviceHovered ? "animate" : "initial"}
          variants={animations.serviceDesc}
          className="text-[16px] leading-[18px] max-w-[450px] text-black/50 z-[5]"
        >
          {desc}
        </m.p>
      </m.div>
      <AnimatePresence mode="wait">
        {serviceHovered && (
          <m.div
            animate={serviceHovered ? "animate" : "initial"}
            variants={animations.serviceBg}
            exit="initial"
            className="absolute w-full h-full left-0 bg-darkGrey pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
