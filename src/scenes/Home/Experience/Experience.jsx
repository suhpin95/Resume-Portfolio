import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Reveal from '../../../components/UIElements/Reveal/Reveal';
import experience from '../../../data/experience';
import s from './Experience.module.scss';

const Experience = () => {
  return (
    <section className={`section ${s.section}`} aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title={<span id="experience-title">Where I've built.</span>}
          description="Six years across financial risk, identity, retail, and biomedical platforms — mostly in Java and Go."
        />

        <ol className={s.timeline}>
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal delay={index * 60} className={s.row}>
                <div className={s.meta}>
                  <span className={s.period}>{job.period}</span>
                  {job.current ? (
                    <span className={s.current}>
                      <span className={s.dot} aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                  <span className={s.location}>{job.location}</span>
                </div>

                <div className={s.body}>
                  <h3 className={s.company}>{job.company}</h3>
                  <p className={s.role}>{job.role}</p>
                  <p className={s.summary}>{job.summary}</p>

                  <ul className={s.highlights}>
                    {job.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <ul className={s.tags} aria-label="Technologies">
                    {job.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
