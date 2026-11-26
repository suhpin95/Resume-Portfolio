import s from './AboutTextCard.module.scss';

const principles = [
  {
    title: 'Design for failure',
    description:
      'Bounded retries, backpressure, circuit breakers, and clear recovery paths belong in the design, not in the incident postmortem.',
  },
  {
    title: 'Make behavior visible',
    description:
      'Metrics, traces, and structured logs should explain what the system is doing and help a team decide what to do next.',
  },
  {
    title: 'Protect the boundaries',
    description:
      'Strong service contracts, tenant isolation, and deliberate identity controls keep fast-moving platforms dependable.',
  },
];

const AboutTextCard = () => (
  <section className={s.card} aria-labelledby="principles-title">
    <p className="eyebrow">Engineering perspective</p>
    <h2 id="principles-title">The work is not done when it ships.</h2>
    <p className={s.intro}>
      I enjoy the point where architecture meets operations: taking a platform from a
      promising design to something teams can run, observe, and trust.
    </p>
    <ul className={s.principles}>
      {principles.map((principle) => (
        <li key={principle.title}>
          <strong>{principle.title}</strong>
          <span>{principle.description}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default AboutTextCard;
