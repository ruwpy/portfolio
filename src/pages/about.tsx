import { useEffect } from "react";
import { AnimateText } from "../components/animateText";
import { Container } from "../components/container";
import { SmoothScrollWrapper } from "../components/smoothScrollWrapper";
import { useWindowSize } from "../hooks/useWindowSize";
import { backendTechnologies, frontendTechnologies } from "../config/data";
import { Link } from "react-router-dom";
import { Icons } from "../components/icons";

export const About = () => {
  const size = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScrollWrapper>
      <Container>
        <div className="flex flex-col lg:flex-row max-w-[500px] lg:gap-[100px] lg:max-w-none mx-auto lg:items-center mt-[200px] lg:h-[100svh] lg:mt-0">
          <div className={`flex flex-col ${size.width >= 1024 ? "order-2" : "order-1"}`}>
            <div className="relative w-full">
              <h1 className="text-[40px]">hi there!</h1>
            </div>
            <p className="text-[20px] leading-[22px] mt-[10px]">
              I'm ruwpy, a creative web developer based in Alicante, Spain. currently
              working on freelance projects and updating my portfolio.
            </p>
            <AnimateText
              htmlTag="p"
              viewport={{ once: true }}
              className="text-[16px] leading-[18px] flex gap-x-[4px] text-white/50 mt-[20px]"
            >
              I've always had a curiosity for the unknown and have always trying to
              educate myself on how things work and why they do. in 2021 I taught myself
              how to code and never had a reason to stop. I love everything to do with
              development & visual design as well as delivering extraordinarily creative
              solutions across digital platforms and beyond
            </AnimateText>
          </div>
          <div
            className={`h-[100svh] lg:h-auto flex flex-col justify-center ${
              size.width >= 1024 ? "order-1" : "order-2"
            }`}
          >
            <span className="text-[40px] whitespace-nowrap">technologies I use</span>
            <div>
              <span className="text-[16px] text-white/50">- for frontend</span>
              <div className="mt-[5px] font-[400] flex flex-wrap gap-[5px]">
                {frontendTechnologies.map((tech) => (
                  <span className="bg-white/10 text-white/60 rounded-full py-[4px] px-[8px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-[30px]">
              <span className="text-[16px] text-white/50">- for backend</span>
              <div className="mt-[5px] font-[400] flex flex-wrap gap-[5px]">
                {backendTechnologies.map((tech) => (
                  <span className="bg-white/10 text-white/60 rounded-full py-[4px] px-[8px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex justify-center bg-white mt-[100px]">
        <Container>
          <AnimateText
            htmlTag="p"
            viewport={{ once: true, amount: 0.6 }}
            className="text-[36px] text-black gap-x-[12px] justify-center md:text-[48px] py-[100px] md:py-[200px] md:px-[50px] text-center max-w-[1280px] leading-[40px] md:leading-[48px]"
          >
            I take every opportunity to explore new perspectives, projects, and
            collaborations. if you've got something, send me a message.
          </AnimateText>
        </Container>
      </div>
      <Container>
        <div
          id="contact"
          className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] lg:gap-[100px] border-t border-white/20 py-[50px] md:py-[80px] justify-center"
        >
          <span className="flex flex-col">
            <span className="text-[18px] md:text-[24px] leading-[18px] md:leading-[24px] text-white/50">
              discord
            </span>
            <span className="text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] select-all">
              @ruwpy
            </span>
          </span>
          <span className="flex flex-col">
            <span className="text-[18px] md:text-[24px] leading-[18px] md:leading-[24px] text-white/50">
              email
            </span>
            <Link to="mailto:ruwpy.who@gmail.com">
              <span className="text-[32px] md:text-[48px] leading-[32px] md:leading-[48px]">
                ruwpy.who@gmail.com
              </span>
            </Link>
          </span>
        </div>
        <div className="w-full border-t text-right py-[20px] border-white/20 flex items-center justify-between text-[14px]">
          <Link
            className="flex items-center gap-[10px]"
            to="https://github.com/ruwpy"
            target="_blank"
          >
            <Icons.github style={{ fill: "white" }} />
            <span>github</span>
          </Link>
          <span>© 2023 dmitrii balianov</span>
        </div>
      </Container>
    </SmoothScrollWrapper>
  );
};
