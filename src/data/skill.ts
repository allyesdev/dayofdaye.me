import { SkillGroup } from '@/types/skill';

export const skills: Record<string, SkillGroup[]> = {
  'ko': [
    {
      name: 'frontend',
      skills: [
        {
          name: 'React',
          description:
            '리액트를 사용하여 웹 애플리케이션을 개발합니다. Tanstack Query, Redux, Jotai로 능숙하게 상태관리를 할 수 있습니다.',
          level: 4,
        },
        {
          name: 'Typescript',
          description:
            '타입스크립트를 사용하여 웹 애플리케이션을 개발합니다. 타입 추론을 통해 코드 안정성을 높이고, 타입 충돌을 방지할 수 있습니다.',
          level: 4,
        },
        {
          name: 'Next.js',
          description:
            'Next.js를 사용하여 웹 애플리케이션을 개발합니다. 서버 사이드 렌더링을 통해 최적화된 성능을 제공합니다. 개인 프로젝트에서만 사용하고 있습니다.',
          level: 2,
        },
        {
          name: 'Vue.js',
          description:
            'Vue.js를 사용하여 웹 애플리케이션을 개발합니다. 양방향 데이터 바인딩을 통해 데이터 흐름을 쉽게 이해할 수 있습니다. Volar, Vuex, Tanstack Query, Pinia를 사용하여 상태관리를 할 수 있습니다.',
          level: 3,
        },
        {
          name: 'CSS/SCSS',
          description:
            'css와 css 전처리기 scss를 활용하여 스타일링을 합니다. 프로젝트에서 사용하고 있습니다.',
          level: 4,
        },
        {
          name: 'Tailwind CSS',
          description:
            'Tailwind CSS를 사용하여 스타일링을 합니다. 개인 프로젝트에서 사용하고 있습니다.',
          level: 2,
        },
      ],
    },
    {
      name: 'backend',
      skills: [
        {
          name: 'python - FastAPI',
          description:
            'python, FastAPI를 사용하여 빠른 성능으로 쉽게 백엔드 애플리케이션을 개발할 수 있습니다. SQLAlchemy를 사용하여 데이터베이스 조작을 합니다. 최근 LangChain, LangGraph를 사용하여 챗봇 개발 프로젝트를 진행했습니다.',
          level: 3,
        },
        {
          name: 'java - Spring Boot',
          description:
            '자바, 스프링 부트를 사용하여 백엔드 애플리케이션을 개발합니다. mybatis를 사용하여 데이터베이스 조작을 합니다.',
          level: 2,
        },
        {
          name: 'Node.js',
          description:
            'Node.js를 사용하여 백엔드 애플리케이션을 개발합니다. Express, Nest.js를 사용하여 백엔드 애플리케이션을 개발합니다. 개인 프로젝트에서 사용하고 있습니다.',
          level: 2,
        },
        {
          name: 'mysql',
          description: 'mysql을 사용하여 데이터를 저장하고 조회합니다.',
          level: 3,
        },
        {
          name: 'redis',
          description:
            'redis를 사용하여 memory cache를 구현합니다. langgraph checkpointer 구현에 사용하였고, 인증/인가 토큰 저장에 사용하였습니다.',
          level: 2,
        },
      ],
    },
    {
      name: 'devops',
      skills: [
        {
          name: 'Docker',
          description: 'Docker 명령어를 통해 컨테이너를 관리합니다.',
          level: 3,
        },
        {
          name: 'Kubernetes',
          description:
            'Kubernetes 명령어를 통해 deployment, statefulset, service, cronjob을 관리합니다.',
          level: 2,
        },
        {
          name: 'Azure',
          description:
            'Azure의 Application Gateway, AKS, AC2 등 서비스를 사용하여 클라우드 서비스를 관리합니다.',
          level: 2,
        },
        {
          name: 'Github Actions',
          description:
            'Github Actions를 사용하여 merge 트리거 자동 배포를 구현하였습니다.',
          level: 2,
        },
      ],
    },
    {
      name: 'communication',
      skills: [
        {
          name: 'Git',
          description:
            'Git 명령어를 통해 버전 관리하고 협업을 합니다. 협업 시 커밋 메시지를 작성하고 커밋 메시지를 통해 변경 사항을 설명합니다.',
          level: 4,
        },
        {
          name: 'Notion',
          description:
            'Notion을 사용하여 프로젝트 진척 상황과 미팅로그를 체계적으로 관리를 합니다.',
          level: 4,
        },
        {
          name: 'Slack',
          description:
            'Slack을 사용하여 프로젝트 구성원과 빠르게 소통을 합니다.',
          level: 3,
        },
        {
          name: 'Figma',
          description: 'Figma를 사용하여 디자이너와 협업을 합니다.',
          level: 2,
        },
      ],
    },
  ],
  'en': [
    {
      name: 'frontend',
      skills: [
        {
          name: 'React',
          description:
            'Web application development using React. Proficient state management with Tanstack Query, Redux, and Jotai.',
          level: 4,
        },
        {
          name: 'Typescript',
          description:
            'Web application development using TypeScript. Improved code stability and type conflict prevention through type inference.',
          level: 4,
        },
        {
          name: 'Next.js',
          description:
            'Web application development using Next.js. Optimized performance through server-side rendering. Used only in personal projects.',
          level: 2,
        },
        {
          name: 'Vue.js',
          description:
            'Web application development using Vue.js. Easy-to-understand data flow through two-way data binding. State management using Volar, Vuex, Tanstack Query, and Pinia.',
          level: 3,
        },
        {
          name: 'CSS/SCSS',
          description:
            'Styling using CSS and the CSS preprocessor SCSS. Currently used in projects.',
          level: 4,
        },
        {
          name: 'Tailwind CSS',
          description:
            'Styling using Tailwind CSS. Currently used in personal projects.',
          level: 2,
        },
      ],
    },
    {
      name: 'backend',
      skills: [
        {
          name: 'python - FastAPI',
          description:
            'Backend application development with fast performance using Python and FastAPI. Database manipulation using SQLAlchemy. Recent chatbot development project using LangChain and LangGraph.',
          level: 3,
        },
        {
          name: 'java - Spring Boot',
          description:
            'Backend application development using Java and Spring Boot. Database manipulation using MyBatis.',
          level: 2,
        },
        {
          name: 'Node.js',
          description:
            'Backend application development using Node.js, Express, and Nest.js. Used in personal projects.',
          level: 2,
        },
        {
          name: 'mysql',
          description: 'Data storage and querying using MySQL.',
          level: 3,
        },
        {
          name: 'redis',
          description:
            'Memory cache implementation using Redis. Used for LangGraph checkpointer implementation and authentication/authorization token storage.',
          level: 2,
        },
      ],
    },
    {
      name: 'devops',
      skills: [
        {
          name: 'Docker',
          description: 'Container management using Docker commands.',
          level: 3,
        },
        {
          name: 'Kubernetes',
          description:
            'Management of deployments, statefulsets, services, and cronjobs using Kubernetes commands.',
          level: 2,
        },
        {
          name: 'Azure',
          description:
            'Cloud service management using Azure services including Application Gateway, AKS, and AC2.',
          level: 2,
        },
        {
          name: 'Github Actions',
          description:
            'Automatic deployment implementation triggered by merges using Github Actions.',
          level: 2,
        },
      ],
    },
    {
      name: 'communication',
      skills: [
        {
          name: 'Git',
          description:
            'Version management and collaboration using Git commands. Change documentation through commit messages during collaboration.',
          level: 4,
        },
        {
          name: 'Notion',
          description:
            'Systematic management of project progress and meeting logs using Notion.',
          level: 4,
        },
        {
          name: 'Slack',
          description:
            'Quick and effective communication with project team members through Slack.',
          level: 3,
        },
        {
          name: 'Figma',
          description: 'Collaboration with designers through Figma.',
          level: 2,
        },
      ],
    },
  ],
};
