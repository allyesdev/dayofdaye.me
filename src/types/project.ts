export interface WhatIDid {
  title: string;
  description: string[];
}

export interface UsedTech {
  tech: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  whatIDid: WhatIDid[];
  usedTech: UsedTech[];
  imageSrc: string;
  lessonLearned: string[];
}
