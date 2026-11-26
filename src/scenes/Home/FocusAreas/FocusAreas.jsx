import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Reveal from '../../../components/UIElements/Reveal/Reveal';
import profile from '../../../data/profile';
import s from './FocusAreas.module.scss';

const FocusAreas = () => {
  return (
    <section className={`section ${s.section}`} aria-labelledby="focus-title">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="What I work on"
          title={
            <span id="focus-title">
              Systems that hold up
              <br />
              under real load.
            </span>
          }
          description="Four areas I keep coming back to — the places where correctness, performance, and operability meet."
        />

        <ul className={s.grid}>
          {profile.focusAreas.map((area, index) => (
            <li key={area.title}>
              <Reveal delay={index * 70} className={s.card}>
                <span className={s.index}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={s.title}>{area.title}</h3>
                <p className={s.description}>{area.description}</p>
                <ul className={s.tags} aria-label={`${area.title} technologies`}>
                  {area.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FocusAreas;
