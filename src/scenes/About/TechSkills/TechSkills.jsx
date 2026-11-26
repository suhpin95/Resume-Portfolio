import {
  DiGit,
  DiJava,
  DiJenkins,
  DiJira,
  DiNodejs,
  DiPostgresql,
  DiPython,
} from 'react-icons/di';
import { FaAws } from 'react-icons/fa6';
import { SiSpring } from 'react-icons/si';
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <section className={s.container}>
      <a
        href={'https://www.postgresql.org/docs/'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiPostgresql />
      </a>
      <a
        href={'https://www.python.org/doc/'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiPython />
      </a>
      <a
        href={'https://docs.oracle.com/en/java/'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiJava />
      </a>
      <a
        href={'https://nodejs.org/en/docs'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiNodejs />
      </a>
      <a
        href={'https://docs.spring.io/spring-framework/reference/'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <SiSpring />
      </a>
      <a
        href={'https://docs.aws.amazon.com/'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <FaAws />
      </a>
      <a
        href={'https://www.jenkins.io/doc/'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiJenkins />
      </a>
      <a
        href={'https://www.atlassian.com/software/jira'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiJira />
      </a>
      <a
        href={'https://docs.github.com/en'}
        className={s.techIcon}
        target="_blank"
        rel="noreferrer"
      >
        <DiGit />
      </a>
    </section>
  );
};

export default TechSkills;
