import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import user from '../../../data/userOptions';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <aside className={s.description}>
            <span>
              <i className={s.purple}>Senior Backend Engineer</i> with 6+ years of experience building distributed platform services in Java.
              I have delivered event-driven systems processing <i className={s.purple}>7,500+ transactions per second</i>, OAuth2 authorization
              platforms, and Kafka and Kubernetes infrastructure with observability across 20+ services.
              <br/>
              My recent work spans high-throughput ingestion, identity and security, Azure infrastructure, OpenTelemetry, and
              distributed <i className={s.purple}>Go and LLM inference systems</i>. I enjoy solving reliability problems and turning
              complex platform requirements into practical, observable services.
            </span>


          </aside>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>


          <li className={s.socialLink}>
            <a
              href={user.linkedIn}
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
