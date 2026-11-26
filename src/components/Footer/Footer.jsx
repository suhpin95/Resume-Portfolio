import { Link } from 'react-router';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';
import s from './Footer.module.scss';
import user from '../../data/userOptions';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.identity}>
            <Link to="/" className={s.name}>
              Suhas Pindiproli
            </Link>
            <p className={s.tagline}>Distributed systems &amp; AI platforms.</p>
          </div>

          <nav className={s.nav} aria-label="Footer navigation">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
          </nav>

          <div className={s.socials}>
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <AiFillGithub aria-hidden="true" />
            </a>
            <a
              href={user.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={s.bottom}>
          <span>© {year} Suhas Pindiproli</span>
          <span>Santa Clara, California</span>
          <span className={s.built}>Built with Bun + Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
