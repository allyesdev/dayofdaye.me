import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: '세무 채팅 AI 서비스',
    description: '세법을 학습한 LLM으로 자문, 보고서 생성 서비스를 제공합니다.',
    startDate: '2024.09',
    endDate: '2024.12',
    whatIDid: [
      {
        title: '채팅 서비스',
        description: [
          '채팅 보내기 (SSE기반 스트리밍되도록 구현, 채팅 agent는 모델러가 구현)',
          '다시 보내기/재생성 (트리구조로 구현)',
          '피드백, 내용 복사하기, 채팅 비교 다이얼로그',
          '참조문서 보여주기, 채팅 과정 보이기',
        ],
      },
      {
        title: '보고서 생성 서비스',
        description: [
          '채팅 기반 하이라이팅 기능 구현',
          '보고서 생성 (스트리밍 구현)',
          '문단 재생성, 선택 부분 재생성 기능 구현',
          '문단 추가, 삭제, 문단 순서 변경 기능 구현',
        ],
      },
    ],
    lessonLearned: ['써야함'],
    usedTech: [
      {
        tech: 'Frontend',
        skills: [
          'React',
          'Typescript',
          'Tanstack Query',
          'Jotai',
          'SCSS',
          'Material UI',
        ],
      },
      {
        tech: 'Backend',
        skills: ['FAST API', 'Python', 'MYSQL', 'Redis'],
      },
    ],
    imageSrc: '/images/project-tax-01.png',
  },
  {
    title: '사내 LLM 서비스 프론트엔드/백엔드 개발',
    description: '사내망에서 사용하는 Chat Service',
    startDate: '2024.01',
    endDate: '2024.07',
    lessonLearned: ['써야함'],
    whatIDid: [
      {
        title: '채팅 서비스',
        description: ['일반채팅', '이미지 인식을 통한 채팅', '채팅 통계'],
      },
      {
        title: '마이크로 프론트엔드',
        description: [
          '마이크로 프론트엔드로 타 프로젝트 연동',
          'vite-plugin-federation 기반으로 두 프로젝트 연동',
          '레이아웃, 라우팅, 데이터 전달 등 구현',
        ],
      },
    ],
    usedTech: [
      {
        tech: 'Frontend',
        skills: [
          'React',
          'Typescript',
          'Tanstack Query',
          'Redux',
          'SCSS',
          'Material UI',
        ],
      },
      {
        tech: 'Backend',
        skills: ['FAST API', 'Python', 'MYSQL', 'Redis'],
      },
    ],
    imageSrc: '/images/project-mychat-01.png',
  },
  {
    title: 'Labeling Tool 프론트엔드/백엔드 개발',
    description:
      '이미지 분석을 위한 라벨링 작업을 웹에서 할 수 있는 서비스 개발',
    startDate: '2023.04',
    endDate: '2023.12',
    lessonLearned: [
      'Vue3, Volar 기반의 상태관리 및 프론트엔드 기능 구현',
      'Konva, Echart 등 라이브러리를 활용하여 필요한 기능 구현',
      '라벨링 기능을 풀스택 개발하며 Java/Spring Boot로 구현 및 풀스택으로 웹 서비스에 대한 전반적인 이해도를 높임',
      'SQL Query 최적화 - Indexing 활용법에 대해 공부함',
      '협업 툴 사용 - Git, notion, slack',
    ],
    whatIDid: [
      {
        title: '분석 프로젝트 관리 기능',
        description: [
          '프로젝트를 생성하여 아래 항목들을 관리 및 공유할수 있음',
          '노트북 - 분석가가 ipynb 노트북으로 모델을 구현 및 배포',
          '모델 - 배포한 모델의 지표를 공유',
          '작업 - 배포된 모델을 실행시키고 실행 결과를 탐색',
          '라벨링 - 이미지 기반의 Object Detection/Classification을 할수 있는 화면 제공',
        ],
      },
      {
        title: '이미지 라벨링',
        description: [
          'Konva라이브러리를 이용하여 캔버스 이미지 라벨링',
          '과제 태그/파일명 파싱정보 등 관리형 기능 개발',
          '라벨링 결과를 json/xml 형태로 출력',
        ],
      },
    ],
    usedTech: [
      {
        tech: 'Frontend',
        skills: ['Vuejs3', 'Volar', 'Tanstack Query'],
      },
      {
        tech: 'Backend',
        skills: ['Java', 'Spring Boot', 'MaraiaDB'],
      },
    ],
    imageSrc: '/images/project-labeling-01.png',
  },
  {
    title: 'Accu.Insight+ 프론트엔드 개발',
    description:
      '데이터 전처리부터 파라미터 조정하거나 sandbox 개발을 통한 모델 생성, 모델의 실시간 배포, 배포된 모델의 상태 관리와 같은 기능을 제공하는 서비스의 프론트엔드 개발',
    startDate: '2022.04',
    endDate: '2023.03',
    lessonLearned: [
      '개발 프로젝트에 처음 참여하며 프로젝트 개발 사이클을 경험함',
      'UX 디자이너 와 소통하며 더 나은 서비스에 대해 생각하며 개발하는 방법을 배움',
      '백엔드 개발자와 소통하여 데이터를 조 금 더 효율적으로 받아올 수 있는 방법에 대해 생각해 볼 수 있었음',
      '다국어 처리, 타임존 처리와 같은 해외 타게팅 개발을 하며 서비스에 대해 배움',
      'Vue 2, typescript, git과 같은 기술셋을 사용',
    ],
    whatIDid: [
      {
        title: '데이터 분석 프로젝트 관리 기능 개발',
        description: [
          '데이터의 흐름을 나타내기 위한 그래프, 데이터 테이블로 보여주는 기능 개발',
          '데이터 처리 과정의 파라미터 변경을 위한 화면 개발',
        ],
      },
    ],
    usedTech: [
      {
        tech: 'Frontend',
        skills: ['Vuejs2', 'Vuex', 'Vue-router', 'Vue-i18n', 'Vue-echarts'],
      },
    ],
    imageSrc: '/images/project-accu-01.webp',
  },
];
