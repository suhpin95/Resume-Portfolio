import RootLayout from '../../layouts/RootLayout/RootLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import GithubActivity from './GithubActivity/GithubActivity';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <RootLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Know Who <b className={s.purple}>I'M</b>
            </h1>
            <AboutTextCard />
          </div>
        </div>

        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          Days I <b className={s.purple}>Code</b>
        </h2>
        <GithubActivity />
      </div>
    </RootLayout>
  );
};

export default About;
