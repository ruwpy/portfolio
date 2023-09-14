import { cn } from "../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("relative max-w-[1440px] px-[20px] mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};
