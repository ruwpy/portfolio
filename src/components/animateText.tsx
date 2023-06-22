import { animations } from "../config/framer";
import { motion as m, MotionProps } from "framer-motion";
import { cn } from "../lib/utils";

interface AnimateTextProps extends MotionProps {
  children: string;
  className?: string;
  htmlTag: "span" | "p";
  delayNum?: number;
}

export const AnimateText = ({
  children,
  className,
  htmlTag,
  delayNum,
  ...props
}: AnimateTextProps) => {
  const arrayOfWords = children.split(" ");

  return htmlTag === "p" ? (
    <m.p
      whileInView="animate"
      initial="initial"
      exit="initial"
      className={cn(className, "inline-flex flex-wrap")}
      {...props}
    >
      {arrayOfWords.map((word, index) => (
        <span key={index} className="overflow-hidden">
          <m.span
            custom={delayNum ?? index}
            className="inline-block"
            variants={animations.text}
          >
            {word}
          </m.span>
        </span>
      ))}
    </m.p>
  ) : (
    <m.span
      whileInView="animate"
      initial="initial"
      exit="initial"
      className={cn(className, "inline-flex flex-wrap")}
      {...props}
    >
      {arrayOfWords.map((word, index) => (
        <span key={index} className="overflow-hidden">
          <m.span
            custom={delayNum ?? index}
            className="inline-block"
            variants={animations.text}
          >
            {word}
          </m.span>
        </span>
      ))}
    </m.span>
  );
};
