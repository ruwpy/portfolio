import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { projects } from "../config/data";
import { Icons } from "../components/icons";
import { ProjectOnLanding } from "../components/projectOnLanding";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

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
            <span className="w-[150px] leading-[20px]">
              specializing in design and web development
            </span>
            <div className="w-full flex justify-end mt-[150px]">
              <div className="flex flex-col gap-[10px] md:gap-[25px]">
                <div className="flex justify-end md:justify-start gap-[10px] md:translate-x-[10px] md:gap-[20px]">
                  <Button size="medium">about</Button>
                  <Button size="medium">projects</Button>
                </div>
                <div className="font-bold flex flex-col items-end md:items-start text-[48px] md:text-[96px] leading-[48px] md:leading-[96px]">
                  <span className="md:-translate-x-[58px]">FRONTEND</span>
                  <span>DEVELOPER</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[300px] flex justify-center">
            <div className="flex flex-col md:flex-row gap-[30px] md:gap-[80px] md:items-center">
              <span className="inline-block text-[48px] w-[200px] leading-[52px] font-semibold">
                I will create a website your users will fall in love with
              </span>
              <div className="flex flex-col gap-[30px] md:mt-[100px]">
                <p className="text-[16px] leading-[18px] max-w-[320px]">
                  focusing on cutting-edge projects, I push the boundaries of development
                  and motion to create forward‑thinking, innovative solutions for
                  agencies, brands and products.
                </p>
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
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:px-[50px] md:items-center md:justify-between lg:px-0 gap-[20px] p-[20px] border-t border-black/20">
              <span className="font-semibold text-[24px] leading-[24px]">
                feasibility <br /> assessment
              </span>
              <p className="text-[16px] leading-[18px] max-w-[450px] text-black/50">
                a structured evaluation of a design from a technical perspective to ensure
                its feasibility and effectiveness, including assessment report and
                resources estimate.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:px-[50px] md:items-center md:justify-between lg:px-0 gap-[20px] p-[20px] border-t border-black/20">
              <span className="font-semibold text-[24px] leading-[24px]">
                fullstack <br /> development
              </span>
              <p className="text-[16px] leading-[18px] max-w-[450px] text-black/50">
                based on project requirements, size and stage I can provide back-end and
                infrastructure support as well as getting the right resources to team up
                with.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:px-[50px] md:items-center md:justify-between lg:px-0 gap-[20px] p-[20px] border-t border-black/20">
              <span className="font-semibold text-[24px] leading-[24px]">
                creative concept <br /> & prototyping
              </span>
              <p className="text-[16px] leading-[18px] max-w-[450px] text-black/50">
                applying technical and creative skills, I envision and develop innovative
                solutions to help clients model, prototype and refine their product or
                service ideas before launch.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:px-[50px] md:items-center md:justify-between lg:px-0 gap-[20px] p-[20px] border-t border-black/20">
              <span className="font-semibold text-[24px] leading-[24px]">
                frontend <br /> development
              </span>
              <p className="text-[16px] leading-[18px] max-w-[450px] text-black/50">
                I provide bespoke development services as a solo-dev or lead front-end
                resource in projects of any size with special attention to interaction and
                motion.
              </p>
            </div>
          </div>
        </div>
        <Container>
          <div className="flex justify-center">
            <p className="text-[36px] md:text-[48px] py-[100px] md:py-[200px] md:px-[50px] text-center max-w-[1280px] leading-[40px] md:leading-[48px]">
              I take every opportunity to explore new perspectives, projects, and
              collaborations. if you've got something, send me a message.
            </p>
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
            <Link to="https://github.com/ruwpy" target="_blank">
              <Icons.github style={{ fill: "white" }} />
            </Link>
            <span>© 2023 dmitrii balianov</span>
          </div>
        </Container>
      </div>
    </main>
  );
};
