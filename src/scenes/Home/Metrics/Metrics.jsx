import AnimatedNumber from '../../../components/AnimatedNumber/AnimatedNumber';
import Reveal from '../../../components/UIElements/Reveal/Reveal';
import profile from '../../../data/profile';
import s from './Metrics.module.scss';

const Metrics = () => {
  return (
    <section className={s.section} aria-label="Career metrics">
      <div className={s.inner}>
        <ul className={s.grid}>
          {profile.metrics.map((metric, index) => (
            <li key={metric.label}>
              <Reveal delay={index * 80} className={s.item}>
                <span className={s.value}>
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals ?? 0}
                  />
                </span>
                <span className={s.label}>{metric.label}</span>
                <span className={s.detail}>{metric.detail}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Metrics;
