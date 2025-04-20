import { Skill, SkillGroup } from "@/types/skill";
import { MeWrap } from "./me";
import { skills } from "@/data/skill";
import { useEffect, useRef, useState } from "react";

const SkillItem = ({ name, description, level }: Skill) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-4" ref={skillRef}>
      <h3>{name}</h3>
      <div
        className="w-full bg-gray-200 dark:bg-gray-700 h-5 rounded-full tooltip"
        data-tip={`${level}/5`}
      >
        <div
          className="bg-gradient-to-r from-emerald-300 to-green-200 dark:from-emerald-800 dark:to-green-700 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${(level / 5) * 100}%` : "0%" }}
        />
      </div>
      <div className="text-sm font-light text-gray-700 dark:text-gray-300">
        {description}
      </div>
    </div>
  );
};

const SkillGroupItem = ({ name, skills }: SkillGroup) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="text-2xl font-bold uppercase">{name}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export const MeSkill = () => {
  return (
    <MeWrap
      wrapStyle={{
        flexDirection: "column",
        gap: "100px",
        minHeight: "fit-content",
      }}
    >
      <div className="flex flex-col items-center justify-center py-20 gap-10">
        <h2>SKILL SET</h2>
        <div className="flex flex-col gap-20 w-[80%]">
          {skills.map((skillGroup, index) => (
            <SkillGroupItem key={index} {...skillGroup} />
          ))}
        </div>
      </div>
    </MeWrap>
  );
};
