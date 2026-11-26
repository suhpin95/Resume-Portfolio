const experience = [
  {
    company: 'LexisNexis Risk Solutions',
    location: 'Santa Clara, CA',
    role: 'Senior Software Engineer',
    period: 'Jun 2026 — Present',
    current: true,
    summary:
      'Leading high-throughput ingestion and identity platform work for financial risk-assessment services.',
    highlights: [
      'Architected Spring Boot services processing 7,500+ transactions/sec with durable persistence across distributed workflows.',
      'Integrated Azure Service Bus with async processing, retries, and dead-letter handling across two producer-consumer paths.',
      'Designed token-issuance rate limiting and abuse prevention with a read-through cache, audit windows, fail-open contracts, and AES-256 encrypted tokens.',
      'Led staging and production rollout of the OAuth2 authorization server, including mTLS, token TTL, security logging, and OpenID endpoints.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Azure Service Bus',
      'Redis',
      'Kubernetes',
      'OpenTelemetry',
    ],
  },
  {
    company: 'LexisNexis Risk Solutions',
    location: 'Santa Clara, CA',
    role: 'Software Engineer',
    period: 'Feb 2024 — Jun 2026',
    summary:
      'Built and operated a multi-tenant authorization platform on Azure Kubernetes Service.',
    highlights: [
      'Designed an OAuth2 authorization server from POC to production with ES256 signing, key rotation, PKCE, Entra integration, and multi-tenant support.',
      'Tuned Redis caching, HikariCP pools, and database queries, cutting authentication latency 45% during peak traffic.',
      'Drove OpenTelemetry adoption across 20+ Kubernetes-hosted applications and designed ELK integration for centralized logging.',
      'Built self-service replay for Azure Service Bus recoverable queues, reducing incident recovery from hours to minutes.',
    ],
    technologies: [
      'OAuth2',
      'OIDC',
      'PKCE',
      'Redis',
      'AKS',
      'mTLS',
      'OpenTelemetry',
      'ELK',
    ],
  },
  {
    company: 'SellYourCar Inc',
    location: 'San Diego, CA',
    role: 'Software Engineer',
    period: 'Dec 2023 — Feb 2024',
    summary:
      'Connected external automotive data providers to real-time inventory and customer workflows.',
    highlights: [
      'Built Spring Boot microservices and REST APIs for real-time inventory synchronization.',
      'Architected Azure Service Bus processing for 20K+ messages/hour with retries, dead-letter handling, and circuit breakers.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST', 'Azure Service Bus'],
  },
  {
    company: 'NanoCellect Biomedical',
    location: 'San Diego, CA',
    role: 'Software Development Engineer Intern',
    period: 'Jul 2022 — Dec 2022',
    summary:
      'Improved data services for critical inventory operations in a biomedical instrumentation platform.',
    highlights: [
      'Optimized PostgreSQL indexing and query patterns, reducing response times for internal users.',
    ],
    technologies: ['PostgreSQL', 'SQL', 'Data modeling'],
  },
  {
    company: 'Zensar Technologies',
    location: 'Pune, India',
    role: 'Software Engineer',
    period: 'Oct 2018 — May 2021',
    summary:
      'Helped decompose a monolithic retail platform into independently deployable services.',
    highlights: [
      'Decomposed a monolith into 12+ Spring Boot microservices, improving scalability and fault isolation.',
      'Built Kafka-based inventory and back-order workflows using CQRS with clear consistency boundaries.',
    ],
    technologies: ['Java', 'Spring Boot', 'Kafka', 'CQRS', 'Microservices'],
  },
];

export default experience;
