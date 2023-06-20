import { useMouse } from "../hooks/useMouse";
import { motion as m } from "framer-motion";
import { useMouseStore } from "../store/mouseStore";

export const Cursor = () => {
  const { x, y } = useMouse();
  const { overButton } = useMouseStore();

  console.log(overButton);

  return (
    <m.div
      animate={{
        x: x - (overButton ? 25 : 12.5),
        y: y - (overButton ? 25 : 12.5),
        width: overButton ? 50 : 25,
        height: overButton ? 50 : 25,
      }}
      transition={{ stiffness: 500 }}
      className="hidden lg:block fixed left-0 top-0 origin-center rounded-full w-[25px] h-[25px] bg-white mix-blend-difference z-[9999] pointer-events-none"
    />
  );
};
