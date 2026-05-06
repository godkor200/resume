export const info = {
  name: "유병국",
  title: "Backend Developer",
  years: "5년차",
  tags: ["#백엔드", "#데이터", "#운영", "#비즈니스이해"],
  taglines: [
    {
      prefix: "데이터 흐름과 조회 패턴을 기준으로 ",
      bold: "확장 가능한 구조를 설계하는 백엔드 개발자",
    },
    {
      prefix: "기술뿐 아니라 ",
      bold: "비즈니스 요구와 사용자 맥락을 함께 이해하며 구조를 설계하는 개발자",
    },
    {
      prefix: "시간이 지나도 ",
      bold: "유지보수 가능한 코드와 시스템을 만드는 개발자",
    },
  ],
  contact: {
    phone: "010-5747-5723",
    email: "godkor200@gmail.com",
  },
  links: [
    { label: "Velog", url: "https://velog.io/@godkor200" },
    { label: "GitHub", url: "https://github.com/godkor200" },
    { label: "Portfolio", url: "https://bit.ly/4rD8Bc2" },
  ],
};

export const about = [
  "5년차 백엔드 개발자 유병국입니다.",
  "NestJS, TypeORM, PostgreSQL을 기반으로 데이터 수집·가공·집계 파이프라인을 설계해왔습니다. K-POP 아티스트·앨범 분석 서비스, 유튜브 콘텐츠 분석 플랫폼, 상품 자동 생성 시스템 등 데이터 규모와 조회 패턴이 까다로운 도메인을 주로 다뤘습니다.",
  "현장에서 가장 자주 마주한 문제는 조회 패턴과 맞지 않는 데이터 모델에서 비롯되는 병목과 동시성 이슈였습니다. 두디스에서는 약 40초에 달하던 집계 API 응답 시간을 약 3초로 단축했고, 프린트시티에서는 재고 동시 수정으로 인한 데이터 충돌 문제를 낙관적 잠금(Optimistic Lock) 전략으로 해결했습니다.",
  "단순한 기능 구현보다는 데이터 흐름과 도메인 경계를 먼저 정의하고, 그 위에서 구조를 점진적으로 발전시키는 방식을 지향합니다.",
  "최근에는 LLM 기반 챗봇 개발에 깊은 관심을 갖고 있습니다. 백엔드 관점에서 단순한 프롬프트 연동을 넘어, 대화 이력 관리·도구 호출(Tool Use)·RAG 파이프라인 설계 등 챗봇을 하나의 견고한 시스템으로 구축하는 방법을 탐구 중입니다.",
];

export const skills = [
  { category: "Language", items: ["TypeScript", "Python"] },
  { category: "Backend / Framework", items: ["NestJS", "Express", "FastAPI"] },
  {
    category: "Database / Storage",
    items: [
      "PostgreSQL",
      "MariaDB",
      "MySQL",
      "MongoDB",
      "Redis",
      "OpenSearch",
      "Google Firestore",
      "Kafka",
    ],
  },
  {
    category: "Infra / DevOps",
    items: [
      "AWS (EC2, RDS, S3, ECR, EB, Lambda, SQS)",
      "GCP Compute Engine",
      "Docker",
      "Docker Compose",
      "Kubernetes",
    ],
  },
  {
    category: "ETC",
    items: [
      "Jest",
      "Git",
      "Swagger",
      "Notion",
      "Slack",
      "AI Coding Tools (Claude Code, Codex, ChatGPT)",
    ],
  },
];

type LeaveReason = "경영악화" | "계약종료" | "이직";

export const careers: Array<{
  company: string;
  role: string;
  cofounder?: boolean;
  period: string;
  contribution?: string;
  leaveReason?: LeaveReason;
  summary: string;
  achievements: string[];
}> = [
  {
    company: "스페이스오디티",
    role: "Backend Developer",
    period: "2025.01 – 2026.01",
    contribution: "기여도 70%",
    leaveReason: "경영악화",
    summary:
      "백엔드 API 개발 · 데이터 파이프라인 설계 및 구현 · 쿼리 최적화 · 스크래퍼 구현",
    achievements: [
      "NestJS · TypeORM · PostgreSQL 기반 K-POP 데이터 분석 서비스 백엔드 설계 및 구현 — 일 평균 100만 건 데이터 처리, 아티스트 300여명 / 앨범 600건 이상 규모",
      "SNS · 영상 플랫폼 스크래핑 데이터를 Raw → 집계 구조로 분리한 파이프라인 구축, 지표 계산과 데이터 검증 가능한 구조 설계",
      "사전 집계, 캐시, 인덱스 최적화를 적용해 조회 성능과 운영 복잡도 사이의 균형 확보",
      "Redis 캐싱 전략 적용으로 API 응답 속도 20% 수준 개선 및 DB 부하 완화",
      "K-POP 팬 플랫폼 Blip(400만 누적 다운로드 · 40만 MAU) 웹/앱 API 개발 및 유지보수 — 신규 기능(웹 Blip) 개발 및 서비스 장애 개선",
      "기사 썸네일 이미지를 해시(Hash) 값으로 변환하고, 해밍 거리(Hamming Distance) 기반 유사도 비교를 통해 동일·유사 이미지를 판별하는 중복 제거 로직 구현",
      "데이터 수집 실패·집계 이상치를 빠르게 인지하는 모니터링 및 알림 전담 구조 구축",
    ],
  },
  {
    company: "두디스 프로젝트",
    role: "Backend Developer",
    cofounder: true,
    period: "2023.10 – 2024.11",
    contribution: "기여도 80%",
    leaveReason: "경영악화",
    summary:
      "백엔드 API 개발 · 데이터 파이프라인 설계 · OpenSearch 기반 구조 개선 · CI/CD 구축",
    achievements: [
      "NestJS · TypeORM · MariaDB · OpenSearch 기반 일평균 1GB 유튜브 콘텐츠 분석 데이터 파이프라인 설계 및 구축",
      "Logstash 활용 데이터 수집·가공 파이프라인 설계, OpenSearch 연동 대용량 데이터 검색·분석 기능 구현",
      "형태소 분석·키워드 기반 데이터 분석 API 개발 — 비정형 텍스트 데이터 기반 비디오 탐색 시스템 구축",
      "다중 조인 기반 병목 분석 후 집계 테이블·비정규화 전략 적용 — 핵심 집계 API 응답속도 40초 → 3초 개선",
      "Turborepo 기반 모노레포 전환으로 프론트·백엔드 타입 안정성 확보 및 빌드 시간 10% 개선",
      "Docker · Docker Compose 기반 자동화된 CI/CD 파이프라인 구축으로 배포 안정성·개발 효율성 향상",
    ],
  },
  {
    company: "프린트시티",
    role: "Backend Developer",
    period: "2021.07 – 2023.10",
    contribution: "기여도 80%",
    summary:
      "프론트·백엔드 설계 및 개발 · 재고관리 동시성 문제 해결 · 구조 개선 · 모노레포 전환",
    achievements: [
      "Next.js 기반 상품 상세 페이지 자동 생성 시스템 설계 및 구축 — 상품 생성·관리 프로세스 자동화",
      "Express · MongoDB 기반 관리자 API 개발, Jest TDD · GitHub Actions CI/CD 파이프라인 구축",
      "낙관적 잠금(Optimistic Locking) 적용으로 동시 수정 환경에서 재고 관련 CS 건수 약 50% 감소",
      "Express → NestJS + Hexagonal Architecture 전환, 모노레포 구조로 코드 중복 제거 및 유지보수성 향상",
      "RxJS · FxTS 도입으로 비동기 데이터 처리 구조 개선 및 프론트엔드 코드 품질 향상",
      "신규 개발팀 개발 컨벤션과 배포 프로세스 표준화 주도",
    ],
  },
  {
    company: "캐스트윈",
    role: "기술영업",
    period: "2017.01 – 2020.02",
    contribution: undefined,
    summary: "기간통신사업부 · 국내 3대 이동통신사 및 건설사 대상 B2B 기술영업",
    achievements: [
      "통신 장비 대수출입 업무 및 관련 운영 프로세스 관리",
      "자재 발주·수급·재고 관리 전반 담당",
      "국내 3대 이동통신사·건설사 대상 B2B 계약 및 영업 수행",
    ],
  },
  {
    company: "고아정공",
    role: "인턴/수습",
    period: "2016.07 – 2016.12",
    contribution: undefined,
    summary: "LG이노텍 벤더사 · 중국 현지 인력 관리 및 운영 지원",
    achievements: [
      "중국 현지 인력 관리 및 운영 지원 수행",
      "현장 프로세스 이해와 문제 해결 경험을 통해 시스템 기반 개선에 관심을 갖게 됨",
    ],
  },
];

export const portfolio = [
  {
    id: 1,
    name: "K-POP Radar 2.0 / Blip",
    company: "스페이스오디티",
    period: "2025.01 – 2026.01",
    url: "https://www.kpop-radar.com/",
    notion:
      "https://www.notion.so/Backend-Portfolio-17226d4c90ec80219c8cf70782c9d5ad#32f26d4c90ec806fbff1d4ebea9058fd",
    description: "글로벌 K-POP 데이터 분석 서비스",
    badge: "사전 집계 · 캐시 · 인덱스 최적화",
    techStack: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "GCP Firestore",
      "Redis",
      "Kubernetes",
      "Argo CD",
    ],
    achievements: [
      "MySQL ↔ PostgreSQL 이원화 환경에서 데이터 동기화 흐름과 조회 모델 재설계",
      "화면 지표는 사전 집계로, 탐색형 데이터만 동적 조회로 분리해 응답 안정성 확보",
      "기사 썸네일 해시 비교 기반 중복 제거 로직 구현",
      "Slack 기반 집계 이상치 알림 구조 구축",
    ],
    problem:
      "기존 Blip(MySQL)과 신규 K-POP Radar(PostgreSQL)의 이원화 환경에서, 단순 이전이 아니라 서비스 화면 구조에 맞는 데이터 모델을 새로 설계해야 했습니다.",
    solution:
      "화면에서 자주 호출되는 지표는 사전 집계 테이블로 분리하고, 탐색형 데이터만 동적 조회로 남겼습니다. 인덱스 최적화, Redis 캐시, 시계열 파티셔닝을 함께 적용해 조회 병목을 줄였습니다.",
    techDetail:
      "Backend: NestJS, TypeORM / Database: PostgreSQL, GCP Firestore, Redis / Infra: Kubernetes, Argo CD",
  },
  {
    id: 2,
    name: "두디스 (Dothis)",
    company: "두디스 프로젝트",
    cofounder: true,
    period: "2023.10 – 2024.11",
    url: "https://bit.ly/4rqr8bw",
    notion:
      "https://www.notion.so/Backend-Portfolio-17226d4c90ec80219c8cf70782c9d5ad#32f26d4c90ec80518864fe1449bcc3fe",
    description: "유튜브 콘텐츠 소재 · 키워드 트렌드 분석 플랫폼",
    badge: "응답속도 40초 → 3초",
    techStack: [
      "NestJS",
      "TypeORM",
      "MariaDB",
      "OpenSearch",
      "Kafka",
      "Logstash",
      "Redis",
    ],
    achievements: [
      "MySQL 조인 중심 구조 → 비정규화 기반 검색·집계 구조 전환",
      "핵심 집계 API 응답속도 40초 → 3초 개선",
      "토큰 테이블 + OpenSearch 비정규화 2단계 검색 구조 설계",
      "BERT 기반 텍스트 임베딩·토크나이징·클러스터링 파이프라인 구축",
    ],
    problem:
      "MySQL에서 크롤링 데이터를 조인·집계하는 구조로 인해 핵심 집계 API 응답이 40~60초까지 느려졌습니다. 조인을 빠르게 하는 것이 아니라, 조인을 계속 요구하는 구조 자체가 문제였습니다.",
    solution:
      "DWH 데이터를 Logstash로 비정규화해 OpenSearch에 인덱싱하고, 검색 시 토큰 테이블에서 후보 ID를 먼저 좁힌 뒤 OpenSearch에서 최종 조회하는 2단계 구조로 전환했습니다.",
    techDetail:
      "Main: MySQL / DWH: MariaDB / 인덱싱: Logstash → OpenSearch / 캐시: Redis, 토큰 테이블 / 수집: Kafka",
  },
  {
    id: 3,
    name: "프린트시티 IamDesign",
    company: "프린트시티",
    period: "2021.07 – 2023.10",
    url: "https://www.iamdgn.com/",
    notion:
      "https://www.notion.so/Backend-Portfolio-17226d4c90ec80219c8cf70782c9d5ad#32f26d4c90ec8091bce1d98aa00ff332",
    description: "인쇄물 커머스 플랫폼 자동화 시스템",
    badge: "Optimistic Locking · 상품 페이지 자동 생성",
    techStack: [
      "NestJS",
      "Next.js",
      "MongoDB",
      "AWS EC2/ECS",
      "GitHub Actions",
    ],
    achievements: [
      "MongoDB 조합형 JSON + Next.js 공통 템플릿 기반 상품 페이지 자동 생성",
      "Optimistic Locking으로 동시 주문 환경의 재고 정합성 확보",
      "Express → NestJS + Hexagonal Architecture 전환",
      "CI/CD 파이프라인 구축 및 개발 컨벤션 표준화",
    ],
    problem:
      "상품마다 페이지를 하드코딩하는 구조로 상품 추가·수정 시마다 개발이 필요했고, 동시 주문 시 재고 불일치 문제가 발생했습니다.",
    solution:
      "관리자 화면에서 조합 데이터만 정의하면 Next.js 공통 템플릿 기반으로 페이지가 자동 구성되도록 전환하고, Optimistic Locking으로 동시성 문제를 해결했습니다.",
    techDetail:
      "Backend: NestJS / Frontend: Next.js / Database: MongoDB / Infra: AWS EC2, ECS / CI/CD: GitHub Actions",
  },
];

export const sideProjects = [
  {
    name: "개인 투자 어시스턴트 플랫폼 (Stock Pile)",
    period: "2026.04 – 진행중",
    github: "https://github.com/godkor200/stock-pile",
    description:
      "자연어 챗봇으로 매매를 기록하고 LLM 기반 포트폴리오 조언과 종목 분석 리포트를 제공하는 투자 관리 서비스",
    techStack: [
      "TypeScript",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    achievements: [
      "Groq/Anthropic 멀티 프로바이더 추상화",
      "챗봇 2-step 파이프라인: LLM 의도 분류(TRADE_ENTRY/INVESTMENT_QUERY) + ticker 추출 → 매매 파싱 또는 투자 어드바이저 라우팅",
      "투자 질문 시 DART 재무·네이버 뉴스·Yahoo Finance 기술지표를 Promise.all 병렬 수집 후 LLM 합성 리포트 생성 (24h Redis 캐시)",
      "pgvector 벡터 스토어로 뉴스 임베딩 RAG 구축 — 유사 문서 검색으로 분석 컨텍스트 보강",
      "pnpm + Turborepo 모노레포로 shared-types·db-schema 패키지 단일 소스 관리",
      "GitHub Actions + SSH 자동 배포",
    ],
  },
  {
    name: "차량 운행 로그 분석 파이프라인",
    period: "2026.04",
    github: "https://github.com/godkor200/driving-log",
    description:
      "차량의 Raw 로그 데이터를 실시간으로 수신하여 데이터 정합성을 확보하고 위험 운전 패턴을 탐지하는 백엔드 데이터 파이프라인",
    techStack: ["Python", "FastAPI", "Kafka", "PostgreSQL", "NumPy", "Docker"],
    achievements: [
      "Kafka 토픽 구독 기반 실시간 수신 → 10초 시간 윈도우 버퍼링 후 일괄 파이프라인 처리",
      "np.interp 벡터화로 결측값·이상치 보간, NumPy 벡터화 haversine으로 거리 계산",
      "Bounding box 사전 필터로 제한구역 비교 연산 O(N×M) → 후보 사전 축소",
      "SQLAlchemy 2.0 Core bulk insert로 대용량 DB 적재 최적화",
      "SHA-256 기반 Trip 멱등성 처리 — 동일 데이터 재전송 시 중복 적재 방지",
      "MAX_RECORDS 가드로 OOM 방어, Pydantic field_validator로 GPS 범위 및 timestamp 입력 검증",
    ],
  },
];

export const contributions = [
  {
    title: "느린 조회·집계 구조 개선",
    description:
      "조회 패턴과 데이터 모델을 함께 분석해 병목 원인을 찾고, 비정규화·캐시·집계 구조 개선으로 성능을 높일 수 있습니다.",
  },
  {
    title: "데이터 수집·가공 파이프라인 안정화",
    description:
      "스크래핑, 적재, 가공, 집계 흐름을 분리해 운영 중 오류를 빠르게 확인하고 재처리 가능한 구조로 개선할 수 있습니다.",
  },
  {
    title: "요구사항을 API와 데이터 구조로 구체화",
    description:
      "기획·운영 요구를 단순 기능 단위가 아니라 데이터 흐름과 사용 시나리오 기준으로 정리해 실제 개발 가능한 형태로 풀어낼 수 있습니다.",
  },
  {
    title: "운영 이슈를 구조 개선으로 연결",
    description:
      "장애나 성능 저하가 발생했을 때 임시 대응에 그치지 않고, 재발 가능성을 줄이는 방향으로 구조를 개선하는 데 강점이 있습니다.",
  },
  {
    title: "유지보수 가능한 코드베이스 정리",
    description:
      "테스트, 문서화, 책임 분리를 통해 다른 개발자도 이해하고 이어서 개발할 수 있는 코드 구조를 만드는 데 기여할 수 있습니다.",
  },
  {
    title: "반복 업무 생산성 향상",
    description:
      "반복 구현, 테스트 초안, 리팩토링 검토 단계에서 AI 코딩 도구를 활용해 속도를 높이되, 최종 구조와 품질은 직접 검증하는 방식으로 개발합니다.",
  },
];

export const certifications = [{ name: "SQLD (SQL 개발자)", date: "2022.12" }];

export const patents = [
  {
    name: "대용량 비정형 텍스트 데이터의 키워드 분석 방법 및 프로그램",
    description:
      "대용량 비정형 텍스트를 분석 가능한 단위로 구조화하고, 문맥 기반 키워드 추출 정확도를 높이기 위해 BERT 기반 분석 방식을 적용한 키워드 분석 방법에 관한 특허",
  },
  {
    name: "리버스 인덱싱을 이용한 대용량 비정형 텍스트 데이터의 키워드 검색 시스템",
    description:
      "대용량 비정형 텍스트를 원문 직접 검색하지 않고, 토큰별로 문서 ID를 역색인 구조로 저장해 빠르게 검색·집계할 수 있도록 만든 검색 시스템",
  },
];

export const education = [
  {
    school: "중국 천진 남개대학교 (Tianjin Nankai University)",
    major: "공상관리학 전공 / 인사관리 부전공",
    period: "2012.06 – 2016.07",
    gpa: "75.6 / 100",
    note: "미적분, 선형대수, 확률과 통계, 미시·거시경제학, 노동경제학 이수. 데이터 기반 의사결정 및 분석적 사고에 대한 학문적 기초 역량 확보.",
  },
  {
    school: "한국 대구 계명대학교 (Keimyung University)",
    major: "중국어문학과 전공 / 국제통상학 부전공",
    period: "2008.03 – 2012.03 (중퇴)",
    gpa: "3.0 / 4.5",
    note: "중국어 문법·회화·작문·독해 이수. 언어와 문화 그리고 통상에 대한 이해를 바탕으로 커뮤니케이션 역량 형성.",
  },
];

export const training = [
  {
    institution: "코드스테이츠 (Code States)",
    course: "풀스택(Node.js) 과정 수료",
    period: "2020.07 – 2020.12",
    note: "JavaScript, Node.js, SQL, AWS 기반 웹 서비스 개발 교육 이수. 단기 프로젝트(2주/4주) 및 페어 프로그래밍 경험.",
  },
];
