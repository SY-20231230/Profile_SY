export type TechEnvironment = {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  aiData?: string[];
  cloudDevOps?: string[];
  tools?: string[];
  hardware?: string[];
  externalApi?: string[];
};

export type Troubleshooting = {
  issue: string;        // 문제 발생
  cause: string;        // 원인 분석
  solution: string;     // 해결 과정
  lesson: string;       // 느낀점 / 배운 점
  careerImpact?: string;// 향후 직무적용
};

export type AIMetric = {
  label: string;
  value: string;
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  period: string;                // 사람인 이력서 기준 최종 확정 수행기간
  teamSize: string;              // 참여 인원
  role: string;                  // 최종 확정 담당 역할
  stack: string[];               // 대표 기술 스택
  env: TechEnvironment;          // 세부 개발 환경 및 기술 스택
  motivation: string;            // 프로젝트 개발 동기
  goals: string;                 // 프로젝트 목표
  features: string[];            // 주요 기능
  responsibilities: string[];    // 윤성용 담당 업무
  process: string[];             // 작업 과정 (1~N단계)
  results: string[];             // 작업 결과 및 성과
  troubleshooting: Troubleshooting; // 기술적 문제 해결 경험 (발생→원인→해결→배운점)
  lessonsLearned: string;        // 프로젝트를 통해 배운 점
  futureApplication: string;     // 향후 직무적용
  aiMetrics?: AIMetric[];        // AI 모델 평가 결과 (있을 경우)
  aiMetricNote?: string;         // AI 성과 관련 유의사항
  accent: string;
  number: string;
  thumbnail?: string;
  architectureImage?: string;    // 시스템 아키텍처 다이어그램 이미지
  github: string;                // 사람인 이력서 기준 최종 확정 GitHub URL
  demo?: string;                 // 배포 링크 (실제 있는 경우만)
  youtubeId?: string;            // 시연 영상 ID (추후 연동)
};

export const projects: Project[] = [
  {
    slug: 'jiphyeonjeon',
    name: 'ZIPHYEONJEON',
    subtitle: '지능형 부동산 안전 거래 및 시세 예측 AI 플랫폼',
    category: 'AI · REAL ESTATE · FULL CYCLE',
    description: '부동산 실거래 데이터와 시장 지표를 통합 분석하여 전세가율 위험도를 평가하고, AI 기반 주택 시세 및 상가 임대료 예측을 통해 안전한 거래 의사결정을 지원하는 플랫폼입니다.',
    period: '2025.12.17 ~ 2026.05.27',
    teamSize: '3명',
    role: 'PO / AI Architect / Backend',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'FastAPI', 'JWT', 'TFT', 'PatchTST', 'Qwen (파인튜닝)', 'Docker', 'MySQL', 'Python', 'React.js', 'Cloudflare Pages'],
    env: {
      frontend: ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios', 'Cloudflare Pages'],
      backend: ['Spring Boot', 'Java', 'Spring Data JPA', 'FastAPI', 'JWT', 'REST API'],
      database: ['AWS RDS (MySQL)'],
      aiData: ['Python', 'PyTorch', 'TFT (Temporal Fusion Transformer)', 'PatchTST', 'AI 시세예측 모델', 'Qwen 모델 파인튜닝 (부동산 도메인 학습)', '주택 및 상가 실거래 데이터 전처리·분석'],
      cloudDevOps: ['Docker', 'Docker Compose', 'Render', 'Cloudflare Pages'],
      tools: ['Git', 'GitHub', 'Notion', 'Swagger']
    },
    motivation: '전세사기와 깡통전세가 지속되는 상황에서 일반 사용자가 여러 기관에 분산된 실거래가·전세가격·주변 시세를 직접 비교해 주택의 전세 적정가를 판단하기 어렵다는 문제에 주목했습니다. 이에 부동산 데이터를 통합해 보다 안전한 거래 의사결정을 지원하는 서비스를 기획했습니다.',
    goals: '국토교통부 실거래가 등 주택 데이터를 통합해 매매·전세 정보와 전세가율, 주변 시세 비교, AI 시세예측 기능을 제공하고자 했습니다. 또한 상권·유동인구·교통 데이터를 분석해 상가 임대료를 예측하고, 예비 창업자에게 입지와 상권 판단에 필요한 기초자료를 제공하는 플랫폼 구축을 목표로 했습니다.',
    features: [
      '아파트·오피스텔·연립·다세대 실거래 데이터 통합 조회',
      '주택 매매 및 전세 실거래가 조회 및 시세 분석',
      '전세가율 및 주변 실거래 시세 대비 가격 위험도 비교',
      'AI 기반 주택 미래 시세 예측',
      '사용자 선택 매물 간 가격·시세 심층 비교',
      '부동산 도메인 질의응답 AI Chatbot (Qwen 모델 파인튜닝)',
      '상권·유동인구·교통 데이터 기반 상가 임대료 예측 및 창업 기초자료 제공'
    ],
    responsibilities: [
      '서비스 아이디어 도출 및 주택 도메인 핵심 기능·요구사항 설계',
      '아파트·오피스텔·연립·다세대 매매/전세 실거래 데이터 수집·가공 파이프라인 구축',
      '매매·전세 실거래가 조회 및 주택 시세 분석 Spring Boot Backend API 개발',
      '전세가율 및 주변 실거래 시세 대비 가격 분석 기능 구현',
      'AI 기반 주택 시세예측 모델 설계·개발 및 Spring Boot 서비스 연동',
      '사용자 선택 매물 간 가격·시세 비교 기능 구현',
      '부동산 특화 Qwen 파인튜닝 질의응답 AI Chatbot 개발',
      'PO로서 기능 우선순위 결정, 개발 일정 및 팀원 간 협업 조율',
      'React Frontend의 Cloudflare Pages 배포 파이프라인 구성'
    ],
    process: [
      '국토교통부 등 공공데이터 기반 아파트·오피스텔·연립·다세대 매매·전세 실거래 데이터 수집 및 가공',
      '지역·면적·거래시점 기준 실거래가·주변 시세 조회 API 및 전세가율·가격 비교 기능 구현',
      '실거래 데이터 기반 AI 주택 시세예측 모델 개발 및 Backend 서비스 연동',
      '외부 시장 흐름 반영을 위해 KB부동산 전세 관련 지표 추가 수집·가공 및 모델 재학습',
      'Spring Boot Controller-Service-Repository 구조와 JPA 처리 방식 학습 후 Backend 아키텍처에 적용',
      "'.gitignore' 및 민감정보 점검 절차 적용으로 GitHub 협업·보안 관리 방식 개선"
    ],
    results: [
      '주택 데이터 통합: 아파트·오피스텔·연립·다세대 매매·전세 실거래 데이터를 하나의 서비스에서 통합 조회할 수 있는 기반 구축',
      '주택 시세 분석: 전세가율 및 주변 시세 대비 가격 분석 기능 구현',
      'AI 시세예측: 외부 부동산 시장 지표를 반영한 주택 시세예측 모델 개발 및 Backend 연동 완료',
      '매물 비교: 여러 주택을 가격·시세 기준으로 비교할 수 있는 기능 구현',
      'AI 서비스 통합: 부동산 질의응답 AI Chatbot을 서비스에 성공적으로 적용',
      '상권 분석: 상권·유동인구·교통 데이터를 활용한 상가 임대료 예측 및 창업 기초자료 제공 기능 구현'
    ],
    troubleshooting: {
      issue: 'AI 주택 시세예측 모델의 예측값과 실제 주택가격 변화 사이에 오차가 발생하였으며, 실거래 데이터만으로는 시장 전체의 상승·하락 흐름을 충분히 반영하지 못하는 한계 확인.',
      cause: '초기 모델이 국토교통부 실거래 데이터만을 중심으로 구성되어 거시적 시장 흐름을 설명할 외부 변수가 부족했고, 개별 거래정보만으로는 부동산 시장의 전반적인 가격 변동 추세를 반영하는 데 한계가 존재함.',
      solution: '기존 데이터와 Feature 구성을 전면 재검토하고, KB부동산 전세 관련 지표 등 외부 부동산 시장 데이터를 추가 수집·가공함. 기존 실거래 데이터와 외부 지표를 결합하고 전처리 과정을 재구성하여 모델을 재학습시켰으며, 알고리즘 변경보다 데이터 확장과 변수 보강을 중심으로 예측 구조를 개선함.',
      lesson: 'AI 모델의 성능이 기대에 미치지 못할 때 단순히 알고리즘이나 파라미터를 바꾸는 것보다, 먼저 데이터의 품질과 Feature 구성을 점검하는 것이 훨씬 중요하다는 점을 체득했습니다. 국토교통부 관련 대회 분석 경험을 실 서비스 문제 해결로 연결하면서, AI 성능 개선은 모델 자체뿐 아니라 어떤 데이터를 어떻게 가공해 활용하느냐에 달려 있음을 배웠습니다.',
      careerImpact: '앞으로도 AI 모델 성능 이슈가 발생하면 모델 변경부터 시도하기보다 데이터 품질, Feature 구성, 외부 데이터 활용 가능성을 단계적으로 분석해 원인을 규명하겠습니다. 또한 Backend와 AI를 함께 이해하며 데이터 수집부터 모델 연동 및 서비스 배포까지 전체 흐름을 완결하는 엔지니어로 기여하겠습니다.'
    },
    lessonsLearned: '데이터 품질 분석과 Feature Engineering이 AI 서비스의 실효성을 좌우한다는 것을 경험했으며, PO로서 기획과 기술 간의 균형을 맞추는 협업 역량을 키웠습니다.',
    futureApplication: 'Spring Boot와 JPA 기반 백엔드 아키텍처 위에 실제 검증된 AI 모델을 안정적으로 서빙하는 풀사이클 개발을 지속해 나갈 것입니다.',
    accent: '#5c83ff',
    number: '01',
    thumbnail: '/Ziphyeonjeon.png',
    architectureImage: '/ZIP_Architect.png',
    github: 'https://github.com/SY-20231230/ZIPHYEONJEON'
  },
  {
    slug: 'tomorrow-market',
    name: 'TomorrowMarket',
    subtitle: 'AI 기반 주가 예측 및 예측 성능 분석 플랫폼',
    category: 'FINTECH · TIME-SERIES AI',
    description: '국내 주요 60개 종목의 단기 및 중장기 주가를 예측하고, 뉴스 감성분석과 시계열 모델을 앙상블하여 예측값과 실제 종가를 자동으로 비교·검증하는 금융 분석 플랫폼입니다.',
    period: '2026.06.24 ~ 2026.10.13',
    teamSize: '3명',
    role: 'PM / Backend / AI',
    stack: ['Python', 'Java', 'Spring Boot', 'Spring Data JPA', 'QueryDSL', 'FastAPI', 'JWT', 'TFT', 'PatchTST', 'LightGBM', 'AWS RDS', 'Docker', 'Docker Compose', 'Render', 'Vercel'],
    env: {
      frontend: ['React', 'TypeScript', 'Vite', 'Axios'],
      backend: ['Spring Boot', 'Java', 'Spring Data JPA', 'QueryDSL', 'FastAPI', 'JWT', 'REST API'],
      database: ['AWS RDS (MySQL)'],
      aiData: ['Python', 'TFT (Temporal Fusion Transformer)', 'PatchTST', 'LightGBM', '뉴스 감성분석', 'Wavelet Transform'],
      cloudDevOps: ['AWS', 'Docker', 'Docker Compose', 'Render', 'Vercel'],
      tools: ['Git', 'GitHub', 'Notion', 'Swagger']
    },
    motivation: '사용자가 AI 주가예측 결과와 실제 시장 흐름을 지속적으로 대조해 확인하기 어렵다는 문제에 주목했습니다. 이에 예측값과 실제 종가를 자동으로 비교하고, 시장 정보를 쉽게 확인해 투자 판단에 참고할 수 있는 서비스를 기획했습니다.',
    goals: '국내 주요 60개 종목을 대상으로 단기 1~5영업일과 중장기 10·15·20영업일의 주가를 예측하고, 시계열 예측과 뉴스 감성분석을 결합한 AI 서비스를 구축하고자 했습니다. 또한 예측값과 실제 종가를 자동 비교해 오차율·방향 적중률을 축적하고, 종목·산업군·예측기간·모델별 성능을 지속적으로 분석·관리하는 것을 목표로 했습니다.',
    features: [
      '국내 주요 60개 종목 대상 단기(1~5일) 및 중장기(10·15·20일) 주가 예측',
      'TFT 기반 시계열 AI 모델 예측',
      '뉴스 감성분석과 LightGBM을 결합한 앙상블 모델',
      '예측 목표일 도래 시 실제 종가 자동 수집 및 비교 평가',
      '오차율 및 방향 적중률 통계 저장 및 모델별 성능 통계 조회',
      '주간·월간 Batch 실행 및 예측 실패·데이터 누락·평가 누락 자동 관리',
      '사용자 요청 기반 주가 재분석 및 결과 조회 인터페이스'
    ],
    responsibilities: [
      '프로젝트 일정 관리 및 팀원 간 개발 업무 조율',
      '국내 주요 60개 종목 주가 데이터 수집·가공 파이프라인 구축',
      '주가 예측·성능 통계·Batch·관리자 기능 Spring Boot Backend API 개발',
      'TFT 기반 시계열 주가예측 모델 설계 및 개발',
      '뉴스 감성분석 결과와 LightGBM을 결합한 예측 모델 성능 개선',
      'AI 예측 결과와 Spring Boot Backend 간 안정적 인터페이스 연동',
      '사용자 요청 기반 주가 재분석 및 예측 결과 조회 기능 구현',
      '예측값과 실제 종가 비교 및 오차율·방향 적중률 관리 기능 구현',
      'Render를 통한 AI Server 및 Backend Server 배포',
      'AWS RDS (MySQL) Database 연동 및 운영환경 구성'
    ],
    process: [
      '국내 주요 60개 종목의 단기·중장기 주가예측 및 예측값·기준일·목표일·모델 버전 저장 구조 설계',
      'PatchTST와 TFT 시계열 모델 성능 비교 후 TFT 기반 주가예측 모델 선정 및 적용',
      '뉴스 감성분석 결과와 TFT 예측값을 LightGBM으로 결합하고 Wavelet Transform 전처리 성능 비교',
      '예측 목표일 도래 시 실제 종가를 수집해 기존 예측값과 자동 비교하는 성능 평가 기능 구현',
      '오차율·방향 적중률 저장 및 종목·산업군·예측기간·모델 버전별 성능 통계 조회 기능 구현',
      '주간·월간 Batch와 예측 실패·데이터 누락·평가 누락 확인 및 재처리 관리자 기능 구현',
      'Render를 통한 AI Server·Spring Boot Backend 배포 및 AWS RDS(MySQL) 연동 운영환경 구성'
    ],
    results: [
      'AI 주가예측 시스템: 국내 주요 60개 종목의 단기·중장기 주가예측 기능 성공적 구현',
      'AI 성능평가: 예측값과 실제 종가를 자동 비교해 오차율·방향 적중률을 지속적으로 축적·평가하는 파이프라인 구축',
      'Backend 운영 기능: 성능 통계 조회, 주간·월간 Batch 실행, 예측 실패·데이터 누락·평가 누락 관리 체계 완비',
      'AI 서비스 연동: AI 예측 결과를 Spring Boot Backend와 연동하고 사용자 요청 기반 재분석·결과 조회 기능 구현',
      '모델 성능 개선: TFT 기반 시계열 예측과 뉴스 감성분석 결과를 LightGBM으로 결합해 예측 성능 개선',
      '배포 및 운영환경: Render 기반 AI Server·Backend Server 배포 및 AWS RDS(MySQL) 연동 운영환경 구성'
    ],
    troubleshooting: {
      issue: '종목과 예측 기간에 따라 주가예측 오차의 편차가 크게 발생하고, 급격한 시장 변동 상황에서 단일 시계열 모델의 예측 성능이 불안정해지는 문제 발생.',
      cause: '원본 주가 데이터에 장기 추세, 단기 변동, 시장 노이즈가 복합적으로 섞여 있었으며, 과거 시계열 수치만으로는 급변하는 뉴스 및 시장 심리 요인을 반영하기 어려워 단일 모델로는 한계가 존재함.',
      solution: 'PatchTST와 TFT 성능을 정량 비교하여 TFT를 기본 시계열 모델로 채택함. 뉴스 감성분석 지표와 TFT 예측값을 결합하는 LightGBM 앙상블 구조를 구성하고 Wavelet Transform 전처리를 적용해 노이즈를 제어함. 나아가 Backend에서 예측값과 실제 종가를 자동으로 대조하는 배치 평가 기능을 구현해 오차율 및 방향 적중률을 지속 추적·검증함.',
      lesson: 'AI 성능 문제는 단순히 더 복잡한 딥러닝 모델을 쓴다고 해결되는 것이 아니라, 모델 선정, 데이터 전처리, 외부 데이터 결합, 앙상블을 종합 고려하고 동일 기준에서 반복 검증해야 함을 배웠습니다. 또한 일회성 높은 정확도보다 예측 후 실제 결과를 지속 추적하며 성능 변화를 관리하는 운영 체계의 중요성을 깨달았습니다.',
      careerImpact: '초기 모델에 안주하지 않고 객관적 지표를 기준으로 다양한 모델과 전처리 방식을 비교 검증하겠습니다. AI 모델을 Backend 배치와 안정적으로 결합하고 배포 후 모니터링까지 전 주기를 책임지는 AI 엔지니어로 일하겠습니다.'
    },
    lessonsLearned: '시계열 데이터의 노이즈 제어와 정량적 모델 비교의 중요성을 체득했으며, 예측 결과를 실제 데이터와 자동 대조하는 백엔드 운영 시스템의 필요성을 깊이 이해했습니다.',
    futureApplication: 'AI 서빙부터 데이터 수집, 배치 스케줄링, 모니터링까지 자동화된 머신러닝 파이프라인(MLOps)을 고도화할 계획입니다.',
    accent: '#43c9ab',
    number: '02',
    thumbnail: '/tommorrowMarket.png',
    architectureImage: '/tommorrow_Architect.png',
    youtubeId: 'Q0OXEtNAHGE',
    github: 'https://github.com/SY-20231230/tomorrowMarket'
  },
  {
    slug: 'universe',
    name: 'UNI:VERSE',
    subtitle: '대학 인증 기반 익명 커뮤니티·교내 중고거래 통합 플랫폼',
    category: 'WEB SERVICE · CLOUD ARCHITECTURE',
    description: '대학 웹메일 인증을 통해 신뢰성을 확보한 익명 커뮤니티와 실명 교내 중고거래를 결합하고, TF-IDF 및 머신러닝 기반 사기·위험문구 탐지 AI를 탑재한 종합 캠퍼스 플랫폼입니다.',
    period: '2026.09.21 ~ 2026.10.08',
    teamSize: '4명',
    role: 'Scrum Master / Backend / AI Integration / DevOps',
    stack: ['Java 21', 'Spring Boot', 'QueryDSL', 'FastAPI', 'Docker', 'AWS ECS Fargate', 'AWS S3', 'CloudMap'],
    env: {
      frontend: ['React', 'Vite'],
      backend: ['Java 21', 'Spring Boot', 'JPA', 'QueryDSL', 'MySQL', 'JWT', 'WebSocket/STOMP'],
      aiData: ['Python', 'FastAPI', 'TF-IDF', 'Logistic Regression'],
      cloudDevOps: ['Docker', 'Docker Compose', 'AWS ECR', 'ECS (Fargate)', 'RDS (MySQL)', 'S3', 'ALB', 'CloudMap', 'SSM Parameter Store', 'CloudFormation'],
      tools: ['Swagger', 'GitHub Actions', 'Git', 'GitHub']
    },
    motivation: '대학생이 교내에서 소통하거나 중고거래를 할 때, 기존 커뮤니티는 익명성으로 인해 신뢰 확보가 어렵고 일반 중고거래 플랫폼은 같은 학교 구성원이라는 특성을 활용하기 어렵다는 점에 주목했습니다. 이에 학교 인증을 기반으로 익명 커뮤니티와 실명 중고거래를 결합한 캠퍼스 플랫폼을 기획했습니다.',
    goals: '학교 인증을 기반으로 커뮤니티·중고거래·채팅·신고 기능을 하나의 서비스에서 제공하는 캠퍼스 플랫폼 MVP를 구축하고자 했습니다. 또한 TF-IDF·Logistic Regression을 활용한 위험 문구 탐지 기능을 적용하고, React/Vite·Spring Boot·FastAPI·MySQL을 Docker와 AWS 환경에 연결해 실제 배포 가능한 구조까지 구현하는 것을 목표로 했습니다.',
    features: [
      '대학 인증 기반 회원가입 및 권한 관리',
      '익명 게시판 및 실명 교내 중고거래 통합',
      '중고거래 상품 등록, 이미지 업로드, 해시태그 검색, 찜하기',
      '구매 희망자와 판매자 간 1:1 실시간 채팅 요청 및 수락',
      '안전한 거래 상태(거래중/거래완료) 및 신고 관리 기능',
      'TF-IDF 및 Logistic Regression 기반 사기·위험문구 실시간 탐지 및 차단'
    ],
    responsibilities: [
      'UNI:VERSE 전체 서비스 정책, MVP 범위, 사용자 흐름 및 기능 우선순위 기획',
      '중고거래 도메인 상품 CRUD, 찜, 거래 상태 관리 Backend 기능 설계 및 구현',
      '1:1 채팅 요청·수락 및 거래 관련 Backend 비즈니스 로직 개발',
      'TF-IDF + Logistic Regression 기반 위험문구 분석 FastAPI 서버와 Spring Boot 연동',
      'REST API 명세, DB/ERD 구조 및 팀 개발 규칙 표준화',
      'Backend·AI Dockerfile 및 Docker Compose 로컬 통합 환경 구성',
      'AWS ECR·ECS Fargate·RDS·S3·ALB·CloudMap·SSM·CloudFormation 기반 클라우드 배포 구조 설계',
      'Backend/AI CI 파이프라인 구성 및 Git 브랜치·PR 통합 과정 조율',
      'Scrum Master로서 데일리 스크럼 및 스프린트 협업 리드'
    ],
    process: [
      '학교 인증·익명 커뮤니티·실명 중고거래 정책 및 MVP 기능 범위 설계',
      '중고거래·채팅·거래관리 도메인 설계 및 Spring Boot Backend API 구현',
      'TF-IDF·Logistic Regression 기반 위험문구 분류 모델 개발 및 FastAPI 연동',
      'Frontend·Backend·AI·MySQL을 Docker Compose로 통합 실행환경 구성',
      'CloudFormation 기반 AWS 인프라 구성 및 ECS Fargate·RDS·S3·ALB 배포 구조 구축'
    ],
    results: [
      '대학 인증 기반 통합 플랫폼 MVP: 익명 커뮤니티와 교내 중고거래를 결합한 완성도 높은 서비스 구현',
      '거래 기능 확장: 상품 CRUD, 멀티 이미지 업로드, 해시태그, 찜, 채팅 요청·수락, 거래완료, 신고 관리 완비',
      'AI 위험문구 분석 모델 연동 및 사기 방지 필터 구축',
      '컨테이너 통합: Docker Compose를 활용해 전 계층(FE, BE, AI, DB)을 원클릭으로 로컬 구동 가능하도록 패키징',
      'AWS 클라우드 인프라 코드화: CloudFormation을 통해 ECR, ECS Fargate, RDS, S3, ALB, CloudMap 배포 자동화 절차 문서화'
    ],
    aiMetrics: [
      { label: 'Precision (정밀도)', value: '0.817', note: '위험문구 탐지 정밀도' },
      { label: 'Recall (재현율)', value: '0.912', note: '실제 위험문구 검출율' },
      { label: 'F1-Score', value: '0.862', note: '조화 평균 지표' },
      { label: 'Accuracy (정확도)', value: '0.880', note: '전체 문장 분류 정확도' }
    ],
    aiMetricNote: '※ 위 수치는 포트폴리오 문서에 기록된 테스트 데이터셋 평가 결과입니다. 실제 사기 채팅 21문장 전부 차단, 하드케이스 85문장 95% 차단, 미학습 문장 890개에서 90% 정확도를 확인했습니다. (다른 데이터셋에서 동일 성능을 보장하지 않습니다.)',
    troubleshooting: {
      issue: 'AWS ECS Fargate 환경에서 컨테이너 재시작 시 Backend 로컬에 저장된 상품 이미지가 유실되는 문제, AI 서버의 ECS Task IP가 수시로 변경되어 Backend에서 고정 IP 호출이 불가능한 문제, 민감정보(DB 암호, JWT Secret)가 노출 위험에 놓이는 문제 발생.',
      cause: '로컬 환경과 클라우드 컨테이너 환경의 영속성 차이를 간과함. ECS 컨테이너의 로컬 스토리지는 일시적(Ephemeral)이며 동적 Task IP가 부여됨. 또한 민감정보 주입을 위한 IAM 권한과 시크릿 관리 구조가 필요했음.',
      solution: '상품 이미지를 Private S3 Bucket에 업로드하고 DB에는 S3 Object Key만 저장하도록 아키텍처를 전면 개편함. Backend에서 15분 만료 Presigned URL을 발행하여 클라이언트가 안전하게 이미지를 조회하도록 처리함. AI 서버는 AWS CloudMap(Service Discovery)에 등록하여 고정 IP 대신 서비스 도메인 이름으로 호출하도록 개선함. 또한 DB 비밀번호와 JWT Secret은 SSM Parameter Store SecureString으로 격리하고 ECS Task Execution Role에 최소 권한을 부여한 뒤 CloudFormation 템플릿으로 인프라를 코드화함.',
      lesson: 'Docker 컨테이너를 AWS에 배포할 때는 이미지 빌드 수준을 넘어 영구 스토리지 분리, 서비스 디스커버리, 시크릿 관리, IAM 최소 권한, VPC 네트워크 구조를 유기적으로 설계해야 한다는 점을 배웠습니다. 또한 배포 에러 발생 시 저장소, 네트워크, 권한, 컨테이너 라이프사이클 단계로 격리하여 추적하는 디버깅 역량을 확립했습니다.',
      careerImpact: 'Backend 개발 시 인프라 배포와 실제 운영 환경까지 염두에 두고 설계하겠습니다. 향후 GitHub Actions 기반 Docker Build → ECR Push → ECS 재배포 자동화와 모니터링, HTTPS 보안을 결합한 프로덕션 레벨 CI/CD 파이프라인으로 확장할 것입니다.'
    },
    lessonsLearned: '클라우드 네이티브 아키텍처(S3 Presigned URL, CloudMap 서비스 디스커버리, SSM 파라미터 격리)의 실질적인 설계와 운영 노하우를 습득했습니다.',
    futureApplication: 'AWS ECS와 Kubernetes를 활용한 컨테이너 오케스트레이션 및 마이크로서비스 간 안전한 통신 환경 구축에 기여하겠습니다.',
    accent: '#a486fa',
    number: '03',
    thumbnail: '/UNI_VERSE.png',
    architectureImage: '/UNI_Architect.png',
    youtubeId: 'tLLzq-dE2aU',
    github: 'https://github.com/SY-20231230/UNI-VERSE'
  },
  {
    slug: 'autoplan-ai',
    name: 'AutoPlanAI',
    subtitle: '생성형 AI 기반 프로젝트 기획·분석 및 연구개발계획서 자동화 플랫폼',
    category: 'GENERATIVE AI · RAG · HYBRID RETRIEVAL',
    description: '아이디어 입력만으로 Gemini 2.5 Flash와 GitHub Search 기반 Hybrid Retrieval(TF-IDF + RAG)을 통해 기능명세서, 유사 오픈소스 분석, R&D 계획서, 기술 스택 추천 및 코드 초안까지 원스톱 자동 생성하는 플랫폼입니다.',
    period: '2025.07.01 ~ 2025.08.13',
    teamSize: '4명',
    role: 'PM / AI Developer',
    stack: ['Python', 'Gemini 2.5 Flash', 'Gemini API', 'GitHub Search API', 'RAG / Hybrid Retrieval', 'Django', 'FastAPI', 'MySQL'],
    env: {
      aiData: ['Generative AI: Gemini 2.5 Flash', 'RAG / Retrieval: GitHub Search, TF-IDF, Gemini Semantic Expansion, LLM Re-ranking'],
      externalApi: ['Gemini API', 'GitHub API / GitHub Search'],
      frontend: ['React.js', 'JavaScript'],
      backend: ['Django', 'FastAPI', 'JWT'],
      database: ['MySQL'],
      tools: ['Git', 'GitHub']
    },
    motivation: '학생 및 초기 개발팀이 아이디어를 구체적인 기능명세와 체계적인 개발 계획으로 발전시키는 데 많은 시간과 어려움을 겪는다는 문제에 주목했습니다. 이에 아이디어 입력만으로 AI가 기능명세서, 유사 프로젝트 분석, 개발 일정, 기술 스택 추천, 연구개발계획서 및 코드 초안까지 자동 생성하는 통합 프로젝트 기획 플랫폼을 기획했습니다.',
    goals: '사용자가 입력한 프로젝트 아이디어를 기반으로 생성형 AI가 기능명세서와 연구개발계획서를 자동 생성하고, Gemini API와 GitHub Search, TF-IDF 기반 유사도 분석 및 의미 확장·재정렬을 결합해 유사 프로젝트를 탐색하는 서비스를 구축하고자 했습니다. 또한 기획부터 코드 자동 생성까지 전 과정을 효율화하는 것을 목표로 했습니다.',
    features: [
      'Gemini API 기반 아이디어 핵심 분석 및 다각도 확장',
      '상세 기능명세서(Spec v1·v2) 자동 생성',
      'GitHub Search API를 통한 실시간 오픈소스 유사 프로젝트 탐색',
      'TF-IDF와 Gemini 의미 확장·재정렬을 결합한 고도화된 Hybrid Retrieval (RAG)',
      '정부지원사업 및 공모전 제출용 연구개발계획서(R&D Plan) 자동 생성',
      '팀 구성원별 역할 분담 및 간트차트 기반 개발 일정 자동 수립',
      '프로젝트 맞춤형 기술 스택 추천 및 프로젝트 보일러플레이트 코드 초안 생성'
    ],
    responsibilities: [
      'AutoPlanAI 전체 서비스 아이디어 기획 및 핵심 기능·사용자 흐름 설계',
      '프로젝트 최초 PM으로서 팀원 역할 분담, 전체 일정 관리 및 기능 우선순위 조율',
      'Gemini API 기반 프로젝트 아이디어 확장 및 기능명세 생성 엔진 개발',
      'Gemini API 기반 연구개발계획서(R&D Plan) 자동 생성 엔진 개발',
      '생성 품질 및 일관성 확보를 위한 체계적 Prompt Engineering 설계',
      'GitHub API Token을 활용한 유사 프로젝트 검색 및 RAG 파이프라인 설계·구현',
      'TF-IDF와 Gemini 의미 확장·재정렬을 결합한 Hybrid Retrieval 아키텍처 구현',
      'Gemini 무료 API 호출 제한에 대응하기 위한 기능별 API Key 분리 및 호출량 분산 체계 적용',
      '기술적 의견 충돌 시 복수 구현안을 프로토타이핑하여 속도·정확도 벤치마크 기반 최종안 결정 주도'
    ],
    process: [
      '사용자 아이디어를 실제 개발 가능한 프로젝트로 확장하는 End-to-End 서비스 기획 및 전체 기능 흐름 설계',
      'Gemini API 기반 아이디어 분석·확장 및 기능명세서(Spec v1·v2) 자동 생성 기능 구현',
      'GitHub Search API 연동 및 Repository 검색·응답 데이터 처리 구조 구축',
      'TF-IDF 기반 유사도 분석과 Gemini 의미 확장·재정렬을 결합한 RAG / Hybrid Retrieval 구조 구현',
      '기능명세와 유사 프로젝트 정보를 활용한 연구개발계획서(R&D Plan) 자동 생성 기능 구현',
      '팀 역할 분담·간트차트 기반 개발 일정·기술 스택 추천·코드 자동 생성으로 이어지는 통합 기획 프로세스 설계',
      'Gemini 무료 API 호출 제한에 대응하기 위한 기능별 API Key 분리 및 호출량 분산 구조 적용',
      'PM으로서 팀 일정·개발 방향 조율 및 처리속도·결과 정확도 비교 실험을 통한 기술적 의사결정 주도'
    ],
    results: [
      'AI 프로젝트 기획 자동화: 사용자 아이디어를 실제 개발 가능한 기능명세서와 기획 결과물로 확장하는 Gemini 기반 생성형 AI 기능 구현',
      '연구개발계획서 자동 생성: 프로젝트 기능명세와 유사 프로젝트 분석 결과를 활용한 R&D Plan 초안 자동 생성 기능 구현',
      'RAG 기반 유사 프로젝트 탐색: GitHub Search API, TF-IDF 유사도 분석, Gemini 의미 확장·재정렬을 결합한 Hybrid Retrieval 구조 구현',
      'AI 서비스 통합: 아이디어 분석부터 기능명세, 유사 프로젝트 탐색, 팀 역할 분담, 개발 일정, 기술 스택 추천 및 코드 초안 생성까지 연결하는 End-to-End 서비스 설계',
      'API 운영 최적화: 기능별 Gemini API Key 분리 및 호출량 분산을 통해 무료 API 호출 제한에 따른 서비스 중단 영향 최소화',
      'PM 및 협업 관리: 기술적 비교 실험을 통한 객관적 의사결정 및 팀 협업 주도'
    ],
    troubleshooting: {
      issue: 'Gemini 무료 API 호출 제한(Rate Limit)으로 인해 다수의 AI 기능이 동시에 요청될 때 서비스가 멈추는 문제 발생. 또한 GitHub API Token 인증 및 비정형 Repository 검색 데이터를 LLM이 소비할 RAG Context로 변환하는 Retrieval 과정에서 지연과 정확도 저하 발생.',
      cause: '모든 AI 기능이 단일 Gemini API Key를 공유하여 한 기능의 호출량 급증이 전체 서비스 마비로 이어지는 구조적 결함 확인. 또한 GitHub 검색 결과의 방대한 텍스트 중 핵심 정보를 선별하고 정제하는 경험 부족.',
      solution: '아이디어 분석, 기능명세 생성, 연구개발계획서 작성 등 핵심 기능별로 Gemini API Key를 분리하고 요청을 분산하여 Rate Limit 병목을 분산 격리함. GitHub Search API 연동 시 공식 인증 절차를 엄격히 준수하고 데이터 필터링 계층을 구축함. 나아가 단순 키워드 매칭의 한계를 극복하기 위해 TF-IDF로 1차 후보군을 고속 선별한 뒤 Gemini를 통한 의미 확장과 재정렬(Re-ranking)을 거치는 Hybrid Retrieval 파이프라인을 구축해 정확도와 처리 속도를 동시에 확보함.',
      lesson: '생성형 AI 서비스 개발은 단순히 프롬프트 몇 줄로 API를 호출하는 것에 그치지 않고, Rate Limit 핸들링, 외부 데이터 파이프라인, Retrieval 검색 품질, 안정적 프롬프트 구조 등 실제 운영 환경 요소를 포괄해야 함을 배웠습니다. 또한 PM으로서 기술 의견 충돌 시 주관적 논쟁 대신 양측 안을 소규모 구현해 속도와 정확도를 벤치마킹하는 객관적 의사결정 프로세스의 위력을 확인했습니다.',
      careerImpact: '향후 LLM 서비스 구축 시 Rate Limit 제어, RAG 품질 최적화, Prompt Engineering을 시스템 아키텍처 수준에서 선제 고려하겠습니다. PM/PO 역할에서도 직관에 의존하기보다 검증 가능한 데이터를 바탕으로 팀을 리드하겠습니다.'
    },
    lessonsLearned: 'RAG 기반 검색 품질 고도화 기법(Hybrid Retrieval, Re-ranking)과 대규모 언어 모델 서빙 시 API 비용 및 호출 제한을 우회하는 시스템 엔지니어링을 체득했습니다.',
    futureApplication: '최신 RAG 아키텍처 및 Agentic AI 워크플로우를 실제 비즈니스 프로세스 자동화에 접목하는 개발자로 성장하겠습니다.',
    accent: '#ffad72',
    number: '04',
    thumbnail: '/AutoPlanAI.png',
    architectureImage: '/Auto_Architect.png',
    youtubeId: 'v2r2Xmw58dU',
    github: 'https://github.com/SY-20231230/AutoPlanAIv2'
  },
  {
    slug: 'doro-see',
    name: 'DORO-SEE',
    subtitle: 'AI 기반 도로 위험요소 실시간 탐지 및 주행 안전 지원 플랫폼',
    category: 'COMPUTER VISION · EMBEDDED · BACKEND',
    description: '차량용 카메라와 Raspberry Pi에서 수집된 주행 영상을 YOLO로 실시간 분석하여 포트홀과 도로 균열을 감지하고, 위치 좌표를 주소로 변환하여 관리자와 운전자에게 안전 정보를 제공하는 플랫폼입니다.',
    period: '2024.09.02 ~ 2025.09.09',
    teamSize: '4명',
    role: 'Backend Developer',
    stack: ['Python', 'Django', 'FastAPI', 'MySQL', 'YOLO', 'OpenCV', 'Raspberry Pi', 'React.js'],
    env: {
      frontend: ['React.js'],
      backend: ['Python', 'Django', 'FastAPI'],
      database: ['MySQL'],
      aiData: ['YOLO 기반 포트홀·크랙 객체 탐지 모델', 'OpenCV'],
      hardware: ['Raspberry Pi', '차량용 카메라'],
      externalApi: ['Gemini API', '지도·주소 변환 관련 API'],
      tools: ['Git', 'GitHub']
    },
    motivation: '포트홀과 도로 균열은 차량 파손과 인명 사고로 이어질 수 있지만, 운전자가 주행 중 사전에 인지하기 어렵다는 문제에 주목했습니다. 이에 AI를 활용해 도로 위험요소를 실시간으로 탐지하고 사전에 정보를 제공하는 서비스를 기획했습니다.',
    goals: 'YOLO와 OpenCV를 활용해 차량 카메라 영상에서 포트홀·크랙을 탐지하고, 탐지 결과와 위치 정보를 Backend·Database·Frontend로 연결하는 시스템을 구축하고자 했습니다. 관리자에게는 도로 유지보수 우선순위 판단에 필요한 정보를 제공하고, 일반 사용자에게는 이동 경로의 도로 위험요소를 사전에 안내하는 서비스를 구현하는 것을 목표로 했습니다.',
    features: [
      '차량 카메라 주행 영상 기반 YOLO 실시간 포트홀 및 도로 크랙 탐지',
      'Raspberry Pi 하드웨어 서버와 실시간 카메라 영상 및 센서 데이터 연동',
      '포트홀·크랙 위치 좌표, 상태, 발생 일시의 MySQL 저장 및 관리자 API',
      '위치 좌표(GPS)를 실제 주소 정보와 변환 매핑하여 지도 기반 위험 정보 제공',
      '관리자 전용 도로 이상 정보 통합 대시보드',
      '일반 운전자용 실시간 도로 위험 구간 사전 경고 인터페이스',
      'Gemini API 기반 대화형 도로 안전 정보 안내 챗봇'
    ],
    responsibilities: [
      'Django·FastAPI 기반 Backend API 및 데이터 처리 파이프라인 개발',
      'YOLO 객체 탐지 결과와 MySQL 데이터베이스, React Frontend 간의 데이터 연동 구조 구축',
      'Raspberry Pi 기반 Hardware Server와 Backend 간 영상·위치정보 데이터 통신 연동',
      'AI 개발자와 데이터셋 선정 및 영상 분석 과정 협업, 위치·지도 정보 처리 기능 구현',
      'AI 개발자와 도로 위험 분석용 공공데이터 조사 및 도로침하 데이터 추가 후보 선정',
      'Gemini API 기반 도로 안전정보 안내 챗봇 개발 및 Backend 연동'
    ],
    process: [
      'Node.js 기반 CRUD 웹페이지 구현을 통해 Backend 요청·응답 및 데이터 처리 구조 학습',
      'Django·FastAPI 기반 Backend 서버 및 포트홀·크랙 탐지 데이터 저장·조회 API 구축',
      'YOLO 탐지 결과와 Backend·MySQL 연동 및 AI 출력 데이터 형식 조율',
      'Raspberry Pi 기반 Hardware Server와 Backend 간 카메라 영상·위치정보 데이터 연동',
      '탐지 좌표를 실제 주소정보와 연결하고 지도·내비게이션용 도로 위험정보 제공 기능 구현',
      'AI 개발자와 도로 위험 분석용 공공데이터 조사 및 도로침하 데이터 추가 후보 선정',
      'Gemini API 기반 도로 안전정보 안내 챗봇 개발 및 Backend 연동'
    ],
    results: [
      '도로 이상 탐지 시스템 통합: Raspberry Pi 카메라 영상의 YOLO 분석 결과를 Backend에서 처리하는 전주기 구조 구현',
      '데이터 관리 체계 구축: 포트홀·크랙 위치, 심각도 상태, 발생 일시 정보를 MySQL에 저장·조회하는 고성능 Backend 기능 구현',
      '위치정보 연계: AI 탐지 GPS 좌표를 공공 주소 변환 API와 연동해 지도 상에 시각화',
      '사용자 서비스 제공: 관리자용 도로 유지보수 조회와 일반 사용자용 위험구간 사전 안내 기능 완비',
      'AI 챗봇 연동: Gemini API 기반 도로 안전정보 안내 기능 구현',
      '이종 시스템 통합 완성: Raspberry Pi → YOLO AI → Django/FastAPI → MySQL → React.js 전체 파이프라인 성공적 연결'
    ],
    aiMetrics: [
      { label: '전체 Precision', value: '0.512', note: '포트홀·크랙 전체 정밀도' },
      { label: '전체 Recall', value: '0.457', note: '포트홀·크랙 전체 재현율' },
      { label: '전체 mAP50', value: '0.450', note: 'IoU 0.5 기준 평균 정밀도' },
      { label: '포트홀 Precision', value: '0.697', note: '포트홀 정밀도' },
      { label: '포트홀 Recall', value: '0.634', note: '포트홀 재현율' },
      { label: '포트홀 mAP50', value: '0.673', note: '크랙 대비 높은 탐지 성능' }
    ],
    aiMetricNote: '※ 위 AI 평가 결과는 4인 팀 프로젝트의 전체 모델 성능 평가 기록입니다. 윤성용은 백엔드 개발자로서 AI 탐지 결과와 하드웨어, 데이터베이스, 프론트엔드를 연결하는 시스템 엔지니어링을 담당했습니다.',
    troubleshooting: {
      issue: '첫 개발 프로젝트에서 Backend를 담당했으나 API·Database·Frontend 간의 데이터 처리 흐름에 대한 실전 이해가 부족하여, Raspberry Pi 하드웨어와 YOLO AI 모델까지 결합된 복잡한 이종 시스템 통합에 난항을 겪음.',
      cause: 'API, CRUD, 요청·응답 라이프사이클, DB 트랜잭션 등 백엔드 기본 구조를 처음부터 손수 구현해 본 경험이 부족했음. DORO-SEE는 HW·AI·BE·FE 4개 계층이 실시간 연동되어야 하므로 단순 프레임워크 문법 암기보다 데이터 흐름의 원리 이해가 절실했음.',
      solution: '프로젝트 병행 중 별도로 Node.js 환경에서 순수 CRUD 웹 애플리케이션을 바닥부터 구현해보며 Client-Server-Database 간의 요청·응답 구조와 데이터 직렬화/역직렬화 흐름을 체계적으로 학습함. 이를 통해 확립한 원리를 Django·FastAPI 백엔드 개발과 React REST API 연동에 적용하였으며, YOLO AI의 탐지 출력 스트림을 MySQL에 저장하고 Raspberry Pi 하드웨어 통신 규격을 단계적으로 맞추어 시스템을 완결함.',
      lesson: '새로운 기술을 배울 때 프레임워크 튜토리얼을 겉핥기로 따라가는 것보다 데이터가 클라이언트, 서버, 데이터베이스 사이에서 어떤 규격으로 이동하는지 전체 파이프라인을 꿰뚫는 것이 핵심임을 깨달았습니다. 또한 하드웨어, AI, 프론트엔드 담당자와의 협업에서는 각 모듈이 개별 동작하는 것을 넘어 인터페이스 규격을 초기에 치밀하게 조율하는 과정이 필수적임을 배웠습니다.',
      careerImpact: '앞으로도 생소한 기술을 마주했을 때 작은 단위의 프로토타입으로 원리를 먼저 체득한 뒤 실무 시스템에 안전하게 확장하겠습니다. AI 모델에만 매몰되지 않고 Hardware-AI-Backend-Database-Frontend 전반의 데이터 흐름을 폭넓게 조율하는 개발자로 일하겠습니다.'
    },
    lessonsLearned: '하드웨어 임베디드 장비부터 컴퓨터 비전 AI, 백엔드 API, 웹 프론트엔드에 이르는 이종 시스템 간 데이터 인터페이스 표준화와 협업의 가치를 배웠습니다.',
    futureApplication: '다양한 디바이스와 AI 모델의 출력을 웹 서비스와 유연하게 결합하는 백엔드 아키텍처 구축에 집중하겠습니다.',
    accent: '#39b884',
    number: '05',
    thumbnail: '/doro-see.png',
    architectureImage: '/DORO_Architect.png',
    youtubeId: 'xJ-mfSS2iGM',
    github: 'https://github.com/SY-20231230/DORO-SEE'
  }
];
