import { Button } from "../components/button";
import { Container } from "../components/container";
import { projects } from "../config/data";

export const Home = () => {
  return (
    <main className="bg-darkGrey">
      <Container>
        <div className="h-[100dvh] flex flex-col pb-[10px] justify-end">
          <span className="w-[150px] leading-[20px]">
            specializing in design and web development
          </span>
          <div className="w-full flex justify-end mt-[150px]">
            <div className="flex flex-col gap-[10px] md:gap-[25px]">
              <div className="flex gap-[10px] translate-x-[10px] md:gap-[20px]">
                <Button size="medium">about</Button>
                <Button size="medium">projects</Button>
              </div>
              <div className="font-bold flex flex-col text-[48px] md:text-[96px] leading-[48px] md:leading-[96px]">
                <span className="-translate-x-[58px]">FRONTEND</span>
                <span>DEVELOPER</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[300px] flex justify-center">
          <div className="flex flex-col md:flex-row gap-[30px] md:gap-[80px] md:items-center">
            <span className="inline-block w-[150px] text-[36px] md:text-[48px] md:w-[200px] leading-[40px] md:leading-[52px] font-semibold">
              I will create a website your users will fall in love with
            </span>
            <div className="flex flex-col gap-[30px] md:mt-[100px]">
              <p className="text-[16px] leading-[18px] max-w-[320px]">
                focusing on cutting-edge projects, I push the boundaries of development
                and motion to create forward‑thinking, innovative solutions for agencies,
                brands and products.
              </p>
              <Button className="w-fit">more about me</Button>
            </div>
          </div>
        </div>
        <div className="mt-[300px]">
          <h2 className="text-center text-[36px] w-[250px] mx-auto leading-[40px] font-semibold">
            here are my recent works
          </h2>
          <div className="flex flex-col mt-[30px]">
            {projects.map((project) => {
              const { description, image, isDeployed, name, whatBuilt, id } = project;
              const isEven = id % 2 === 0;

              return (
                <div key={id} className="border-t border-white/20 py-[30px]">
                  <div
                    className={`max-w-[400px] md:max-w-[1000px] flex flex-col md:flex-row mx-auto ${
                      isEven ? "md:justify-between" : "md:gap-[20px]"
                    }`}
                  >
                    <div
                      className={`aspect-[4/5] w-full md:max-w-[350px] ${
                        isEven ? "order-2" : "order-1"
                      }`}
                    >
                      <img
                        className="bg-white h-full w-full"
                        src={image}
                        alt="project image"
                      />
                      {!isDeployed && <div></div>}
                    </div>
                    <div className={`mt-[20px] ${isEven ? "order-1" : "order-2"}`}>
                      <span className="flex flex-col">
                        <span className="text-[36px] leading-[36px] font-semibold">
                          {name}
                        </span>
                        <span className="text-[16px] text-white/30">{whatBuilt}</span>
                      </span>
                      <p className="mt-[40px] leading-[18px] max-w-[300px]">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <div className="bg-white text-darkGrey mt-[300px]">
        <h2 className="text-center text-[36px] w-[250px] mx-auto leading-[40px] py-[30px] font-semibold">
          my services
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:px-[50px] md:items-center md:justify-between lg:px-0 gap-[20px] p-[20px] border-t border-black/20">
            <span className="font-semibold text-[24px] leading-[24px]">
              feasibility <br /> assessment
            </span>
            <p className="text-[16px] leading-[18px] max-w-[450px] text-black/50">
              a structured evaluation of a design from a technical perspective to ensure
              its feasibility and effectiveness, including assessment report and resources
              estimate.
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
        <div className="h-[100dvh] flex flex-col justify-center">
          <p className="text-[32px] leading-[36px]">
            I take every opportunity to explore new perspectives, projects, and
            collaborations. if you've got something, send me a message.
          </p>
          <span className="flex flex-col gap-[20px]">
            <span className="flex flex-col mt-[30px]">
              <span className="text-[18px] leading-[18px] text-white/50">email</span>
              <span className="text-[28px] leading-[28px]">ruwpy.who@gmail.com</span>
            </span>
            <span className="flex flex-col">
              <span className="text-[18px] leading-[18px] text-white/50">discord</span>
              <span className="text-[28px] leading-[28px] select-all">@ruwpy</span>
            </span>
          </span>
        </div>
        <span className="absolute bottom-[20px] right-[20px] text-[14px]">
          © 2023 dmitrii balianov
        </span>
      </Container>
    </main>
  );
};
