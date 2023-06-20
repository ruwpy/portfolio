import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { useMouseStore } from "../store/mouseStore";

const button = cva("bg-white text-darkGrey px-[20px] py-[10px]", {
  variants: {
    size: {
      small: "text-[16px] md:text-[18px]",
      medium: "text-[18px] md:text-[22px]",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({ className, size, ...props }: ButtonProps) => {
  const { setOverButton } = useMouseStore();

  return (
    <button
      onMouseOver={() => setOverButton(true)}
      onMouseLeave={() => setOverButton(false)}
      className={cn(button({ className, size }))}
      {...props}
    />
  );
};
