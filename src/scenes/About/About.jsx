import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import profile from '../../data/profile';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import GithubActivity from './GithubActivity/GithubActivity';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <RootLayout
      title="About - Suhas Pindiproli"
      description="Learn about Suhas Pindiproli's engineering experience, technical focus, and open-source work."
    >
      <div className={s.content}>
        <section className={s.intro} aria-labelledby="about-title">
          <p className="eyebrow">About Suhas</p>
          <h1 id="about-title">
            I build systems that hold up <em>under pressure.</em>
          </h1>
          <p className={s.summary}>{profile.summary}</p>
        </section>

        <ul className={s.metrics} aria-label="Career highlights">
          {profile.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>
                {metric.decimals
                  ? metric.value.toFixed(metric.decimals)
                  : metric.value.toLocaleString()}
                {metric.suffix}
              </strong>
              <span>{metric.label}</span>
              <small>{metric.detail}</small>
            </li>
          ))}
        </ul>

        <div className={s.story}>
          <AboutTextCard />
          <aside className={s.currently} aria-labelledby="currently-title">
            <p className="eyebrow">{profile.currently.label}</p>
            <h2 id="currently-title">{profile.currently.title}</h2>
            <p>{profile.currently.description}</p>
            <a href={profile.currently.href} target="_blank" rel="noreferrer">
              Explore the project <FiArrowUpRight aria-hidden="true" />
            </a>
          </aside>
        </div>

        <section className={s.skillsSection} aria-labelledby="skills-title">
          <SectionHeading
            eyebrow="Professional skills"
            title={<span id="skills-title">The toolkit behind the systems.</span>}
            description="A practical mix of languages, platform engineering, security, and operational tooling."
          />
          <TechSkills />
        </section>

        <section className={s.githubSection} aria-labelledby="github-title">
          <SectionHeading
            eyebrow="Open source"
            title={<span id="github-title">A steady practice of building.</span>}
            description="Recent activity from my public GitHub profile."
          />
          <GithubActivity />
        </section>

        <section className={s.outside} aria-labelledby="outside-title">
          <div>
            <p className="eyebrow">Beyond the terminal</p>
            <h2 id="outside-title">Room for a different kind of focus.</h2>
          </div>
          <ul>
            {profile.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
      </div>
    </RootLayout>
  );
};

export default About;
