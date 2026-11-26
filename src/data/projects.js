/**
 * @typedef {{value: string, label: string}} ProjectImpact
 * @typedef {{
 *   id: string,
 *   title: string,
 *   category: string,
 *   year: string,
 *   role: string,
 *   featured: boolean,
 *   openSource: boolean,
 *   summary: string,
 *   description: string,
 *   problem: string,
 *   approach: string[],
 *   tradeoffs: string[],
 *   impact: ProjectImpact[],
 *   technologies: string[],
 *   links: {repo?: string}
 * }} Project
 */

/** @type {Project[]} */
const projects = [
  {
    id: 'llm-inference-gateway',
    title: 'Distributed LLM Inference Gateway',
    category: 'AI infrastructure',
    year: '2026',
    role: 'Design + implementation',
    featured: true,
    openSource: true,
    summary:
      'A Go gateway in front of multiple model servers with KV-cache-aware routing, per-tenant admission control, and OpenAI-compatible streaming.',
    description:
      'Built to make LLM serving behave like a real distributed system: route by cache affinity, isolate tenants, fail over cleanly, and expose every request through metrics and logs.',
    problem:
      'Model servers are expensive and stateful in practice. Naive round-robin routing destroys KV-cache reuse, while bursty tenants can starve each other and a single worker failure can surface as user-visible errors.',
    approach: [
      'OpenAI-compatible HTTP/SSE streaming plus a native gRPC contract for internal clients.',
      'KV-cache-aware prefix affinity using cumulative SHA-256 prefix hashes in Redis, with consistent hashing and least-loaded fallback.',
      'Per-tenant token-bucket rate limiting, AIMD admission control, and per-worker circuit breakers.',
      'Kafka request logs, Prometheus metrics, a Grafana dashboard, and KEDA autoscaling.',
      'A llama.cpp worker agent serving Qwen3-8B Q4_K_M behind the same gRPC contract as deterministic mock workers.',
    ],
    tradeoffs: [
      'Prefix hashes trade memory for cache hit rate; the gateway bounds hash retention per tenant.',
      'Cache affinity can create skew, so least-loaded fallback protects tail latency when a hot worker saturates.',
      'Admission control is deliberately fail-fast under overload; the alternative is unbounded queueing and timeout amplification.',
    ],
    impact: [
      { value: '71.3 req/s', label: 'at 100 VUs' },
      { value: '79%', label: 'prefix cache hit rate' },
      { value: '+7.5%', label: 'throughput vs round-robin' },
      { value: '0', label: 'failed requests on worker kill' },
    ],
    technologies: [
      'Go',
      'gRPC',
      'Kafka',
      'Redis',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'KEDA',
    ],
    links: {
      repo: 'https://github.com/suhpin95/distributed-llm-inference-gateway',
    },
  },
  {
    id: 'oauth2-authorization-platform',
    title: 'OAuth2 Authorization Platform',
    category: 'Identity & security',
    year: '2024 - 2026',
    role: 'Design + rollout',
    featured: true,
    openSource: false,
    summary:
      'A multi-tenant OAuth2 authorization server with ES256 signing, key rotation, PKCE, Entra integration, mTLS, and token abuse prevention.',
    description:
      'A production identity platform built from POC to multi-tenant rollout, with security and operability treated as first-class requirements.',
    problem:
      'The platform needed one authorization service that could serve multiple tenants and identity providers without weakening token security or creating an operational bottleneck.',
    approach: [
      'Authorization Code grant with PKCE and custom ES256 token signing with key rotation.',
      'Multi-identity-provider support with Microsoft Entra integration.',
      'mTLS for service-to-service communication and Azure Key Vault for secrets and HSM-backed keys.',
      'Read-through token cache with rate limiting, abuse windows, audit records, and fail-open contracts.',
      'Blue-green cluster switchovers using a three-layer DNS strategy and JWKS availability handling.',
    ],
    tradeoffs: [
      'Fail-open token caching protects availability during cache outages, but requires bounded abuse windows and auditability.',
      'Key rotation adds operational complexity; the platform automates JWKS publication and rollout checks.',
    ],
    impact: [
      { value: '99.99%', label: 'availability' },
      { value: '45%', label: 'lower auth latency' },
      { value: '20+', label: 'Kubernetes services' },
    ],
    technologies: [
      'OAuth2',
      'OIDC',
      'PKCE',
      'JWT',
      'mTLS',
      'Azure Key Vault',
      'Spring Boot',
      'AKS',
    ],
    links: {},
  },
  {
    id: 'risk-ingestion-platform',
    title: 'High-Throughput Risk Ingestion',
    category: 'Distributed systems',
    year: '2026',
    role: 'Architecture + delivery',
    featured: true,
    openSource: false,
    summary:
      'Spring Boot services sustaining 7,500+ transactions per second with durable messaging, retries, dead-letter handling, and distributed workflows.',
    description:
      'Financial risk-assessment ingestion designed for burst traffic and recoverability rather than happy-path throughput alone.',
    problem:
      'Risk data arrives in bursts, and losing or duplicating a message changes the outcome. The system needed high throughput without giving up durability or recovery.',
    approach: [
      'Spring Boot ingestion services with durable persistence across distributed workflows.',
      'Azure Service Bus with asynchronous processing, retries, and dead-letter handling across producer-consumer paths.',
      'Redis read-through caching and tuned connection pools for hot paths.',
      'Kubernetes deployment with metrics and alerting around queue depth, retries, and latency.',
    ],
    tradeoffs: [
      'At-least-once delivery requires idempotent consumers; the team made replay and deduplication explicit.',
      'Backpressure is preferable to unbounded queue growth, so retry budgets and dead-letter thresholds are enforced.',
    ],
    impact: [
      { value: '7,500+', label: 'transactions/sec' },
      { value: '2', label: 'producer-consumer paths' },
      { value: '99.99%', label: 'availability target' },
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Azure Service Bus',
      'Redis',
      'Kubernetes',
      'PostgreSQL',
    ],
    links: {},
  },
  {
    id: 'kubernetes-observability',
    title: 'Kubernetes Observability Platform',
    category: 'Observability',
    year: '2024 - 2026',
    role: 'Platform adoption',
    featured: false,
    openSource: false,
    summary:
      'OpenTelemetry, metrics, distributed tracing, centralized ELK logging, and self-service recovery across 20+ Kubernetes applications.',
    description:
      'A shared observability layer that made distributed failures diagnosable and gave service teams a faster path to recovery.',
    problem:
      'Twenty-plus services produced logs and metrics in different formats, making incident response depend on tribal knowledge.',
    approach: [
      'OpenTelemetry instrumentation and trace propagation across Kubernetes-hosted applications.',
      'Prometheus metrics with service-level dashboards and alerting.',
      'ELK-based centralized logging and structured diagnostics.',
      'Self-service replay for recoverable Azure Service Bus queues.',
    ],
    tradeoffs: [
      'Tracing every request is expensive; sampling and retention policies keep cost bounded while preserving error visibility.',
      'Self-service replay improves recovery but requires audit trails and guardrails to prevent duplicate processing.',
    ],
    impact: [
      { value: '20+', label: 'services instrumented' },
      { value: 'hours → minutes', label: 'incident recovery' },
      { value: '3', label: 'signal types unified' },
    ],
    technologies: [
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'ELK',
      'Kubernetes',
      'Azure Service Bus',
    ],
    links: {},
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [
  'All',
  ...new Set(projects.map((project) => project.category)),
];

export const filterProjectsByCategory = (category) =>
  category === 'All'
    ? projects
    : projects.filter((project) => project.category === category);

export const getProjectById = (id) => projects.find((project) => project.id === id);

export default projects;
