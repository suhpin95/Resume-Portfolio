const placeholder =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzIiBoZWlnaHQ9IjIiPjwvc3ZnPg==';

const data = [
  {
    id: '1',
    title: 'Distributed LLM Inference Gateway',
    description:
      'A Go gateway for OpenAI-compatible streaming and gRPC model inference with KV-cache-aware routing, failover, admission control, and autoscaling.',
    image: { src: placeholder, placeholderSrc: placeholder },
    links: {},
    technologies: ['#go', '#grpc', '#kafka', '#redis', '#kubernetes', '#prometheus'],
  },
  {
    id: '2',
    title: 'OAuth2 Authorization Platform',
    description:
      'A multi-tenant OAuth2 authorization server with ES256 signing, key rotation, PKCE, Entra integration, mTLS, abuse prevention, and Azure Key Vault.',
    image: { src: placeholder, placeholderSrc: placeholder },
    links: {},
    technologies: ['#oauth2', '#openid-connect', '#pkce', '#spring-boot', '#azure'],
  },
  {
    id: '3',
    title: 'High-Throughput Risk Ingestion',
    description:
      'Spring Boot financial risk-assessment services sustaining 7,500+ transactions per second with Azure Service Bus retries and durable distributed workflows.',
    image: { src: placeholder, placeholderSrc: placeholder },
    links: {},
    technologies: ['#java', '#spring-boot', '#azure-service-bus', '#redis', '#kubernetes'],
  },
  {
    id: '4',
    title: 'Kubernetes Observability Platform',
    description:
      'OpenTelemetry, metrics, distributed tracing, centralized ELK logging, and self-service incident recovery across more than 20 Kubernetes applications.',
    image: { src: placeholder, placeholderSrc: placeholder },
    links: {},
    technologies: ['#opentelemetry', '#prometheus', '#elk', '#kafka', '#kubernetes'],
  },
];

export default data;
