import { Skill, SkillGroup } from "@/types/skill";
import { MeWrap } from "./me";
import { skills } from "@/data/skill";

const SkillItem = ({ name, description, level }: Skill) => {
  return (
    <div className="flex flex-col gap-10">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{level}</p>
    </div>
  );
};

const SkillGroupItem = ({ name, skills }: SkillGroup) => {
  return (
    <div className="flex flex-col gap-10">
      <h3>{name}</h3>
      <div className="flex flex-col gap-10">
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
        <div className="flex flex-col gap-10 2xl:grid 2xl:grid-cols-2 2xl:gap-10 2xl:px-10">
          {skills.map((skillGroup, index) => (
            <SkillGroupItem key={index} {...skillGroup} />
          ))}
        </div>
      </div>
    </MeWrap>
  );
};
