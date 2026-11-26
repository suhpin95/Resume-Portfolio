import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router';
import SystemDiagram from '../../../components/SystemDiagram/SystemDiagram';
import profile from '../../../data/profile';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={s.inner}>
        <div className={s.copy}>
          <p className={s.availability}>
            <span className={s.dot} aria-hidden="true" />
            {profile.location} · {profile.availability}
          </p>

          <h1 id="hero-title" className={s.title}>
            <span>{profile.hero.title[0]}</span>
            <span className={s.accent}>{profile.hero.title[1]}</span>
          </h1>

          <p className={s.lede}>{profile.hero.lede}</p>
          <p className={s.secondary}>{profile.hero.secondary}</p>

          <div className={s.actions}>
            <Link to="/work" className={s.primaryCta}>
              Explore selected work
              <FiArrowUpRight aria-hidden="true" />
            </Link>
            <a
              href={profile.resume}
              className={s.secondaryCta}
              target="_blank"
              rel="noreferrer"
            >
              Download résumé
              <FiArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className={s.links}>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className={s.current}>
            <span className={s.currentLabel}>{profile.currently.label}</span>
            <a
              href={profile.currently.href}
              target="_blank"
              rel="noreferrer"
              className={s.currentLink}
            >
              {profile.currently.title}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={s.diagram}>
          <SystemDiagram />
        </div>
      </div>

      <div className={s.scroll} aria-hidden="true">
        <span>Scroll to explore</span>
        <span className={s.line} />
      </div>
    </section>
  );
};

export default Hero;
