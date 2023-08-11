import { useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { motion as m, AnimatePresence } from "framer-motion";

export const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const refSmoothWrapper = useRef<HTMLElement>(null);
  const refSmoothContent = useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  const skewConfig = {
    ease: 0.075,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    if (refSmoothContent.current && size.width >= 1024)
      document.body.style.height = `${
        refSmoothContent.current.getBoundingClientRect().height
      }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    if (refSmoothContent.current)
      refSmoothContent.current.style.transform = `translateY(-${skewConfig.rounded}px)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return size.width >= 1024 ? (
    <m.main
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={refSmoothWrapper}
      className="smooth-wrapper fixed top-0 left-0 w-full h-full overflow-hidden"
    >
      <AnimatePresence>
        <div ref={refSmoothContent} className="smooth-content">
          {children}
        </div>
      </AnimatePresence>
    </m.main>
  ) : (
    <m.main
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatePresence>{children}</AnimatePresence>
    </m.main>
  );
};
