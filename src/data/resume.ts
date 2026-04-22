export const info = {
  name: '유병국',
  title: 'Backend Developer',
  years: '5년차',
  tags: ['#백엔드', '#데이터', '#운영', '#비즈니스이해'],
  taglines: [
    { prefix: '데이터 흐름과 조회 패턴을 기준으로 ', bold: '확장 가능한 구조를 설계하는 백엔드 개발자' },
    { prefix: '기술뿐 아니라 ', bold: '비즈니스 요구와 사용자 맥락을 함께 이해하며 구조를 설계하는 개발자' },
    { prefix: '시간이 지나도 ', bold: '유지보수 가능한 코드와 시스템을 만드는 개발자' },
  ],
  contact: {
    phone: '010-5747-5723',
    email: 'godkor200@gmail.com',
  },
  links: [
    { label: 'Velog', url: 'https://velog.io/@godkor200' },
    { label: 'GitHub', url: 'https://github.com/godkor200' },
    { label: 'Portfolio', url: 'https://bit.ly/4rD8Bc2' },
  ],
}

export const about = [
  '안녕하세요. 5년차 백엔드 개발자 유병국입니다.',
  '저는 개발을 할 때 "이 기능이 돌아가느냐"보다 "이 구조가 오래 버틸 수 있느냐"를 더 중요하게 생각합니다. 처음에는 작은 기능처럼 보여도 서비스가 커지면 결국 데이터 구조와 운영 방식의 차이가 성능과 유지보수성 차이로 이어진다는 점을 여러 번 경험했기 때문입니다.',
  '실무에서는 집계 성능 문제나 동시성 문제를 겪으면서 운영 이슈를 단순 수정이 아니라 구조 개선 관점에서 풀어가는 기준을 갖게 됐습니다. 지금은 백엔드를 구현할 때도 데이터 정합성과 조회 성능 그리고 운영 안정성을 함께 보는 편입니다.',
  '저는 기획과 운영의 요구를 실제 서비스 구조로 연결할 수 있는 개발자이고 싶습니다. 예전 영업 경험 덕분에 현업의 언어와 개발의 언어 사이를 이해하고 조율하는 데 익숙해졌고, 개발자로 일한 뒤에는 그 감각을 서비스 설계와 운영 관점으로 이어오고 있습니다.',
  '다른 사람이 보더라도 흐름을 이해할 수 있는 구조를 만드는 개발자가 되고 싶습니다.',
]

export const skills = [
  { category: 'Language', items: ['TypeScript', 'Python'] },
  { category: 'Backend / Framework', items: ['NestJS', 'Express', 'FastAPI'] },
  {
    category: 'Database / Storage',
    items: ['PostgreSQL', 'MariaDB', 'MySQL', 'MongoDB', 'Redis', 'OpenSearch', 'Google Firestore', 'Kafka'],
  },
  {
    category: 'Infra / DevOps',
    items: ['AWS (EC2, RDS, S3, ECR, EB, Lambda, SQS)', 'GCP Compute Engine', 'Docker', 'Docker Compose', 'Kubernetes'],
  },
  { category: 'ETC', items: ['Jest', 'Git', 'Swagger', 'Notion', 'Slack', 'AI Coding Tools (Claude Code, Codex, ChatGPT)'] },
]

export const careers = [
  {
    company: '스페이스오디티',
    role: 'Backend Developer',
    period: '2025.01 – 2026.01',
    contribution: '기여도 70%',
    summary: '백엔드 API 개발 · 데이터 파이프라인 설계 및 구현 · 쿼리 최적화 · 스크래퍼 구현',
    achievements: [
      '글로벌 K-POP 데이터 분석 서비스 K-POP Radar 설계 및 구현 · 캐싱',
      '서비스 화면에 필요한 지표를 기준으로 데이터 구조 및 API 스펙 설계',
      '사전 집계, 캐시, 인덱스 최적화를 적용해 조회 성능과 운영 복잡도 사이의 균형 확보',
      'MSA 환경하의 데이터 파이프라인 설계 구현 · 스크래퍼 구현 · 유지보수',
      '기존 400만 누적 다운로드, 40만 MAU Blip 서비스 웹/앱 백엔드 개발 및 유지보수 참여',
      '기사 썸네일 해시 비교 기반 중복 제거 로직 구현',
      '데이터 수집 실패·집계 이상치를 빠르게 인지하는 모니터링 및 알림 전담 구조 구축',
    ],
  },
  {
    company: '두디스 프로젝트',
    role: 'Backend Developer',
    period: '2023.11 – 2024.11',
    contribution: '기여도 80%',
    summary: '백엔드 API 개발 · 데이터 파이프라인 설계 · OpenSearch 기반 구조 개선 · CI/CD 구축',
    achievements: [
      '유튜브 콘텐츠 성과 분석 및 키워드 트렌드 제공 서비스 개발',
      'NestJS, TypeORM, MariaDB, OpenSearch 기반 데이터 파이프라인 및 API 설계',
      '조인 중심 구조의 병목을 분석하고 비정규화 기반 조회 구조로 전환',
      '핵심 집계 API 응답속도 40초 → 3초 개선',
      'ETL, 인덱싱, 검색 구조를 포함한 운영 가능한 분석 시스템 구조 정리',
      'CI/CD 파이프라인 구축을 통한 배포 안정성·개발 효율성 향상',
    ],
  },
  {
    company: '프린트시티',
    role: 'Backend Developer',
    period: '2021.07 – 2023.11',
    contribution: '기여도 80%',
    summary: '프론트·백엔드 설계 및 개발 · 재고관리 동시성 문제 해결 · 구조 개선 · 모노레포 전환',
    achievements: [
      '상품 상세 페이지 자동 생성 시스템 프론트, 백엔드 설계 및 개발',
      '낙관적 잠금(Optimistic Locking) 적용으로 재고 관리 동시성 문제 해결',
      'Express → NestJS + Hexagonal Architecture 구조 개선',
      '모노레포 전환을 통한 코드 중복 제거 및 유지보수성 향상',
      '신규 개발팀의 개발 컨벤션과 배포 프로세스 표준화 주도',
      'CI/CD 파이프라인 구축을 통한 배포 안정성·개발 효율성 향상',
    ],
  },
  {
    company: '캐스트윈',
    role: 'B2B Sales',
    period: '2017.01 – 2020.02',
    contribution: null,
    summary: '국내 3대 이동통신사 및 건설사 대상 B2B 계약 및 영업',
    achievements: [
      '국내 3대 이동통신사 및 건설사 대상 B2B 계약 및 영업 수행',
      '통신 장비 대수출입 업무 및 자재 발주·수급·재고 관리 운영',
      '고객 요구사항과 공급/운영 이슈를 조율하며 대외 커뮤니케이션 및 실무 조정 역량 축적',
    ],
  },
]

export const portfolio = [
  {
    id: 1,
    name: 'K-POP Radar 2.0 / Blip',
    company: '스페이스오디티',
    period: '2025.01 – 2026.01',
    url: 'https://www.kpop-radar.com/',
    description: '글로벌 K-POP 데이터 분석 서비스',
    badge: '사전 집계 · 캐시 · 인덱스 최적화',
    techStack: ['NestJS', 'TypeORM', 'PostgreSQL', 'GCP Firestore', 'Redis', 'Kubernetes', 'Argo CD'],
    achievements: [
      'MySQL ↔ PostgreSQL 이원화 환경에서 데이터 동기화 흐름과 조회 모델 재설계',
      '화면 지표는 사전 집계로, 탐색형 데이터만 동적 조회로 분리해 응답 안정성 확보',
      '기사 썸네일 해시 비교 기반 중복 제거 로직 구현',
      'Slack 기반 집계 이상치 알림 구조 구축',
    ],
    problem: '기존 Blip(MySQL)과 신규 K-POP Radar(PostgreSQL)의 이원화 환경에서, 단순 이전이 아니라 서비스 화면 구조에 맞는 데이터 모델을 새로 설계해야 했습니다.',
    solution: '화면에서 자주 호출되는 지표는 사전 집계 테이블로 분리하고, 탐색형 데이터만 동적 조회로 남겼습니다. 인덱스 최적화, Redis 캐시, 시계열 파티셔닝을 함께 적용해 조회 병목을 줄였습니다.',
    techDetail: 'Backend: NestJS, TypeORM / Database: PostgreSQL, GCP Firestore, Redis / Infra: Kubernetes, Argo CD',
  },
  {
    id: 2,
    name: '두디스 (Dothis)',
    company: '두디스 프로젝트',
    period: '2023.11 – 2024.11',
    url: 'https://bit.ly/4rqr8bw',
    description: '유튜브 콘텐츠 소재 · 키워드 트렌드 분석 플랫폼',
    badge: '응답속도 40초 → 3초',
    techStack: ['NestJS', 'TypeORM', 'MariaDB', 'OpenSearch', 'Kafka', 'Logstash', 'Redis'],
    achievements: [
      'MySQL 조인 중심 구조 → 비정규화 기반 검색·집계 구조 전환',
      '핵심 집계 API 응답속도 40초 → 3초 개선',
      '토큰 테이블 + OpenSearch 비정규화 2단계 검색 구조 설계',
      'BERT 기반 텍스트 임베딩·토크나이징·클러스터링 파이프라인 구축',
    ],
    problem: 'MySQL에서 크롤링 데이터를 조인·집계하는 구조로 인해 핵심 집계 API 응답이 40~60초까지 느려졌습니다. 조인을 빠르게 하는 것이 아니라, 조인을 계속 요구하는 구조 자체가 문제였습니다.',
    solution: 'DWH 데이터를 Logstash로 비정규화해 OpenSearch에 인덱싱하고, 검색 시 토큰 테이블에서 후보 ID를 먼저 좁힌 뒤 OpenSearch에서 최종 조회하는 2단계 구조로 전환했습니다.',
    techDetail: 'Main: MySQL / DWH: MariaDB / 인덱싱: Logstash → OpenSearch / 캐시: Redis, 토큰 테이블 / 수집: Kafka',
  },
  {
    id: 3,
    name: '프린트시티 IamDesign',
    company: '프린트시티',
    period: '2021.07 – 2023.11',
    url: 'https://www.iamdgn.com/',
    description: '인쇄물 커머스 플랫폼 자동화 시스템',
    badge: 'Optimistic Locking · 상품 페이지 자동 생성',
    techStack: ['NestJS', 'Next.js', 'MongoDB', 'AWS EC2/ECS', 'GitHub Actions'],
    achievements: [
      'MongoDB 조합형 JSON + Next.js 공통 템플릿 기반 상품 페이지 자동 생성',
      'Optimistic Locking으로 동시 주문 환경의 재고 정합성 확보',
      'Express → NestJS + Hexagonal Architecture 전환',
      'CI/CD 파이프라인 구축 및 개발 컨벤션 표준화',
    ],
    problem: '상품마다 페이지를 하드코딩하는 구조로 상품 추가·수정 시마다 개발이 필요했고, 동시 주문 시 재고 불일치 문제가 발생했습니다.',
    solution: '관리자 화면에서 조합 데이터만 정의하면 Next.js 공통 템플릿 기반으로 페이지가 자동 구성되도록 전환하고, Optimistic Locking으로 동시성 문제를 해결했습니다.',
    techDetail: 'Backend: NestJS / Frontend: Next.js / Database: MongoDB / Infra: AWS EC2, ECS / CI/CD: GitHub Actions',
  },
]

export const sideProjects = [
  {
    name: '차량 운행 로그 분석 파이프라인',
    period: '2025.04',
    github: 'https://github.com/godkor200/driving-log',
    description: '차량의 Raw 로그 데이터를 실시간으로 수신하여 데이터 정합성을 확보하고 위험 운전 패턴을 탐지하는 백엔드 데이터 파이프라인',
    techStack: ['Python', 'FastAPI', 'Kafka', 'PostgreSQL', 'NumPy', 'Docker'],
    achievements: [
      'Kafka 토픽 구독 기반 실시간 수신 → 10초 시간 윈도우 버퍼링 후 일괄 파이프라인 처리',
      'np.interp 벡터화로 결측값·이상치 보간, NumPy 벡터화 haversine으로 거리 계산',
      'Bounding box 사전 필터로 제한구역 비교 연산 O(N×M) → 후보 사전 축소',
      'SQLAlchemy 2.0 Core bulk insert로 대용량 DB 적재 최적화',
      'SHA-256 기반 Trip 멱등성 처리 — 동일 데이터 재전송 시 중복 적재 방지',
      'MAX_RECORDS 가드로 OOM 방어, Pydantic field_validator로 GPS 범위 및 timestamp 입력 검증',
    ],
  },
]

export const contributions = [
  {
    title: '느린 조회·집계 구조 개선',
    description: '조회 패턴과 데이터 모델을 함께 분석해 병목 원인을 찾고, 비정규화·캐시·집계 구조 개선으로 성능을 높일 수 있습니다.',
  },
  {
    title: '데이터 수집·가공 파이프라인 안정화',
    description: '스크래핑, 적재, 가공, 집계 흐름을 분리해 운영 중 오류를 빠르게 확인하고 재처리 가능한 구조로 개선할 수 있습니다.',
  },
  {
    title: '요구사항을 API와 데이터 구조로 구체화',
    description: '기획·운영 요구를 단순 기능 단위가 아니라 데이터 흐름과 사용 시나리오 기준으로 정리해 실제 개발 가능한 형태로 풀어낼 수 있습니다.',
  },
  {
    title: '운영 이슈를 구조 개선으로 연결',
    description: '장애나 성능 저하가 발생했을 때 임시 대응에 그치지 않고, 재발 가능성을 줄이는 방향으로 구조를 개선하는 데 강점이 있습니다.',
  },
  {
    title: '유지보수 가능한 코드베이스 정리',
    description: '테스트, 문서화, 책임 분리를 통해 다른 개발자도 이해하고 이어서 개발할 수 있는 코드 구조를 만드는 데 기여할 수 있습니다.',
  },
  {
    title: '반복 업무 생산성 향상',
    description: '반복 구현, 테스트 초안, 리팩토링 검토 단계에서 AI 코딩 도구를 활용해 속도를 높이되, 최종 구조와 품질은 직접 검증하는 방식으로 개발합니다.',
  },
]

export const certifications = [
  { name: 'SQLD (SQL 개발자)', date: '2022.12' },
]

export const patents = [
  {
    name: '대용량 비정형 텍스트 데이터의 키워드 분석 방법 및 프로그램',
    description: '대용량 비정형 텍스트를 분석 가능한 단위로 구조화하고, 문맥 기반 키워드 추출 정확도를 높이기 위해 BERT 기반 분석 방식을 적용한 키워드 분석 방법에 관한 특허',
  },
  {
    name: '리버스 인덱싱을 이용한 대용량 비정형 텍스트 데이터의 키워드 검색 시스템',
    description: '대용량 비정형 텍스트를 원문 직접 검색하지 않고, 토큰별로 문서 ID를 역색인 구조로 저장해 빠르게 검색·집계할 수 있도록 만든 검색 시스템',
  },
]

export const education = [
  {
    school: '중국 천진 남개대학교 (Tianjin Nankai University)',
    major: '공상관리학 전공 / 인사관리 부전공',
    period: '2012.06 – 2016.07',
    gpa: '75.6 / 100',
    note: '미적분, 선형대수, 확률과 통계, 미시·거시경제학, 노동경제학 이수. 데이터 기반 의사결정 및 분석적 사고에 대한 학문적 기초 역량 확보.',
  },
  {
    school: '한국 대구 계명대학교 (Keimyung University)',
    major: '중국어문학과 전공 / 국제통상학 부전공',
    period: '2008.03 – 2012.03 (중퇴)',
    gpa: '3.0 / 4.5',
    note: '중국어 문법·회화·작문·독해 이수. 언어와 문화 그리고 통상에 대한 이해를 바탕으로 커뮤니케이션 역량 형성.',
  },
]

export const training = [
  {
    institution: '코드스테이츠 (Code States)',
    course: '풀스택(Node.js) 과정 수료',
    period: '2020.07 – 2020.12',
    note: 'JavaScript, Node.js, SQL, AWS 기반 웹 서비스 개발 교육 이수. 단기 프로젝트(2주/4주) 및 페어 프로그래밍 경험.',
  },
]
