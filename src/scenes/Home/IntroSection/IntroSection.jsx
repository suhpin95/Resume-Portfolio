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
              Experienced <i className={s.purple}>Full Stack Developer</i> with a passion for crafting robust and scalable web applications.
              With a solid background in both front-end and back-end development,
              I bring a holistic approach to building dynamic and user-friendly solutions.
              Proficient in a wide range of technologies, including <i className={s.purple}>HTML, CSS, JavaScript, React.js, Node.js, Express.js, and SQL.</i>
              <br/>
              I thrive in agile environments and excel at collaborating with cross-functional teams. With a strong focus on delivering
              high-quality code and exceptional user experiences, I am dedicated to continuous learning and staying up-to-date with
              the latest industry trends. Whether it's designing intuitive user interfaces or architecting efficient server-side systems,
              I strive to create innovative solutions that drive business growth. Let's build something amazing together.
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
