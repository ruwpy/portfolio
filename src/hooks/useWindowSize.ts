import { useEffect, useState } from "react";

const getWindowSize = (): { width: number; height: number } => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const windowResizeHandle = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", windowResizeHandle);
    return () => window.removeEventListener("resize", windowResizeHandle);
  });

  return windowSize;
};
