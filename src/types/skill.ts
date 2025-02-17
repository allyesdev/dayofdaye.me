export interface Skill {
  name: string;
  description: string;
  level: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}
