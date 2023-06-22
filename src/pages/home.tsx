import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { projects, services } from "../config/data";
import { Icons } from "../components/icons";
import { ProjectOnLanding } from "../components/projectOnLanding";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { AnimateText } from "../components/animateText";
import { ServiceOnLanding } from "../components/serviceOnLanding";

export const Home = () => {
  const refPage = useRef<HTMLElement>(null);
  const refScroll = useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  const skewConfig = {
    ease: 0.075,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    if (refScroll.current)
      document.body.style.height = `${
        refScroll.current.getBoundingClientRect().height
      }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    if (refScroll.current)
      refScroll.current.style.transform = `translateY(-${skewConfig.rounded}px)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <main ref={refPage} className="ss-page bg-darkGrey">
      <div ref={refScroll}>
        <Container>
          <div className="h-[100dvh] flex flex-col pb-[10px] justify-end">
            <AnimateText
              htmlTag="span"
              viewport={{ once: true }}
              delayNum={20}
              className="w-[150px] leading-[20px] gap-x-[4px]"
            >
              specializing in design and web development
            </AnimateText>
            <div className="w-full flex justify-end mt-[150px]">
              <div className="flex flex-col gap-[10px] md:gap-[25px]">
                <div className="flex justify-end md:justify-start gap-[10px] md:translate-x-[10px] md:gap-[20px]">
                  <Button size="medium">about</Button>
                  <Button size="medium">projects</Button>
                </div>
                <div className="font-bold flex flex-col items-end md:items-start text-[48px] md:text-[96px] xl:text-[128px] leading-[48px] md:leading-[96px] xl:leading-[128px]">
                  <AnimateText
                    delayNum={10}
                    htmlTag="span"
                    viewport={{ once: true }}
                    className="md:-translate-x-[58px] xl:-translate-x-[128px]"
                  >
                    FRONTEND
                  </AnimateText>
                  <AnimateText viewport={{ once: true }} delayNum={15} htmlTag="span">
                    DEVELOPER
                  </AnimateText>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[300px] flex justify-center">
            <div className="flex flex-col md:flex-row gap-[30px] md:gap-[80px] md:items-center">
              <AnimateText
                htmlTag="span"
                viewport={{ once: true, margin: "-200px" }}
                className="inline-block text-[48px] gap-x-[12px] w-[200px] leading-[52px] font-semibold"
              >
                I will create a website your users will fall in love with
              </AnimateText>
              <div className="flex flex-col gap-[30px] md:mt-[100px]">
                <AnimateText
                  htmlTag="p"
                  viewport={{ once: true, margin: "-200px" }}
                  className="text-[16px] gap-x-[4px] leading-[18px] max-w-[320px]"
                >
                  focusing on cutting-edge projects, I push the boundaries of development
                  and motion to create forward‑thinking, innovative solutions for
                  agencies, brands and products.
                </AnimateText>
                <Button className="w-fit">more about me</Button>
              </div>
            </div>
          </div>
          <div className="mt-[300px]">
            <h2 className="text-center text-[36px] w-[300px] mx-auto leading-[36px] font-semibold">
              here are my recent works
            </h2>
            <div className="flex flex-col max-w-[1000px] mx-auto mt-[30px]">
              {projects.map((project) => {
                return <ProjectOnLanding key={project.id} project={project} />;
              })}
            </div>
          </div>
        </Container>
        <div className="bg-white text-darkGrey mt-[300px]">
          <h2 className="text-center text-[36px] w-[300px] mx-auto leading-[36px] py-[60px] md:py-[30px] font-semibold">
            my services
          </h2>
          <div className="flex flex-col xl:flex-row">
            {services.map((service) => {
              return <ServiceOnLanding service={service} />;
            })}
          </div>
        </div>
        <Container>
          <div className="flex justify-center">
            <AnimateText
              htmlTag="p"
              viewport={{ once: true, margin: "-300px" }}
              className="text-[36px] gap-x-[12px] justify-center md:text-[48px] py-[100px] md:py-[200px] md:px-[50px] text-center max-w-[1280px] leading-[40px] md:leading-[48px]"
            >
              I take every opportunity to explore new perspectives, projects, and
              collaborations. if you've got something, send me a message.
            </AnimateText>
          </div>
          <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] lg:gap-[100px] border-t border-white/20 py-[50px] md:py-[80px] justify-center">
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
      </div>
    </main>
  );
};
