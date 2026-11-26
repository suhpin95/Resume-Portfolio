import s from './SystemDiagram.module.scss';

const SystemDiagram = () => {
  return (
    <figure className={s.wrap}>
      <div className={s.header}>
        <span className={s.label}>Request path</span>
        <span className={s.status}>
          <span className={s.dot} aria-hidden="true" />
          healthy
        </span>
      </div>

      <svg
        className={s.svg}
        viewBox="0 0 560 440"
        role="img"
        aria-labelledby="system-diagram-title system-diagram-desc"
      >
        <title id="system-diagram-title">LLM inference gateway request path</title>
        <desc id="system-diagram-desc">
          A client sends a request through an inference gateway. The gateway checks
          authentication and rate limits, consults a Redis prefix cache, routes by cache
          affinity, and forwards to one of three model workers. Requests, metrics, and
          logs flow to Kafka, Prometheus, and KEDA.
        </desc>

        <g className={s.grid}>
          <line x1="24" y1="118" x2="536" y2="118" />
          <line x1="24" y1="216" x2="536" y2="216" />
          <line x1="24" y1="314" x2="536" y2="314" />
          <line x1="208" y1="24" x2="208" y2="416" />
          <line x1="354" y1="24" x2="354" y2="416" />
          <line x1="486" y1="24" x2="486" y2="416" />
        </g>

        <g className={s.edges}>
          <path d="M116 216 H146" />
          <path d="M208 88 V170" />
          <path d="M208 262 V330" />
          <path d="M270 216 H306" />
          <path d="M402 192 H420 V92 H438" />
          <path d="M402 216 H420 V192 H438" />
          <path d="M402 240 H420 V292 H438" />
          <path className={s.async} d="M354 262 V356" />
          <path className={s.async} d="M486 314 V356" />
        </g>

        <g className={s.nodes}>
          <g transform="translate(24 194)">
            <rect width="92" height="44" rx="6" />
            <text x="46" y="21" textAnchor="middle">
              Client
            </text>
            <text className={s.sub} x="46" y="33" textAnchor="middle">
              HTTP / SSE
            </text>
          </g>

          <g className={`${s.node} ${s.primary}`} transform="translate(146 170)">
            <rect width="124" height="92" rx="8" />
            <text x="62" y="38" textAnchor="middle">
              Inference gateway
            </text>
            <text className={s.sub} x="62" y="53" textAnchor="middle">
              auth · admit · route
            </text>
            <text className={s.sub} x="62" y="68" textAnchor="middle">
              Go · gRPC
            </text>
          </g>

          <g transform="translate(146 44)">
            <rect width="124" height="44" rx="6" />
            <text x="62" y="20" textAnchor="middle">
              Auth &amp; limits
            </text>
            <text className={s.sub} x="62" y="32" textAnchor="middle">
              OAuth2 · token bucket
            </text>
          </g>

          <g transform="translate(146 330)">
            <rect width="124" height="44" rx="6" />
            <text x="62" y="20" textAnchor="middle">
              Prefix cache
            </text>
            <text className={s.sub} x="62" y="32" textAnchor="middle">
              Redis · SHA-256
            </text>
          </g>

          <g transform="translate(306 170)">
            <rect width="96" height="92" rx="8" />
            <text x="48" y="38" textAnchor="middle">
              Router
            </text>
            <text className={s.sub} x="48" y="53" textAnchor="middle">
              cache affinity
            </text>
            <text className={s.sub} x="48" y="68" textAnchor="middle">
              least-loaded
            </text>
          </g>

          <g transform="translate(438 70)">
            <rect width="96" height="44" rx="6" />
            <text x="48" y="20" textAnchor="middle">
              Worker 01
            </text>
            <text className={s.sub} x="48" y="32" textAnchor="middle">
              llama.cpp
            </text>
          </g>

          <g transform="translate(438 170)">
            <rect width="96" height="44" rx="6" />
            <text x="48" y="20" textAnchor="middle">
              Worker 02
            </text>
            <text className={s.sub} x="48" y="32" textAnchor="middle">
              llama.cpp
            </text>
          </g>

          <g transform="translate(438 270)">
            <rect width="96" height="44" rx="6" />
            <text x="48" y="20" textAnchor="middle">
              Worker 03
            </text>
            <text className={s.sub} x="48" y="32" textAnchor="middle">
              llama.cpp
            </text>
          </g>

          <g transform="translate(306 356)">
            <rect width="228" height="44" rx="6" />
            <text x="114" y="20" textAnchor="middle">
              Kafka · Prometheus · KEDA
            </text>
            <text className={s.sub} x="114" y="32" textAnchor="middle">
              request logs · metrics · autoscaling
            </text>
          </g>
        </g>

        <g className={s.packets}>
          <circle r="2.6">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M116 216 H146" />
          </circle>
          <circle r="2.6">
            <animateMotion
              dur="3.4s"
              begin="0.6s"
              repeatCount="indefinite"
              path="M270 216 H306"
            />
          </circle>
          <circle r="2.6">
            <animateMotion
              dur="3.8s"
              begin="1.1s"
              repeatCount="indefinite"
              path="M402 216 H420 V192 H438"
            />
          </circle>
          <circle r="2.6">
            <animateMotion
              dur="3.1s"
              begin="0.9s"
              repeatCount="indefinite"
              path="M208 262 V330"
            />
          </circle>
        </g>
      </svg>

      <figcaption className={s.legend}>
        <span>KV-cache affinity</span>
        <span>Per-tenant admission</span>
        <span>Circuit breakers</span>
        <span>OTel + Prometheus</span>
      </figcaption>
    </figure>
  );
};

export default SystemDiagram;
