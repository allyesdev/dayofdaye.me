import Image from "next/image";
import { MeWrap } from "./me";
import { UsedTech, WhatIDid } from "@/types/project";
import { projects } from "@/data/project";
import { useMemo } from "react";
export const ProjectItem = ({
  index,
  title,
  description,
  startDate,
  endDate,
  whatIDid,
  usedTech,
  lessonLearned,
  imageSrc,
}: {
  index: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  whatIDid: WhatIDid[];
  usedTech: UsedTech[];
  lessonLearned: string[];
  imageSrc: string;
}) => {
  const className = useMemo(() => {
    switch (index) {
      case 0:
        return "lg:w-[80vmin] lg:mr-20 w-[80vmin] xl:w-full xl:mr-auto";
      case 1:
        return "lg:w-[85vmin] lg:ml-40 w-[80vmin] xl:w-full xl:ml-auto";
      case 2:
        return "lg:w-[75vmin] lg:mr-10 w-[80vmin] xl:w-full xl:mr-auto";
      case 3:
        return "lg:w-[90vmin] lg:ml-20 w-[80vmin] xl:w-full xl:ml-auto";
      case 4:
        return "lg:w-[90vmin] lg:ml-20 w-[80vmin] xl:w-full xl:ml-auto";
      default:
        return "";
    }
  }, [index]);

  return (
    <div className={className}>
      <details className="collapse collapse-plus rounded-2xl p-3 bg-background">
        <summary className="collapse-title text-xl font-medium">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3>{title}</h3>
              <div className="text-sm font-normal">{description}</div>
              <div className="text-sm font-light">
                {startDate} - {endDate}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-base font-normal">What I did</div>
              {whatIDid.map((what, whatIdx) => (
                <div
                  key={`what-${index}-${whatIdx}`}
                  className="text-base font-normal flex flex-col gap-1"
                >
                  <div key={`what-${index}-${whatIdx}`}>{what.title}</div>
                  <ol className="text-sm font-light list-disc list-inside ps-2">
                    {what.description.map((description, descriptionIdx) => (
                      <li
                        key={`description-${index}-${whatIdx}-${descriptionIdx}`}
                      >
                        {description}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </summary>
        <div className="collapse-content flex flex-col gap-3">
          <Image
            src={imageSrc}
            alt="tax-project"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="text-base font-normal flex flex-col gap-1">
            <div className="text-base font-normal">Lesson Learned</div>
            <div className="flex justify-between">
              <ol className="text-sm font-light list-disc list-inside ps-2">
                {lessonLearned.map((lesson, lessonIdx) => (
                  <li key={`lesson-${index}-${lessonIdx}`}>{lesson}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="text-base font-normal flex flex-col gap-1">
            <div className="text-base font-normal">사용한 기술</div>
            <div className="flex justify-between">
              {usedTech.map((tech, techIdx) => (
                <div
                  className="flex flex-col flex-auto"
                  key={`tech-${index}-${techIdx}`}
                >
                  <span className="text-sm font-light">{tech.tech}</span>
                  <ol className="text-sm font-light list-disc list-inside ps-2">
                    {tech.skills.map((skill, skillIdx) => (
                      <li key={`skill-${index}-${techIdx}-${skillIdx}`}>
                        {skill}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export const MeProject = () => {
  return (
    <MeWrap
      wrapStyle={{
        backgroundColor: "hsl(var(--primary-background))",
        flexDirection: "column",
        gap: "100px",
        minHeight: "fit-content",
      }}
    >
      <div className="flex flex-col items-center justify-center py-20 gap-10">
        <h2>PROJECTS</h2>
        <div className="flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:gap-10 xl:px-10">
          {projects.map((project, index) => (
            <ProjectItem key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </MeWrap>
  );
};
