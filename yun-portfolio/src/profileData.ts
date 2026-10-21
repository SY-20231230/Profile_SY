export type JourneyItem = {
  project: string;
  slug: string;
  period: string;
  headline: string;
  description: string;
  tag: string;
};

export type EducationItem = {
  institution: string;
  major: string;
  period: string;
  status: string;
  gpa: string;
  note?: string;
};

export type TrainingItem = {
  institution: string;
  period: string;
  curriculum: string[];
  award: string;
  awardDate: string;
};

export type CertificationItem = {
  name: string;
  date: string;
  status: string;
  issuer: string;
  caution?: string;
};

export type ActivityItem = {
  date: string;
  title: string;
  category: string;
};

export type StrengthItem = {
  enTitle: string;
  koTitle: string;
  description: string;
  points: string[];
};

export type WorkExperienceItem = {
  company: string;
  period: string;
  role: string;
  type: string;
  description: string;
};

export type SkillItem = {
  name: string;
  relatedProjects: string[];
};

export type SkillCategory = {
  category: string;
  iconName: string;
  skills: SkillItem[];
};

// 5.2 My Journey (실제 개발 시작일 순 정렬)
export const journeyData: JourneyItem[] = [
  {
    project: 'DORO-SEE',
    slug: 'doro-see',
    period: '2024.09.02 ~ 2025.09.09',
    tag: 'FIRST MILESTONE',
    headline: 'Backend 데이터 흐름 학습 및 AI·하드웨어 시스템 연동',
    description: '첫 개발 프로젝트에서 Raspberry Pi 하드웨어 영상과 YOLO AI, MySQL, React를 연결하는 백엔드 API를 개발하며 이종 시스템 간 데이터 처리 파이프라인의 원리를 체득했습니다.'
  },
  {
    project: 'AutoPlanAI',
    slug: 'autoplan-ai',
    period: '2025.07.01 ~ 2025.08.13',
    tag: 'PM & GEN AI',
    headline: 'Gemini API·RAG 기반 생성형 AI 서비스 개발과 PM 경험',
    description: 'PM으로서 팀 일정을 조율하고, Gemini 무료 호출 한도를 극복하기 위한 API Key 분리 및 TF-IDF와 Gemini를 결합한 Hybrid Retrieval(RAG) 검색 파이프라인을 구축했습니다.'
  },
  {
    project: 'ZIPHYEONJEON',
    slug: 'jiphyeonjeon',
    period: '2025.12.17 ~ 2026.05.27',
    tag: 'PO & ENTERPRISE ARCH',
    headline: 'Spring Boot와 AI 시세예측 모델 연동, PO 역할 수행',
    description: 'PO로서 주택 도메인을 기획하고, 국토교통부 실거래가 데이터와 외부 부동산 시장 지표를 결합한 Feature Engineering을 통해 AI 주택 시세예측 모델과 백엔드 API를 완성했습니다.'
  },
  {
    project: 'TomorrowMarket',
    slug: 'tomorrow-market',
    period: '2026.06.24 ~ 2026.10.13',
    tag: 'PM & TIME-SERIES',
    headline: 'AI 시계열 예측 및 예측 성능 관리 Backend 구축',
    description: 'TFT 시계열 모델과 뉴스 감성분석을 결합한 LightGBM 앙상블을 설계하고, 예측 결과와 실제 종가를 자동 대조하는 백엔드 배치 평가 시스템을 운영 체계로 완성했습니다.'
  },
  {
    project: 'UNI:VERSE',
    slug: 'universe',
    period: '2026.09.21 ~ 2026.10.08',
    tag: 'SCRUM MASTER & DEVOPS',
    headline: 'Spring Boot, AI 연동, Docker 및 AWS 클라우드 인프라 경험',
    description: 'Scrum Master로서 팀 협업을 리드하며 중고거래 백엔드 개발, AI 사기문구 탐지 API 연동, S3 Presigned URL, CloudMap 서비스 디스커버리, CloudFormation 인프라 배포를 완결했습니다.'
  }
];

// 5.3 Education
export const educationData: EducationItem[] = [
  {
    institution: '중부대학교',
    major: '인공지능전공',
    period: '2024.03 ~ 2027.02',
    status: '졸업 예정',
    gpa: '4.17 / 4.5',
    note: '인공지능, 컴퓨터 프로그래밍, 데이터 분석 중심 학습'
  },
  {
    institution: '학점은행제',
    major: '사회복지학과',
    period: '2022.04 ~ 2024.02',
    status: '졸업',
    gpa: '4.31 / 4.5',
    note: '현장의 불편을 기술로 해결하고자 개발 분야 도전을 결심한 계기'
  },
  {
    institution: '조선대학교',
    major: '역사문화학과',
    period: '2019.03 ~ 2023.12',
    status: '중퇴',
    gpa: '—'
  }
];

// 5.4 Development Training
export const trainingData: TrainingItem = {
  institution: '더조은컴퓨터아카데미 종로점',
  period: '2026.03 ~ 2026.10',
  curriculum: [
    'Spring Boot 기반 백엔드 아키텍처 및 RESTful API 개발',
    'HTML·CSS·JavaScript 및 React 기반 프론트엔드 연동',
    'PyTorch 및 Jupyter Notebook 기반 데이터 분석 및 전처리 파이프라인',
    'LSTM 및 딥러닝 기반 인공지능 모델 학습 및 평가'
  ],
  award: '최우수 수료생',
  awardDate: '2026.10'
};

// 5.5 Certifications
export const certificationsData: CertificationItem[] = [
  {
    name: '정보처리기사',
    date: '2026.09',
    status: '필기 합격',
    issuer: '한국산업인력공단',
    caution: '※ 필기 합격 상태이며, 최종 자격 취득 준비 중입니다.'
  },
  {
    name: '지능형홈관리사',
    date: '2025.07',
    status: '최종 합격',
    issuer: '한국정보통신협회'
  },
  {
    name: '생성형AI활용능력',
    date: '2025.11',
    status: '최종 합격',
    issuer: '한국디지털융합교육협회'
  },
  {
    name: '1종 보통운전면허',
    date: '2023.08',
    status: '취득',
    issuer: '경찰청'
  }
];

// 5.6 Awards & Activities
export const awardsAndActivitiesData: ActivityItem[] = [
  {
    date: '2026.10',
    title: '더조은컴퓨터아카데미 종로점 최우수 수료생 수상',
    category: '교육 수료 및 우수 포상'
  },
  {
    date: '2025.06',
    title: '융합보안ICT 하계학술대회 참가 및 연구 활동',
    category: '학술대회'
  },
  {
    date: '2024.11',
    title: '중부대학교 창업아이디어 공모전 출품',
    category: '교내 공모전'
  },
  {
    date: '2024.12',
    title: '비마 학습동아리 활동',
    category: '교내 학술동아리'
  },
  {
    date: '2024.09 ~ 2024.12',
    title: '중부대학교 Python 학습동아리 활동',
    category: '프로그래밍 스터디'
  }
];

// 5.7 Core Strengths
export const strengthsData: StrengthItem[] = [
  {
    enTitle: 'Execution',
    koTitle: '실행력',
    description: '목표가 정해지면 주저하지 않고 빠르게 실행하여 동작 가능한 결과물을 완성합니다.',
    points: [
      '생소한 기술 스택도 작은 프로토타입부터 직접 구현해 원리를 빠르게 흡수',
      '아이디어 단계에 머무르지 않고 배포 가능한 MVP로 끝까지 완결하는 추진력'
    ]
  },
  {
    enTitle: 'Problem Solving',
    koTitle: '문제 해결',
    description: '문제가 발생하면 증상에 매몰되지 않고 원인을 분석하며 필요한 기술을 학습해 근본적인 해결책을 적용합니다.',
    points: [
      'Rate Limit, 시계열 노이즈, 클라우드 영속 스토리지 등 실제 병목 원인 규명',
      '알고리즘 교체에 앞서 데이터 품질과 Feature 구성을 먼저 점검하는 엔지니어링 접근'
    ]
  },
  {
    enTitle: 'Collaboration',
    koTitle: '협업과 리더십',
    description: 'PM·PO·Scrum Master 경험을 통해 팀원과 문제를 공유하고 개발 일정, 역할, 기능 우선순위를 조율했습니다.',
    points: [
      '단순히 일을 빠르게 끝내는 것보다 팀원 각자가 맡은 역할에서 문제를 해결하도록 지원',
      '의견 충돌 시 주관적 주장 대신 벤치마킹 실험을 통해 객관적 데이터로 합의 도출'
    ]
  }
];

// 5.8 Experience (비개발 경력)
export const experienceData: WorkExperienceItem[] = [
  {
    company: 'CU편의점',
    period: '2024.08 ~ 2026.02',
    role: '매장관리 / 고객 응대',
    type: '아르바이트 (비개발 경력)',
    description: '판매 및 재고 물류 검수, 매장 진열 관리와 고객 응대를 성실히 수행하며 책임감과 소통 능력을 길렀습니다.'
  }
];

// 7. Skills 분류 (실제 프로젝트 연결)
export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Backend',
    iconName: 'Cpu',
    skills: [
      { name: 'Java', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'Python', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'TomorrowMarket', 'ZIPHYEONJEON', 'UNI:VERSE'] },
      { name: 'Spring Boot', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'Spring Data JPA', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'QueryDSL', relatedProjects: ['TomorrowMarket', 'UNI:VERSE'] },
      { name: 'Django', relatedProjects: ['DORO-SEE', 'AutoPlanAI'] },
      { name: 'FastAPI', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'REST API', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'JWT', relatedProjects: ['AutoPlanAI', 'ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'WebSocket/STOMP', relatedProjects: ['UNI:VERSE'] }
    ]
  },
  {
    category: 'AI / Machine Learning',
    iconName: 'TrendingUp',
    skills: [
      { name: 'PyTorch', relatedProjects: ['더조은 아카데미 교육', 'DORO-SEE', 'AutoPlanAI', 'TomorrowMarket', 'ZIPHYEONJEON'] },
      { name: 'YOLO', relatedProjects: ['DORO-SEE'] },
      { name: 'OpenCV', relatedProjects: ['DORO-SEE'] },
      { name: 'TFT (Temporal Fusion Transformer)', relatedProjects: ['TomorrowMarket', 'ZIPHYEONJEON'] },
      { name: 'PatchTST', relatedProjects: ['TomorrowMarket', 'ZIPHYEONJEON'] },
      { name: 'LightGBM', relatedProjects: ['TomorrowMarket'] },
      { name: 'TF-IDF', relatedProjects: ['AutoPlanAI', 'UNI:VERSE'] },
      { name: 'Logistic Regression', relatedProjects: ['UNI:VERSE'] },
      { name: 'Wavelet Transform', relatedProjects: ['TomorrowMarket'] },
      { name: 'Pandas', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'TomorrowMarket', 'ZIPHYEONJEON', 'UNI:VERSE'] }
    ]
  },
  {
    category: 'Generative AI',
    iconName: 'Lightbulb',
    skills: [
      { name: 'Gemini API', relatedProjects: ['AutoPlanAI', 'DORO-SEE'] },
      { name: 'Qwen (파인튜닝 / 모델 학습)', relatedProjects: ['ZIPHYEONJEON'] },
      { name: 'Gemini 2.5 Flash', relatedProjects: ['AutoPlanAI'] },
      { name: 'RAG', relatedProjects: ['AutoPlanAI'] },
      { name: 'Hybrid Retrieval', relatedProjects: ['AutoPlanAI'] },
      { name: 'Prompt Engineering', relatedProjects: ['AutoPlanAI'] },
      { name: 'GitHub Search API', relatedProjects: ['AutoPlanAI'] }
    ]
  },
  {
    category: 'Frontend',
    iconName: 'Code2',
    skills: [
      { name: 'React', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'JavaScript', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'ZIPHYEONJEON'] },
      { name: 'TypeScript', relatedProjects: ['TomorrowMarket', '포트폴리오 웹사이트'] },
      { name: 'HTML / CSS', relatedProjects: ['더조은 아카데미 교육', '웹 전반'] },
      { name: 'Tailwind CSS', relatedProjects: ['ZIPHYEONJEON'] },
      { name: 'Vite', relatedProjects: ['TomorrowMarket', 'UNI:VERSE', '포트폴리오 웹사이트'] }
    ]
  },
  {
    category: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'TomorrowMarket', 'ZIPHYEONJEON', 'UNI:VERSE'] },
      { name: 'AWS RDS', relatedProjects: ['TomorrowMarket', 'UNI:VERSE', 'ZIPHYEONJEON'] }
    ]
  },
  {
    category: 'Cloud / DevOps',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'Docker Compose', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'AWS ECS Fargate', relatedProjects: ['UNI:VERSE'] },
      { name: 'ECR', relatedProjects: ['UNI:VERSE'] },
      { name: 'S3', relatedProjects: ['UNI:VERSE'] },
      { name: 'ALB', relatedProjects: ['UNI:VERSE'] },
      { name: 'CloudMap', relatedProjects: ['UNI:VERSE'] },
      { name: 'SSM Parameter Store', relatedProjects: ['UNI:VERSE'] },
      { name: 'CloudFormation', relatedProjects: ['UNI:VERSE'] },
      { name: 'Render', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket'] },
      { name: 'Vercel', relatedProjects: ['TomorrowMarket', '포트폴리오 웹사이트'] },
      { name: 'Cloudflare Pages', relatedProjects: ['ZIPHYEONJEON'] },
      { name: 'GitHub Actions', relatedProjects: ['UNI:VERSE'] }
    ]
  },
  {
    category: 'Tools',
    iconName: 'GitBranch',
    skills: [
      { name: 'Git / GitHub', relatedProjects: ['DORO-SEE', 'AutoPlanAI', 'TomorrowMarket', 'ZIPHYEONJEON', 'UNI:VERSE'] },
      { name: 'VS Code', relatedProjects: ['프론트엔드, 백엔드 및 AI 개발 전반'] },
      { name: 'Colab', relatedProjects: ['AI 프로젝트 학습 및 테스트'] },
      { name: 'Swagger', relatedProjects: ['ZIPHYEONJEON', 'TomorrowMarket', 'UNI:VERSE'] },
      { name: 'Notion', relatedProjects: ['프로젝트 기획 및 협업 문서화'] },
      { name: 'Jupyter Notebook', relatedProjects: ['AI 데이터 전처리 및 모델 실험'] }
    ]
  }
];
