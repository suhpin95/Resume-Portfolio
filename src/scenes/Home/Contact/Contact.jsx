import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Reveal from '../../../components/UIElements/Reveal/Reveal';
import profile from '../../../data/profile';
import s from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={`section ${s.section}`} aria-labelledby="contact-title">
      <div className={`container ${s.inner}`}>
        <Reveal className={s.copy}>
          <span className="eyebrow">04 — Contact</span>
          <h2 id="contact-title" className={s.title}>
            Building something
            <br />
            <span className={s.accent}>that has to hold up?</span>
          </h2>
          <p className={s.lede}>
            I'm interested in AI platform and distributed systems roles where reliability,
            observability, and clean interfaces matter.
          </p>
        </Reveal>

        <Reveal delay={120} className={s.actions}>
          <a className={s.primary} href={`mailto:${profile.email}`}>
            <FiMail aria-hidden="true" />
            {profile.email}
          </a>

          <div className={s.links}>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Résumé
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
