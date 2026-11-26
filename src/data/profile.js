const profile = {
  name: 'Suhas Pindiproli',
  firstName: 'Suhas',
  role: 'Senior Software Engineer',
  focus: 'Distributed Systems × AI',
  location: 'Santa Clara, California',
  email: 'suhas.pindiproli@gmail.com',
  github: 'https://github.com/suhpin95',
  githubUsername: 'suhpin95',
  linkedin: 'https://www.linkedin.com/in/suhas-pindiproli/',
  resume: '/Suhas_Pindiproli_Sr_SWE_Resume.pdf',
  availability: 'Open to AI platform and distributed systems roles',
  hero: {
    eyebrow: 'Senior Software Engineer · Distributed Systems × AI',
    title: ['Reliable systems.', 'Intelligent workloads.'],
    lede: 'I build distributed platform services and AI infrastructure - the kind of systems that stay observable, secure, and correct when traffic, tenants, and model workloads arrive at the same time.',
    secondary:
      '6+ years across high-throughput ingestion, identity and authorization, Kafka and Kubernetes platforms, OpenTelemetry, and LLM serving.',
  },
  summary:
    'Senior backend engineer with 6+ years building distributed platform services in Java and Go. I have delivered event-driven systems processing 7,500+ transactions per second, an OAuth2 authorization server with token abuse prevention, and Kafka and Kubernetes infrastructure with observability across 20+ services.',
  metrics: [
    {
      value: 6,
      suffix: '+',
      label: 'Years building platform services',
      detail: 'Java · Go · Python',
    },
    {
      value: 7500,
      suffix: '+',
      label: 'Transactions per second',
      detail: 'Financial risk ingestion',
    },
    {
      value: 99.99,
      suffix: '%',
      decimals: 2,
      label: 'Availability',
      detail: 'Multi-tenant authorization',
    },
    {
      value: 20,
      suffix: '+',
      label: 'Services observed',
      detail: 'OpenTelemetry · Kubernetes',
    },
  ],
  focusAreas: [
    {
      title: 'Distributed systems',
      description:
        'Event-driven services, durable workflows, and failure-aware APIs designed for burst traffic and partial failure.',
      tags: ['Kafka', 'CQRS', 'gRPC', 'Circuit breakers', 'Retries & DLQs'],
    },
    {
      title: 'AI platform engineering',
      description:
        'Serving infrastructure for LLM workloads: streaming gateways, cache-aware routing, admission control, and autoscaling.',
      tags: ['LLM serving', 'KV-cache routing', 'OpenAI-compatible APIs', 'KEDA'],
    },
    {
      title: 'Identity & security',
      description:
        'Multi-tenant authorization, token lifecycle, mTLS, key rotation, and abuse prevention built into the platform.',
      tags: ['OAuth2', 'OIDC', 'PKCE', 'mTLS', 'Key Vault'],
    },
    {
      title: 'Observability',
      description:
        'Metrics, traces, and logs that make distributed behavior legible, including Elasticsearch and Kibana for distributed tracing, plus the runbooks and replay tools to recover quickly.',
      tags: [
        'OpenTelemetry',
        'Elasticsearch and Kibana tracing',
        'Prometheus',
        'ELK',
        'Incident response',
      ],
    },
  ],
  currently: {
    label: 'Currently building',
    title: 'Distributed LLM Inference Gateway',
    description:
      'A Go gateway with KV-cache-aware routing, per-tenant rate limiting, circuit breakers, and OpenAI-compatible streaming over gRPC.',
    href: 'https://github.com/suhpin95/distributed-llm-inference-gateway',
  },
  education: [
    {
      school: 'San Diego State University',
      degree: 'M.S. Computer Science',
      location: 'San Diego, CA',
    },
    {
      school: 'Savitribai Phule Pune University',
      degree: 'B.S. Computer Science',
      location: 'Pune, India',
    },
  ],
  interests: ['Soccer', 'Reading', 'Travel'],
};

export default profile;
