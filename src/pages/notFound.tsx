import { AnimateText } from "../components/animateText";
import { Container } from "../components/container";
import { SmoothScrollWrapper } from "../components/smoothScrollWrapper";

export const NotFound = () => {
  return (
    <SmoothScrollWrapper>
      <Container>
        <div className="h-[100dvh] flex flex-col text-center justify-center">
          <h1 className="text-[40px] lg:text-[64px]">page not found</h1>
          <AnimateText
            htmlTag="p"
            className="text-[16px] leading-[16px]flex gap-x-[4px] justify-center lg:text-[20px] text-white/50"
          >
            the page you are looking for doesn't exist or has been moved
          </AnimateText>
        </div>
      </Container>
    </SmoothScrollWrapper>
  );
};
